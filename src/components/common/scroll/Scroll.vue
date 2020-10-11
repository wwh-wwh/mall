<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import Bscroll from 'better-scroll'
  export default {
    name: "Scroll",
    props:{
      probeType:{
        type:Number,
        default:0
      },
      //是否进行监听滚动
      pullUpLoad:{
        type:Boolean,
        default: false
      }
    },
    data(){
      return{
        scroll:null
      }
    },
    /**
     * 封装的better-scroll的主方法
     */
    mounted() {
      //使用ref准确获取wrapper
      this.scroll=new Bscroll(this.$refs.wrapper,{
        //设置click点击事件为true，如果是false的话在better-scroll中的点击事件将不会被触发
        click:true,
        //设置滚动监听的类型，
        probeType:this.probeType,
        //是否进行上拉加载更多，由Props进行传值
        pullUpLoad:this.pullUpLoad
      })

      //获取窗口滚动的距离，并将放方法使用$emit自定义事件传递出去
      // this.scroll.on('scroll',(position)=>{
      //   this.$emit('scroll',position)
      // })
      if(this.probeType===2 || this.probeType===3){
        this.scroll.on('scroll',(position)=>{
          this.$emit('scroll',position)
          // console.log(position.y)
        })
      }
      if (this.pullUpLoad){
        this.scroll.on('pullingUp',()=>{
          // console.log('监听滚动但底部');
          this.$emit('pullingUp')
        })
      }
      // this.scroll.on('pullingUp',()=>{
      //   this.$emit('pullingUp')
      // })
    },
    methods:{
      //为了避免调用方法链太长，所一这里封装了方法
      scrollTo(x,y,time=500){
        //这种语法是先判断this.scroll是否有为空，若果为空的话就不会执行后面的代码了
        this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x,y,time)
      },
      //刷新better-scroll
      refresh(){
        this.scroll && this.scroll.refresh()
      },
      // 为了避免调用方法链太长，所一这里封装了方法,上拉加载更多调用
      finishPullUp(){
        this.scroll.finishPullUp()
      }
    }
  }
</script>

<style scoped>
.wrapper{
  /*height:;*/
}
</style>
