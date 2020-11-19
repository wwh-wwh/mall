<template>
  <div class="goods-prams" v-if="Object.keys(goodsPrams).length!==0">
    <div class="prams-size">
      <table v-for="(table,index) in goodsPrams.sizes " :key="index">
        <tr v-for="(tr,indey) in goodsPrams.sizes[index]" :key="indey">
          <td v-for="(td,indez) in tr" :key="indez" class="size-td">{{td}}</td>
        </tr>
      </table>
    </div>
    <div class="prams-info">
      <table>
        <tr v-for="(item,index) in goodsPrams.infos" :key="index">
          <td class="prams-key">{{item.key}}</td>
          <td class="prams-value">{{item.value}}</td>
        </tr>
      </table>
    </div>
    <div class="info-img" v-if="goodsPrams.image.length !== 0">
      <img :src="goodsPrams.image" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailGoodsPrams",
    props: {
      goodsPrams: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .goods-prams {
    padding: 20px 15px;
    font-size: 14px;
    border-bottom: 1px solid #f2f5f8;
  }

  .goods-prams table {
    width: 100%;
    border-collapse: collapse;

  }

  .goods-prams table tr {
    height: 42px;
  }

  .goods-prams table tr td {
    border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  }

  .prams-key {
    width: 30px;
    color: #666666;
  }

  .prams-value {
    padding-left: 30px;
    color: var(--color-tint);
  }

  .info-img img {
    width: 100%;
  }

</style>
