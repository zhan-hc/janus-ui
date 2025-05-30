<script setup lang="ts">
  import { JaNavLinks } from 'janus-ui'

  const links = [
    {
      text: '导航栏',
      link: '/api/navBar.html'
    },
    {
      text: '导航链接',
      link: '/api/navLinks.html'
    }
  ]
</script>

# NavLink - 导航链接

## 基础用法

默认会通过路由 `pathname` 值的去匹配参数里的 `link` ，如果命中了则是 `active` 状态

<ja-nav-links :data="links"></ja-nav-links>

  ```
  const links = [
    {
      text: '导航栏',
      link: '/api/nav-bar.html'
    },
    {
      text: '导航链接',
      link: '/api/navLinks.html'
    }
  ]
  <ja-nav-links :data="links"></ja-nav-links>
  ```


## NavLink API​
### NavLink Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| data | 标题 | `{text:string, link: string}`| - | - |