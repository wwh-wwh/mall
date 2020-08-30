<template>
  <div id="app">
    <router-view></router-view>
    <mainTabBar></mainTabBar>
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
</style>
