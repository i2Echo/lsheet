<template>
  <div class="ls-textbox ls-row">
    <label :title="fieldData.displayText" for="" class="ls-textbox-label col-xs-12 col-sm-4"> {{ fieldData.displayText +': ' + fieldData.value }} </label>
    <div class="ls-textbox-input col-xs-12 col-sm-8">
      <input type="text" class="ls-textbox-input__inner" v-model="fieldData.value">
    </div>
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
  $label-height: 42px;
  $input-height: 32px;
  @mixin ls-height($height) {
    height: $height;
    line-height: $height;
  }
  .ls-textbox {

    &-label {
      text-align: left;
      background-color: #f5f5f5;

      @media (min-width: 576px){
        max-width: 200px;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
      }
      
      border: 1px solid #ccc;
      border-top: none;
      border-right: none;

      @include ls-height($label-height);
    }

    &-input {
      position: relative;
      font-size: 14px;
      padding: 5px 15px;
      border: 1px solid #ccc;
      border-top: none;
      border-right: none;
      height: $label-height;
      &__inner {
        background-color: #fff;
        background-image: none;
        border-radius: 2px;
        border: 1px solid #dcdfe6;
        box-sizing: border-box;
        color: #606266;
        display: inline-block;
        @include ls-height($input-height);
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
  }
</style>

