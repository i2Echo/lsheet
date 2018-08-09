<template>
  <div class="l-sheet" v-if="sheetdata">
    <!-- edit mode -->
    <editable-grid v-if="editMode" :sheetFields="sheetfields" :sheetDisplayName="sheetdata.sheetDisplayName" :gridLayout="sheetdata.gridLayout" :blockDatas="sheetdata.blocks"></editable-grid>

    <!-- render mode -->
    <div v-else class="ls-content">
      <div class="ls-content-title"> {{sheetdata.sheetDisplayName}} </div>
      <div class="ls-content-body">
        <div class="content-block ls-container-fluid" v-for="(block, index) in sheetdata.gridLayout" :key="index">
            <div class="content-block-header ls-row">
              <div class="content-block-header__title"><i :class="['fa', 'fa-angle-'+ (sheetdata.blocks[index].isExpanded ? 'right' : 'down')]" @click="expanded(sheetdata.blocks[index])"></i>{{ sheetdata.blocks[index].blockName }}</div>
              <div class="content-block-action"></div>
            </div>
            <div v-show="sheetdata.blocks[index].isExpanded">
              <grid-row v-for="(row, rowIndex) in block" :key="rowIndex" :cols="row" :colsData="sheetdata.blocks[index].controls[rowIndex]">
              </grid-row>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

// import '../assets/css/font-awesome.min.css'
import './style/_grid.scss'
import './style/Lsheet.scss'

import gridRow from './utils/gridRow.vue'

import editableGrid from './utils/editableGrid.vue'

export default {
  name: 'Lsheet',
  components: {
    gridRow,
    editableGrid
  },
  props: {
    sheetdata: {
      type: Object,
      default: null
    },
    sheetfields: {
      type: Object,
      default: null
    },
    iseditmode: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
    editMode: false
  }),
  created () {
    console.log('lsheet init')
  },
  mounted () {
    this.editMode = this.iseditmode
  },
  methods: {
    // changeMode: function () {
    //   this.editMode= !this.editMode
    // },

    expanded: function (block) {
      let isExpanded = block.isExpanded
      block.isExpanded = !isExpanded
    }

  }
}
</script>

<style lang="scss">

</style>
