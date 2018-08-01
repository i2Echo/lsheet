import sheetLabel from './sheetLabel/index.js'
import sheetTextbox from './sheetTextbox/index.js'

const components = [
  sheetTextbox,
  sheetLabel
]

const install = function(Vue) {
  if (install.installed) return;
  components.map(component => Vue.component(component.name, component));
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  sheetLabel,
  sheetTextbox
}