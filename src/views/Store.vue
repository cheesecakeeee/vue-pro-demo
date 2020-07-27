<template>
  <div>
    <a-input @input="handleInput"></a-input>
    <a-show :content="value"></a-show>
    <div>InputValueLastLetter: {{ inputValueWithLastLetter }}</div>
    <div>AppName: {{ appName }}</div>
    <div>userName: {{ userName }} -- firstLetter: {{ firstLetter }}</div>
    <div>Version: {{ appNameWithVersion }}</div>
    <button @click="handleChangeAppName">改变AppName</button>
    <div>版本: {{ appVersion }}</div>
    <button @click="handleChangeUserName">改变userName</button>
    <button @click="registerModule">动态注册模块</button>
    <p v-for="(li, index) in todoList" :key="index">{{ li }}</p>
  </div>
</template>

<script>
import AInput from '_c/AInput.vue'
import AShow from '_c/AShow.vue'
// mapState辅助函数
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
// 模块命名空间
// import { createNamespacedHelpers } from 'vuex'
// const { mapState, mapGetters } =  createNamespacedHelpers('user')
export default {
  name: 'Store',
  data () {
    return {
      value: ''
    }
  },
  computed: {
    // mapState传入数组
    ...mapState([
      'appName',
      'appVersion'
    ]),
    // mapState传入对象
    // 对象的value可以为箭头函数/普通函数/字符串
    ...mapState({
      userName: state => state.user.userName,
      todoList: state => state.todo ? state.todo.todoList : []
    }),
    // ...mapState({
    //   userName (state) {
    //     return state.user.userName
    //   }
    // })
    // ...mapState({
    //   userName: 'user.userName'
    // }),
    
    // appName () {
    //   return this.$store.state.appName
    // },
    // userName () {
    //   return this.$store.state.user.userName
    // }
    // 命名空间写法，不需要传模块
    // ...mapState({
    //   userName: state => state.userName
    // }),
    // 计算属性
    inputValueWithLastLetter() {
      return this.value.substr(-1, 1)
    },
    // 获取getters
    // appNameWithVersion() {
    //   return this.$store.getters.appNameWithVersion
    // }
    // 辅助函数mapGetters数组（字符串）/对象（value为字符串）
    // ...mapGetters(['appNameWithVersion'])
    ...mapGetters({
      appNameWithVersion: 'appNameWithVersion'
    }),
    // ...mapGetters('user', {
    //   firstLetter: 'firstLetter'
    // }),
    ...mapGetters({
      firstLetter: 'firstLetter'
    })
  },
  components: {
    AInput,
    AShow
  },
  methods: {
    ...mapMutations([
      'SET_APP_NAME',
      'SET_USER_NAME'
    ]),
    // ...mapActions([
    //   'updateAppName'
    // ]),
    handleInput (val) {
      this.value = val
    },
    // handleChangeAppName() {
    //   this.$store.commit('SET_APP_NAME', {appName: 'newAppName'})
    // }
    handleChangeAppName() {
      // this.$store.commit({
      //   type: 'SET_APP_NAME',
      //   appName: '新的AppName'
      // })
      // this.SET_APP_NAME({ appName: '辅助函数修改的appName'})

      this.$store.commit('SET_APP_VERSION')

      // this.updateAppName()
      this.$store.dispatch('updateAppName')
    },
    handleChangeUserName() {
      this.SET_USER_NAME({userName: '新的userName'})
    },
    registerModule() {
      this.$store.registerModule('todo', {
        state: {
          todoList: [
            '学习mutation',
            '学习action'
          ]
        }
      })
    }
  }
}
</script>

<style>

</style>
