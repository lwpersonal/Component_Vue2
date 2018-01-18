<style scoped>
.modal-box {
  position: fixed;
  z-index: 99999;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.modal-float_box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgb(0,0,0);
}
.modal-content_box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

/* 整个模态的消失方式，淡入淡出 */
.modal-enter-active, .modal-leave-active {
  transition: opacity .5s
}
.modal-enter, .modal-leave-to {
  opacity: 0
}

/* 模态窗中的内容的出入方式 */
.opacity-enter-active, .opacity-leave-active {
  transition: opacity .5s
}
.opacity-enter, .opacity-leave-to {
  opacity: 0
}

.up-enter-active, .up-leave-active {
  transition: all .5s
}
.up-enter, .up-leave-to {
  transform: translateY(-100%) translateZ(0);
  opacity: 0
}

.down-enter-active, .down-leave-active {
  transition: all .5s
}
.down-enter, .down-leave-to {
  transform: translateY(100%) translateZ(0);
  opacity: 0
}

.scale-enter-active, .scale-leave-active {
  transition: all .5s
}
.scale-enter, .scale-leave-to {
  transform: scale(0.5) translateZ(0);
  opacity: 0
}
</style>

<template>
  <transition name="modal">
    <section
    v-show="modalSta"
    class="modal-box" >
      <!-- 黑色浮层 -->
      <div class="modal-float_box"
      :style="{opacity: bkOpacity}"
      @click.stop="floatHide ? _hide() : null"></div>
      <transition :name="animated">
        <div 
        @click.stop.self="floatHide ? _hide() : null"
        v-show="modalSta"
        class="modal-content_box">
          <slot v-show="modalSta"/>
        </div>
      </transition>
    </section>
  </transition>
  
</template>


<script>
export default {
  name: 'modal',
  data () {
    return {
      modalSta: false, // 隐藏还是显示
    }
  },
  filters: {
  },
  props: {
    bkOpacity: {
      // 模态窗的背景色透明度
      type: Number,
      default: 0.5
    },
    floatHide: {
      // 是否可以点击非内容区域关闭模态窗
      type: Boolean,
      default: true
    },
    animated: {
      // 内容的隐藏动画类型，支持上滑出（up），下滑出（down），缩小（scale），淡出（opacity）
      type: String,
      default: 'scale'
    }
  },
  created () {
    // document.body.style.overflow = 'hidden'
  },
  destroyed () {
  },
  watch: {
    modalSta(newVal) {
      newVal ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'
    }
  },
  computed: {
  },
  methods: {
    _show() {
      this.modalSta = true
    },
    _hide() {
      this.modalSta = false
    }
  }
}
</script>

