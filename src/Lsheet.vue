<template>
  <div class="l-sheet" v-if="sheetData">
    <button class="btn" @click="getAllDataEmitter">get</button>
    <!-- edit mode -->
    <editable-grid v-if="iseditmode" :sheetFields="sheetFields" :isInitAuto="sheetData.isInitAuto" :sheetDisplayName="sheetData.sheetDisplayName" :gridLayout="sheetData.gridLayout" :blockDatas="sheetData.blocks"></editable-grid>

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
import mixin from './utils/mixins.js'

import editableGrid from './utils/editableGrid.vue'

const axios = require('axios')

export default {
  name: 'Lsheet',
  componentName: 'Lsheet',
  components: {
    gridRow,
    editableGrid
  },
  mixins: [mixin],
  props: {
    sheetdataurl: {
      type: String,
      default: ''
    },
    sheetfieldsurl: {
      type: String,
      default: ''
    },
    iseditmode: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
    // editMode: this.iseditmode,
    sheetData: null,
    sheetFields: null,
    schemaTemplate: {
      "sheetId": "Sheet1",
      "sheetDisplayName": "测试表单",
      "hasActionBtn": true,
      "isInitAuto": true,
      "gridLayout": [],
      "blocks": []
    },
    sheetValues: {}
  }),

  watch: {
    sheetData: function(newVal){
      // debugger
      // console.log('wch')
    }
  },

  methods: {
    initSheetDataFromTpl: function () {
      this.sheetData = JSON.parse(JSON.stringify(this.schemaTemplate))
      // debugger
      this.sheetData.sheetId = this.sheetFields.code
      this.sheetData.sheetDisplayName = this.sheetFields.text
    },
    isObject: function(obj) {
      return obj !== null && typeof obj === 'object'
    },
    expanded: function (block) {
      let isExpanded = block.isExpanded
      block.isExpanded = !isExpanded
    },
    getSheetData: function () {
      const that = this
      const url = this.sheetdataurl
      if(url == '') return
      axios.get(url)
        .then(function (response) {
          // handle success
          console.log(response)
          let data = response.data
          const d = typeof data === 'string' ? JSON.parse(data) : data
          if(d && JSON.stringify(data) !== '{}'){
            that.sheetData = JSON.parse(JSON.stringify(d))
          } else {
            that.initSheetDataFromTpl()
          }
        })
        .catch(function (error) {
          // handle error
          console.error(error)
        })
    },
    getSheetFields: function () {
      const that = this
      const url = this.sheetfieldsurl
      if(url == '') return
      axios.get(url)
        .then(function (response) {
          // handle success
          console.log(response)
          let data = response.data
          const d = typeof data === 'string' ? JSON.parse(data) : data
          that.sheetFields = JSON.parse(JSON.stringify(d))
        })
        .catch(function (error) {
          // handle error
          console.error(error)
        })
    },
    getValue: function () {

    },
    setValue: function () {

    },
    init: function () {
      this.getSheetFields()
      this.getSheetData()
    },
    getAllDataEmitter: function () {
      this.sheetValues = {}
      this.broadcast('uControl', 'getData')
      // console.log("getalldata")
    },
    getSheetAllValue: function (val) {
      Object.assign(this.sheetValues, val)
      console.log(this.sheetValues)
    }
  },
  
  mounted () {
    this.init()
  },
  created () {
    this.$on('getSheetAllValue', this.getSheetAllValue)
  }
}
</script>

<style lang="scss">

</style>
