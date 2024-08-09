import { INSTALLED_KEY } from '@janus-ui/constants'
import type { App } from '@vue/runtime-core'
import * as components from './index';
import '@janus-ui/theme-chalk/dist/index.css'

export * from './anchor'
export * from './card'
export * from './icon'
export * from './switch'

export default {
  install: (app: App) => {
    if (app[INSTALLED_KEY]) return
    app[INSTALLED_KEY] = true
    for (const c in components) {
      app.use(components[c])
    }
  }
}