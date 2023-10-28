import { ref, toRef } from './js/vue.js'
import { useDisplay } from './js/vuetify.esm.js'

export default {
  emits: [ 
    'onSearch', 
    'onIconClicked', 
  ],
  props: {
    downloadCount: Number,
    isSelectionMode: Boolean
  },
  setup(props, { emit }) {
    const searchFocused = ref(false)
    const display = ref(useDisplay())
    const showIcons = ref(true)
    const searchValue = ref("")
    const dCount = toRef(props, 'downloadCount')
    function onFocused() {
      searchFocused.value = !searchFocused.value
      const isSmall = display.value.xs
      showIcons.value = isSmall ? !searchFocused.value : true
      // console.log(`searchFocused: ${searchFocused.value} showIcons: ${showIcons.value} isSmall: ${isSmall}`)
    }
    function onSearchSubmit() {
      onFocused()
      emit('onSearch', searchValue.value)
      // console.log(`onSearchSubmit : ${searchValue.value} searchFocused: ${searchFocused.value}`)
    }
    return {
      showIcons,
      display,
      searchValue,
      searchFocused,
      dCount,
      onFocused,
      onSearchSubmit,
      emit
    }
  },
  template: `
    <v-container>
      <v-app-bar :elevation="2">
        <v-img
          :width="50"
          :max-width="50"
          aspect-ratio="1/1"
          cover
          src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
        ></v-img>
        <v-text-field
          id="uniqueIdentifier"
          ref="uniqueIdentifier"
          clearable
          hide-details
          density="compact"
          append-icon="mdi-magnify"
          single-line
          label="search"
          class="mx-2"
          v-model="searchValue"
          :focused="searchFocused"
          @update:focused="onFocused()"
          @keydown.enter="$refs['uniqueIdentifier'].blur()"
          type="search"
        ></v-text-field>

        <v-spacer v-show="showIcons"></v-spacer>

        <v-btn v-show="showIcons" @click="emit('onIconClicked', 'download')" icon>
          <v-badge :content="dCount">
            <v-icon>mdi-download-multiple</v-icon>
          </v-badge>
        </v-btn>

        <v-btn v-show="showIcons" @click="emit('onIconClicked', 'select')" icon>
        <v-icon>mdi-check-all</v-icon>
        </v-btn>

        <v-btn v-show="showIcons" @click="emit('onIconClicked', 'settings')" icon>
        <v-icon>mdi-cog</v-icon>
        </v-btn>
      </v-app-bar>
    </v-container>
  `
}
  