<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/img/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">跳转parent页</button>
    <button @click="handleClick('replace')">跳转parent页</button>
    <button @click="handleClick('argu')">跳转argu页</button>
    <div>{{name}}</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  props: {
    name: {
      type: String,
      default: 'xixi'
    }
  },
  components: {
    HelloWorld
  },
  methods: {
    handleClick (type) {
      // this.$router.go(-1)
      // this.$router.back()
      if (type === 'back') this.$router.back()
      // else if (type === 'push') this.$router.push('/parent')
      else if (type === 'push') {
        this.$router.push({
          name: 'Parent',
          query: {
            name: 'eric'
          }
        })
      } else if (type === 'replace') this.$router.replace({ name: 'Parent' }) 
      else if (type === 'argu') {
        // const name = 'lala'
        this.$router.push({
          name: 'argu',
          params: {
            name: 'eudora'
          }
          // path: `/argu/${name}`
        })
      }
    }
  }
}
</script>
