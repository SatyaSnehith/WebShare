fileList=(\
./theme.js
./ui/visibility.js
./ui/scroll-listener.js
./ui/page-manager.js
./ui/dialogs/dialog.js
./ui/dialogs/max-dialog.js
./ui/dialogs/send-file-dialog.js
./ui/dialogs/delete-dialog.js
./ui/dialogs/add-text-dialog.js
./ui/dialogs/file-info-bottom-sheet.js
./ui/dialogs/info-dialog.js
./ui/dialogs/download-menu-dialog.js
./ui/dialogs/name-dialog.js
./ui/dialogs/share-dialog.js
./ui/dialogs/view-text-dialog.js
./ui/screens/home/file-type-chips.js
./ui/screens/home/files/file-node.js
./ui/screens/home/files/file-chooser.js
./ui/screens/home/files/selection-mode.js
./ui/screens/home/files/list-file-node.js
./ui/screens/home/files/file-drop-event.js
./ui/screens/home/files/grid-file-node.js
./ui/screens/home/files/search-node.js
./ui/screens/home/files/files-view.js
./ui/screens/home/files/list-view.js
./ui/screens/home/files/grid-view.js
./ui/screens/home/fileinfo/file-info-node.js
./ui/screens/home/fileinfo/button.js
./ui/screens/home/fileinfo/select-button.js
./ui/screens/home/fileinfo/file-info.js
./ui/screens/home/viewMode.js
./ui/screens/home/sample-data.js
./ui/screens/home/tabs-node.js
./ui/screens/page.js
./ui/screens/try-again-page.js
./ui/screens/settings/settings.js
./ui/screens/settings/theme-radio-button.js
./ui/screens/home/home.js
./ui/screens/home/file-tab.js
./ui/screens/home/text-tab.js
./ui/screens/auth.js
./ui/utils.js
./api.js
./constants.js
./init.js
)
awk 'FNR==1{print "// File: " FILENAME }1' "${fileList[@]}" > ../app/src/main/assets/web/js/app.js