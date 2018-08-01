import Vue from 'vue'
import App from './App.vue'

import Lsheet from '../src/index.js'

Vue.use(Lsheet)

new Vue({
  el: '#app',
  render: h => h(App)
})
