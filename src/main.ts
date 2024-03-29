import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
import Buefy from 'buefy'

import App from './App.vue'
import router from './router'
import { pinia } from './store'
import { i18n } from '@/i18n'
import '@/styles/index.scss'

Vue.config.productionTip = false

Vue.use(VueCompositionAPI)
Vue.use(Buefy)

const requireComponent = require.context(
  // Look for files in the current directory
  '.',
  // Do not look in subdirectories
  false,
  // Only include "_base-" prefixed .vue files
  /_base-[\w-]+\.vue$/
)

// For each matching file name...
requireComponent.keys().forEach((fileName) => {
  // Get the component config
  const componentConfig = requireComponent(fileName)
  // Get the PascalCase version of the component name
  const componentName = fileName
    // Remove the "./_" from the beginning
    .replace(/^\.\/_/, '')
    // Remove the file extension from the end
    .replace(/\.\w+$/, '')
    // Split up kebabs
    .split('-')
    // Upper case
    .map((kebab) => kebab.charAt(0).toUpperCase() + kebab.slice(1))
    // Concatenated
    .join('')

  // Globally register the component
  Vue.component(componentName, componentConfig.default || componentConfig)
})

new Vue({
  i18n,
  router,
  pinia,
  render: h => h(App)
}).$mount('#app')
