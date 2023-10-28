import HomeAppBar from './home-app-bar.js'
import FileTypeFilter from './file-type-filter.js'
import { ref } from './js/vue.js'

export default {
  components: {
    HomeAppBar,
    FileTypeFilter
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
      <v-container fill-height fluid >
        <v-row align="center" justify="center">
          <v-col>
            <home-app-bar
              :downloadCount="downloadCount"
              v-on="homeAppBarOn"
            />
            <file-type-filter @onChipSelected="onChipSelected"/>
          </v-col>
        </v-row>
      </v-container>
    </v-app>


  `
}
