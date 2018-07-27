import Vue from 'vue'
import App from './App.vue'

import Lsheet from './lib/index.js'

Vue.use(Lsheet)

new Vue({
  el: '#app',
  render: h => h(App)
})
