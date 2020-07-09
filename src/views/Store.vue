<template>
  <div>
    <a-input v-model="value"></a-input>
  {{ value }}
  </div>
</template>

<script>
import AInput from '_c/AInput.vue'
export default {
  name: 'Store',
  data () {
    return {
      value: ''
    }
  },
  components: {
    AInput
  }
}
</script>

<style>

</style>
