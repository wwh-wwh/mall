<template>

  <div class="goods-item" @click="itemClick">
    <!--    商品图片-->
    <img :src="showGoodsImage" alt="" @load="imageLoad">
    <div class="goods-info">
      <!--   商品信息   -->
      <p>{{goodsItem.title}}</p>
      <!--      商品价格-->
      <span class="price">{{goodsItem.price}}</span>
      <!--      商品收藏数量-->
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      goodsItem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {}
    },
    methods: {
      //监听图片加载完毕动作
      imageLoad() {
        this.$bus.$emit('itemImageLoad')
        // console.log('--------------------imageLoad');
      },
      itemClick() {
        console.log(this.goodsItem.iid||this.goodsItem.item_id);
        this.$router.push('/detail/' + (this.goodsItem.iid||this.goodsItem.item_id))
      }
    },
    computed:{
      showGoodsImage(){
        //当image为空时返回img
        return this.goodsItem.image||this.goodsItem.show.img
      }
    }
  }
</script>

<style scoped>
  .goods-item {
    padding-bottom: 50px;
    position: relative;
    width: 48%;

  }

  .goods-item img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }


  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("../../../assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
