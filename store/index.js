import todo, * as todoActions from './todo'
import check, * as checkActions from './check'

const store = {
  data: {
    todo,
    check
  },
  ...todoActions,
  ...checkActions,
  //无脑全部更新，组件或页面不需要声明 use
  //updateAll: true,
  debug: true,
}

export default store