<template>
  <span class="vue-contextmenu-listWrapper" :class="'vue-contextmenuName-' + contextMenuData.menuName">
    <li v-for="(item, index) in contextMenuData.menulists" class="context-menu-list" :key="index">
      <button @click.stop="fnHandler(item)">
        <i :class="item.icoName"></i>
        <span>{{item.btnName}}</span>
      </button>
    </li>
  </span>
</template>
<script>
  export default {
    props: {
      contextMenuData: {
        type: Object,
        requred: false,
        default () {
          return {
            menuName: null,
            axios: {
              x: null,
              y: null
            },
            menulists: [
              {
                fnHandler: 'adddata',
                icoName: 'fa fa-plus',
                btnName: 'New'
              },
              {
                fnHandler: 'savedata',
                icoName: 'fa fa-home',
                btnName: 'Save'
              }
            ]
          }
        }
      },
      transferIndex: {
        type: Number,
        default: 0
      }
    },
    watch: {
      'contextMenuData.axios' (val) {
        var x = val.x
        var y = val.y
        var _this = this
        var index = _this.transferIndex
        var menuName = 'vue-contextmenuName-' + _this.contextMenuData.menuName
        var menu = document.getElementsByClassName(menuName)[index]
        menu.style.display = 'block'
        menu.style.left = x + 'px'
        menu.style.top = y + 'px'
        document.addEventListener('mouseup', function () {
          menu.style.display = 'none'
        }, false)
      }
    },
    methods: {
      fnHandler (item) {
        this.$emit(item.fnHandler)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .vue-contextmenu-listWrapper {
    box-shadow: 2px 2px 2px #ccc;
    display: none;
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;

    .context-menu-list {
      width: 150px;
      height: 32px;
      border-radius: 4px;
      background: #fff;
      text-decoration: none;
      list-style: none;

      button {
        cursor: pointer;
        width: 100%;
        height: 100%;
        display: block;
        outline: 0;
        border: 0;

        &:hover {
          background-color: #777;
          color: #ffffff;
          border-radius: 2px;
        }

        i {
          float: left;
          padding: 0 10px 0 10px;
        }
        span{
          float: left;
        }
      }
    }
  }

</style>