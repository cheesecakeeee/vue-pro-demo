import vue from 'vue'
export default {
  //
  SET_APP_NAME (state, payload) {
    state.appName = payload.appName
  },
  SET_APP_VERSION (state) {
    vue.set(state, 'appVersion', 'v2.0')
  }
}