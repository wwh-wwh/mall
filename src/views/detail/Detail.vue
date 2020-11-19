<template>
  <div id="detail">
  <DetailNavBar class="top-nav-bar"/>
  <Scroll ref="scroll">
    <DetailSwiper :top-images="topImages"/>
    <DetailBaseInfo :goods="goods"/>
    <DetailShopInfo :shops="shops"/>
    <DetailGoodsInfo :detail-info="detailInfo" @detailImageLoad="detailImageLoad"/>
    <DetailGoodsPrams :goods-prams="goodsPrams"/>
    <DetailCommentInfo :comment-info="commentInfo"/>
    <good-list :goods="commentList"/>
  </Scroll>
</div>
</template>

<script>
  import Scroll from "components/common/scroll/Scroll";
  import GoodList from "components/content/goods/GoodList";

  import DetailNavBar from "./childComps/DetailNavBar";
  import DetailSwiper from "./childComps/DetailSwiper";
  import DetailBaseInfo from "./childComps/DetailBaseInfo";
  import DetailShopInfo from "./childComps/DetailShopInfo";
  import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
  import DetailGoodsPrams from "./childComps/DetailGoodsPrams";
  import DetailCommentInfo from "./childComps/DetailCommentInfo";


  import {getDetail, Goods, Shops, GoodsPrams, getRecommend} from "../../network/detail"
  import {debounce} from "../../common/utils";
  import {itemImageMixin} from "../../common/mixin";


  export default {
    name: "Detail",
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      Scroll,
      DetailGoodsInfo,
      DetailGoodsPrams,
      DetailCommentInfo,
      GoodList
    },
    mixins: [itemImageMixin]
    ,
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shops: {},
        detailInfo: {},
        goodsPrams: {},
        commentInfo: {},
        commentList: [],
        itemImgListener: null
      }
    },
    created() {
      this.iid = this.$route.params.iid;
      getDetail(this.iid).then(res => {
        const data = res.data.result;
        this.topImages = res.data.result.itemInfo.topImages;
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);
        this.shops = new Shops(data.shopInfo);
        this.detailInfo = data.detailInfo;
        this.goodsPrams = new GoodsPrams(data.itemParams.info, data.itemParams.rule)
        if (data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0]
        }


        console.log(res);
        console.log(this.goods);
        console.log(this.shops);
        console.log(this.detailInfo);
        console.log(this.goodsPrams);
        console.log(this.commentInfo);
      })
      getRecommend().then((res, error) => {
        this.commentList = res.data.data.list
        console.log(this.commentList);
      })
    },
    mounted() {
      const refresh = debounce(this.$refs.scroll.refresh, 5);
      this.itemImgListener = () => {
        refresh()
      }
      this.$bus.$on('itemImageLoad', this.itemImgListener)
    },
    destroyed() {
      this.$bus.$off('itemImageLoad', this.itemImgListener)
    },
    methods: {
      detailImageLoad() {
        this.$refs.scroll.refresh();
        // console.log('发生刷新');
      }
    }
  }
</script>

<style scoped>
  #detail {
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

  .top-nav-bar {
    position: relative;
    background-color: #eeeeee;
    z-index: 9;
  }
</style>
