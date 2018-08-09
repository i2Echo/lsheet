<template>
    <div class="ls-richTextBox" :id="fieldData.uid" data-type="sheetfield">
      <tinymce :height="200" v-model="content"></tinymce>
    </div>
</template>

<script>
import tinymce from './tinymce.vue'

export default {
  name: 'SheetRichTextBox',
  components: {
    'tinymce': tinymce
  },
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
  },
  data () {
    return {
      content: this.fieldData.value || '请输内容...'
    }
  }
}
</script>

<style lang="scss">

  .ls-richTextBox {
    position: relative;
    font-size: 14px;
    padding: 3px 15px;
    // min-height: 360px;
  }
</style>
