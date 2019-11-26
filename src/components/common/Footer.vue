<template>
  <div class="footer-wrapper">
    <slot name="title"></slot>
    <div class="up">
        <span>关于我们</span>
        <span>求职指南</span>
        <span>联系我们</span>
        <span>免责声明</span>
    </div>
    <div class="down">贵公网安备 11010602030054</div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      
    }
  },
  components:{},
  created(){
      
  },
  methods:{
      openFooterSlot(){

      }
  }
}
</script>
<style scoped lang="scss">
  .footer-wrapper{
      border-top: 1px solid #eee;
      padding: 10px 0;
      font-size: 12px;
      .up{
          width: 100%;
          display: flex;
          justify-content: space-between;
          text-decoration: underline;
          padding-bottom: 10px;
          span{
              width:25%;
              display: inline-block;
              text-align: center;
          }
      }
  }
</style>