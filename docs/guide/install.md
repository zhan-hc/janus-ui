# 安装

```shell
# 选择一个你喜欢的包管理器

# NPM
npm install janus-ui --save

# Yarn
yarn add janus-ui

# pnpm
pnpm install janus-ui
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

## 自动导入
首先你需要安装unplugin-vue-components 和 unplugin-auto-import这两款插件

```shell
npm install -D unplugin-vue-components unplugin-auto-import
```

Vite

```js
// vite.config.ts
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { JanusResolver } from 'janus-ui/lib/utils/vite'

export default defineConfig({
  // ...
  plugins: [
    // ...
    AutoImport({
      resolvers: [JanusResolver()],
    }),
    Components({
      resolvers: [JanusResolver()],
    }),
  ],
})
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

