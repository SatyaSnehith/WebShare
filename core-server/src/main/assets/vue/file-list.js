import { useDisplay } from './js/vuetify.esm.js'
import { ref, watch } from './js/vue.js'


export default {
  props: {},
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

    return {
      display,
      style
    }
  },
  template: `
    <v-sheet
      :style="style"
      :class="[display.smAndUp ? 'px-12' : 'px-2']"
    >
      <v-sheet 
      v-for="n in 20"
      :key="n"
      class="ma-2 pa-2"
      v-ripple
      :elevation="1"
      > Flex item {{ n * 1000 }} </v-sheet>
    </v-sheet>
  `
}