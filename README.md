<a name="readme-top"></a>
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/SatyaSnehith/WebShare">
    <img src="https://raw.githubusercontent.com/SatyaSnehith/WebShare/master/images/bluew.svg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">WebShare</h3>

  <p align="center">
    Local File Sharing
    <br />
    <a href="https://github.com/SatyaSnehith/WebShare"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/SatyaSnehith/WebShare">View Demo</a>
    ·
    <a href="https://github.com/SatyaSnehith/WebShare/issues">Report Bug</a>
    ·
    <a href="https://github.com/SatyaSnehith/WebShare/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#directory-trees">Directory trees</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<div align="center">
  <img src="https://raw.githubusercontent.com/SatyaSnehith/WebShare/master/images/Screenshot.png?raw=true" alt="Logo" width="250">
</div>

WebShare is a Android application that enables you to effortlessly share files and text locally using your browser. With its user-friendly interface and robust features, WebShare simplifies the process of sharing data between devices connected to the same network.

Key Features:

* Seamless File and Text Sharing: Share files and text seamlessly between your Android device and any browser on the local network.

* Enhanced Security: Protect your shared content with a secure PIN.

* User Management: Manage and control access privileges, such as blocking or granting user access.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

Download it here:

<a href='https://play.google.com/store/apps/details?id=ss.nscube.webshare'><img width='200' alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/></a>

## Directory Trees

<details>
<summary>Android app: app/src/main/java/ss/nscube/webshare</summary>

<pre><code>
├── db
│   ├── AppDatabase.kt
│   ├── daos
│   │   └── TextDAO.kt
│   ├── DatabaseHelper.kt
│   └── entities
│       └── TextEntity.kt
├── server
│   ├── events
│   │   └── ServerStatusListener.java
│   ├── Exceptions.kt
│   ├── file
│   │   ├── AppFolderManager.kt
│   │   ├── DownloadManager.kt
│   │   ├── FileDownloader.kt
│   │   ├── FileTransferListener.kt
│   │   ├── FileTransferObserver.kt
│   │   ├── FileUploader.kt
│   │   ├── ProgressCalculator.kt
│   │   ├── TransferManager.kt
│   │   ├── UploadManager.kt
│   │   └── WebFile.kt
│   ├── headers
│   │   ├── ContentDisposition.kt
│   │   ├── ContentTypes.kt
│   │   ├── Cookies.kt
│   │   ├── Header.kt
│   │   ├── Headers.kt
│   │   ├── Path.kt
│   │   ├── Range.kt
│   │   ├── RequestHeader.kt
│   │   ├── Request.kt
│   │   ├── ResponseHeader.kt
│   │   └── Response.kt
│   ├── HTTPServer.kt
│   ├── models
│   │   ├── AddTextResponse.kt
│   │   ├── AuthRequest.kt
│   │   ├── AuthResponse.kt
│   │   ├── ChangeNameRequest.kt
│   │   ├── DeletedResponse.kt
│   │   ├── DeleteMultiRequest.kt
│   │   ├── ErrorResponse.kt
│   │   ├── FileListResponse.kt
│   │   ├── FilePaginationRequest.kt
│   │   ├── FileResponse.kt
│   │   ├── FileUploadResponse.kt
│   │   ├── InfoResponse.kt
│   │   ├── MyFilesPaginationRequest.kt
│   │   ├── SignedUrlResponse.kt
│   │   ├── StatusRequest.kt
│   │   ├── StatusResponse.kt
│   │   ├── Text.kt
│   │   ├── TextPaginationRequest.kt
│   │   ├── UpdatedResponse.kt
│   │   ├── UploadInfoResponse.kt
│   │   └── ZipRequest.kt
│   ├── user
│   │   ├── FileManager.kt
│   │   ├── SignedUrlList.kt
│   │   ├── Text.kt
│   │   ├── TextManager.kt
│   │   ├── User.kt
│   │   └── UserManager.kt
│   └── utils
│       ├── FileUtil.kt
│       ├── PathUtil.java
│       ├── ProgressList.kt
│       ├── ServerUtil.java
│       ├── TimerTaskManager.kt
│       └── Util.kt
├── ServerService.kt
├── ui
│   ├── adapters
│   │   ├── AlbumAdapter.kt
│   │   └── ImageVideoAdapter.kt
│   ├── dialogs
│   │   ├── AlbumDialog.kt
│   │   ├── DeleteConfirmationDialog.kt
│   │   ├── FileRenameChangeDialog.kt
│   │   ├── QrDialog.kt
│   │   ├── RemoveAccessConfirmationDialog.kt
│   │   ├── RequestPermissionDialog.kt
│   │   ├── SecurityDialog.kt
│   │   ├── SelectedDialog.kt
│   │   ├── SettingsMemoryLimitDialog.kt
│   │   ├── SettingsNameChangeDialog.kt
│   │   ├── SettingsPinAttemptsDialog.kt
│   │   ├── SettingsStopInactiveDialog.kt
│   │   └── ThemeDialog.kt
│   ├── frags
│   │   ├── BaseFragment.kt
│   │   ├── home
│   │   │   ├── AboutFragment.kt
│   │   │   └── HomeFragment.kt
│   │   ├── receive
│   │   │   ├── ReceiveFragment.kt
│   │   │   └── ReceiveHistoryFragment.kt
│   │   ├── send
│   │   │   ├── AppFolderFragment.kt
│   │   │   ├── AppFragment.kt
│   │   │   ├── AudioFragment.kt
│   │   │   ├── BaseFileFragment.kt
│   │   │   ├── FileFragment.kt
│   │   │   ├── ImageFragment.kt
│   │   │   ├── PictureFragment.kt
│   │   │   ├── SendFragment.kt
│   │   │   └── VideoFragment.kt
│   │   ├── ServerSettingsFragment.kt
│   │   ├── text
│   │   │   ├── AddTextFragment.kt
│   │   │   ├── TextFragment.kt
│   │   │   ├── TextHistoryFragment.kt
│   │   │   └── TextInfoFragment.kt
│   │   └── UsersFragment.kt
│   ├── MainActivity.kt
│   ├── MenuPopup.kt
│   ├── utils
│   │   ├── Colors.java
│   │   ├── MatColors.java
│   │   ├── PermissionRequestHelper.kt
│   │   ├── QRCodeWriter.java
│   │   ├── ThemeUtil.kt
│   │   ├── TimeCal.kt
│   │   ├── UiUtil.kt
│   │   ├── Util.kt
│   │   └── ViewUtil.kt
│   └── views
│       ├── actionbar
│       │   └── ActionBar.kt
│       └── IconTextItemLinearLayout.kt
├── utils
│   ├── IpAddressUpdater.kt
│   ├── Log.kt
│   ├── PreferencesUtil.kt
│   ├── scan
│   │   ├── FileScan.kt
│   │   └── models
│   │       ├── Album.kt
│   │       ├── App.kt
│   │       ├── Audio.kt
│   │       ├── Data.kt
│   │       ├── Image.kt
│   │       └── Video.kt
│   └── WebFileUtil.kt
└── WebShareApp.kt

24 directories, 124 files
</code></pre>
</details>

<details>
<summary>Web: app/src/main/assets/web</summary>

<pre><code>
├── css
│   ├── commons.css
│   └── style.css
├── favicon.ico
├── file_not_found.html
├── fonts
│   ├── roboto_light-webfont.woff
│   ├── roboto_light-webfont.woff2
│   ├── roboto_medium-webfont.woff
│   ├── roboto_medium-webfont.woff2
│   ├── roboto_regular-webfont.woff
│   └── roboto_regular-webfont.woff2
├── images
│   ├── back.svg
│   ├── blogger.svg
│   ├── bluew.svg
│   ├── cancel.svg
│   ├── details.png
│   ├── drop.svg
│   ├── evernote.svg
│   ├── facebook.svg
│   ├── go.svg
│   ├── linkedin.svg
│   ├── menu.svg
│   ├── moon.svg
│   ├── no_access.png
│   ├── no_content.png
│   ├── no_server.png
│   ├── open.svg
│   ├── pinterest.svg
│   ├── reddit.svg
│   ├── refresh.svg
│   ├── remove_red.svg
│   ├── remove.svg
│   ├── send.svg
│   ├── settings.svg
│   ├── skype.svg
│   ├── sun.svg
│   ├── telegram.me.svg
│   ├── tumblr.svg
│   ├── twitter.svg
│   ├── unauthorized.png
│   ├── vk.svg
│   └── whatsapp.svg
├── js
│   ├── app.js
│   └── base64.min.js
├── apple-touch-icon.png
└── index.html

4 directories, 45 files
</code></pre>
</details>

<details>
<summary>Web JS: WebShareWeb</summary>

<pre><code>
├── api.js
├── constants.js
├── declare.js
├── init.js
├── merge.sh
├── theme.js
├── ui
│   ├── dialogs
│   │   ├── add-text-dialog.js
│   │   ├── delete-dialog.js
│   │   ├── dialog.js
│   │   ├── download-menu-dialog.js
│   │   ├── file-info-bottom-sheet.js
│   │   ├── info-dialog.js
│   │   ├── max-dialog.js
│   │   ├── name-dialog.js
│   │   ├── send-file-dialog.js
│   │   ├── share-dialog.js
│   │   └── view-text-dialog.js
│   ├── page-manager.js
│   ├── screens
│   │   ├── auth.js
│   │   ├── home
│   │   │   ├── fileinfo
│   │   │   │   ├── button.js
│   │   │   │   ├── file-info.js
│   │   │   │   ├── file-info-node.js
│   │   │   │   └── select-button.js
│   │   │   ├── files
│   │   │   │   ├── file-chooser.js
│   │   │   │   ├── file-drop-event.js
│   │   │   │   ├── file-node.js
│   │   │   │   ├── files-view.js
│   │   │   │   ├── grid-file-node.js
│   │   │   │   ├── grid-view.js
│   │   │   │   ├── list-file-node.js
│   │   │   │   ├── list-view.js
│   │   │   │   ├── search-node.js
│   │   │   │   └── selection-mode.js
│   │   │   ├── file-tab.js
│   │   │   ├── file-type-chips.js
│   │   │   ├── home.js
│   │   │   ├── sample-data.js
│   │   │   ├── tabs-node.js
│   │   │   ├── text-tab.js
│   │   │   └── viewMode.js
│   │   ├── page.js
│   │   ├── settings
│   │   │   ├── settings.js
│   │   │   └── theme-radio-button.js
│   │   └── try-again-page.js
│   ├── scroll-listener.js
│   ├── utils.js
│   └── visibility.js
└── WebShareWeb.code-workspace

7 directories, 48 files
</code></pre>
</details>

<!-- LICENSE -->
## License

Distributed under the GNU General Public License v3.0. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/SatyaSnehith/WebShare.svg?style=for-the-badge
[contributors-url]: https://github.com/SatyaSnehith/WebShare/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/SatyaSnehith/WebShare.svg?style=for-the-badge
[forks-url]: https://github.com/SatyaSnehith/WebShare/network/members
[stars-shield]: https://img.shields.io/github/stars/SatyaSnehith/WebShare.svg?style=for-the-badge
[stars-url]: https://github.com/SatyaSnehith/WebShare/stargazers
[issues-shield]: https://img.shields.io/github/issues/SatyaSnehith/WebShare.svg?style=for-the-badge
[issues-url]: https://github.com/SatyaSnehith/WebShare/issues
[license-shield]: https://img.shields.io/github/license/SatyaSnehith/WebShare.svg?style=for-the-badge
[license-url]: https://github.com/SatyaSnehith/WebShare/blob/master/LICENSE.txt
[product-screenshot]: https://raw.githubusercontent.com/SatyaSnehith/WebShare/master/images/Screenshot.svg
