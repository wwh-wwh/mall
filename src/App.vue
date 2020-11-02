<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
    <mainTabBar id="main-tab-bar"/>
  </div>
</template>

<script>
import mainTabBar from 'components/content/mainTabBar/MainTabBar'
export default {
  name:'App',
  components:{
    mainTabBar,
  }
}
</script>

<style>
  @import "./assets/css/base.css";/*引入公用css*/
  #main-tab-bar{
    z-index: 99;
  }
</style>
