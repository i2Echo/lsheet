<template>
  <div class="tree">
    <div class="label" :style="indent">
      <i v-if="children" :class="['fa', 'fa-' + (isExpanded ? 'minus':'plus') + '-square-o']" @click="()=>isExpanded = !isExpanded"></i>
      {{text}}
    </div>
    <tree
      v-if="isExpanded"
      v-for="(child, index) in children"
      :key="index"
      :children="child.children"
      :text="child.text"
      :depth="depth+1"
    ></tree>
  </div>
</template>
<script>
export default {
  name: 'tree',
  props: {
    text: String,
    children: Array,
    depth: Number
  },
  data: () => ({
    isExpanded: true
  }),
  computed: {
    indent() {
      return { transform: `translate(${this.depth * 20}px)` }
    }
  }
}
</script>

<style lang="scss" scoped>
.tree {
  text-align: left;
}
</style>
