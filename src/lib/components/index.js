import sheetTextbox from './sheetTextbox/index.js'

const components = [
  sheetTextbox,
]

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

const install = function(Vue, opts={}) {
  components.map( component => {
    Vue.component(component.name, component)
  })
}

export { 
  install,
  
  sheetTextbox,
}

// export default install