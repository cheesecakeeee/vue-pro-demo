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
  }
}
</script>

<style>

</style>
