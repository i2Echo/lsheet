<template>
  <div class="wrapper edit-mode">
    <!-- left-bar -->
    <div :class="['ls-left', 'resizePanel', isFieldListExpanded ? 'expanded' : 'collapsed']">
      <div v-if="isFieldListExpanded" class="expanded-panel">
        <div class="expanded-panel-header">
          <div class="expanded-panel-header__title">
            表单字段
            <i class="fa fa-angle-double-left icon-btn" @click="toggleLeftBar"></i>
          </div>
        </div>
        <div class="expanded-panel-body">
          <div class="tree-container">
            <tree :text="sheetFields.text" :children="sheetFields.children" :depth="0" class="root"></tree>
          </div>
        </div>
      </div>
      <div v-else class="collapsed-bar left-bar">
        <i class="fa fa-angle-double-right icon-btn" @click="toggleLeftBar"></i>
      </div>
    </div>
    <div v-if="isFieldListExpanded" id="resizableFieldList" class="resizable-line"></div>

    <div class="ls-main">
      <div class="ls-header">
        <div class="ls-header__title"> {{sheetDisplayName}} </div>
        <div class="ls-header__action">
          <button type="button" class="btn">
            临时占位
          </button>
        </div>
      </div>
      <div class="ls-content ls-container-fluid" tabindex="0" @click.native="getFocusData">
        <div class="ls-content-title"> {{sheetDisplayName}} </div>

        <div class="ls-content-body js-add-block" @contextmenu="showMenu">
          <context-menu :contextMenuData="contextMenuDataForAddBlock"
            @addBlock="addBlock">
          </context-menu>
          <!-- <div style="width:100px;height:100px;background:red;"></div> -->

          <div v-if="gridLayout.length">
            <div class="ls-block" v-for="(block, i) in gridLayout" :key="i" :tabindex="i" @contextmenu="showMenu(i, 'block')">
              <context-menu :contextMenuData="contextMenuDataForDelBlock"
                :transferIndex="blockIndex"
                @deleteThisBlock="deleteThisBlock(i)">
              </context-menu>
              <div class="ls-block-title">
                <i class="fa fa-angle-right"></i>
                <input type="text" v-model="blockDatas[i].blockName">
              </div>
              <div v-for="(row, j) in block" :key="j" @contextmenu="showMenu(getIndex(i, j), 'row')" :tabindex="j">
                <grid-row :cols="row" :colsData="blockDatas ? blockDatas[i].controls[j]:null"></grid-row>
                <context-menu :contextMenuData="contextMenuData"
                  :transferIndex="transferIndex"
                  @insertUpRow="insertUpRow(i, j)"
                  @insertDownRow="insertDownRow(i, j)"
                  @deleteThisRow="deleteThisRow(i, j)">
                </context-menu>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
    <!-- right-bar -->
    <div v-if="isPropsPanelExpanded" id="resizableProps" class="resizable-line"></div>
    <div :class="['ls-right', 'resizePanel', isPropsPanelExpanded ? 'expanded' : 'collapsed']">
      <div v-if="isPropsPanelExpanded" class="expanded-panel">
        <div class="expanded-panel-header">
          <div class="expanded-panel-header__title">
            <i class="fa fa-angle-double-right icon-btn" @click="toggleRightBar"></i>
            属性
          </div>
        </div>
        <div class="expanded-panel-body">
          <control-panel></control-panel>
        </div>
      </div>
      <div v-else class="collapsed-bar right-bar">
        <i class="fa fa-angle-double-left icon-btn" @click="toggleRightBar"></i>
      </div>
    </div>

  </div>
</template>
<script>
import contextMenu from './contextMenu.vue'
import gridRow from './gridRow.vue'
import controlPanel from './controlPanel.vue'
import tree from './tree.vue'

import {resizeByDrag, moveByDrag} from './drag.js'
import {genUid, isBelong} from './helper.js'

export default {
  componentName: 'editableGrid',
  components: {
    contextMenu,
    gridRow,
    controlPanel,
    tree
  },
  data: () => ({
    contextMenuDataForAddBlock: {
      menuName: 'forBlcok',
      axios: {
        x: null,
        y: null
      },
      menulists: []
    },
    blockIndex: null,
    contextMenuDataForDelBlock: {
      menuName: 'delBlcok',
      axios: {
        x: null,
        y: null
      },
      menulists: []
    },
    transferIndex: null,
    contextMenuData: {
      menuName: 'forRow',
      axios: {
        x: null,
        y: null
      },
      menulists: []
    },
    menuListTpl: {
      addBlock: {
        fnHandler: 'addBlock', // Binding events(绑定事件)
        icoName: 'fa fa-puzzle-piece', // icon (icon图标 )
        btnName: '添加块' // The name of the menu option (菜单名称)
      },
      insertUpRow: {
        fnHandler: 'insertUpRow',
        icoName: 'fa fa-plus-square',
        btnName: '上面插入行'
      },
      insertDownRow: {
        fnHandler: 'insertDownRow',
        icoName: 'fa fa-plus-square',
        btnName: '下面插入行'
      },
      deleteThisBlock: {
        fnHandler: 'deleteThisBlock',
        icoName: 'fa fa-trash-o',
        btnName: '删除块'
      },
      deleteThisRow: {
        fnHandler: 'deleteThisRow',
        icoName: 'fa fa-trash-o',
        btnName: '删除行'
      }
    },
    rowSplit: [2, 4, 2, 4],
    rowDataSplit: [{}, {}, {}, {}],

    isPropsPanelExpanded: false,
    isFieldListExpanded: true,

    typeToControls: {
      ShortString: [
        'SheetLabel',
        'SheetTextBox',
        'SheetDropDownList',
        'SheetCheckboxList',
        'SheetRadioButtonList',
        'SheetInstancePrioritySelector',
        'SheetInstanceNameEditor'
      ],
      String: [
        'SheetLabel',
        'SheetTextarea',
        'SheetRelationInstance',
      ],
      Bool: [
        'SheetLabel',
        'SheetCheckBox',
      ],
      Int: [
        'SheetLabel',
        'SheetTextBox',
        'SheetDropDownList',
        'SheetRadioButtonList',
      ],
      Long: [
        'SheetLabel',
        'SheetTextBox',
        'SheetDropDownList',
        'SheetRadioButtonList',
      ],
      Double: [
        'SheetLabel',
        'SheetTextBox',
        'SheetDropDownList',
        'SheetRadioButtonList',
      ], 
      DateTime: [
        'SheetLabel',
        'SheetTime',
      ],
      Attachment: [
        'SheetLabel',
        'SheetAttachment',
        'SheetOffice',
      ],
      Comment: [
        'SheetLabel',
        'SheetComment',
      ],
      SelectUser: [
        'SheetLabel',
        'SheetUser',
      ],
      TimeSpan: [
        'SheetLabel',
        'SheetTimeSpan',
      ],
      Decimal: [
        'SheetLabel',
        'SheetTextBox',
      ],
      HyperLink: [
        'SheetLabel',
        'SheetHyperLink',
      ],
      Html: [
        'SheetLabel',
        'SheetRichTextBox'
      ],
      BizObjectArray: [
        'SheetLabel',
        'SheetGridView'
      ]
    }
  }),
  props: {
    gridLayout: {
      type: Array
      // default: () => ([
      //   [ // block
      //     [2,4,2,4], // row
      //     [3,3,3,3],
      //     [12]
      //   ],
      //   [
      //     [2,4,2,4],
      //     [3,3,3,3]
      //   ]
      // ])
    },
    blockDatas: {
      type: Array,
      default: () => ([])
    },
    sheetFields: {
      type: Object
    },
    sheetDisplayName: '',
    isInitAuto: false
  },
  watch: {

  },
  computed: {
    
  },
  methods: {
    init: function () {
      if(this.isInitAuto) {
        this.autoLayout()
      }
      this.setupContextMenuData()
      this.dragInit()
      this.initDragResize()
    },
    cleanData: function () {
      let glen = this.gridLayout.length,
          blen = this.blockDatas.length
      this.gridLayout.splice(0, glen)
      this.blockDatas.splice(0, blen)
    },
    autoLayout: function () {
      // console.log('auto layout')
      const MAX_SIZE = 12
      let list = this.sheetFields.children
      let rowLayout = []
      let blockLayout = []
      this.cleanData()
      blockLayout.push(rowLayout)
      this.gridLayout.push(blockLayout)
      let rowData = []
      let blockData = {'blockName': '基本信息', 'isExpanded': true, controls: [rowData]}
      this.blockDatas.push(blockData)
      let blockIndex = 0, rowIndex = 0, sizeCount = 0
      for (let i = 0; i < list.length; i++) {
        let size = 4
        let constrolsType = this.typeToControls[list[i].dataType]
        if(constrolsType[1] === 'SheetTextarea' || constrolsType[1] === 'SheetRichTextBox'){
          size = 10
        }
        // console.log(constrolsType)
        let labelData = {
          'type': 'sheetLabel',
          'fieldData': {
            'displayText': list[i].text,
            'fieldId': list[i].code,
            'value': '',
            'uid': genUid(list[i].code)
          }
        }
        if(sizeCount + size + 2 > MAX_SIZE){
          sizeCount = 0
          rowIndex += 1
          this.gridLayout[blockIndex].push([])
          this.blockDatas[blockIndex].controls.push([])
        }
        this.gridLayout[blockIndex][rowIndex].push(2) // add label
        this.blockDatas[blockIndex].controls[rowIndex].push(labelData) // add label control
        sizeCount += 2
        
        let controlData = {
          'type': constrolsType[1],
          'fieldData': {
            'displayText': list[i].text,
            'fieldId': list[i].code,
            'value': '',
            'uid': genUid(list[i].code)
          }
        }
        this.gridLayout[blockIndex][rowIndex].push(size) // add 
        this.blockDatas[blockIndex].controls[rowIndex].push(controlData) // add control
        sizeCount += size
      }
    },
    setupContextMenuData: function () {
      this.contextMenuDataForAddBlock.menulists.push(this.menuListTpl.addBlock)
      this.contextMenuDataForDelBlock.menulists.push(this.menuListTpl.deleteThisBlock)
      this.contextMenuData.menulists.push(this.menuListTpl.insertUpRow)
      this.contextMenuData.menulists.push(this.menuListTpl.insertDownRow)
      this.contextMenuData.menulists.push(this.menuListTpl.deleteThisRow)
    },
    showMenu (index, ele) {
      event.preventDefault()
      let x = event.clientX
      let y = event.clientY

      if (typeof arguments[0] !== 'object') {
        if (ele === 'row') {
          this.transferIndex = index
          this.contextMenuData.axios = {x, y}
        } else {
          this.blockIndex = index
          this.contextMenuDataForDelBlock.axios = {x, y}
        }
      } else {
        this.contextMenuDataForAddBlock.axios = {x, y}
      }
      // console.log(x, y)
    },
    getIndex: function (i, j) {
      let index = 0
      for (let m = 0; m < i; m++) {
        index += this.gridLayout[m].length
      }

      return index + j
    },
    addBlock: function () {
      console.log('addblock')
      let block = []
      let rowDataSplit = JSON.parse(JSON.stringify(this.rowDataSplit))
      block[0] = this.rowSplit
      this.gridLayout.push(block)
      let blockData = {'blockName': '标题', 'isExpanded': true, controls: [rowDataSplit]}
      this.blockDatas.push(blockData)
    },
    insertUpRow: function (i, currIndex) {
      this.gridLayout[i].splice(currIndex, 0, this.rowSplit)
      let rowDataSplit = JSON.parse(JSON.stringify(this.rowDataSplit))
      this.blockDatas[i].controls.splice(currIndex, 0, rowDataSplit)
      console.log(this.blockDatas)
    },
    insertDownRow: function (i, currIndex) {
      this.gridLayout[i].splice(currIndex + 1, 0, this.rowSplit)
      let rowDataSplit = JSON.parse(JSON.stringify(this.rowDataSplit))
      this.blockDatas[i].controls.splice(currIndex + 1, 0, rowDataSplit)
    },
    deleteThisRow: function (i, currIndex) {
      this.gridLayout[i].splice(currIndex, 1)
      this.blockDatas[i].controls.splice(currIndex, 1)
    },
    deleteThisBlock: function (i) {
      console.log('delblk')
      console.log(i)
      this.gridLayout.splice(i, 1)
      this.blockDatas.splice(i, 1)
    },
    getControlPosition (obj) {
      let colElem = obj.parentElement
      let rowElem = colElem.parentElement.parentElement
      let blockElem = rowElem.parentElement

      return {
        block: blockElem.getAttribute('tabindex'),
        row: rowElem.getAttribute('tabindex'),
        col: colElem.getAttribute('tabindex')
      }
    },
    getGridPosition (obj) {
      let rowElem = obj.parentElement.parentElement
      let blockElem = rowElem.parentElement

      return {
        block: blockElem.getAttribute('tabindex'),
        row: rowElem.getAttribute('tabindex'),
        col: obj.getAttribute('tabindex')
      }
    },

    getFieldObjByField: function (field) {
      let obj = null
      function children (childrenList) {
        for (let i = 0; i < childrenList.length; i++) {
          if (childrenList[i].code === field) {
            obj = childrenList[i]
            return
          } else if (typeof childrenList[i].children !== 'undefined' && childrenList.children) {
            children(childrenList[i].children)
          }
        }
      }

      if (this.sheetFields.code === field) {
        return this.sheetFields
      } else {
        children(this.sheetFields.children)
      }
      return obj
    },

    fieldToControl: function (fieldObj) {
      if (!fieldObj) return false

      let type = 'sheetLabel'
      switch (fieldObj.dataType) {
        case 'ShortString':
          type = 'sheetLabel'
          break
        default:
          break
      }
      return {
        'type': type,
        'fieldData': {
          'displayText': fieldObj.text,
          'fieldId': fieldObj.code,
          'value': '',
          'uid': genUid(fieldObj.code)
        }
      }
    },

    updateControlPosition: function (from, to) { // {block: z, row: y, col: x}
      let temp = {}
      if (typeof from === 'string') {
        let fieldObj = this.getFieldObjByField(from)
        if (fieldObj) {
          temp = this.fieldToControl(fieldObj)
        } else {
          temp = {}
        }
      } else {
        temp = JSON.parse(JSON.stringify(this.blockDatas[from.block].controls[from.row][from.col]))
        this.$set(this.blockDatas[from.block].controls[from.row], from.col, {})
      }

      this.$set(this.blockDatas[to.block].controls[to.row], [to.col], temp)
    },

    dragInit: function () {
      let that = this
      this.$nextTick().then(function () {
        const dom = document.querySelector('.edit-mode')
        if (dom === null) return
        let checkArea = dom.querySelectorAll('.grid-border > div')
        let scrollElem = dom.querySelector('.ls-content')
        // drag controls start
        const selector = '[data-type=sheetfield]'
        let elems = dom.querySelectorAll(selector)

        if (elems.length < 1) return

        for (let i = 0; i < elems.length; i++) {
          let obj = elems[i]
          // console.log("reg: "+ i)
          moveByDrag(
            obj,
            '1000',
            false,
            function () { // onMoving:
              for (let i = 0; i < checkArea.length; i++) {
                if (isBelong(obj, checkArea[i])) {
                  if (checkArea[i].childElementCount === 0) {
                    checkArea[i].style.border = '2px dashed #1867c0'
                  } else {
                    checkArea[i].style.border = '2px dashed #F44336'
                  }
                } else {
                  checkArea[i].style.border = '1px dashed #ccc'
                }
              }
            },
            function () { // onMoved:
              for (let i = 0; i < checkArea.length; i++) {
                if (isBelong(obj, checkArea[i])) {
                  if (checkArea[i].childElementCount === 0) {
                    let from = that.getControlPosition(obj)
                    let to = that.getGridPosition(checkArea[i])
                    checkArea[i].removeAttribute('style')
                    that.updateControlPosition(from, to)

                    break
                  }
                  checkArea[i].removeAttribute('style')
                }
              }
            })
        }
        // drag controls end

        // drag fields start
        const fieldsSel = '.leaf-node>.fieldLabel'
        let fieldsEle = dom.querySelectorAll(fieldsSel)
        // debugger

        if (fieldsEle.length < 1) return

        for (let i = 0; i < fieldsEle.length; i++) {
          let obj = fieldsEle[i]
          // console.log("reg: "+ i)
          moveByDrag(
            obj,
            '99999',
            true,
            function () { // onMoving:
              for (let i = 0; i < checkArea.length; i++) {
                if (isBelong(obj, checkArea[i], scrollElem)) {
                  if (checkArea[i].childElementCount === 0) {
                    checkArea[i].style.border = '2px dashed #1867c0'
                  } else {
                    checkArea[i].style.border = '2px dashed #F44336'
                  }
                } else {
                  checkArea[i].style.border = '1px dashed #ccc'
                }
              }
            },
            function () { // onMoved:
              for (let i = 0; i < checkArea.length; i++) {
                if (isBelong(obj, checkArea[i], scrollElem)) {
                  if (checkArea[i].childElementCount === 0) {
                    let from = obj.getAttribute('field')
                    let to = that.getGridPosition(checkArea[i])

                    checkArea[i].removeAttribute('style')
                    that.updateControlPosition(from, to)

                    break
                  }
                  checkArea[i].removeAttribute('style')
                }
              }
            }
          )
        }
        // drag fields end
      })
    },

    getFocusData: function () {
      console.log('click')
      debugger
      let focusedElement = document.activeElement
      console.log(focusedElement)
    },
    initDragResize: function () {
      if (this.isPropsPanelExpanded) {
        resizeByDrag('resizableProps')
      }
      if (this.isFieldListExpanded) {
        resizeByDrag('resizableFieldList', 'prev')
      }
    },

    toggleLeftBar: function () {
      const ele = document.querySelector('.ls-left')
      ele.removeAttribute('style')
      this.isFieldListExpanded = !this.isFieldListExpanded
    },
    toggleRightBar: function () {
      const ele = document.querySelector('.ls-right')
      ele.removeAttribute('style')
      this.isPropsPanelExpanded = !this.isPropsPanelExpanded
    }
  },
  mounted () {
    this.init()
  },
  updated () {
    this.dragInit()
    this.initDragResize()
  }
}
</script>
<style lang="scss">
.wrapper {
  height: 100%;
  position: relative;
  display: flex;
  .ls-main {
    height: 100%;
    flex: 1;
    padding: 10px;

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
      // padding-bottom: 80px;
      .js-add-block {
        padding-bottom: 80px;
      }
    }
  }
  .ls-block {
    padding: 10px 0;

    &:focus {
      border: 1px dashed #4e98f5;
    }
    &-title {
      height: 32px;
      line-height: 32px;
      text-align: left;

      input {
        border: none;
      }
    }

    .ls-row.grid-border{
      border-left: none;
      >div {
        border: 1px dashed #ccc;
        min-height: 42px;

        >div{
          cursor: move;
        }
      }
    }
  }

  .resizePanel {
    height: 100%;

    &.expanded {
      width: 300px;
    }
    &.collapsed {
      width: 36px;
    }

    .expanded-panel {
      border: 1px solid #b3d4fc;
      width: 100%;
      height: 100%;

      &-header {

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
      &-body {
        height: calc(100% - 32px);

        .tree-container {
          padding: 15px;

          .root>.label{
            &::before{
              border-left: none;
            }
            &::after{
              border-top: none;
            }
          }
        }
      }
    }

    &.ls-left {
      .expanded-panel-header {
        // position: relative;
        i {
          float: right;
          margin-top: 7px;
          margin-right: -5px;
          text-align: center;
        }
      }
    }

    .collapsed-bar {
      // width: 36px;
      width: 100%;
      height: 100%;
      background-color: #f5f5f5;
      border: 1px solid #b3d4fc;
      // position: absolute;

      // &.left-bar {
      //   left: 0;
      //   top: 0;
      // }
      // &.right-bar {
      //   right: 0;
      //   top: 0;
      // }
    }
  }

}

.resizable-line {
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
