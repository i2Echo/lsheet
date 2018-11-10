import Vue from 'vue'
import App from './App.vue'

import elementui from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(elementui)
import Lsheet from '../src/index.js'

import UIdesigner from './pages/UIdesigner.vue'



Vue.use(Lsheet)

// new Vue({
//   el: '#app',
//   render: h => h(App)
// })

const NotFound = { template: '<p>Page not found</p>' }

const routes = {
  '/': App,
  '/designer': UIdesigner,
}

new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) }
})
