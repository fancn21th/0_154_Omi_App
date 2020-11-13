import create from '../../../utils/create'
import store from '../../../store/index'

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