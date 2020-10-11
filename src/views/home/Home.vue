<template>
  <div id="home">
    <nav-bar class="navBar-home">
      <div slot="center">购物街</div>
    </nav-bar>
<!--    为了完成系统tabcontrol的吸顶功能，做了两个tabControl导航栏当滚动到固定的位置是将better-scroll外面这个tab-Control展示出来-->
    <tab-control :titles="['流行','新款','精选']"
                 class="tabControl"
                 @tabClick="tabClick"
                 ref="tabControl"
                 v-show="isfixed"  />
    <Scroll class="wrapper"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            :pull-up-load="true"
            @pullingUp="pullingUp">

      <home-swiper :banners="banner"  @swiperLoad="swiperLoad"/>
      <recommend-view :recommend="recommend"/>
      <feature-view/>
      <tab-control :titles="['流行','新款','精选']"
                   @tabClick="tabClick"
                   ref="tabControl" />
      <good-list :goods="goods[currentType].list" class="good-list"/>
    </Scroll>
    <back-top @click.native="backTClick" v-show="isBackTopActive"/>

  </div>
</template>

<script>
  import NavBar from "components/common/navBar/NavBar";
  import Scroll from "../../components/common/scroll/Scroll";
  import GoodList from "components/content/goods/GoodList";
  import TabControl from "components/content/tabControl/TabControl";
  import BackTop from "../../components/content/backTop/BackTop";

  import HomeSwiper from "./childComps/HomeSwiper";
  import RecommendView from "./childComps/RecommendView"
  import FeatureView from "./childComps/FeatureView";


  import {getHomeMultidata, getHomeGoods} from "network/home";
  import {debounce} from "common/utils";


  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodList,
      Scroll,
      BackTop
    },
    data() {
      return {
        result: null,
        banner: [],
        recommend: [],
        currentType: 'pop',
        isBackTopActive: false,
        // 存储首页'流行','新款','精选'数据
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        },
        tabOffsetTop:0,
        isfixed:false
      }
    },
    /**
     *调用网络请求方法
     */
    created() {
      this.getHomeMultidata()
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    mounted() {
      //防抖方法，为了避免搜索平凡给服务器过大的压力设置访问刷新时长
      const refresh = debounce(this.$refs.scroll.refresh,20);
      this.$bus.$on('itemImageLoad', () => {
        refresh()//调用Scroll中的refresh刷新方法
      })

    },

    methods: {
      /**
       *点击事件相关的方法
       */
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop';
            break;
          case 1:
            this.currentType = 'new';
            break;
          case 2:
            this.currentType = 'sell';
            break;
        }
      },
      /**
       *回到顶部点击事件
       */
      backTClick() {
        this.$refs.scroll.scrollTo(0, 0)
      },
      //设置BackTop组件滚动到固定位置的显示或隐藏
      contentScroll(position) {
        //监测回到顶部的的距离
        this.isBackTopActive = (-position.y) > 600
        //检测tabControl吸顶的距离
        this.isfixed=(-position.y)>580
      },
      swiperLoad(){
        this.tabOffsetTop=this.$refs.tabControl.$el.offsetTop;//记录tabcontrol距离顶部的距离，使用offsetTop这个属性获取
        console.log(this.tabOffsetTop);
      },

      /**
       * 网络请求相关的方法
       */
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          // this.result=res
          this.banner = res.data.data.banner.list;
          this.recommend = res.data.data.recommend.list;
        })
      },
      //请求GoodList数据
      getHomeGoods(type) {
        //将页码进行加一
        const page = this.goods[type].page + 1
        //传入动态的type与page
        getHomeGoods(type, page).then(res => {

          // ...res.data.list,特殊语法...这三个点是自动解析了数组并自动将系数组按顺序填入到goods[type]的数组中
          this.goods[type].list.push(...res.data.data.list)
          // 将默认的页码进行+1
          this.goods[type].page += 1
          //当上拉加载完之后调用这个方法，表示上拉加载已经完成，方便后来上拉加载再次调用上拉加载更多
          this.$refs.scroll.finishPullUp()
        })
      },
      //上拉加载更多事件
      pullingUp(){
        this.getHomeGoods(this.currentType)
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/css/base.css";

  #home {
    height: 100vh;
  }

  .navBar-home {
    position: fixed;
    right: 0px;
    left: 0px;
    top: 0px;
    z-index: 9;

  }

  /*使用position:sticky这个属性来固定第二个导航栏*/
  /**/
  .tab-control {
    /*position: sticky;*/
    /*top: 44px;*/
    /*!*z-index: 999;*!*/
  }

  .wrapper {
    position: absolute;
    top: 0px;
    bottom: 49px;
  }
  .tabControl{
    position: relative;
    top: 44px;
    z-index: 9;
  }
  .fixed{
    position: fixed;
    right: 0;
    left: 0;
    top: 44px;
  }
</style>
