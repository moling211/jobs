<template>
  <div class="newsDetail-wrapper" ref="newsDetailScroll">
    <div>
      <Slotcom>
          <span slot="menuText">消息</span>
          <div slot="slot-container" class="news-detail">
            <p>标题：<span class="txt">收到“{{itemList.name}}”的求职申请</span></p>
            <p>内容：<span class="txt">{{itemList.company}}，您好，您发布的“{{itemList.wantPosition}}”职位收到“{{itemList.name}}”的求职申请，请注意查看！</span></p>
            <div class="caozuo-btns">
              <span class="look-btn" @click="lookResume">查看简历</span>
              <span class="delete-btn">删除信息</span>
            </div>
          </div>
      </Slotcom>
      <Aside></Aside>
      <Footer>
          <p slot="title" style="height:14px;line-height:14px;">
              <span style="border-right:1px solid #999;padding-right:10px;">驰通科技有限公司</span>
              <span style="margin-left:10px;">同行入驻</span>
          </p>
      </Footer>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import Slotcom from '../common/Slotcom'
import Aside from '../common/Aside'
import Footer from '../common/Footer'
export default {
  name: 'newsDetail',
  data () {
    return {
      // itemList:this.$route.params.itemList,
    }
  },
  props:['itemList'],
  methods:{
    lookResume(){
      this.$router.push({name:'Resume'})
    }
  },
  components:{Slotcom,Aside,Footer},
  created () {
    this.$nextTick(() => {
      if (!this.newsDetailScroll) {
        this.newsDetailScroll = new BScroll(this.$refs.newsDetailScroll, {
          click: true
         })
      } else {
        this.newsDetailScroll.refresh()
      }
    })
  },
  destroy() {
    this.newsDetailScroll.destroy()
  },
  destroyed() {
    this.$refs.newsDetailScroll && this.$refs.newsDetailScroll.destroy()
  },
}
</script>
<style scoped lang="scss">
  .newsDetail-wrapper{
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 60px;
    z-index:30;
    background: #fff;
    .news-detail{
        padding: 0 10px;
        text-align: left;
        min-height:350px;
        p{
          margin: 10px 0;
          .txt{
            color: #3D3C41;
            font-size: 14px;
          }
        }
        .caozuo-btns{
          height: 40px;
          line-height: 40px;
          display: flex;
          justify-content: center;
          span{
            display: inline-block;
            width: 90px;
            height: 30px;
            line-height: 30px;
            border-radius: 3px;
            text-align: center;
            margin: 0 5px;
          }
          .look-btn{
            background: rgba($color: $active, $alpha: 1.0);
            color: #fff;
          }
          .delete-btn{
            background: rgba($color: #3D3C41, $alpha: 1.0);
            color:  $active;
          }
        }
    }
  }
</style>