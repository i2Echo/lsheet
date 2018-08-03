
<template>
    <div :title="fieldData.displayText" tabindex="0" :id="fieldData.uid" data-type="sheetfield" class="ls-label">
      <!-- <label for=""> -->
        {{ fieldData.displayText }} 
      <!-- </label>  -->
    </div>
</template>

<script>
export default {
  name: 'sheetLabel',
  props: {
    fieldData: {
      type: Object,
      default: () => ({
        displayText: '姓名',
        fieldId: 'name',
        value: '',
        "uid": "uid_0"
      })
    }
  },
  
}
</script>

<style lang="scss">

  .ls-label {
    text-align: left;
    background-color: #f5f5f5;
    padding: 0 15px;
    min-width: 50px;
    word-wrap: break-word; 
    word-break:break-all;
    // @media (min-width: 576px){
    //   max-width: 200px;
    //   overflow: hidden;
    //   text-overflow:ellipsis;
    //   white-space: nowrap;
    // }

    // height: 42px;
    line-height: 42px;

    // > label {
    //   height: 36px;
    //   line-height: 36px;
    //   display: block;
    // }
  }
</style>

