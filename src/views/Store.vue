<template>
  <div>
    <a-input @input="handleInput"></a-input>
    <a-show :content="value"></a-show>
  </div>
</template>

<script>
import AInput from '_c/AInput.vue'
import AShow from '_c/AShow.vue'
export default {
  name: 'Store',
  data () {
    return {
      value: ''
    }
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
