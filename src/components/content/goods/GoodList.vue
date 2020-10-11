<template>
  <div class="goods-list">
<!--    //获取对应的商品信息，并将商品信息数组分成单个对象传入到GoodListItem中，为了避免key值重复报错，这里使用item.list作为key-->
    <goods-list-item  v-for="item in this.goods" :goodsItem="item" :key="item.list" />
  </div>
</template>

<script>
  import GoodsListItem from "./GoodsListItem";
  export default {
    name: "GoodList",
    components:{
      GoodsListItem
    },
    props:{
      goods:{
        type:Array,
        default(){
          return[]
        }
      }
    },
    data(){
      return{

      }
    }
  }
</script>

<style scoped>

  /*.goods-list{*/
  /*  display: flex;*/
  /*  flex-wrap: wrap;*/
  /*  justify-content: space-around;*/
  /*}*/
  .goods-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2px;
  }
</style>
