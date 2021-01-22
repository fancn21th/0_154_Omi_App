import create from '../../../utils/create'
import store from '../../../store/index'

// 场景D
create.Component(store, {
  use: ['check.checked'],
  data: {
    value: ""
  },
  methods: {
    onAddTodoClick() {
      this.store.addTodo(this.data.value)
      this.setData({
        value: ''
      })
    },
    onToggleCheck() {
      this.store.toggleCheck()
    }
  }
})