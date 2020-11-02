<template>
  <div id="top">
    <img src="../../../assets/img/common/top.png" alt="回到顶部" >
  </div>
</template>

<script>
  export default {
    name: "BackTop",
  }
</script>

<style scoped>
#top{
  position: fixed;
  right: 10px;
  bottom:60px;
}
  #top img {
    height: 50px;
    width: 50px ;
    /*设置图片的透明度*/
    /*opacity:0.4;*/
  }

</style>
