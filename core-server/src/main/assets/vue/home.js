import HomeAppBar from './home-app-bar.js'
import FileTypeFilter from './file-type-filter.js'
import FileList from './file-list.js'
import { ref } from './js/vue.js'

export default {
  components: {
    HomeAppBar,
    FileTypeFilter,
    FileList
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
    function onChipSelected(list) {
      console.log(list)
    }

    return {
      homeAppBarOn,
      downloadCount,
      onChipSelected,
      onSearch
    }
  },
  template: `
    <v-app>
      <home-app-bar
        :downloadCount="downloadCount"
        v-on="homeAppBarOn"
      />
      <v-main>
        <file-type-filter @onChipSelected="onChipSelected"/>
        <file-list/>
      </v-main>
    </v-app>
  `
}
