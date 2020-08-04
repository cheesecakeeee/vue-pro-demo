<template>
  <div>
    <slot name="left"></slot><span ref='countNumber' :id="eleId" :class="countClass"></span><slot name="right"></slot>
  </div>
</template>

<script>
// 引入countup的js库
import { CountUp } from 'countup.js';
// 自定义组件的默认样式引入
import './Count-To.less'
export default {
  name: 'Count-To',
  
  data() {
    return {
      // 实例要多次调用，存储到当前作用域
      CountUp: ''
    }
  },
  props: {
    // 通过props传递countup的可配置项
    startVal: {
      type: Number,
      default: 0
    },
    // 结束值： 父组件设置
    endVal: {
      type: Number,
      required: true
    },
    // 保留小数位
    decimalPlaces: {
      type: Number,
      default: 0
    },
    // 持续时间
    duration: {
      tyep: Number,
      default: 2
    },
    // 速度动画
    useEasing: {
      type: Boolean,
      default: false
    },
    // 分隔符
    separator: {
      type: String,
      default: ','
    },
    // 小数点
    decimal: {
      type: String,
      default: '.'
    },
    // 自定义配置动画延迟
    delay: {
      type: Number,
      default: 0
    },
    // 自定义的样式类名
    className: {
      type: String,
      defalut: ''
    }
  },
  computed: {
    // 设置唯一的id，多次调用该组件id不同
    eleId() {
      return `count_to_${this._uid}`
    },
    // 父组件以及自定义组件的样式类名
    countClass() {
      return [
        'count-to-number',
        this.className
      ]
        
    }
  },
  mounted () {
    this.$nextTick(function () {
      // DOM 现在更新了
      // `this` 绑定到当前实例
      this.CountUp = new CountUp(this.eleId,  this.endVal, {
        startVal: this.startVal,
        decimalPlaces: this.decimalPlaces,
        duration: this.duration,
        useEasing: this.useEasing,
        separator: this.separator,
        decimal: this.decimal
      })
      setTimeout(()=> {
        // 调用countup的开始函数
        this.CountUp.start()
      }, this.delay)
      this.emitUpdated()
    })
  },
  watch: {
    // 监听结束值，更新最新值
    endVal(newVal, oldVal) {
      this.CountUp.update(newVal)
      this.emitUpdated()
    }
  },
  methods: {
    // 组件内自定义方法获取dom节点的文本信息（获取当前的数值）
    getCount() {
      // console.log(this.$refs.countNumber.innerText)
      return this.$refs.countNumber.innerText
    },
    // 获取值并传递给父组件，父组件获取值并更新，再通过props传递给当前组件
    emitUpdated() {
      setTimeout(() => {
        this.$nextTick(() => {
          this.$emit('on-animation-end', Number(this.getCount()))
        })
      }, this.duration * 1000 + 50)
    }
  }
}
</script>

<style>

</style>