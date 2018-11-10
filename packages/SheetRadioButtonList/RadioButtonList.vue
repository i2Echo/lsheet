<template>
    <div class="ls-checkbox-list" :id="fieldData.uid" data-type="sheetfield">
      <el-checkbox-group v-model="checkedCities">
        <el-checkbox v-for="item in options" :label="item" :key="item">{{item}}</el-checkbox>
      </el-checkbox-group>
    </div>
</template>

<script>
import '../mixins/datepick.js'

export default {
  name: 'SheetTime',
  props: {
    fieldData: {
      type: Object,
      default: () => ({
        displayText: '日期',
        fieldId: 'name',
        value: ''
      })
    }
  },
  data: () => ({
    options: ['item1', 'item2', 'item3'],
    checkedList: ['item1', 'item3']
  }),
  methods: {
    // handleCheckAllChange(val) {
    //   this.checkedList = val ? options : []
    // },
    // handleCheckedCitiesChange(value) {
    //   let checkedCount = value.length
    //   this.checkAll = checkedCount === this.cities.length
    //   this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length
    // }
  }
}
</script>

<style lang="scss">

  .ls-checkbox-list {
    position: relative;
    font-size: 14px;
    padding: 3px 15px;
    height: 42px;


  }
</style>
