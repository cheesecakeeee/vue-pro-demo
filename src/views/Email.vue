<template>
  <div class="email">
    email: XXXXXXXXXX@qq.com
    <div>{{ message }}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: ''
    }
  },
  mounted () {
    this.$bus.$on('handleDeliver', msg => {
      this.message = msg
    })
  }
}
</script>

<style>
  .email {
    border: 1px solid rgb(207, 51, 51);
  }
</style>
