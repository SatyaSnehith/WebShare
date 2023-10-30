import { useDisplay } from './js/vuetify.esm.js'
import { ref, watch, onMounted } from './js/vue.js'
import { components } from './js/vuetify-labs.esm.js'

const VInfiniteScroll = components.VInfiniteScroll
export default {
  props: {},
  components: {
    'v-infinite-scroll': VInfiniteScroll
  },
  setup(props) {
    const display = ref(useDisplay())
    function getParentStyle() {
      const displayWidth = display.value.width - (display.value.smAndUp ? 96 : 16)
      const count = Math.floor(displayWidth / 200)
      const size = displayWidth / count
      return "display: inline-grid; grid-template-columns: repeat(" + count + "," + size + "px);"
    }
    const style = ref(getParentStyle())

    watch(display, async (newDisplay, oldDisplay) => {
      console.log(`new: ${newDisplay.width} old: ${oldDisplay.width}`)
      style.value = getParentStyle()
    }, { deep: true })

    const items = ref(Array.from({ length: 100 }, (k, v) => v + 1))

    function load({ side, done }) {
      setTimeout(() => {
        if (side === 'end') {
          const arr = Array.from(
            { length: 50 },
            (k, v) => items.value.at(-1) + 1 + v
          )
          items.value = [...(items.value), ...arr]
        }
        console.log(items.value)
        done('ok')
      }, 1000)
    }

    onMounted(() => {
      const infiniteScrollElement = document.querySelector('.v-infinite-scroll');
      const sideElement = infiniteScrollElement.querySelector('.v-infinite-scroll__side');
      console.log(sideElement)
      sideElement.style.display = 'none';
    })

    return {
      display,
      style,
      load,
      items
    }
  },
  template: `
  <v-infinite-scroll 
    fluid
    :onLoad="load" 
    :style="style"
    :class="[display.smAndUp ? 'px-12' : 'px-2']">
      <v-sheet 
        v-for="(n, index) in items"
        :key="index"
        class="ma-2 pa-2"
        v-ripple
        :elevation="1"
        > Flex item #{{ n }}
       </v-sheet>
    </v-infinite-scroll>

  `
}