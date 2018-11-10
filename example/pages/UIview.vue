<template>
  <div id="uidesigner">
    <Lsheet :sheetdataurl="sheetDataUrl" :iseditmode="false"></Lsheet>
  </div>
</template>

<script>

export default {
  name: 'UIdesigner',
  props: {
    detail: Object
  },
  data () {
    return {
      sheetDataUrl: '../src/schema/schema.json',
      sheetFieldsUrl: '../src/schema/sheetFields.json',
      // sheetFieldsUrl: '',
    }
  }
}
</script>

<style lang="scss">

</style>
