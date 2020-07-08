<template>
  <div>{{name}}</div>
</template>

<script>
export default {
  name: 'Argu',
  props: {
    name: {
      type: String,
      default: '默认值'
    }
  },
  beforeRouteUpdate (to, from, next) {
    console.log(to.name, from.name)
  }
}
</script>

<style>

</style>
