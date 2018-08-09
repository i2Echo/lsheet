import SheetLabel from './SheetLabel/index.js'
import SheetTextBox from './SheetTextBox/index.js'
import SheetTextarea from './SheetTextarea/index.js'
import SheetRichTextBox from './SheetRichTextBox/index.js'
import SheetTime from './SheetTime/index.js'
import SheetTimeSpan from './SheetTimeSpan/index.js'

const components = [
  SheetTextBox,
  SheetLabel,
  SheetRichTextBox,
  SheetTextarea,
  SheetTime,
  SheetTimeSpan
]

const install = function (Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  SheetLabel,
  SheetTextBox,
  SheetTextarea,
  SheetTime,
  SheetTimeSpan,
  SheetRichTextBox
}
