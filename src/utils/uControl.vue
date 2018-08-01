<script>
import components from '../../packages/index.js'

export default {
  name: 'uControl',
  components: components,
  render: function (createElement) {
    let that = this
    // console.log(that.obj)
    return createElement(that.obj.type, 
          {props: {fieldData: that.obj.fieldData}}
        )
  },
  props: {
    obj: {
      type: Object
    }
  }
}
</script>
