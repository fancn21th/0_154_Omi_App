import create from '../../../utils/create'

create.Component({
  use: ['todos'],
  computed: {
    todoList() {
      return Object.keys(this.todos).map(key => this.todos[key])
    }
  },
  methods: {
    onToogle(payload) {
      console.log(payload.detail)
    }
  }
})
