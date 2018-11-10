<script>
import components from '../../packages/index.js'
import mixin from './mixins.js'

export default {
  name: 'uControl',
  componentName: 'uControl',
  components: components,
  render: function (createElement) {
    let that = this
    // console.log(that.obj)
    return createElement(that.obj.type, {props: {fieldData: that.obj.fieldData}})
  },
  props: {
    obj: {
      type: Object
    }
  },
  mixins: [mixin],
  mounted: function () {
    // console.log(this.$children)
    
  },
  methods: {
    getData: function () {
      
      if (this.obj.type == 'SheetLabel') return
      console.log('getdata======run=======')
      let childData = this.$children[0]
      let controlData = {}
      controlData[childData.fieldData.fieldId] = childData.fieldData.value
      this.dispatch('Lsheet', 'getSheetAllValue', controlData)
    }
  },

  created () {
    this.$on('getData', this.getData)
  }
}
</script>
