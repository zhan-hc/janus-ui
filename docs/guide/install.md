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

## nuxt 使用

```shell
# NPM
npm install janus-ui-nuxt --save

# Yarn
yarn add janus-ui-nuxt

# pnpm
pnpm install janus-ui-nuxt
```

在nuxt.config.js文件中配置，janus-ui-nuxt会默认全局引入组件和样式

```js
modules: ['janus-ui-nuxt']
```

