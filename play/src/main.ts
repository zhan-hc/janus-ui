import { createApp } from 'vue'
import App from './App.vue'
// import JaunsUi from 'janus-ui'
import '../../packages/janus-ui/theme-chalk/index.css'
import '../../packages/janus-ui/theme-chalk/themes/blue.css'
// import '@janus-ui/theme-chalk/src/nav-links.scss'
// import '@janus-ui/theme-chalk/src/nav-bar.scss'
import JaunsUi from '../../packages/janus-ui'
createApp(App).use(JaunsUi).mount('#app')
// createApp(App).mount('#app')
