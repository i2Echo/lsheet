<template>
  <div id="uidesigner">
    <Lsheet :sheetdataurl="sheetDataUrl" :sheetfieldsurl="sheetFieldsUrl" :iseditmode="true"></Lsheet>
  </div>
</template>

<script>

export default {
  name: 'UIdesigner',
  data () {
    return {
      sheetDataUrl: '../src/schema/schemaa.json',
      sheetFieldsUrl: '../src/schema/sheetFields.json',
      // sheetFieldsUrl: '',
    }
  }
}
</script>

<style lang="scss">
#uidesigner {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
  width: 100%;
  height: 100vh;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: #42b983;
}
html, body{
  margin: 0;
  padding: 0;
}
</style>
