package ss.nscube.webshare.ui.frags.text

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Toast
import ss.nscube.webshare.R
import ss.nscube.webshare.databinding.FragmentAddTextBinding
import ss.nscube.webshare.ui.frags.BaseFragment
import ss.nscube.webshare.ui.utils.Util


class AddTextFragment : BaseFragment() {
    var binding: FragmentAddTextBinding? = null

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        binding = FragmentAddTextBinding.inflate(inflater)
        return binding?.root
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        binding?.actionBar?.updateMode {
            addBackIcon(this@AddTextFragment)
            addTitle("New Text")
            addEndIcon(R.drawable.icon_send, "Send Text", ::onSendClicked)
        }
        Util.openSoftKeyboard(binding?.textEt)

        binding?.pasteBtn?.setOnClickListener {
            val data = Util.textFromClipBoard(context ?: return@setOnClickListener)
            if (data != null) {
                val insertPos = binding?.textEt?.selectionStart ?: binding?.textEt?.selectionEnd ?: binding?.textEt?.text?.length ?: 0
                binding?.textEt?.text =
                    binding?.textEt?.text?.insert(insertPos, data)
                binding?.textEt?.setSelection(insertPos + data.length)
                Util.toast(context, "Text pasted from clipboard!")
            } else {
                Util.toast(context, "No text in the clipboard!")
            }
        }
    }

    fun onSendClicked() {
        val text = binding?.textEt?.text.toString()
        if (text.isNullOrEmpty()) {
            Toast.makeText(context, "Please enter your text.", Toast.LENGTH_SHORT).show()
            return
        }
        server.textManager.add(server.mainUser, text)
        Util.toast(context, "Text sent successfully!")
        onBackClicked()
    }
}