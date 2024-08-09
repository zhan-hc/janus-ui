<script setup lang="ts">
  import { JaAnchor, JaAnchorLink } from '@janus-ui/components'
</script>

# Anchor - 锚点

## 基础用法

  <ja-anchor container="#VPContent">
    <ja-anchor-link href="#基础用法" title="基础用法"></ja-anchor-link>
    <ja-anchor-link href="#水平模式" title="水平模式"></ja-anchor-link>
  </ja-anchor>

  ```
  <ja-anchor>
    <ja-anchor-link href="#基础用法" title="基础用法"></ja-anchor-link>
    <ja-anchor-link href="#水平模式" title="水平模式"></ja-anchor-link>
  </ja-anchor>
  ```

  ## 水平模式

  <ja-anchor container="#VPContent" direction="horizontal">
    <ja-anchor-link href="#基础用法" title="基础用法"></ja-anchor-link>
    <ja-anchor-link href="#水平模式" title="水平模式"></ja-anchor-link>
  </ja-anchor>

  ```
  <ja-anchor direction="horizontal">
    <ja-anchor-link href="#基础用法" title="基础用法"></ja-anchor-link>
    <ja-anchor-link href="#水平模式" title="水平模式"></ja-anchor-link>
  </ja-anchor>
  ```

## Anchor API​
### Anchor Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| container | 绑定锚点组件的容器元素 | `string` / `HTMLElement` / `Window ` | - | - |
| direction | 锚点组件的显示模式 | string | horizontal / vertical | vertical |
| duration  | 滚动到指定锚点时，动画过渡时间 | number | - | 300 |

### Anchor Events
| 事件名 | 说明 | 类型 |
| --- | --- | --- |
| change | 锚点切换时触发 | `(href: string) => void` |
| click | 点击锚点时触发 | `(e: MouseEvent, href?: string) => void` |
  
### Anchor Methods
| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| scrollTo | 滚动到指定锚点 | `(href: string) => void` |
