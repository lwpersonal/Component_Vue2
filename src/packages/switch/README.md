
  ## 参数：

  
  | 参数 | 说明 | 默认值 | 类型 |
-|-|-|-
  value | 可以在外部绑定的值 | true | string,number,boolean
  disabled | 是否禁用，禁用状态可配置loading动画 | false | boolean
  loading | 是否在禁用时显示loading动画 | true | boolean
  size | 组件尺寸(px为单位, width: size * 2, height: size) | 20 | number
  selectedVal | 选择状态对应的值 | true | string,number,boolean
  unSelectedVal | 未选择状态对应的值 | false | string,number,boolean
  selectedColor | 选择状态对应的背景色 | #28a4ba | string
  unSelectedColor | 未选择状态对应的背景色 | #d0d1d2 | string

  ## 事件：

  | 事件名 | 描述 | 回调参数 |
  -|-|-
  | changeStart | 改变前的回调 | 初始状态的值 |
  | changeEnd | 改变后的回调 | 结束状态的值 |

  ## 用法：

  ```
  <template>
    <my-switch 
    v-model="val" 
    :disabled="disable"
    selectedVal="yes"
    unSelectedVal="no"
    @changeStart="changeStart"
    @changeEnd="changeEnd"/>
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
      changeStart(val) {
        this.disable = true
        console.log(val)
      },
      changeEnd(val) {
        console.log('this.val: ' + val)
        setTimeout(() => { this.disable = false }, 2000)
      }
    }
  }
  </script>

```
