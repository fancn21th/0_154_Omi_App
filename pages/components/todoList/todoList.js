import create from '../../../utils/create'
import store from '../../../store/index'

create.Component(store, {
  use: ['todo.todos', 'check.checked'],
  methods: {
    onToggle({
      detail: todoId
    }) {
      this.store.toggleTodo(todoId)
    }
  },
  ready() {
    this.store.fetchTodos('all')
  }
})