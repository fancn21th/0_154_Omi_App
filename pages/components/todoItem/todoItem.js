// pages/components/todoItem/todoItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    id: {
      type: Number,
      value: 0
    },
    text: {
      type: String,
      value: ""
    },
    completed: {
      type: Boolean,
      value: false
    }
  },
  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onToogle() {
      this.triggerEvent('onToogle', this.id)
    }
  }
})
