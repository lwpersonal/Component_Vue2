
  ## 参数：

  
  | 参数 | 说明 | 默认值 | 类型 |
-|-|-|-
  value | 可以在外部绑定的值 | true | string,number,boolean
  disabled | 是否禁用，禁用状态会有loading动画 | false | boolean
  size | 组件尺寸(px为单位) | 20 | number
  selectedVal | 选择状态对应的值 | true | string,number,boolean
  unSelectedVal | 未选择状态对应的值 | false | string,number,boolean
  selectedColor | 选择状态对应的背景色 | rgba(40,164,186,1) | string
  unSelectedColor | 未选择状态对应的背景色 | rgba(188,188,188,0.6) | string

  ## 事件：

  | 事件名 | 描述 | 回调参数 |
  -|-|-
  | changeStart | 改变前的回调 | 初始状态的值 |
  | changeEnd | 改变后的回调 | 结束状态的值 |
