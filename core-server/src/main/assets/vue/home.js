import HomeAppBar from './home-app-bar.js'
import { ref } from './js/vue.js'

export default {
    components: {
      HomeAppBar
    },
    emits: ['delete'],
    props: {
      todo: { text: String }
    },
    setup(props, { emit }) {
      const downloadCount = ref(12)
      function onSearch(value) {
        // console.log(`onSearch: ${value} ${downloadCount.value}`)
      }
      const homeAppBarOn = {
        onSearch: function (value) {
          downloadCount.value++
          console.log(`homeAppBarBind onSearch: ${value} ${downloadCount.value}`)
        },
        onIconClicked: function(key) {
          switch(key) {
            case 'download': 
              console.log("download")
              break;
            case 'select': 
              console.log("select")
              break;
            case 'settings': 
              console.log("settings")
              break;
            default:
          }
        }
      }

      return {
        homeAppBarOn,
        downloadCount,
        onSearch
      }
    },
    template: `
      <home-app-bar
        :downloadCount="downloadCount"
        v-on="homeAppBarOn"
      />
    `
}
