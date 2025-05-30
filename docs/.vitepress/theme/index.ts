// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import 'janus-ui/theme-chalk/index.css'
import 'janus-ui/theme-chalk/reset.css'
import 'janus-ui/theme-chalk/hover.css'
import 'janus-ui/theme-chalk/dark/css-vars.css'
import JaunsUI from 'janus-ui'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.use(JaunsUI)
    // ...
  }
} satisfies Theme
