<template>
    <div class="ls-textarea" :id="fieldData.uid" data-type="sheetfield">
      <textarea type="text" class="ls-textarea-input" v-model="fieldData.value"></textarea>
    </div>
</template>

<script>
export default {
  name: 'SheetTextarea',
  props: {
    fieldData: {
      type: Object,
      default: () => ({
        displayText: '姓名',
        fieldId: 'name',
        value: '',
        uid: ''
      })
    }
  }
}
</script>

<style lang="scss">

  .ls-textarea {
    position: relative;
    font-size: 14px;
    padding: 3px 15px;
    height: 100px;
    &-input {
      background-color: #fff;
      background-image: none;
      border-radius: 2px;
      border: 1px solid #dcdfe6;
      box-sizing: border-box;
      color: #606266;
      display: inline-block;
      height: 94px;
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
