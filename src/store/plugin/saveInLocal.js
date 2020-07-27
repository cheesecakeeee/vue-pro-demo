export default store => {

  if (localStorage.state) store.replaceState(JSON.parse(localStorage.state))
  // 当 store 初始化后调用
  store.subscribe((mutation, state) => {
    // 每次 mutation 之后调用
    // mutation 的格式为 { type, payload }
    localStorage.state = JSON.stringify(state)
  })
}