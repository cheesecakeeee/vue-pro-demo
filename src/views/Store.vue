<template>
  <div>
    <a-input @input="handleInput"></a-input>
    <a-show :content="value"></a-show>
    <div>AppName: {{ appName }}</div>
    <div>userName: {{ userName }}</div>
  </div>
</template>

<script>
import AInput from '_c/AInput.vue'
import AShow from '_c/AShow.vue'
// mapState辅助函数
// import { mapState } from 'vuex'
// 模块命名空间
import { createNamespacedHelpers } from 'vuex'
const { mapState } =  createNamespacedHelpers('user')
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
      'appName'
    ]),
    // mapState传入对象
    // 对象的value可以为箭头函数/普通函数/字符串
    // ...mapState({
    //   userName: state => state.user.userName
    // })
    // ...mapState({
    //   userName (state) {
    //     return state.user.userName
    //   }
    // })
    // ...mapState({
    //   userName: 'user.userName'
    // })
    
    // appName () {
    //   return this.$store.state.appName
    // },
    // userName () {
    //   return this.$store.state.user.userName
    // }
    // 命名空间写法，不需要传模块
    ...mapState({
      userName: state => state.userName
    })

  },
  components: {
    AInput,
    AShow
  },
  methods: {
    handleInput (val) {
      this.value = val
    }
  }
}
</script>

<style>

</style>
