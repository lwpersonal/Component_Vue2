<style scoped>
.switch-box {
  transition: .5s all ease;
  position: relative;
  padding: 1px;
  background: rgba(40,164,186,1);
}
.switch-bk {
  position: absolute;
  background: #fff;
}
.switch-btn {
  position: absolute;
  transition: .5s all ease;
  border-radius: 50%;
  box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.15);
  background: #fff;
}
/* 背景动画 */
.switchBK-enter-active, .switchBK-leave-active {
  transition: transform .5s
}
.switchBK-enter, .switchBK-leave-to {
  transform: scale(0);
}
</style>

<template>
  <section
  class="switch-box"
  :style="switchBoxSty"
  @click="disabled ? null :_tapSwitch(value)">

    <!-- 背景 -->
    <transition name="switchBK">
      <div 
      v-if="value !== this.selectedVal"
      class="switch-bk"
      :style="[switchBoxSty, {background: '#fff'}]"></div>
    </transition>
    
    <!-- 滑块按钮 -->
    <div 
    class="switch-btn"
    :style="switchBtnPosit">
      <!-- 禁用时显示加载动画 -->
      <svg class="loading" 
      v-if="disabled"
      style="transform: scale(0.7)"
      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" :width="size" :height="size" :fill="selectedColor">
        <circle cx="16" cy="3" r="0">
          <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
        </circle>
        <circle transform="rotate(45 16 16)" cx="16" cy="3" r="0">
          <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.125s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
        </circle>
        <circle transform="rotate(90 16 16)" cx="16" cy="3" r="0">
          <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.25s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
        </circle>
        <circle transform="rotate(135 16 16)" cx="16" cy="3" r="0">
          <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.375s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
        </circle>
        <circle transform="rotate(180 16 16)" cx="16" cy="3" r="0">
          <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
        </circle>
        <circle transform="rotate(225 16 16)" cx="16" cy="3" r="0">
          <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.625s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
        </circle>
        <circle transform="rotate(270 16 16)" cx="16" cy="3" r="0">
          <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.75s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
        </circle>
        <circle transform="rotate(315 16 16)" cx="16" cy="3" r="0">
          <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.875s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
        </circle>
        <circle transform="rotate(180 16 16)" cx="16" cy="3" r="0">
          <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
        </circle>
      </svg>
    </div>
    <!-- 数据绑定 -->
    <input 
    ref="input"
    :value="value" 
    @input="_changeValue" 
    style="display: none;"/>
  </section>
</template>

<script>
export default {
  name: 'module',
  data () {
    return {
    }
  },
  filters: {
  },
  props: {
    disabled: {
      // 是否禁用，显示loading等待动画
      type: Boolean,
      default: false
    },
    value: {
      // 绑定的值
      type: [Number, String, Boolean],
      default: true
    },
    size: {
      // 组件尺寸
      type: Number,
      default: 20
    },
    selectedVal: {
      // 选择后的值
      type: [Number, String, Boolean],
      default: true
    },
    unSelectedVal: {
      // 未选中的值
      type: [Number, String, Boolean],
      default: false
    },
    selectedColor: {
      // 选择后的背景颜色
      type: String,
      default: 'rgba(40,164,186,1)'
    },
    unSelectedColor: {
      // 未选择后的背景颜色
      type: String,
      default: 'rgba(188,188,188,0.6)'
    }
  },
  methods: {
    _tapSwitch(value) {
      // 点击开始changeStart事件，返回开始时的状态
      const unValue = value === this.selectedVal ? value = this.unSelectedVal : value = this.selectedVal

      this.$emit('changeStart', value)
      this._changeValue(unValue)
    },
    _changeValue(value) {
      // 点击结束changeEnd事件，返回点击后的状态
      this.$emit('input', value)
      this.$emit('changeEnd', value)
    }
  },
  computed: {
    switchBoxSty() {
      // 滑块整体样式
      return {
        width: 2 * this.size + 'px',
        height: this.size + 'px',
        borderRadius: this.size / 2 + 'px',
        background: this.value === this.selectedVal ? this.selectedColor : this.unSelectedColor
      }
    },
    switchBtnPosit() {
      // 滑块按钮的位置样式
      const translateX = this.value === this.selectedVal ? "100%" : "0"

      return {
        width: this.size + 'px',
        height: this.size + 'px',
        transform: 'translate(' + translateX + ', 0)'
      }
    }
  }
}
</script>

