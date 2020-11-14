import create from '../../utils/create'
import store from '../../store/index'

create.Page(store, {
  use: [
  ],
  computed: {
  },
  //事件处理函数
  onLoad: function () {
    const handler = function (evt) {
      console.log(evt)
    }
    store.onChange(handler)

    //store.offChange(handler)

    store.fetchTodos('all')
  },
})