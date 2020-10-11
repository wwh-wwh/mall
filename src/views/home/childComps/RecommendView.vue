<template>
  <div class="recommend">
    <div v-for="item in recommend" :key="item.link" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" :alt="item.title">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RecommendView",
    props: {
      recommend: {
        type: Array,
        default() {
          return [];
        }
      }
    }
  }
</script>

<style scoped>
  .recommend {
    display: flex;
    text-align: center;
    width: 95%;
    font-size: 12px;
    padding: 10px 0px 10px;
    border-bottom: 8px solid #eee;
  }
  .recommend-item{
    flex: 1;
  }
  .recommend-item img{
    width: 65%;
    height: 65%;
    /*margin-top: 10px;*/
  }
</style>
