import create from '../../../utils/create'
import store from '../../../store/index'

// 场景D
create.Component(store, {
  data: {
    value: ""
  },
  methods: {
    onAddTodoClick() {
      this.store.addTodo(this.data.value)
      this.setData({
        value: ''
      })
    }
  }
})