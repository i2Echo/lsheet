<script>
import sheetTextbox from '../components/sheetTextbox/index.js'
import Vue from 'vue'

Vue.use(sheetTextbox)
export default {
  name: 'uControl',
  render: function (createElement) {
    let that = this
    console.log(that.obj)
    return createElement(
      'div',
      [createElement(that.obj.type, 
          {props: {fieldData: that.obj.data}}
        )
      ]
    )
  },
  props: {
    obj: {
      type: Object
    }
  }
}
</script>
