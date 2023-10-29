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
        key: 0,
        title: "Text",
        code: "text",
      },
      {
        key: 1,
        title: "Image",
        code: "image",
      },
      {
        key: 2,
        title: "Video",
        code: "video",
      },
      {
        key: 3,
        title: "Audio",
        code: "audio",
      },
      {
        key: 4,
        title: "Document",
        code: "document",
      },
      {
        key: 5,
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
      v-for="type in types"
      :key="type.key"
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