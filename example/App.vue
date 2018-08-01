<template>
  <div id="app">
    <Lsheet :sheetData="sheetData" :isEditMode="true"></Lsheet>
  </div>
</template>

<script>
const axios = require('axios')

export default {
  name: 'app',
  data () {
    return {
      sheetData: null
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData: function () {
      const that = this
      axios.get('../src/schema/schema.json')
        .then(function (response) {
          // handle success
          console.log(response)
          let data = response.data
          that.sheetData = typeof data === 'string' ? JSON.parse(data) : data
        })
        .catch(function (error) {
          // handle error
          console.error(error)
        })
    }
  }
}
</script>

<style lang="scss">
#app {
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
