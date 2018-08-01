<template>
  <div class="ls-row grid-border">
    <div v-for="(size, index) in cols" :class="['col-md-'+size, 'col-xs-12']" :key="index" :tabindex="index">
      <u-control v-if="colsData" :obj="colsData[index]"></u-control>
    </div>
  </div>
</template>
<script>
import uControl from './uControl.vue'

export default {
  name: 'gridRow',
  components: {
    uControl
  },
  props: {
    cols: {
      type: Array,
      default: () => ([
        2,4,2,4
      ])
    },
    colsData: {
      type: Array
    }
  }
}
</script>
<style lang="scss" scoped>
  .grid-border > div {
    padding: 0;
    margin: 0;
  }
</style>
