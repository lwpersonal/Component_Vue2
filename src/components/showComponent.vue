
<style scoped>

</style>

<template>
  <section class="wrap">
    <my-switch 
    v-model="val" 
    :disabled="disable"
    selectedVal="yes"
    unSelectedVal="no"
    @changeStart="ch"
    @changeEnd="change"/>
  </section>
</template>

<script>
import Switch from '../packages/switch/switch'
export default {
  name: 'module',
  data () {
    return {
      val: false,
      disable: false,
    }
  },
  components: {
    'my-switch': Switch
  },
  methods: {
    ch(val) {
      this.disable = true
      console.log(val)
    },
    change(val) {
      console.log('this.val: ' + val)
      setTimeout(() => { this.disable = false }, 2000)
    }
  }
}
</script>

