import create from '../../../utils/create'
import store from '../../../store/index'

create.Component(store, {
  use: ['todos'],
  methods: {
    onToggle(payload) {
      console.log(payload.detail)
    }
  },
  ready() {
    this.store.fetchTodos('all')
  }
})
