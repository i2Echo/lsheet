<template>
  <div class="ls-container js-add-block" @contextmenu.stop="showMenu">
    <context-menu :contextMenuData="contextMenuDataForAddBlock"
      @addBlock="addBlock">
    </context-menu>
    <!-- <div style="width:100px;height:100px;background:red;"></div> -->

    <div v-if="gridLayout.length">
      <div class="ls-block" v-for="(block, i) in gridLayout" :key="i" :tabindex="i" @contextmenu.stop="showMenu(i, 'block')">
        <context-menu :contextMenuData="contextMenuDataForDelBlock"
          :transferIndex="blockIndex"
          @deleteThisBlock="deleteThisBlock(i)">
        </context-menu>
        <div class="ls-block-title">
          <i class="fa fa-angle-right"></i>
          <input type="text" v-model="blockDatas[i].blockName">
        </div>
        <div v-for="(row, j) in block" :key="j" @contextmenu.stop="showMenu(getIndex(i, j), 'row')" :tabindex="j">
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
</template>
<script>
import contextMenu from './contextMenu.vue'
import gridRow from './gridRow.vue'
import {resizeByDrag, moveByDrag} from './drag.js'
import {genUid, isBelong} from './helper.js'

export default {
  components: {
    contextMenu,
    gridRow
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
    rowDataSplit: [{}, {}, {}, {}]
  }),
  props:{
    gridLayout: {
      type: Array,
      // default: () => ([
      //   [ // block
      //     [2,4,2,4], // row
      //     [3,3,3,3]
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
    }
  },
  mounted() {
    this.setupContextMenuData()
    this.dragInit()
  },
  updated() {
    this.dragInit()
  },
  watch: {

  },
  computed: {
    
  },
  methods: {
    setupContextMenuData: function() {
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
      let a = arguments[0]

      if(typeof arguments[0] != "object"){
        if(ele == 'row'){
          this.transferIndex = index
          this.contextMenuData.axios = {x, y}
        }else {
          this.blockIndex = index
          this.contextMenuDataForDelBlock.axios = {x, y}
        }
        
      }
      else{
        this.contextMenuDataForAddBlock.axios = {x, y}
      }
      // console.log(x, y)
    },
    getIndex: function (i, j) {
      let index = 0;
      for(let m = 0; m < i; m++){
        index += this.gridLayout[m].length
      }

      return index + j
    },
    addBlock: function() {
      console.log('addblock')
      let block = new Array()
      let rowDataSplit = JSON.parse(JSON.stringify(this.rowDataSplit))
      block[0] = this.rowSplit
      this.gridLayout.push(block)
      let blockData = {"blockName": "标题","isExpanded": true, controls:[rowDataSplit]}
      this.blockDatas.push(blockData)
    },
    insertUpRow: function(i, currIndex) {
      this.gridLayout[i].splice(currIndex, 0, this.rowSplit)
      let rowDataSplit = JSON.parse(JSON.stringify(this.rowDataSplit))
      this.blockDatas[i].controls.splice(currIndex, 0, rowDataSplit)
      console.log(this.blockDatas)
    },
    insertDownRow: function(i, currIndex) {
      this.gridLayout[i].splice(currIndex+1, 0, this.rowSplit)
      let rowDataSplit = JSON.parse(JSON.stringify(this.rowDataSplit))
      this.blockDatas[i].controls.splice(currIndex+1, 0, rowDataSplit)
    },
    deleteThisRow: function(i, currIndex) {
      this.gridLayout[i].splice(currIndex, 1)
      this.blockDatas[i].controls.splice(currIndex, 1)
    },
    deleteThisBlock: function(i) {
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
    updateControlPosition: function (from, to){ //{block: z, row: y, col: x}
      let temp = JSON.parse(JSON.stringify(this.blockDatas[from.block].controls[from.row][from.col]))
 
      this.$set(this.blockDatas[from.block].controls[from.row], from.col, {})

      this.$set(this.blockDatas[to.block].controls[to.row],[to.col], temp)
    },
    dragInit: function () {
      const selector = '[data-type=sheetfield]'
      
      let that = this
      setTimeout(function(){
        const dom = document.querySelector('.editMode')
        let elems = dom.querySelectorAll(selector)
        let checkArea = dom.querySelectorAll('.grid-border > div')
        if(elems.length < 1) return

        for(let i=0; i<elems.length; i++){
          let obj = elems[i]
          // console.log("reg: "+ i)
          moveByDrag(
            obj,
            function(){  //onMoving: 
              for (let i = 0; i < checkArea.length; i++) {
                  if (isBelong(obj, checkArea[i])) {
                    if(checkArea[i].childElementCount === 0){
                      checkArea[i].style.border= "2px dashed #1867c0"
                    }else{
                      checkArea[i].style.border= "2px dashed #F44336"
                    }
                  } else {
                    checkArea[i].style.border= "1px dashed #ccc"
                  }
              }
            },
            function(){ //onMoved: 
              for (let i = 0; i < checkArea.length; i++) {
                  if (isBelong(obj, checkArea[i])) {

                    if(checkArea[i].childElementCount === 0){
                      let from = that.getControlPosition(obj)
                      let to = that.getGridPosition(checkArea[i])

                      // checkArea[i].removeAttribute('style')
                      that.updateControlPosition(from, to)

                      break
                    }
                    checkArea[i].removeAttribute('style')
                  }
              }
            },
            )
        }
      }, 0)
      
    }
  }
}
</script>
<style lang="scss">
.js-add-block {
  height: 100%;

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
}
</style>
