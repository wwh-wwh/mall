<template>
  <div id="detail">
    <DetailNavBar class="top-nav-bar"/>
    <Scroll ref="scroll">
      <DetailSwiper :top-images="topImages"/>
      <DetailBaseInfo :goods="goods"/>
      <DetailShopInfo :shops="shops"/>
      <DetailGoodsInfo :detail-info="detailInfo" @detailImageLoad="detailImageLoad"/>
      <DetailGoodsPrams :goods-prams="goodsPrams"/>
    </Scroll>
  </div>
</template>

<script>
  import Scroll from "components/common/scroll/Scroll";

  import DetailNavBar from "./childComps/DetailNavBar";
  import DetailSwiper from "./childComps/DetailSwiper";
  import DetailBaseInfo from "./childComps/DetailBaseInfo";
  import DetailShopInfo from "./childComps/DetailShopInfo";
  import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
  import DetailGoodsPrams from "./childComps/DetailGoodsPrams";


  import {getDetail, Goods,Shops,GoodsPrams} from "../../network/detail"


  export default {
    name: "Detail",
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      Scroll,
      DetailGoodsInfo,
      DetailGoodsPrams
    },
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shops:{},
        detailInfo:{},
        goodsPrams:{}
      }
    },
    created() {
      this.iid = this.$route.params.iid;
      getDetail(this.iid).then(res => {
        const data = res.data.result;
        this.topImages = res.data.result.itemInfo.topImages;
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);
        this.shops=new Shops(data.shopInfo);
        this.detailInfo=data.detailInfo;
        this.goodsPrams=new GoodsPrams(data.itemParams.info,data.itemParams.rule)

        console.log(res);
        console.log(this.goods);
        console.log(this.shops);
        console.log(this.detailInfo);
        console.log(this.goodsPrams);
      })
    },
    methods:{
      detailImageLoad(){
        console.log('=====');
        this.$refs.scroll.refresh();
      }
    }
  }
</script>

<style scoped>
  #detail{
    /*relative:对象遵循正常文本流，现对定位*/
    position: relative;
    z-index: 90;
    background-color: #eeeeee;
    height: 100vh;
  }
  .wrapper {
    height: calc(100% - 51px);
    /*overflow: hidden;*/
  }
  .top-nav-bar{
    position: relative;
    background-color: #eeeeee;
    z-index: 9;
  }
</style>
