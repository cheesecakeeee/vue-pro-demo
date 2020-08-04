<template>
  <div class="split-pane-wrap" ref="outer">
    <div class="pane pane-left" :style="{width: leftOffsetPercent, paddingRight: `${this.triggerWith / 2}px`}">
      <slot name="left"></slot>
    </div>
    <div class="pane-trigger-con" :style="{left: triggerLeft, width: `${triggerWith}px`}" @mousedown="handleMousedown" ></div>
    <div class="pane pane-right" :style="{left: leftOffsetPercent, paddingLeft: `${this.triggerWith / 2}px`}">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Split_Pane',
  data () {
    return {
      // leftOffset: 0.3,
      canMove: false,
      initOffset: 0
    }
  },
  props: {
    value: {
      type: Number,
      default: 0.5
    },
    triggerWith: {
      type: Number,
      default: 0
    },
    min: {
      type: Number,
      default: 0.1
    },
    max: {
      type: Number,
      default: 0.9
    }
  },
  computed: {
    leftOffsetPercent () {
      return `${this.value*100}%`
    },
    triggerLeft () {
      return `calc(${this.value*100}% - ${this.triggerWith / 2}px)`
    }
  },
  methods: {
    handleMousedown(event) {
      document.addEventListener('mousemove', this.handleMousemove)
      document.addEventListener('mouseup', this.handleMouseup)
      this.initOffset = event.pageX - event.srcElement.getBoundingClientRect().left
      this.canMove = true
    },
    handleMousemove (event) {
      if (!this.canMove) return
      const outerRect = this.$refs.outer.getBoundingClientRect()
      let offsetPercent = (event.pageX - this.initOffset + this.triggerWith / 2 - outerRect.left) / outerRect.width

      if (offsetPercent < this.min) offsetPercent = this.min  
      if (offsetPercent > this.max) offsetPercent = this.max
      // this.leftOffset = offsetPercent 
      // this.$emit('input', offsetPercent)
      this.$emit('update:value', offsetPercent)
      // console.log(this.$refs.outer.getBoundingClientRect().left)
      // console.log(event.pageX - this.$refs.outer.getBoundingClientRect().left)
    },
    handleMouseup () {
      this.canMove = false
    }
  }
}
</script>

<style lang="less" scoped>
.split-pane-wrap {
  width: 100%;
  height: 100%;
  position: relative;

  .pane {
    height: 100%;
    position: absolute;
    top: 0;
    &-left {
      background-color: rgb(189, 181, 221);
    }
    &-right { 
      background-color: rgb(185, 211, 226);
      bottom: 0;
      right: 0;
    }
    &-trigger-con {
      height: 100%;
      background-color: rgb(61, 60, 60);
      z-index: 10;
      position: absolute;
      top: 0;
      user-select: none;
      cursor: col-resize;
    }
  }
}
</style>