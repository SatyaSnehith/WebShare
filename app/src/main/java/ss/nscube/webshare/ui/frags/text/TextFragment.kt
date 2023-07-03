package ss.nscube.webshare.ui.frags.text

import android.annotation.SuppressLint
import android.content.res.Resources
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.LinearLayout
import android.widget.TextView
import androidx.lifecycle.lifecycleScope
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import androidx.recyclerview.widget.SimpleItemAnimator
import com.google.android.material.color.MaterialColors
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import ss.nscube.webshare.R
import ss.nscube.webshare.databinding.FragmentTextBinding
import ss.nscube.webshare.server.user.Text
import ss.nscube.webshare.server.user.TextObserver
import ss.nscube.webshare.ui.dialogs.DeleteConfirmationDialog
import ss.nscube.webshare.ui.frags.BaseFragment
import ss.nscube.webshare.ui.utils.Util
import java.util.ArrayList

class TextFragment : BaseFragment(), TextObserver {
    var binding: FragmentTextBinding? = null
    var adapter: TextAdapter = TextAdapter()
    val ModeSelection = 0
    val ModeNormal = 1
    var currentMode = ModeNormal

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        binding = FragmentTextBinding.inflate(inflater)
        return binding?.root
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        updateMode(currentMode)

        (binding?.textRv?.itemAnimator as? SimpleItemAnimator)?.supportsChangeAnimations = false
        val layoutManager = LinearLayoutManager(requireContext())
        layoutManager.reverseLayout = true
        layoutManager.stackFromEnd = true
        binding?.textRv?.layoutManager = layoutManager
        binding?.textRv?.adapter = adapter
        binding?.textRv?.post {
            adapter.list = server.textManager
        }
        updateLayoutVisibility()
        binding?.addBtn?.setOnClickListener(::onAddClicked)
        server.textManager.observerList.add(this)
    }

    private fun onHistoryIconClicked() {
        navigate(TextFragmentDirections.actionTextFragmentToTextHistoryFragment())
    }

    override fun onDestroy() {
        super.onDestroy()
        server.textManager.observerList.remove(this)
        for (text in adapter.list) {
            if (text.isSelected) text.isSelected = false
        }
    }

    fun openText(text: Text) {
        navigate(TextFragmentDirections.actionTextFragmentToTextInfoFragment(text.id, TextInfoFragment.TypeCurrent))
    }


    fun updateMode(mode: Int) {
        currentMode = mode
//        actionBar.animate().translationY(-100f).setDuration(100).setListener(object : AnimatorListener{
//            override fun onAnimationStart(animation: Animator) {}
//            override fun onAnimationEnd(animation: Animator) {
//                actionBar.animate().translationY(0f).setDuration(100).start()
//            }
//            override fun onAnimationCancel(animation: Animator) {}
//            override fun onAnimationRepeat(animation: Animator) {}
//        }).start()
        when(mode) {
            ModeNormal -> binding?.actionBar?.updateMode {
                addBackIcon(this@TextFragment)
                addTitle("Text")
                addEndIcon(R.drawable.icon_history, "Text History", ::onHistoryIconClicked)
            }
            ModeSelection -> binding?.actionBar?.updateMode {
                addCloseIcon {
                    adapter.clearSelection()
                    updateMode(ModeNormal)
                }
                addTitle(getSelectedCountText())
                addEndIcon(R.drawable.icon_delete, "Delete Selected", ::deleteSelected)
            }
        }
    }

    @SuppressLint("NotifyDataSetChanged")
    fun deleteSelected() {
        DeleteConfirmationDialog.show(this, "these selected texts") {
            adapter.list.removeAll(adapter.selectedList.toSet())
            Util.toast(context, "Selected texts deleted successfully!")
            adapter.notifyDataSetChanged()
            adapter.selectedList.clear()
            updateMode(ModeNormal)
            updateLayoutVisibility()
        }
    }

    fun getSelectedCountText() = "${adapter.selectedList.size} item${if (adapter.selectedList.size == 1) "" else "s"} selected"

    fun onAddClicked(view: View) {
        navigate(TextFragmentDirections.actionTextFragmentToAddTextFragment())
    }

    fun updateLayoutVisibility() {
        val size = server.textManager.size
        binding?.textRv?.visibility = if(size > 0) View.VISIBLE else View.GONE
        binding?.noContentLayout?.noContentLl?.visibility = if(size == 0) View.VISIBLE else View.GONE
    }

    override fun onAdded() {
        lifecycleScope.launch(Dispatchers.Main) {
            adapter.notifyItemInserted(0)
            adapter.notifyItemRangeChanged(0, adapter.list.size)
            updateLayoutVisibility()
        }
    }

    override fun onRemoved(index: Int) {
        lifecycleScope.launch(Dispatchers.Main) {
            adapter.notifyItemRemoved(index)
            adapter.notifyItemRangeChanged(index, adapter.list.size)
            updateLayoutVisibility()
        }
    }

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

    inner class TextAdapter(): RecyclerView.Adapter<TextAdapter.TextViewHolder>() {
        var list: ArrayList<Text> = ArrayList()
            @SuppressLint("NotifyDataSetChanged")
            set(value) {
                field = value
                notifyDataSetChanged()
            }
        var selectedList: ArrayList<Text> = ArrayList()

        var width: Int = Resources.getSystem().displayMetrics.widthPixels
        init {
            Util.updateTodayDate()
        }

        override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): TextViewHolder {
            return TextViewHolder(LayoutInflater.from(parent.context).inflate(R.layout.item_text, parent, false))
        }

        override fun getItemCount() = list.size

        override fun onBindViewHolder(holder: TextViewHolder, position: Int) {
            val text = list[position]
            holder.nameTextView.text = text.fromUser.name
            holder.timeTextView.text = Util.getDisplayTime(text.time)
//        val truncatedText = TextUtils.ellipsize(
//            text.value,
//            holder.dataTextView.paint,
//            (width * 2).toFloat(),
//            TextUtils.TruncateAt.END
//        )
            updateSelectionBg(text, holder.itemView)
            holder.dataTextView.text = text.value.substring(0, 100.coerceAtMost(text.value.length))
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


        fun select(text: Text, root: View) {
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

        fun updateSelectionBg(textEntity: Text, root: View) {
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

        inner class TextViewHolder(view: View): RecyclerView.ViewHolder(view) {
            val rootLayout = view.findViewById<LinearLayout>(R.id.root_ll)
            val nameTextView = view.findViewById<TextView>(R.id.name_tv)
            val timeTextView = view.findViewById<TextView>(R.id.time_tv)
            val dataTextView = view.findViewById<TextView>(R.id.data_tv)
        }
    }

}

