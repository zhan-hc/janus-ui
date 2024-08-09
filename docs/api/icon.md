<script setup lang="ts">
  import { JaIcon } from '@janus-ui/components'
  import * as Icons from '@janus-c/icons-vue/dist/index'
  import { useClipboard } from "@vueuse/core"

  const { copy, isSupported } = useClipboard();
  const handleCopy = (icon) => {
  if (!isSupported) {
    window.$message.error("您的浏览器不支持Clipboard API");
    return;
  }

  copy(`<ja-icon><${icon.name} /></ja-icon>`)
  alert('复制成功')
}
</script>

<style>
ul, li {
  list-style: none;
}
.icon-list {
  display: flex;
  flex-wrap: wrap;
}
.icon-item {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 88px;
  height: 88px;
}
.icon-item:hover {
  cursor: pointer;
  background-color: #f2f6fc;
}
</style>

# Icon - 图标

## 安装

```
# NPM
npm install @janus-c/icons-vue
# Yarn
yarn add @janus-c/icons-vue
# pnpm
pnpm install @janus-c/icons-vue
```

## 基础用法
结合 `ja-icon` 使用，可以为svg图标提供额外的 `size/color` 属性

  <ja-icon size="32">
    <Arrow />
  </ja-icon>

  <ja-icon class="is-loading" size="32">
    <Loading />
  </ja-icon>

增加类名 `is-loading`，图标就可以有旋转效果
  ```
  <ja-icon :size="size" :color="color">
    <Arrow />
  </ja-icon>

  <ja-icon class="is-loading" :size="size" :color="color">
    <Loading />
  </ja-icon>

  ```

## 图标集合

<ul clss="icon-list">
  <li v-for="icon in Icons" class="icon-item" :key="icon.name" @click="handleCopy(icon)">
    <ja-icon size="32">
      <component :is="icon" />
    </ja-icon>
    <span>{{ icon.name }}</span>
  </li>
</ul>

## Icon API​
### Icon Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| size | 图标大小 | number / string | - | 继承字体大小 |
| color | svg 的 fill 颜色 | string | - | 继承颜色 |
