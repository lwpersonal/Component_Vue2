
  ## 参数：

  
  | 参数 | 说明 | 默认值 | 类型 | 可用的值
-|-|-|-|-
  bkOpacity | 模态窗的背景色透明度 | 0.5 | number | -
  floatHide | 是否可以点击非内容区域关闭模态窗 | true | boolean | -
  animated | 内容的隐藏动画类型 | scale | string | up,down,scale,opacity

  ## 内置方法：

  | 方法名 | 描述 |
  -|-
  | _show | 显示模态 | 
  | _hide | 隐藏模态 | 

  ## 用法：
  ```
  <template>
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
  </template>

  <script>
  import Modal from '../packages/modal/modal'
  export default {
    name: 'module',
    data () {
      return {
      }
    },
    components: {
      'lw-modal': Modal
    },
    methods: {
      // Modal
      showModal() {
        this.$refs.modal._show()
      },
    }
  }
  </script>