class FileLinkDialog extends Dialog {
    static inst = null

    static getInstance(url) {
        this.inst = new this(url)
        return this.inst
    }

    constructor(url) {
        super($('fileLinkDialogWrap'))
        this.setCancellable()
        $('fileLinkCloseButton').onclick = () => {
            this.dismiss()
        }
        const fileLink = $('fileLink')
        const fileLinkA = $('fileLinkA')
        const fileLinkCopy = $('fileLinkCopy')
        fileLink.innerHTML = url
        fileLinkA.href = url
        fileLinkA.target = '_blank'
        if (!navigator.clipboard) {
            utils.selectText(fileLink)
            fileLinkCopy.style.display = 'none'
        }
        utils.copyToClipboard(url, () => {

        })
        fileLinkCopy.onclick = () => {
            utils.copyToClipboard(url, () => {

            })

        }
    }

    getSocialMediaList() {
        const url = this.fixedEncodeURIComponent("https://webshare.page.link/share");
        const title = "WebShare"
        const desc = "Local File Sharing"
        
        var text = title;
        
        if(desc) {
            text += '%20%3A%20';	// This is just this, " : "
            text += desc;
        }
        
        return [
            {name:'blogger', url: 'https://www.blogger.com/blog-this.g?u=' + url + '&n=' + title + '&t=' + desc },
            {name:'evernote', url: 'https://www.evernote.com/clip.action?url=' + url + '&title=' + text },
            {name:'facebook', url: 'http://www.facebook.com/sharer.php?u=' + url },
            {name:'linkedin', url: 'https://www.linkedin.com/sharing/share-offsite/?url=' + url },
            {name:'pinterest', url: 'http://pinterest.com/pin/create/button/?url=' + url  },
            {name:'reddit', url: 'https://reddit.com/submit?url=' + url + '&title=' + title },
            {name:'skype', url: 'https://web.skype.com/share?url=' + url + '&text=' + text },
            {name:'telegram.me', url: 'https://t.me/share/url?url=' + url + '&text=' + text },
            {name:'tumblr', url: 'https://www.tumblr.com/widgets/share/tool?canonicalUrl=' + url + '&title=' + title + '&caption=' + desc },
            {name:'twitter', url: 'https://twitter.com/intent/tweet?url=' + url + '&text=' + text },
            {name:'vk', url: 'http://vk.com/share.php?url=' + url + '&title=' + title + '&comment=' + desc },
            {name:'whatsapp', url: 'https://api.whatsapp.com/send?text=' + text + '%20' + url },
        ];
    }

    fixedEncodeURIComponent(str) {
        return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
            return '%' + c.charCodeAt(0).toString(16);
        });
    }
}