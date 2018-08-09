<template>
    <div class="ls-time" :id="fieldData.uid" data-type="sheetfield">
      <el-date-picker
        v-model="fieldData.value"
        type="date"
        placeholder="选择日期">
      </el-date-picker>
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
  }
}
</script>

<style lang="scss">

  .ls-time {
    position: relative;
    font-size: 14px;
    padding: 3px 15px;
    height: 42px;

    .el-input {
      
      width: 100%;
      max-width: 220px;

      &__inner {
        height: 36px;
      }
      i {
        line-height: 36px;
      }
    }
  }
</style>

