import create from '../../../utils/create'
import store from '../../../store/index'

create.Component(store, {
  use: ['todo.todos'],
  methods: {
    onToggle({ detail }) {
      console.log(detail)
    }
  },
  ready() {
    this.store.fetchTodos('all')
  }
})
