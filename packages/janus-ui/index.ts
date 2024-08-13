import { INSTALLED_KEY } from '@janus-ui/constants'
import * as components from '@janus-ui/components';
import '@janus-ui/theme-chalk/src/index.scss'

export * from '@janus-ui/components'

export default {
  install: (app) => {
    if (app[INSTALLED_KEY]) return
    app[INSTALLED_KEY] = true
    for (const c in components) {
      app.use(components[c])
    }
  }
}