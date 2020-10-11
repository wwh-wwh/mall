<template>
  <div>
    <nav-bar class="navBar-cart">
      <div slot="center">我的</div>
    </nav-bar>

  </div>
</template>

<script>
  import Bscroll from 'better-scroll';

  import NavBar from "components/common/navBar/NavBar";

  export default {
    name: "Profile",
    components: {
      NavBar
    },
    mounted() {
      new Bscroll('.wrapper',{

      })
    }
  }
</script>

<style scoped>

</style>
