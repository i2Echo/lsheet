<template>
  <div class="ls-container js-add-block" @contextmenu.stop="showMenu">
    <context-menu :contextMenuData="contextMenuDataForAddBlock"
      @addBlock="addBlock">
    </context-menu>
    <!-- <div style="width:100px;height:100px;background:red;"></div> -->

    <div v-if="gridLayout.length">
      <div v-for="(row, index) in gridLayout" :key="index" @contextmenu.stop="showMenu(index)">
        <grid-row :cols="row"></grid-row>
        <context-menu :contextMenuData="contextMenuData"
          :transferIndex="transferIndex"
          @insertUpRow="insertUpRow(index)"
          @insertDownRow="insertDownRow(index)"
          @deleteThisRow="deleteThisRow(index)">
        </context-menu>
      </div>
      
    </div>
  </div>
</template>
<script>
import contextMenu from './contextMenu.vue'
import gridRow from './gridRow.vue'

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
        icoName: 'fa fa-plus', // icon (icon图标 )
        btnName: '添加块' // The name of the menu option (菜单名称)
      },
      insertUpRow: {
        fnHandler: 'insertUpRow',
        icoName: 'fa fa-plus',
        btnName: '上面插入行'
      },
      insertDownRow: {
        fnHandler: 'insertDownRow',
        icoName: 'fa fa-plus',
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
    watchTarget: null,
  }),
  props:{
    gridLayout: {
      type: Array,
      default: () => ([
        [2,4,2,4],
        [3,3,3,3]
      ])
    }
  },
  mounted: function() {
    this.setupContextMenuData()
  },
  watch: {

  },
  methods: {
    setupContextMenuData: function() {
      this.contextMenuDataForAddBlock.menulists.push(this.menuListTpl.addBlock)
      this.contextMenuData.menulists.push(this.menuListTpl.insertUpRow)
      this.contextMenuData.menulists.push(this.menuListTpl.insertDownRow)
      this.contextMenuData.menulists.push(this.menuListTpl.deleteThisRow)
    },
    showMenu (index) {
      event.preventDefault()
      let x = event.clientX
      let y = event.clientY
      let a = arguments[0]
      if(typeof arguments[0] != "object"){
        this.transferIndex = index
        this.contextMenuData.axios = {x, y}
      }
      else{
        // debugger
        this.contextMenuDataForAddBlock.axios = {x, y}
      }
      console.log(x, y)
    },

    addBlock: function() {
      console.log('addblock')
      
    },
    insertUpRow: function(currIndex) {
      let row = [2,4,2,4]
      this.gridLayout.splice(currIndex, 0, row)
    },
    insertDownRow: function(currIndex) {
      let row = [2,4,2,4]
      this.gridLayout.splice(currIndex+1, 0, row)
    },
    deleteThisRow: function(currIndex) {
      this.gridLayout.splice(currIndex, 1)
    }

  }
}
</script>
<style lang="scss">
.js-add-block {
  height: 100%;
}
</style>
