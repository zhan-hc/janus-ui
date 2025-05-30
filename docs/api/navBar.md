<script setup lang="ts">
  import { JaNavBar } from 'janus-ui'
  import { Sun, Moon, Github, Juejin } from '@janus-c/icons-vue'

  const socialLinks = [
      { icon: Github, link: 'https://github.com/zhan-hc/janus-ui' },
      { icon: Juejin, link: 'https://github.com/zhan-hc/janus-ui' }
    ]
</script>

# NavBar - 顶部导航栏

## 基础用法

  <ja-nav-bar title="Janus UI" icon="http://oss.janus-c.top/logo/logo.svg" :socialLinks="socialLinks" :scrollHide="false">
    </ja-nav-bar>

  现在的顶部导航栏就是 `NavBar` 组件实现的

  ```
  <ja-nav-bar title="Janus UI" icon="http://oss.janus-c.top/logo/logo.svg" :socialLinks="socialLinks" :scrollHide="false">
    </ja-nav-bar>
  ```


## NavBar API​
### NavBar Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| title | 标题 | string| - | - |
| icon | 图标 | string | - | - |
| socialLinks  | 右边的icon链接列表 | NavLinkType | - | [] |
| scrollHide  | 滚动默认隐藏导航栏 | Boolean | - | true |

### NavBar NavLinkType
| 属性 | 说明 | 类型 |
| --- | --- | --- |
| icon | 图标 | Component |
| link | 链接 | string |
| event | 点击事件 | Function |
  
### NavBar slot
| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| icon | 图标插槽 |  |
| left | 左边区域插槽 |  |
| right | 右边区域插槽 |  |