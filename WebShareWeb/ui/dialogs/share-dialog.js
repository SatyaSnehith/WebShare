class ShareDialog extends Dialog {
    static inst = null

    static getInstance() {
        if (this.inst == null) {
            this.inst = new this()
        }
        return this.inst
    }

    constructor() {
        super($('shareDialogWrap'))
        $('shareCloseButton').onclick = () => {
            this.dismiss()
        }
        const shareLink = $('shareLink')
        const shareLinkCopy = $('shareLinkCopy')
        const socialMediaList = $('socialMediaList')
    
        socialMediaList.innerHTML = ''
        for (const sm of this.getSocialMediaList()) {
            const media = sm
            let image = element('img')
            image.classList.add('pointer')
            image.style.width = '40px'
            image.style.height = '40px'
            image.style.padding = '10px'
            image.src = "images/" + media.name + ".svg"
            image.onclick = () => {
                let a = element('a')
                a.href = media.url
                a.target = '_blank'
                a.click()
            }
            socialMediaList.appendChild(image)
        }
        if (!navigator.clipboard) {
            utils.selectText(shareLink)
            shareLinkCopy.style.display = 'none'
        }
        shareLinkCopy.onclick = () => {
            utils.copyToClipboard(shareLink.innerHTML, () => {

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