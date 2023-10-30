import { ref, watch } from './js/vue.js'
import { useDisplay } from './js/vuetify.esm.js'

export default {
  emits: [
    'onChipSelected'
  ],
  props: {

  },
  setup(props, { emit }) {
    function onUpdate(value) {
      emit('onChipSelected', value)
    }
    const display = ref(useDisplay())

    const types = [
      {
        title: "Text",
        code: "text",
      },
      {
        title: "Image",
        code: "image",
      },
      {
        title: "Video",
        code: "video",
      },
      {
        title: "Audio",
        code: "audio",
      },
      {
        title: "Document",
        code: "document",
      },
      {
        title: "App",
        code: "app",
      }

    ]
    return {
      onUpdate,
      types,
      display,
    }
  },
  template: `
    <v-chip-group
    multiple
    column
    filter
    @update:modelValue="onUpdate"
    :class="[display.smAndUp ? 'px-14' : 'px-4']"
    >
      <v-chip 
      v-for="(type, index) in types"
      :key="index"
      color="primary"
      selected-class="{ background-color: primary}"
      variant="outlined"
      text-color="white"
      rounded="lg"
      :value="type.code"
      >{{ type.title }}</v-chip>
    </v-chip-group>
  `

}