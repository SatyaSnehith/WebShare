package ss.nscube.webshare.ui.frags

import android.annotation.SuppressLint
import android.content.res.ColorStateList
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Toast
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView.Adapter
import androidx.recyclerview.widget.RecyclerView.ViewHolder
import ss.nscube.webshare.R
import ss.nscube.webshare.databinding.FragmentUsersBinding
import ss.nscube.webshare.databinding.ItemUserBinding
import ss.nscube.webshare.server.user.User
import ss.nscube.webshare.server.user.UserUpdateObserver
import ss.nscube.webshare.ui.MenuPopup
import ss.nscube.webshare.ui.dialogs.DeleteConfirmationDialog
import ss.nscube.webshare.ui.dialogs.RemoveAccessConfirmationDialog
import ss.nscube.webshare.ui.utils.Util

class UsersFragment : BaseFragment(), UserUpdateObserver {
    var binding: FragmentUsersBinding? = null
    val adapter = UserAdapter()

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        binding = FragmentUsersBinding.inflate(inflater)
        return binding?.root
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        binding?.actionBar?.updateMode {
            addBackIcon(this@UsersFragment)
            addTitle("Users")
            addMenuIcon(this@UsersFragment)
        }
        binding?.userRv?.layoutManager = LinearLayoutManager(requireContext())
        binding?.userRv?.adapter = adapter
        adapter.list = server.userManager.users
        updateContentVisibility()
        server.userManager.observerList.add(this)
    }

    override fun openMenu(view: View) {
        val menuPopup = MenuPopup(context ?: return)

        menuPopup.addMenuItem(0, R.drawable.icon_remove_access, "Remove Access for All Users", !checkRemoveAccessForAll())
        menuPopup.addMenuItem(1, R.drawable.icon_delete, "Delete All Users", !checkDeleteAll())
        menuPopup.onItemClick {
            when(it) {
                0 -> if (checkRemoveAccessForAll()) RemoveAccessConfirmationDialog().show(parentFragmentManager) {
                    for (user in server.userManager.users) {
                        user.pin = null
                        user.hasAccess = false
                    }
                    Util.toast(context, "Access for all users has been removed")
                } else Toast.makeText(context, "No user to remove access", Toast.LENGTH_SHORT).show()
                1 -> if (checkDeleteAll()) DeleteConfirmationDialog.show(this, "All Users") {
                    for (user in server.userManager.users) {
                        server.userManager.deleteUser(user)
                    }
                    Util.toast(context, "All users deleted successfully!")
                } else Toast.makeText(context, "No user to delete", Toast.LENGTH_SHORT).show()
            }
        }

        menuPopup.showAtLocation(view)
    }

    fun checkRemoveAccessForAll(): Boolean {
        for (user in server.userManager.users) {
            if (server.isAuthorized(user)) return true
        }
        return false
    }

    fun checkDeleteAll(): Boolean {
        return server.userManager.users.isNotEmpty()
    }

    fun updateContentVisibility() {
        binding?.userRv?.visibility = if (adapter.list.isNotEmpty()) View.VISIBLE else View.GONE
        binding?.noContentLl?.visibility = if (adapter.list.isEmpty()) View.VISIBLE else View.GONE
    }

    override fun onAdded() {
        launchMain {
            updateContentVisibility()
            adapter.notifyItemChanged(adapter.list.size - 1)
        }
    }

    override fun onUpdate(index: Int) {
        launchMain {
            adapter.notifyItemChanged(index)
        }
    }

    override fun onRemoved(index: Int) {
        launchMain {
            updateContentVisibility()
            adapter.notifyItemRemoved(index)
            adapter.notifyItemRangeChanged(index, adapter.list.size)
        }
    }

    override fun onClear() {
        launchMain {
            updateContentVisibility()
            adapter.notifyDataSetChanged()
        }
    }

    override fun onDestroy() {
        super.onDestroy()
        server.userManager.observerList.remove(this)
    }

    fun showUserMenu(user: User, view: View) {
        val menuPopup = MenuPopup(requireContext())
        if (user.isBlocked) {
            menuPopup.addMenuItem(0, R.drawable.icon_unblock, "Unblock")
        }
        else {
            menuPopup.addMenuItem(0, R.drawable.icon_block, "Block")
        }
        if (server.isSecured) {
            if (server.isAuthorized(user)) {
                menuPopup.addMenuItem(1, R.drawable.icon_remove_access, "Remove access")
            } else {
                menuPopup.addMenuItem(1, R.drawable.icon_give_access, "Give access")
            }
        }
        menuPopup.addMenuItem(2, R.drawable.icon_delete, "Delete")
        menuPopup.onItemClick {
            when(it) {
                0 -> { //Block
                    user.isBlocked = !user.isBlocked
                    Util.toast(context, "${if (user.isBlocked) "Blocked" else "Unblocked"} ${user.name}")
                }
                1 -> { //access
                    if (server.isAuthorized(user)) {
                        user.pin = null
                        user.hasAccess = false
                        Util.toast(context, "Access removed to ${user.name}")
                    } else {
                        user.pin = server.pin
                        user.hasAccess = true
                        Util.toast(context, "Access given to ${user.name}")
                    }
                }
                2 -> { //Delete
                    DeleteConfirmationDialog.show(this, "this user") {
                        server.userManager.deleteUser(user)
                        Util.toast(context, "User deleted successfully!")
                    }
                }
            }
        }
        menuPopup.showAtLocation(view)
    }

    inner class UserAdapter: Adapter<UserViewHolder>() {
        var list: ArrayList<User> = ArrayList()
            @SuppressLint("NotifyDataSetChanged")
            set(value) {
                field = value
                notifyDataSetChanged()
            }

        override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): UserViewHolder {
            return UserViewHolder(ItemUserBinding.inflate(LayoutInflater.from(parent.context)))
        }

        override fun onBindViewHolder(holder: UserViewHolder, position: Int) {
            val user = list[position]
            holder.binding.nameTv.text = user.name
            holder.binding.ipTv.text = user.ip
            holder.binding.statusTv.text = when {
                user.isBlocked -> {
                    holder.binding.statusTv.backgroundTintList = ColorStateList.valueOf(uiUtil.red)
                    "Blocked"
                }
                server.isAuthorized(user) -> {
                    holder.binding.statusTv.backgroundTintList = ColorStateList.valueOf(uiUtil.green)
                    "Authorized"
                } else -> {
                    holder.binding.statusTv.backgroundTintList = ColorStateList.valueOf(uiUtil.blue)
                    "Unauthorized"
                }
            }
            holder.binding.iconIv.setImageResource(
                when(user.os) {
                    "Windows" -> R.drawable.icon_pc_windows
                    "MacOS" -> R.drawable.icon_pc_apple
                    "UNIX", "Linux" -> R.drawable.icon_pc_linux
                    "Android" -> R.drawable.icon_mobile_android
                    "iOS" -> R.drawable.icon_mobile_apple
                    else -> R.drawable.icon_unknown_os
                }
            )
            holder.binding.menuFl.setOnClickListener {
                showUserMenu(user, it)
            }
        }

        override fun getItemCount() = list.size

    }

    class UserViewHolder(val binding: ItemUserBinding): ViewHolder(binding.root)

}


