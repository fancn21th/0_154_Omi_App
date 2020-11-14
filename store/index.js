import {
  fetchTodos,
  addTodo
} from '../api/index'

export default {
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    logs: [],
    todos: {},
    filteredTodos: {
      all: {
        ids: []
      },
      completed: {
        ids: []
      },
      active: {
        ids: []
      },
    }
  },
  //无脑全部更新，组件或页面不需要声明 use
  //updateAll: true,
  debug: true,

  // actions in store
  fetchTodos(filter) {
    const self = this
    fetchTodos(filter).then(todos => {
      self.data.todos = todos
    })
  },
  addTodo(text) {
    const self = this
    addTodo(text).then(todo => {
      self.data.todos.push(todo)
    })
  },
  toogleTodo(id) {
    const self = this
    toggleTodo(id).then(todo => {
      self.data.todos.push(todo)
    })
  }
}