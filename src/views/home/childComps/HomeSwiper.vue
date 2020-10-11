<template>
  <swiper>
    <swiper-item v-for="item in banners" :key="item.link" id="swiperItem">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="homeSwiperLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'

  export default {
    name: "HomeSwiper",
    data(){
      return{
        isSwiper:false
      }
    },
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
    methods:{
      homeSwiperLoad(){
        if(!this.isSwiper){
          this.$emit('swiperLoad')
          this.isSwiper=!this.Swiper
        }

      }
    }
  }
</script>

<style scoped>
#swiperItem{
  padding-top: 44px;
}
</style>
