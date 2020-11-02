<template>
  <div class="navBar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
  .navBar {
    display: flex;/*使用flex布局*/
    line-height: 44px;
    box-shadow: 0 1px 1px 0 rgba(100,100,100,0.1);

  }

  .left, .right {
    width: 60px;
  }

  .center {
    flex: 1;
    text-align: center;
  }
</style>
