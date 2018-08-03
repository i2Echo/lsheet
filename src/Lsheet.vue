<template>
  <div class="l-sheet" v-if="sheetData">
    <!-- edit mode -->
    <editable-grid v-if="editMode" :sheetFields="sheetFields" :sheetDisplayName="sheetData.sheetDisplayName" :gridLayout="sheetData.gridLayout" :blockDatas="sheetData.blocks"></editable-grid>
    
    <!-- render mode -->
    <div v-else class="ls-content">
      <div class="ls-content-title"> {{sheetData.sheetDisplayName}} </div>
      <div class="ls-content-body">
        <div class="content-block ls-container-fluid" v-for="(block, index) in sheetData.gridLayout" :key="index">
            <div class="content-block-header ls-row">
              <div class="content-block-header__title"><i :class="['fa', 'fa-angle-'+ (sheetData.blocks[index].isExpanded ? 'right' : 'down')]" @click="expanded(sheetData.blocks[index])"></i>{{ sheetData.blocks[index].blockName }}</div>
              <div class="content-block-action"></div>
            </div>
            <div v-show="sheetData.blocks[index].isExpanded">
              <grid-row v-for="(row, rowIndex) in block" :key="rowIndex" :cols="row" :colsData="sheetData.blocks[index].controls[rowIndex]">
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
    sheetData: {
      type: Object,
      default: null
    },
    sheetFields: {
      type: Object,
      default: null
    },
    isEditMode: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
     editMode: false
  }),
  mounted(){
    this.editMode = this.isEditMode
    
    
  },
  methods: {
    changeMode: function () {
      this.editMode= !this.editMode
    },

    expanded: function (block) {
      let isExpanded = block.isExpanded
      block.isExpanded = !isExpanded
    },

  }
}
</script>

<style lang="scss">

</style>
