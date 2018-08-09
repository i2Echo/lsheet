<template>
  <div class="dialog-mask">
    <div class="dialog">
      <div class="dialog-header">
        <div class="dialog-header__title"></div>
        <div class="dialog-header__close">
          <i class="fa fa-times-circle"></i>
        </div>
      </div>
      <div class="dialog-body">
        <solt></solt>
      </div>
      <div class="dialog-footer">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    
  }
}
</script>
<style lang="scss" scoped>
.dialog-mask {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  background-color: rgba(0,0,0,.33);
}
.dialog {
  margin: 0 20px;
  padding: 20px 30px;
  border: 1px solid #ebeef5;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  color: #303133;
  display: flex;

  &-header {
    height: 40px;
    width: 100%;
  }
  &-body {
    flex: 1;
  }
  &-footer {
    height: 40px;
    width: 100%;
  }

  &.message-box {
    min-width: 240px;
    text-align: center;
    font-size: 16px;
  }
}
</style>
