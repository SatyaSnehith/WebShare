package ss.nscube.webshare.ui.frags.text

import android.annotation.SuppressLint
import android.content.res.Resources
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.LinearLayout
import android.widget.TextView
import androidx.fragment.app.setFragmentResultListener
import androidx.lifecycle.lifecycleScope
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import androidx.recyclerview.widget.RecyclerView.OnScrollListener
import androidx.recyclerview.widget.SimpleItemAnimator
import com.google.android.material.color.MaterialColors
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import ss.nscube.webshare.R
import ss.nscube.webshare.databinding.FragmentTextHistoryBinding
import ss.nscube.webshare.db.DatabaseHelper
import ss.nscube.webshare.db.entities.TextEntity
import ss.nscube.webshare.ui.dialogs.DeleteConfirmationDialog
import ss.nscube.webshare.ui.frags.BaseFragment
import ss.nscube.webshare.ui.utils.Util
import ss.nscube.webshare.utils.log

class TextHistoryFragment : BaseFragment() {
    var binding: FragmentTextHistoryBinding? = null
    var adapter = TextHistoryAdapter()
    val paginationCount = 50
    val ModeSelection = 0
    val ModeNormal = 1
    var currentMode = ModeNormal

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        binding = FragmentTextHistoryBinding.inflate(inflater)
        return binding?.root
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        updateMode(currentMode)
        (binding?.textRv?.itemAnimator as? SimpleItemAnimator)?.supportsChangeAnimations = false
        val layoutManager = LinearLayoutManager(requireContext())
        binding?.textRv?.layoutManager = layoutManager
        binding?.textRv?.adapter = adapter
        getText()

        binding?.textRv?.addOnScrollListener(object : OnScrollListener() {
            override fun onScrolled(recyclerView: RecyclerView, dx: Int, dy: Int) {
                if (!recyclerView.canScrollVertically(1)) {
                    getMoreText()
                }
            }
        })
    }

    fun getText() {
        launchIO {
            val list = DatabaseHelper.textDAO?.getAllOrdered(paginationCount)
            if (list.isNullOrEmpty()) {
                launchMain {
                    updateLayoutVisibility(false)
                }
            } else {
                for (i in list) {
                    log("TEXT id: ${i.id}, text: ${i.text}")
                }
                launchMain {
                    adapter.list = ArrayList(list)
                }
            }
        }
    }

    fun getMoreText() {
        launchIO {
            val list = try {
                DatabaseHelper.textDAO?.getOrderedFrom(adapter.list.last().id, paginationCount)
            } catch (e: Exception) {
                listOf()
            }
            if (!list.isNullOrEmpty()) {
                for (i in list) {
                    log("TEXT id: ${i.id}, text: ${i.text}")
                }
                launchMain {
                    val insertPos = adapter.list.size
                    adapter.list.addAll(list)
                    adapter.notifyItemRangeInserted(insertPos, list.size)
                }
            }
        }
    }

    fun updateLayoutVisibility(showContent: Boolean) {
        binding?.textRv?.visibility = if(showContent) View.VISIBLE else View.GONE
        binding?.noContentLayout?.noContentLl?.visibility = if(!showContent) View.VISIBLE else View.GONE
    }

    private fun openText(textEntity: TextEntity) {
        setFragmentResultListener(TextInfoFragment.IsDeletedKey) { requestKey, bundle ->
            if (bundle.getBoolean(TextInfoFragment.IsDeleted)) {
                adapter.remove(textEntity)
                updateLayoutVisibility(adapter.list.isNotEmpty())
            }
        }
        navigate(TextHistoryFragmentDirections.actionTextHistoryFragmentToTextInfoFragment(textEntity.id, TextInfoFragment.TypeHistory))
    }

    fun updateMode(mode: Int) {
        currentMode = mode
        val actionBar = binding?.actionBar ?: return
        when(mode) {
            ModeNormal -> actionBar.updateMode {
                    addBackIcon(this@TextHistoryFragment)
                    addTitle("Text history")
//                    addMenuIcon(this@TextHistoryFragment)
            }
            ModeSelection -> actionBar.updateMode {
                addCloseIcon {
                    adapter.clearSelection()
                    updateMode(ModeNormal)
                }
                addTitle(getSelectedCountText())
                addEndIcon(R.drawable.icon_delete, "Delete Selected", ::deleteSelected)
                addEndIcon(R.drawable.icon_send, "Send Selected", ::sendSelected)
            }
        }
    }

    @SuppressLint("NotifyDataSetChanged")
    fun deleteSelected() {
        DeleteConfirmationDialog.show(this, "these selected texts") {
            lifecycleScope.launch(Dispatchers.IO) {
                val list = List(adapter.selectedList.size) {
                    adapter.selectedList[it].id
                }
                DatabaseHelper.textDAO?.delete(list)
                lifecycleScope.launch(Dispatchers.Main) {
                    adapter.list.removeAll(adapter.selectedList.toSet())
                    Util.toast(context, "Selected texts deleted successfully!")
                    adapter.notifyDataSetChanged()
                    adapter.selectedList.clear()
                    updateMode(ModeNormal)
                    updateLayoutVisibility(adapter.list.isNotEmpty())
                }
            }
        }
    }

    var isSendClicked = false
    fun sendSelected() {
        if (!isSendClicked) {
            isSendClicked = true
            for (text in adapter.selectedList) {
                server.textManager.add(server.mainUser, text.text, false)
            }
            onBackClicked()
        }
    }

    fun getSelectedCountText() = "${adapter.selectedList.size} item${if (adapter.selectedList.size == 1) "" else "s"} selected"

    override fun onBackClicked() {
        when(currentMode) {
            ModeSelection -> {
                adapter.clearSelection()
                adapter.selectedList.clear()
                updateMode(ModeNormal)
            }
            else -> {
                super.onBackClicked()
            }
        }
    }

    inner class TextHistoryAdapter: RecyclerView.Adapter<TextHistoryAdapter.TextViewHolder>() {
        var list: ArrayList<TextEntity> = ArrayList()
            @SuppressLint("NotifyDataSetChanged")
            set(value) {
                field = value
                notifyDataSetChanged()
            }
        var selectedList: ArrayList<TextEntity> = ArrayList()
        var width: Int = Resources.getSystem().displayMetrics.widthPixels
        init {
            Util.updateTodayDate()
        }

        override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): TextViewHolder {
            return TextViewHolder(LayoutInflater.from(parent.context).inflate(R.layout.item_text_history, parent, false))
        }

        override fun getItemCount() = list.size

        override fun onBindViewHolder(holder: TextViewHolder, position: Int) {
            val text = list[position]
            holder.timeTextView.text = Util.getDisplayTime(text.sentTime)
            updateSelectionBg(text, holder.itemView)
            holder.dataTextView.text = text.text.substring(0, 100.coerceAtMost(text.text.length))
            holder.rootLayout.setOnClickListener {
                when(currentMode) {
                    ModeNormal -> openText(text)
                    ModeSelection -> select(text, holder.itemView)
                }
            }
            holder.rootLayout.setOnLongClickListener {
                when(currentMode) {
                    ModeNormal -> {
                        updateMode(ModeSelection)
                        select(text, holder.itemView)
                    }
                    ModeSelection -> select(text, holder.itemView)
                }
                true
            }
        }

        fun select(text: TextEntity, root: View) {
            if (text.isSelected) {
                text.isSelected = false
                selectedList.remove(text)
                root.setBackgroundResource(0)
                if (selectedList.isEmpty()) {
                    updateMode(ModeNormal)
                    return
                }
            } else {
                text.isSelected = true
                selectedList.add(text)
                root.setBackgroundColor(MaterialColors.getColor(root, R.attr.selectionBackgroundColor))
            }
            binding?.actionBar?.setTitle(getSelectedCountText())
        }

        fun updateSelectionBg(textEntity: TextEntity, root: View) {
            if (textEntity.isSelected) {
                root.setBackgroundColor(MaterialColors.getColor(root, R.attr.selectionBackgroundColor))
            } else {
                root.setBackgroundResource(0)
            }
        }

        fun clearSelection() {
            for ((index, te) in list.withIndex()) {
                if (te.isSelected) {
                    te.isSelected = false
                    notifyItemChanged(index)
                }
            }
            selectedList.clear()
        }

        fun remove(textEntity: TextEntity) {
            val position = list.indexOf(textEntity)
            list.remove(textEntity)
            notifyItemRemoved(position)
            notifyItemRangeChanged(position, list.size)
        }

        inner class TextViewHolder(view: View): RecyclerView.ViewHolder(view) {
            val rootLayout = view.findViewById<LinearLayout>(R.id.root_ll)
            val timeTextView = view.findViewById<TextView>(R.id.time_tv)
            val dataTextView = view.findViewById<TextView>(R.id.data_tv)
        }
    }
}

