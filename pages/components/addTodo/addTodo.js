// pages/components/addTodo/addTodo.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    onAddTodo: {
      type: Function,
      value: () => {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    value: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onAddTodoClick() {
      this.triggerEvent('onAddTodo', this.data.value)
    }
  }
})
