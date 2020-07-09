<template>
  <div class="tel">
    tel: 135687654356789
    <button @click="deliverValue">点击我传递值给兄弟组件</button>
  </div>
</template>

<script>
export default {
  methods: {
    deliverValue () {
      this.$bus.$emit('handleDeliver', '兄弟组件传过来的值')
    }
  }
}
</script>

<style>
.tel {
  border: 1px solid rgb(46, 115, 179);
}
</style>
