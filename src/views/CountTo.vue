<template>
  <div>
    <count-to :endVal="endVal" ref="count_to" :className='fontClass' @on-animation-end='animationEnd'>
      
      <template #left>
        <span slot="left">总金额: </span>
      </template>

      <template #right>
        <span slot="right">元</span>
      </template>

    </count-to>  
    <button @click="getNumber()">获取自定义组件数据</button>
    <button @click="updateNumber()">随机更新数据</button>
  </div>
</template>

<script>
import CountTo from '@/components/Count-To'
export default {
  name: 'Count_To',
  components: {
    CountTo
  },
  data() {
    return {
      endVal: 200,
      fontClass: 'fontClass'
    }
  },
  methods: {
    // 父组件调用子组件你的内部方法 refs
    getNumber() {
      this.$refs.count_to.getCount()
    },
    // 父组件的点击事件随机生成enVal
    updateNumber() {
      this.endVal += Math.random() * 100
    },
    // 子组件触发父组件事件传递enVal给父组件
    animationEnd(enVal) {
      console.log('end==>',enVal)
    }
  }
}
</script>

<style>
.fontClass {
  font-size: 30px;
}
</style>