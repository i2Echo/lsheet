<template>
    <div class="ls-textbox" :id="fieldData.uid" data-type="sheetfield">
      <input type="text" class="ls-textbox-input" v-model="fieldData.value">
    </div>
</template>

<script>
export default {
  name: 'sheetTextbox',
  props: {
    fieldData: {
      type: Object,
      default: () => ({
        displayText: '姓名',
        fieldId: 'name',
        value: ''
      })
    }
  }
}
</script>

<style lang="scss">

  .ls-textbox {
    position: relative;
    font-size: 14px;
    padding: 3px 15px;
    height: 42px;
    &-input {
      background-color: #fff;
      background-image: none;
      border-radius: 2px;
      border: 1px solid #dcdfe6;
      box-sizing: border-box;
      color: #606266;
      display: inline-block;
      height: 36px;
      line-height: 36px;
      font-size: inherit;
      outline: none;
      padding: 0 15px;
      transition: border-color .2s cubic-bezier(.645,.045,.355,1);
      width: 100%;

      &:focus {
        outline: none;
        border-color: #409eff;
      }
    }
  }
</style>

