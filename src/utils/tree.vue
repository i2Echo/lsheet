<template>
  <div class="tree-li">
    <div :class="['label', children ? '':'leaf-node']" :style="indent">
      <i v-if="children" :class="['fa', 'fa-' + (isExpanded ? 'minus':'plus') + '-square-o']" @click="()=>isExpanded = !isExpanded"></i>
      <span class="fieldLabel" :field="fieldcode" > {{text}} </span>
    </div>
    <tree
      v-if="isExpanded"
      v-for="(child, index) in children"
      :key="index"
      :children="child.children"
      :text="child.text"
      :fieldcode="child.code"
      :depth="depth+1"
    ></tree>
  </div>
</template>
<script>
export default {
  name: 'tree',
  props: {
    text: String,
    fieldcode: String,
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
.tree-li {
  text-align: left;

  .label {
    padding: 5px 8px;
    width: 120px;
    font-size: 16px;

    &::before {
      content: "";
      position: absolute;
      left: -6px;
      top: -8px;
      height: 100%;
      width: 1px;
      border-width: 1px;
      border-left: 1px dashed #999;
      
    }
    &::after {
      content: "";
      position: absolute;
      left: -6px;
      top: 13px;
      height: 20px;
      width: 13px;
      border-width: 1px;
      border-top: 1px dashed #999;
    }
    i {
      cursor: pointer;
    }
    .fieldLabel {
      cursor: move;
    }
  }
  &>.tree-li:last-child .label::before{
    height: 22px;
  }
}

</style>
