import todo, * as todoActions from './todo'

const store = {
  data: {
    todo
  },
  ...todoActions,
  //无脑全部更新，组件或页面不需要声明 use
  //updateAll: true,
  debug: true,
}

export default store