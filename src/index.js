import Lsheet from './Lsheet.vue'

const lsheet = {}

lsheet.install = function (Vue){
    Vue.component(Lsheet.name, Lsheet)
}

lsheet.component = Lsheet

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(lsheet);
}

export default lsheet