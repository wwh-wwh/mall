<template>
  <div>
    <div class="comment-info" v-if="Object.keys(commentInfo).length!==0">
      <div class="info-header">
        <div class="header-title">用户评价</div>
        <div class="header-more">更多>></div>
      </div>
      <div class="info-user">
        <img :src="commentInfo.user.avatar" alt="">
        <span>{{commentInfo.user.uname}}</span>
      </div>
      <div class="info-detail">
        <p>{{commentInfo.content}}</p>
        <div>
          <span>{{commentInfo.created|showDate }}</span>
          <span>{{commentInfo.style}}</span>
        </div>
      </div>
      <div class="info-images">
        <img v-for="(item,index) in commentInfo.images" :src="item" :key="index" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  import {formatDate} from "@/common/utils";

  export default {
    name: "DateilCommentInfo",
    props: {
      commentInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    //简时间戳转换为年月日
    filters: {
      showDate(value) {
        let date = new Date(value * 1000);
        return formatDate(date, 'yyyy年MM月dd日')
      }
    },
  }


</script>

<style scoped>
  .comment-info {
    padding: 5px 15px;
    border-bottom: 1px solid rgba(100, 100, 100, 1);
  }

  .info-header {
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid rgba(100, 100, 100, 0.3);
  }

  .header-title {
    /*line-height: 10px;*/
    float: left;
  }

  .header-more {
    float: right;
  }

  .info-user {
    height: 60px;
    line-height: 60px;
  }

  .info-user img {
    height: 60px;
    width: 60px;
    border-radius: 30px;
  }

  .info-user span {
    position: relative;
    top: -20px;
    margin-left: 15px;
  }

  .info-detail span {
    padding-left: 5px;
  }

  .info-detail p {
    padding-top: 10px;
  }

  .info-images img {
    padding: 10px 10px 0 0;
    width: 48%;
  }
</style>
