<template>
  <div>
    <NavBar>
        <div class="left" slot="left" @click="back">
          <img src="~assets/img/common/back.svg" alt="返回">
        </div>
      <div slot="center" class="titles">
        <div class="titles-item"
             v-for="(item,index) in titles"
             :key="item"
             :class="{active:index===currentIndex}" @click="tilesItemClick(index)">{{item}}</div>
      </div>
    </NavBar>
  </div>
</template>

<script>
  import NavBar from "../../../components/common/navBar/NavBar";

  export default {
    name: "DetailNavBar",
    components: {
      NavBar
    },
    data() {
      return {
        titles: ['商品', '参数', '详情', '推荐'],
        currentIndex:0
      }
    },
    methods:{
      tilesItemClick(index){
        this.currentIndex=index
      },
      //返回操作
      back(){
        // this.$router.back()
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
  .titles {
    display: flex;
  }
  .titles-item{
    flex: 1;
  }
  .active{
    color:  var(--color-tint);;
  }
  .left{
    margin-top: 7px;
    margin-left: 20px;
  }
</style>
