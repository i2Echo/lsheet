<template>
  <div class="ls-row">
    <div v-for="(size, index) in cols" :class="['col-md-'+size, 'col-xs-12']" :key="index"></div>
  </div>
</template>
<script>
export default {
  name: 'gridRow',
  props: {
    cols: {
      type: Array,
      default: [
        2,4,2,4
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
  .ls-row {
    // min-height: 36px;

    & > div {
      border: 1px dashed #ccc;
      min-height: 36px;
    }
  }
</style>
