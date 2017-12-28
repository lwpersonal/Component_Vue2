
  ## 描述

  > 使用slot插槽插入自定义的内容模板

  > 唤起和关闭modal模态窗需要调用模态组件的引用(ref)，使用内置方法操作
  
  > 支持up(向上滑入滑出),down(向下滑入滑出),scale(放大缩小),opacity(淡入淡出)等入场动画
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