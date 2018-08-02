<template>
  <div class="l-sheet" v-if="sheetData">
    <div v-if="(editMode && isFieldListExpanded)" class="ls-left resizePanel">
      <div class="expanded-bar">
        <div class="expanded-bar__title">
          表单字段
          <i class="fa fa-angle-double-left icon-btn" @click="()=>isFieldListExpanded= !isFieldListExpanded"></i>
        </div>
      </div>
      <div class="expanded-panel">
        表单字段
      </div>
    </div>
    <div v-if="editMode && !isFieldListExpanded" class="collapsed-bar left-bar">
      <i class="fa fa-angle-double-right icon-btn" @click="()=>isFieldListExpanded= !isFieldListExpanded"></i>
    </div>
    <div v-if="(editMode && isFieldListExpanded)" id="resizableFieldList" class="resizable"></div>
    <div class="ls-main">
      <div class="ls-header">
        <div class="ls-header__title"> {{sheetData.sheetDisplayName}} </div>
        <div class="ls-header__action">
          <button type="button" class="btn" @click="changeMode">
            切换模式
          </button>
        </div>
      </div>
      <div class="ls-content" :tabindex="editMode ? 0 : ''" @click.native="getFocusData">
        <div class="ls-content-title"> {{sheetData.sheetDisplayName}} </div>
        <div class="ls-content-body" :class="editMode ? 'editMode' : ''">
          <!-- <div > -->
            <editable-grid v-if="editMode" :gridLayout="sheetData.gridLayout" :blockDatas="sheetData.blocks" @click.native="getFocusData"></editable-grid>
          <!-- </div> -->
          <div v-else>
            <div class="content-block ls-container" v-for="(block, index) in sheetData.gridLayout" :key="index">
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
    </div>
    
    <div v-if="(editMode && isPanelExpanded)" id="resizablePanel" class="resizable"></div>
    <div v-if="(editMode && isPanelExpanded)" class="ls-right resizePanel">
      <div class="expanded-bar">
        <div class="expanded-bar__title">
          <i class="fa fa-angle-double-right icon-btn" @click="()=>isPanelExpanded= !isPanelExpanded"></i>
          属性
        </div>
      </div>
      <div class="expanded-panel">
        <control-panel></control-panel>
      </div>
    </div>
    <div v-if="editMode && !isPanelExpanded" class="collapsed-bar right-bar">
      <i class="fa fa-angle-double-left icon-btn" @click="()=>isPanelExpanded= !isPanelExpanded"></i>
    </div>
  </div>
</template>

<script>

// import '../assets/css/font-awesome.min.css'
import './style/_grid.scss'

import gridRow from './utils/gridRow.vue'
import controlPanel from './utils/controlPanel.vue'
import editableGrid from './utils/editableGrid.vue'
import {resizeByDrag, moveByDrag} from './utils/drag.js'
import {genUid, isBelong} from './utils/helper.js'

// import controls from '../packages/index.js'
// import Vue from 'vue'
// Vue.use(controls)

export default {
  name: 'Lsheet',
  components: {
    gridRow,
    controlPanel,
    editableGrid
  },
  props: {
    sheetData: {
      type: Object,
      default: null
    },
    isEditMode: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
     isPanelExpanded: false,
     isFieldListExpanded: true,
     editMode: false
  }),
  render: function(){

  },
  mounted(){
    this.editMode = this.isEditMode
    
    this.initDragResize()
  },
  watch: {

  },
  updated() {
    this.initDragResize()
  },
  methods: {
    changeMode: function () {
      this.editMode= !this.editMode
    },

    expanded: function (block) {
      let isExpanded = block.isExpanded
      block.isExpanded = !isExpanded
    },
    panelData: function () {

    },
    getFocusData: function () {
      console.log("click")
      let focusedElement = document.activeElement
      console.log(focusedElement)
    },
    getDataById: function (id) {
      
    },
    initDragResize: function () {
      if(this.isPanelExpanded){
        resizeByDrag('resizablePanel')
      }
      if(this.isFieldListExpanded){
        let ele = document.querySelector('.ls-left.resizePanel')
        resizeByDrag('resizableFieldList', 'prev', ele)
      }
    }
  }
}
</script>

<style lang="scss">
  .l-sheet {
    width: 100%;
    height: 100%;
    display: flex;

    .ls-main {
      height: 100%;
      flex: 1;
      
      .ls-header {
        height: 60px;
        width: 100%;

        &__title {
          height: 24px;
          line-height: 24px;
          font-size: 14px;
          color: #999;
        }

        &__action {

          .btn {
            width: 80px;
            height: 30px;
            padding: 0 10px;
            color: #fff;
            background-color: #009688;
            border: none;
            cursor: pointer;
          }
        }
      }

      .ls-content {
        width: 100%;
        padding: 15px;
        height: calc(100% - 60px);
        overflow: auto;
        &-title {
          color: red;
          height: 40px;
          line-height: 40px;
          font-size: 24px;
          font-weight: 700;
        }
        &-body {
          width: 100%;
          height: calc(100% - 40px);

        }

        .content-block {
          width: 100%;
          margin-top: 5px;

          &-header {
            height: 36px;
            border: 1px solid #ccc;
            background-color: #f5f5f5;

            &__title {
              height: 36px;
              width: 200px;
              text-align: left;
              margin-left: 10px;
              line-height: 36px;
              color: #555;
              font-size: 14px;
              
              > i {
                // margin-right: 10px;
                font-size: 16px;
                font-weight: 700;
                width: 18px;
                height: 18px;
                cursor: pointer;
              }
            }
          }
        }
      }
    }
    .resizePanel {
      height: 100%;
      width: 300px;
      border: 1px solid #b3d4fc;
      .expanded-bar {

        height: 32px;
        line-height: 32px;
        padding: 0 15px;
        width: 100%;
        text-align: left;
        border-bottom: 1px solid #b3d4fc;

        &__title {
          font-size: 14px;
        }

      }
      .expanded-panel {
        width: 100%;
        height: calc(100% - 32px);
      }
    }
    .ls-left {
      .expanded-bar {
        // position: relative;
        i {
          float: right;
          margin-top: 7px;
          margin-right: -5px;
          text-align: center;
        }
      }
    }
    // .ls-right {
    //   .expanded-bar {
    //     text-align: left;
    //   }
    // }
    .collapsed-bar {
      width: 36px;
      height: 100%;
      background-color: #f5f5f5;
      border: 1px solid #b3d4fc;
      position: absolute;
      
      &.left-bar {
        left: 0;
        top: 0;
      }
      &.right-bar {
        right: 0;
        top: 0;
      }
    }
    .icon-btn {
      width: 18px;
      height: 18px;
      font-size: 16px;
      font-weight: 700;
      color: #4e98f5;
      cursor: pointer;
    }
    .bdr {
      border-right: 1px solid #ccc;
    }

  }

  .resizable {
    width: 1px;
    height: 100%;
    background-color: #ccc;
    cursor: ew-resize;
    position: relative;

    &::after {
      content: "";
      display: block;
      height: 100%;
      width: 8px;
      position: absolute;
      left: -3px;
      z-index: 10;
    }
  }
  
  .ls-row.grid-border{
    // border-top: 1px solid #ccc;
    border-left: 1px solid #ccc;
    >div {
      border-bottom: 1px solid #ccc;
      border-right: 1px solid #ccc;
      min-height: 42px;
    }
  }

</style>
