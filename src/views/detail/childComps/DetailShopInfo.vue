<template>
  <div class="shop-info" v-if="Object.keys(shops).length!==0">

    <div class="shop-top">
      <img :src="shops.logo" alt="">
      <span class="shop-title">{{shops.name}}</span>
    </div>

    <div class="shop-middle">

      <div class="shop-middle-left">

        <div class="shop-sells">
          <div class="sells-count">
            {{shops.sells | sellCountFilter}}
          </div>
          <div class="sells-text">总销量</div>
        </div>

        <div class="shop-fans">
          <div class="fans-count">
            {{shops.goodsCount}}
          </div>
          <div class="fans-text">全部宝贝</div>
        </div>

      </div>
      <div class="shop-middle-right">
        <table>
          <tr v-for="(item,index) in shops.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{'isBetter-score':item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{'isBetter-better':item.isBetter}">{{item.isBetter ?'高':'低'}}</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="bottom-text">进店逛逛</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailShopInfo",
    props: {
      shops: {
        type: Object
      }
    },
    filters: {
      sellCountFilter(value) {
        if (value > 10000) {
          return (value / 10000).toFixed(1) + '万'
        }
      }
    }
  }
</script>

<style scoped>
  .shop-info {
    margin: 25px 8px;
  }

  .shop-top {
    line-height: 45px;
    display: flex;
    align-items: center;
    font-size: 12px;
  }

  .shop-top img {
    height: 45px;
    width: 45px;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }

  .shop-title {
    margin-left: 20px;
    font-size: 16px;
    color: #222222;
  }

  .shop-middle {
    margin-top: 25px;
    display: flex;
    text-align: center;
    color: #222222;
  }

  .sells-text, .fans-text {
    font-size: 16px;
    color: #222222;
    margin-top: 10px;
  }

  .shop-sells, .shop-fans {
    margin-left: 20px;
  }

  .shop-middle-left {
    display: flex;
    text-align: center;
    padding-right: 10px;
    border-right: 1px solid rgba(100, 100, 100, 0.1);
  }

  .shop-middle-right {
    margin-left: 25px;
  }

  .score {
    padding-left: 10px;
    color: #5ea732;
  }

  .better {
    padding-left: 10px;
    color: #5ea732;
  }

  .isBetter-score {
    color: var(--color-tint);
  }

  .isBetter-better {
    color: var(--color-tint)
  }
  .shop-bottom{
    margin-top: 10px;
    padding-bottom: 20px;
    line-height: 30px;
    text-align: center;
    border-bottom: 3px solid rgba(100,100,100,0.2);
  }
  .bottom-text{
    display: inline-block;
    width: 150px;
    color: #222222;
    background-color: rgba(100,100,100,0.2);
    border-radius: 5px;
  }
</style>
