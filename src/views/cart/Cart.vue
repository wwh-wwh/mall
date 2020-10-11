<template>
  <div>
    <nav-bar class="navBar-cart"><div slot="center">购物车</div></nav-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/navBar/NavBar";
  export default {
    name: "Cart",
    components:{
      NavBar,
    }
  }
</script>

<style scoped>
.navBar-cart{
  /*background-color: var(--color-tint);*/
  /*color: #f6f6f6;*/
}
</style>
