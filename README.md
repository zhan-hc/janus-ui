# JANUS-UI

一个轻量级UI框架

[组件文档](http://ui.janus-c.top/)

# 安装

```shell
# 选择一个你喜欢的包管理器

# NPM
npm install element-plus --save

# Yarn
yarn add element-plus

# pnpm
pnpm install element-plus
```

## 使用

### 完整引入​

如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。

```js
// main.ts
import { createApp } from 'vue'
import  JanusUi from 'janus-ui'
import 'janus-ui/theme-chalk/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(janus-ui)
app.mount('#app')
```

### 手动导入

```js
<template>
   <ja-switch v-model="status"></ja-switch>
</template>
<script setup>
  import { JaSwitch } from 'janus-ui'

  const status = ref(false)
  
</script>
```
