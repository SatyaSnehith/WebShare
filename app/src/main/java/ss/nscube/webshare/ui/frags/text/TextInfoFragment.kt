package ss.nscube.webshare.ui.frags.text

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.core.os.bundleOf
import androidx.core.text.PrecomputedTextCompat
import androidx.core.widget.TextViewCompat
import androidx.fragment.app.setFragmentResult
import androidx.lifecycle.lifecycleScope
import androidx.navigation.fragment.navArgs
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext
import ss.nscube.webshare.R
import ss.nscube.webshare.databinding.FragmentTextInfoBinding
import ss.nscube.webshare.db.DatabaseHelper
import ss.nscube.webshare.db.entities.TextEntity
import ss.nscube.webshare.ui.dialogs.DeleteConfirmationDialog
import ss.nscube.webshare.ui.frags.BaseFragment
import ss.nscube.webshare.ui.utils.Util

class TextInfoFragment : BaseFragment() {
    var binding: FragmentTextInfoBinding? = null
    val args: TextInfoFragmentArgs by navArgs()
    var textEntity: TextEntity? = null

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        binding = FragmentTextInfoBinding.inflate(inflater)
        return binding?.root
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        Util.updateTodayDate()
        when(args.textType) {
            TypeCurrent -> setupCurrentText()
            TypeHistory -> setupHistoryText()
        }
    }

    fun setupCurrentText() {
        binding?.actionBar?.updateMode {
            addBackIcon(this@TextInfoFragment)
            addTitle("Text Info")
        }
        val text = server.textManager.fromId(args.textId)
        if (text != null) {
            binding?.nameTv?.text = text.fromUser.name
            binding?.timeTv?.text = Util.getDisplayTime(text.time)
            setTextAsync(binding?.dataTv, text.value)
        }
        binding?.copyBtn?.setOnClickListener {
            if (text != null) {
                Util.copyToClipboard(text.value, requireActivity())
            }
        }

        binding?.deleteBtn?.setOnClickListener {
            DeleteConfirmationDialog.show(this, "this text") {
                server.textManager.remove(text)
                Util.toast(context, "Text deleted successfully!")
                onBackClicked()
            }
        }
    }

    fun setupHistoryText() {
        binding?.actionBar?.updateMode {
            addBackIcon(this@TextInfoFragment)
            addTitle("Text Info")
            addEndIcon(R.drawable.icon_send, "Send Text", ::onSendTextClicked)
        }

        getTextFromHistory {te ->
            textEntity = te
            binding?.nameTv?.text = ""
            binding?.timeTv?.text = ""
            setTextAsync(binding?.dataTv, te.text)
            binding?.copyBtn?.setOnClickListener {
                Util.copyToClipboard(te.text, requireActivity())
            }
            binding?.deleteBtn?.setOnClickListener {
                DeleteConfirmationDialog.show(this, "this text") {
                    lifecycleScope.launch(Dispatchers.IO) {
                        setFragmentResult(IsDeletedKey, bundleOf(IsDeleted to true))
                        DatabaseHelper.textDAO?.delete(te.id)
                        lifecycleScope.launch(Dispatchers.Main) {
                            Util.toast(context, "Text deleted successfully!")
                            onBackClicked()
                        }
                    }
                }
            }
        }

    }

    fun onSendTextClicked() {
        if (textEntity != null) {
            server.textManager.add(server.mainUser, textEntity!!.text, true)
            Util.toast(context, "Text sent successfully!")
            onBackClicked()
        }
    }

    fun getTextFromHistory(onComplete: (TextEntity) -> Unit) {
        lifecycleScope.launch(Dispatchers.IO) {
            val textEntity = DatabaseHelper.textDAO?.get(args.textId) ?: return@launch
            lifecycleScope.launch(Dispatchers.Main) {
                onComplete(textEntity)
            }
        }
    }

    fun setTextAsync(textView: TextView?, text: String) {
        if (textView == null) return
        lifecycleScope.launch {
            val params = TextViewCompat.getTextMetricsParams(textView)
            val precomputedText = withContext(Dispatchers.Default) {
                PrecomputedTextCompat.create(text, params)
            }
            TextViewCompat.setPrecomputedText(textView, precomputedText)
        }
    }

    companion object {
        val TypeCurrent = "current"
        val TypeHistory = "history"
        val IsDeletedKey = "isDeletedKey"
        val IsDeleted = "isDeleted"
    }
}

