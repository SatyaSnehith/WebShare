export default {
  emits: ['delete'],
  props: {
    todo: { text: String }
  },
  setup(props, { emit }) {
    return {
        emit
    }
  },
  template: `
  <li>
    <a>{{ todo.text }}</a>
    <button @click="emit('delete')">delete</button>
  </li> 
`
}
