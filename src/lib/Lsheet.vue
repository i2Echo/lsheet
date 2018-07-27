<template>
  <div class="l-sheet">
    <div class="ls-left">
      <div class="ls-header">
        <div class="ls-header__title"> {{sheetData.sheetDispalyName}} </div>
        <div class="ls-header__action">
          <button type="button" class="btn" @click="addRow">
            预览
          </button>
        </div>
      </div>
      <div class="ls-content">
        <div class="ls-content-title"> {{sheetData.sheetDispalyName}} </div>
        <div class="ls-content-body">
          <!-- <div > -->
            <editable-grid v-if="editMode"></editable-grid>
          <!-- </div> -->
          <div v-else>
            <div class="content-block ls-container" v-for="(block, index) in sheetData.blocks" :key="index">
                <div class="content-block-header ls-row">
                  <div class="content-block-header__title"><i :class="['fa', 'fa-angle-'+ (block.isexpanded ? 'right' : 'down')]" @click="expanded(block)"></i>{{ block.blockName }}</div>
                  <div class="content-block-action"></div>
                </div>
                <div v-show="block.isexpanded">
                  <div class="ls-row" v-for="(item, row) in sheetData.gridLayout" :key="row">
                    <div v-for="(ctrl, col) in item" :class="['col-md-' + ctrl.col, 'col-sm-12', 'bdr']" :key="col">
                      <u-control :obj="getItemById(block, ctrl.id)"></u-control>
                    </div>
                  </div>
                </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    
    <div v-if="(editMode && isPanelExpanded)" id="resizable"></div>
    <div v-if="(editMode && isPanelExpanded)" class="ls-right">
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
    <div v-if="!isPanelExpanded" class="collapsed-bar">
      <i class="fa fa-angle-double-left icon-btn" @click="()=>isPanelExpanded= !isPanelExpanded"></i>
    </div>
  </div>
</template>

<script>

import '../assets/css/font-awesome.min.css'
import './style/_grid.scss'

import uControl from './utils/uControl.vue'
import controlPanel from './utils/controlPanel.vue'
import editableGrid from './utils/editableGrid.vue'
import {resizeByDrag, moveByDrag} from './utils/drag.js'

export default {
  name: 'Lsheet',
  components: {
    uControl,
    controlPanel,
    editableGrid
  },
  props: {
    sheetData: {
      type: Object,
      default: () =>({
        sheetId: 'sheet1',
        sheetDispalyName: '测试表单',
        gridLayout: [
          [
            {
              id: 'c1',
              col: 6,
            }, 
            {
              id: 'c2',
              col: 6,
            },
          ],
          [
            {
              id: 'c3',
              col: 6,
            }, 
            {
              id: 'c4',
              col: 6,
            },
          ],
        ],
        blocks: [
          {
            blockName: '基本信息',
            isexpanded: true,
            controls: [
              {
                type: 'sheetTextbox',
                data: {
                  displayText: '名称 1dsaaa dsaaaa aaaaaa aaadsssssss',
                  controlId: 'c1',
                  fieldId: 'name1',
                  value: ''
                }
                
              },
              {
                type: 'sheetTextbox',
                data: {
                  displayText: '名称2rewwwwwwwwwwww',
                  controlId: 'c2',
                  fieldId: 'name2',
                  value: ''
                }
              },
              {
                type: 'sheetTextbox',
                data: {
                  displayText: '名称3',
                  controlId: 'c3',
                  fieldId: 'name2',
                  value: ''
                }
              },
              {
                type: 'sheetTextbox',
                data: {
                  displayText: '名称4',
                  controlId: 'c4',
                  fieldId: 'name4',
                  value: ''
                }
              }
            ]
          },
          {
            blockName: '更多信息',
            isexpanded: true,
            controls: [
              {
                type: 'sheetTextbox',
                data: {
                  displayText: '名称 1dsaaa dsaaaa aaaaaa aaadsssssss',
                  controlId: 'c1',
                  fieldId: 'name1',
                  value: ''
                }
                
              },
              {
                type: 'sheetTextbox',
                data: {
                  displayText: '名称2rewwwwwwwwwwww',
                  controlId: 'c2',
                  fieldId: 'name2',
                  value: ''
                }
              },
              {
                type: 'sheetTextbox',
                data: {
                  displayText: '名称3',
                  controlId: 'c3',
                  fieldId: 'name2',
                  value: ''
                }
              },
              {
                type: 'sheetTextbox',
                data: {
                  displayText: '名称4',
                  controlId: 'c4',
                  fieldId: 'name4',
                  value: ''
                }
              }
            ]
          },
          
          {
            blockName: 'more信息',
            isexpanded: true,
            controls: [
              {
                type: 'sheetTextbox',
                data: {
                  displayText: '名称 1dsaaa dsaaaa aaaaaa aaadsssssss',
                  controlId: 'c1',
                  fieldId: 'name1',
                  value: ''
                }
                
              },
              {
                type: 'sheetTextbox',
                data: {
                  displayText: '名称2rewwwwwwwwwwww',
                  controlId: 'c2',
                  fieldId: 'name2',
                  value: ''
                }
              },
              {
                type: 'sheetTextbox',
                data: {
                  displayText: '名称3',
                  controlId: 'c3',
                  fieldId: 'name2',
                  value: ''
                }
              },
              {
                type: 'sheetTextbox',
                data: {
                  displayText: '名称4',
                  controlId: 'c4',
                  fieldId: 'name4',
                  value: ''
                }
              }
            ]
          }
        ]
        
      })
    },
    hasActionBtn: {
      type: Boolean,
      default: true
    },
    editMode: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
     isPanelExpanded: true
  }),
  render: function(){

  },
  mounted(){
    resizeByDrag('resizable')
  },
  watch: {

  },
  updated() {
    if(this.isPanelExpanded){
      resizeByDrag('resizable')
    }
  },
  methods: {
    addRow: function () {

    },
    getItemById: function(block, id){
      let items = block.controls
      for(let i=0; i<items.length; i++){
        if(items[i].data.controlId == id){
          console.log(items[i])
          return items[i]
        }
      }
    },
    expanded: function (block) {
      let isexpanded = block.isexpanded
      block.isexpanded = !isexpanded
    }
  }
}
</script>

<style lang="scss">
  .l-sheet {
    width: 100%;
    height: 100%;
    display: flex;

    .ls-left {
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
            padding: 0 15px;
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
    .ls-right {
      height: 100%;
      width: 300px;
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
    .collapsed-bar {
      width: 36px;
      height: 100%;
      background-color: #f5f5f5;
      border: 1px solid #b3d4fc;
      position: absolute;
      right: 0;
      top: 0;
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

  #resizable {
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
  
</style>
