<template>
  <div id="app">
    <div class="app-wrapper">
      <table-info></table-info>
    </div>
  </div>
</template>

<script>
import tableInfo from './pages/tableInfo'

export default {
  name: 'app',
  components: {
    tableInfo
  },
  data () {
    return {

    }
  },
  created() {

  },
  methods: {

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

  .app-wrapper {
    width: 100%;
    height: 100vh;
    padding: 100px 15px;
  }
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
