import {debounce} from "./utils";

export const itemImageMixin={
  data:function(){
    return{
      itemImfListener:null
    }
  },
  created:function(){
    console.log('这是混入的内容');
  },
  mounted:function(){
    const refresh = debounce(this.$refs.scroll.refresh,20);
    this.itemImgListener=()=>{refresh()};
    this.$bus.$on('itemImageLoad', this.itemImgListener)

  }
}
