<template>
  <div class="split-panne-con">
    <!-- :value='offset' @input="handleInput" -->
    <!-- v-model="offset" -->
    <split-pane :triggerWith='8' :value.sync='offset'>
      <template #left>
        left
      </template>
      <template #right>
        right
      </template> 
    </split-pane>
  </div>
</template>

<script>
import SplitPane from '_c/Split-Pane'
export default {
  data() {
    return {
      offset: 0.4
    }
  },
  components: {
    SplitPane
  },
  methods: {
    handleInput (value) {
      this.offset = value
    }
  }
}
</script>

<style lang="less" scoped>
.split-panne-con {
  width: 400px;
  height: 200px;
  background-color: rgb(219, 228, 194);
}
</style>