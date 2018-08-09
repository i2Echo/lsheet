<template>
    <div class="ls-timespan" :id="fieldData.uid" data-type="sheetfield">
      <el-date-picker
        v-model="fieldData.value"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期">
      </el-date-picker>
    </div>
</template>

<script>
import '../mixins/datepick.js'

export default {
  name: 'SheetTimeSpan',
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

  .ls-timespan {
    position: relative;
    font-size: 14px;
    padding: 3px 15px;
    height: 42px;

    .el-input__inner {
      height: 36px;
      min-width: 240px;
      max-width: 350px;
      width: 100%;
      .el-range-input {
        width: 35%;
      }
      .el-range-separator {
        width: 10%;
        line-height: 28px;
      }
      i {
        line-height: 28px;
      }
    }
  }
</style>
