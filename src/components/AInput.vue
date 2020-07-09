<template>
  <input type="text" :value='inputValue' @input="handleInput">
</template>

<script>
export default {
  props: {
    inputValue: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleInput (event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>

<style>

</style>
