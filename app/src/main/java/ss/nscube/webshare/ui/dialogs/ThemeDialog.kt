package ss.nscube.webshare.ui.dialogs

import android.app.Dialog
import android.os.Build
import android.os.Bundle
import android.view.View
import android.widget.Button
import android.widget.LinearLayout
import android.widget.RadioButton
import android.widget.RadioGroup
import android.widget.TextView
import androidx.appcompat.app.AppCompatDelegate
import androidx.fragment.app.DialogFragment
import androidx.fragment.app.FragmentManager
import ss.nscube.webshare.R
import ss.nscube.webshare.WebShareApp
import ss.nscube.webshare.ui.utils.UiUtil
import ss.nscube.webshare.utils.log

class ThemeDialog: DialogFragment() {

    override fun onCreateDialog(savedInstanceState: Bundle?): Dialog {
        val dialog = Dialog(requireContext())
        isCancelable = false
        dialog.setCanceledOnTouchOutside(false)
        dialog.window?.setBackgroundDrawableResource(android.R.color.transparent)
        dialog.setContentView(R.layout.dialog_theme)
        val hasSystemTheme = Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q
        if (!hasSystemTheme) dialog.findViewById<RadioButton>(R.id.systemDefaultRB).visibility = View.GONE
        val themeRB = dialog.findViewById<RadioGroup>(R.id.themeRG)
        val mode = AppCompatDelegate.getDefaultNightMode()
        themeRB.check(when(mode) {
            AppCompatDelegate.MODE_NIGHT_NO -> R.id.lightRB
            AppCompatDelegate.MODE_NIGHT_YES -> R.id.darkRB
            else -> R.id.systemDefaultRB

        })
        val webShareApp = activity?.application as? WebShareApp
        dialog.findViewById<Button>(R.id.ok_btn).setOnClickListener {
            when(themeRB.checkedRadioButtonId) {
                R.id.systemDefaultRB -> {
                    webShareApp?.preferencesUtil?.theme = 0
                    AppCompatDelegate.setDefaultNightMode(AppCompatDelegate.MODE_NIGHT_FOLLOW_SYSTEM)
                }
                R.id.lightRB -> {
                    webShareApp?.preferencesUtil?.theme = 1
                    AppCompatDelegate.setDefaultNightMode(AppCompatDelegate.MODE_NIGHT_NO)
                }
                R.id.darkRB -> {
                    webShareApp?.preferencesUtil?.theme = -1
                    AppCompatDelegate.setDefaultNightMode(AppCompatDelegate.MODE_NIGHT_YES)
                }
            }
            dismiss()
        }
        dialog.findViewById<Button>(R.id.cancel_btn).setOnClickListener {
            dismiss()
        }
        return dialog
    }



    companion object {
        val Tag = ThemeDialog::class.java.simpleName
        fun show(fragmentManager: FragmentManager) {
            ThemeDialog().show(fragmentManager, Tag)
        }
    }
}

