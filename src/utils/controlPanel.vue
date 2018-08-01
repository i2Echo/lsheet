<template>
  <div class="ls-control-panel">

    <div class="panel-body">
      <div class="panel-group" v-for="(group, index) in properties.groups" :key="index">
        <div class="panel-group-header">
          <i :class="['fa', 'fa-' + (group.isGroupExpanded ? 'minus' : 'plus') + '-square-o']" @click="()=>group.isGroupExpanded = !group.isGroupExpanded"></i>
          {{group.groupName}}
        </div>
        <div v-show="group.isGroupExpanded" class="panel-group-body">
          <div class="ls-row item" v-for="(value, key) in group.props" :key="key">
            <div class="col-sm-4 item-key"> {{ key }} </div>
            <div class="col-sm-8 item-value"> {{ value }} </div>
          </div>
        </div>
        
      </div>
    </div>
    <div class="panel-footer">
    </div>
  </div>
</template>
<script>

import SheetControls from '../schema/propertyDict.js'

export default {
  name: 'control-panel',
  
  props: {
    properties: {
      type: Object,
      default: () => ({
        cid: 'user_1',
        groups: [
          {
            groupName: '基本属性',
            isGroupExpanded: true,
            props:{
              id: '9527',
              name: '华安',
              age: '18'
            }
          },
          {
            groupName: '额外属性',
            isGroupExpanded: true,
            props:{
              id: '9527',
              name: '华安',
              age: '18'
            }
          },
          {
            groupName: '拓展属性',
            isGroupExpanded: true,
            props:{
              id: '9527',
              name: '华安',
              age: '18'
            }
          }
        ]
        
      })
    }
  },
  data: ()=>({

  }),
  methods: {
    collapsed: function () {

    }
  }
}
</script>
<style lang="scss">
  .ls-control-panel {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    border: 1px solid #b3d4fc;

    .panel-body {
      flex: 1;

      .panel-group {
        background-color: #f5f5f5;
        &-header {
          height: 28px;
          line-height: 28px;
          padding-left: 2px;
          width: 100%;
          text-align: left;
          // border-bottom: 1px solid #b3d4fc;
          font-size: 14px;

          i {
            width: 16px;
            height: 16px;
            line-height: 16px;
            font-size: 14px;
            // font-weight: 700;
            color: #03A9F4;
            cursor: pointer;
          }
        }
        &-body {
          // border-top: 1px solid #ccc;
          // border-left: 1px solid #ccc;
          padding-left: 15px;
          
          .item {
            margin: 0;
            text-align: left;
            height: 32px;
            line-height: 32px;
            background-color: #fff;

            &-key, &-value {
              border-right: 1px solid #f5f5f5;
              border-bottom: 1px solid #f5f5f5;
            }
          }
        }
      }
      
    }
    .panel-footer {
      height: 100px;
      // background-color: #ccc;
      border-top: 1px solid #ddd;
    }

  }
</style>
