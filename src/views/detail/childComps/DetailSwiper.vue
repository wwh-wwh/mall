<template>
  <div>
    <swiper>
      <swiper-item class="swiper-item" v-for="item in topImages" :key="item">
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {Swiper,SwiperItem} from "../../../components/common/swiper/index";


  export default {
    name: "DetailSwiper",
    components:{
      Swiper,
      SwiperItem
    },
    data(){
      return{

      }
    },
    props:{
      topImages:{
        type:Array,
        default(){
          return[]
        }
      }
    }
  }
</script>

<style scoped>
.swiper-item{
  height: 300px;
  overflow: hidden;
}
</style>
