import sheetTextbox from './textbox.vue'

sheetTextbox.install = function (Vue){
    Vue.component(sheetTextbox.name, sheetTextbox)
}

export default sheetTextbox