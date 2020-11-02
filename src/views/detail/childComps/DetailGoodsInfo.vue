<template>
  <div id="detail-info" v-if="Object.keys(detailInfo).length!==0">
    <div class="info-desc">
      <div class="start"></div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">
      {{detailInfo.detailImage[0].key}}
    </div>
    <div class="detail-image" v-for="item in detailInfo.detailImage[0].list" :key="item">
      <img :src="item" @load="imageload" alt="详情图片">
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailGoodsInfo",
    props: {
      detailInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        currentIndex: 0,
        imageList: Number
      }
    },

    methods: {
      imageload() {
        // console.log(this.currentIndex+'currentIndex');
        // console.log(this.imageList+'imageList');
        if (++this.currentIndex > this.imageList) {
          console.log('-----');
          this.$emit('detailImageLoad')
        }
      }
    },
    watch: {
      detailInfo() {
        this.imageList = this.detailInfo.detailImage[0].list.length
      }
    }
  }
</script>

<style scoped>
  .info-desc .start, .info-desc .end {
    width: 90px;
    height: 2px;
    background-color: #a3a3a5;
    position: relative;
  }

  .info-desc .start {
    float: left;
  }

  .info-desc .end {
    float: right;
  }

  .info-desc .start:before, .info-desc .end:after {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: #333;
    bottom: 0;
  }

  .info-desc .end:after {
    right: 0;
  }
.info-desc .desc,.info-key{
  padding-bottom: 15px;
  padding-top: 15px;
}
  .detail-image img {
    width: 100%;
  }
</style>
