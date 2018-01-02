
<style scoped>
.wrap {
  width: 50%;
  height: 1000px;
  min-width: 600px;
  margin: 0 auto;
  font-size: 14px;
}
.box-sty {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0 0 0;
  padding: 10px;
  border-radius: 3px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
}
.title {
  font-size: 16px;
}
.btn {
  position: relative;
  cursor: pointer;
  padding: 3px 10px;
  border-radius: 5px;
  background: rgba(40,164,186,0.1);
}
.btn::after {
  position: absolute;
  content: '';
  top: -50%;
  bottom: -50%;
  left: -50%;
  right: -50%;
  -webkit-transform: scale(0.5);
  transform: scale(0.5);
  border-radius: 10px;
  border: 1px solid rgba(40,164,186,0.5);
}

/* modal */
.modal-content_sty {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  padding: 10px;
  background: #fff;
}

</style>

<template>
  <section class="wrap">
    
    <!-- Modal -->
    <section class="box-sty">
      <p class="title">modal组件</p>
      <p class="btn" @click="showModal">显示模态窗</p>
    </section>
    <!-- Modal-component -->
    <lw-modal
    ref="modal" >
      <div class="modal-content_sty" >
        <p>ssss</p>
      </div>
    </lw-modal>

    <!-- Switch -->
    <section class="box-sty">
      <p class="title">switch组件</p>
      <lw-switch 
      v-model="val" 
      :disabled="disable"
      selectedVal="yes"
      unSelectedVal="no"
      :size="25"
      @changeStart="changeStart"
      @changeEnd="changeEnd"/>
    </section>

  </section>
</template>

<script>

import Switch from '../packages/switch/switch'
import Modal from '../packages/modal/modal'

export default {
  name: 'module',
  data () {
    return {
      // Switch
      val: false,
      disable: false,
    }
  },
  components: {
    'lw-switch': Switch,
    'lw-modal': Modal
  },
  methods: {
    // Modal
    showModal() {
      this.$refs.modal._show()
    },
    // Switch
    changeStart(val) {
      this.disable = true
      console.log('switchStart:' + val)
    },
    changeEnd(val) {
      console.log('switchEnd:' + val)
      setTimeout(() => { this.disable = false }, 2000)
    }
  }
}
</script>

