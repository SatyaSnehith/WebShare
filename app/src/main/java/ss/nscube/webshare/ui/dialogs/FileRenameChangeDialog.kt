package ss.nscube.webshare.ui.dialogs

import android.annotation.SuppressLint
import android.app.Dialog
import android.os.Build
import android.os.Bundle
import android.view.View
import android.widget.Button
import android.widget.EditText
import android.widget.TextView
import android.widget.Toast
import androidx.core.os.bundleOf
import androidx.core.widget.addTextChangedListener
import androidx.fragment.app.DialogFragment
import androidx.fragment.app.Fragment
import androidx.fragment.app.setFragmentResult
import androidx.fragment.app.setFragmentResultListener
import ss.nscube.webshare.R
import ss.nscube.webshare.ui.utils.UiUtil
import ss.nscube.webshare.ui.utils.Util
import ss.nscube.webshare.utils.log
import java.io.File

class FileRenameChangeDialog: DialogFragment() {
    val uiUtil = UiUtil.getInstance()

    @SuppressLint("SetTextI18n")
    override fun onCreateDialog(savedInstanceState: Bundle?): Dialog {
        val dialog = Dialog(requireContext())
        dialog.window?.setBackgroundDrawableResource(android.R.color.transparent)
        dialog.setContentView(R.layout.dialog_file_rename)
        val filePath = arguments?.getString(FilePath)
        if (filePath == null) {
            Toast.makeText(context, "filePath not sent", Toast.LENGTH_SHORT).show()
            return dialog
        }
        val file = File(filePath)
        if (!file.exists()) {
            Toast.makeText(context, "file does not exists", Toast.LENGTH_SHORT).show()
            return dialog
        }

        val nameEditText = dialog.findViewById<EditText>(R.id.name_et)
        val errorTextView = dialog.findViewById<TextView>(R.id.error_tv)

        nameEditText.setText(file.name)

        nameEditText.addTextChangedListener {
            errorTextView.text = ""
            errorTextView.visibility = View.GONE
        }
        nameEditText.postDelayed(Runnable {
            Util.openSoftKeyboard(nameEditText)
        }, 100)
        val dotIndex = file.name.lastIndexOf(".")
        if (dotIndex > -1) {
            nameEditText.setSelection(dotIndex)
        } else nameEditText.setSelection(nameEditText.text.length)

        dialog.findViewById<Button>(R.id.cancel_btn).setOnClickListener {
            setFragmentResult(RenameRequestKey, bundleOf(NewFile to null))
            dismiss()
        }
        dialog.findViewById<Button>(R.id.update_btn).setOnClickListener {
            val name = nameEditText.text.toString()
            val newFile = File(file.parent, name)
            val error = validateFileName(file, newFile)
            if (error == null) {
                val isRenamed = file.renameTo(newFile)
                if (isRenamed) {
                    Util.toast(context, "File renamed successfully.")
                } else {
                    Util.toast(context, "Failed to rename the file.")
                }
                setFragmentResult(RenameRequestKey, bundleOf(NewFile to if (isRenamed) newFile else null))
                dismiss()
            } else {
                errorTextView.visibility = View.VISIBLE
                errorTextView.text = error
                setFragmentResult(RenameRequestKey, bundleOf(NewFile to null))
            }
        }
        return dialog
    }

    val invalidCharacters = arrayOf("\\/", "\\", ":", "\\*", "\\?", "\"", "<", ">", "\\|")
    val invalidCharactersRegex = Regex(invalidCharacters.joinToString("|"))

    fun validateFileName(oldFile: File, newFile: File): String? {
        if (newFile.name == oldFile.name) return "Enter a new name to rename the file"
        log("REGEX $invalidCharactersRegex")
        if(newFile.name.contains(invalidCharactersRegex)) return "File name cannot contain /, \\, :, *, ?, \", <, >, | characters"
        if (newFile.exists()) return "The name \"${newFile.name}\" already used in this folder."
        return null
    }

    companion object {
        val Tag = FileRenameChangeDialog::class.java.simpleName
        val RenameRequestKey = "renameRequestKey"
        val NewFile = "newName"
        val FilePath = "filePath"
        fun show(fragment: Fragment, filePath: String, onRenamed: (File?) -> Unit) {
            val fileRenameChangeDialog = FileRenameChangeDialog()
            fileRenameChangeDialog.arguments = bundleOf(FilePath to filePath)
            fragment.setFragmentResultListener(RenameRequestKey) { requestKey, bundle ->
                onRenamed(
                    if (Build.VERSION.SDK_INT < Build.VERSION_CODES.TIRAMISU) (bundle.getSerializable(NewFile) as? File)
                    else bundle.getSerializable(NewFile, File::class.java)
                )
            }
            fileRenameChangeDialog.show(fragment.parentFragmentManager, Tag)
        }
    }
}
