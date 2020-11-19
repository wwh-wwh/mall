<template>
  <div class="detail-base-info" v-if="Object.keys(goods).length!==0">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goods.newPrice}}</span>&nbsp;
      <span class="o-price" v-if="goods.oldPrice!==null">{{goods.oldPrice}}</span>&nbsp;
      <span :class="{discount:goods.discount!==''}">{{goods.discount}}</span>&nbsp;
    </div>
    <div class="item-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.service[goods.columns.length-1].name}}</span>&nbsp;
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in goods.service.length-1" :key="index">
        <span><img :src="goods.service[index-1].icon" alt="">{{goods.service[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBaseInfo",
    props: {
      goods: {
        type: Object
      }
    },
    data() {
      return {
        columns: {
          type: Array,
          default: []
        }
      }
    },
mounted() {
  console.log(this.goods);
},
    destroyed() {
      this.columns = this.goods.columns
    }
  }
</script>

<style scoped>
  .detail-base-info {
    color: #222222;
    margin-top: 10px;
    padding-left: 5px;
    padding-bottom: 10px;
    border-bottom: 5px solid rgba(100,100,100,0.1);
  }


  .info-price {
    margin-top: 10px;
    color: #222222;
  }

  .n-price {
    color: var(--color-tint);
    font-size: 24px;
  }

  .o-price {
    margin-left: 5px;
    color: #666666;
    text-decoration: line-through;
  }

  .discount {
    background-color: #ff5777;
    border-radius: 8px;
    color: #f6f6f6;
    font-size: 12px;
    padding: 2px 5px;
  }

  .item-other {
    margin-top: 10px;
    font-size: 12px;
    line-height: 30px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(100,100,100,0.1);
    color: #666666;
  }
  .info-service{
    font-size: 12px;
    line-height: 30px;
    margin-top: 10px;
    color: #333;
    display: flex;
    justify-content: space-between;
  }
  .info-service-item img{
    height: 12px;
    width: 12px;
    padding-top: 2px;
  }

</style>
