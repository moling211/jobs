<template>
  <div class="news-wrapper" ref="newsScroll">
    <Slotcom>
      <span slot="menuText">消息</span>
      <div slot="slot-container" class="news-list">
        <ul>
          <li v-for="(item,index) in newsList" :key="index" @click="jumpTo(item)">
            <span class="tag" :class="item.isNew==1?'active':''">•</span>
            <span class="text">您收到 "{{item.name}}" 的求职申请</span>
            <span class="time">{{item.time}}</span>
          </li>
        </ul>
      </div>
    </Slotcom>
    <newsDetail v-if="detailShow" :itemList="itemList"></newsDetail>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import Slotcom from './common/Slotcom'
import newsDetail from './news/newsDetail'
export default {
  name: 'News',
  components:{Slotcom,newsDetail},
  data () {
    return {
      newsList:[],
      detailShow:false,
      itemList:''
    }
  },
  created () {
    this.newsList=[
      {name:'李元芳',isNew:1,time:'2019-11-21',company:'驰通科技集团',wantPosition:'园艺设计'},
      {name:'赵云',isNew:1,time:'2019-11-21',company:'驰通科技集团',wantPosition:'前端工程师'},
      {name:'程咬金',isNew:1,time:'2019-11-21',company:'驰通科技集团',wantPosition:'运维'},
      {name:'马可波罗',isNew:0,time:'2019-11-20',company:'驰通科技集团',wantPosition:'平面设计'}
    ],
    this.$nextTick(() => {
      if (!this.newsScroll) {
        this.newsScroll = new BScroll(this.$refs.newsScroll, {
          click: true
         })
      } else {
        this.newsScroll.refresh()
      }
    })
  },
  methods:{
    jumpTo(item){
      console.log(1);
      this.itemList = item;
      this.detailShow = true
      // this.$router.push({name:'newsDetail',params:{item:item}})
    }
  },
  destroy() {
    this.newsScroll.destroy()
  },
  destroyed() {
    this.$refs.newsScroll && this.$refs.newsScroll.destroy()
  },
}
</script>
<style scoped lang="scss">
  .news-wrapper{
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 60px;
    z-index:30;
    .news-list{
      ul{
        padding: 0;
        margin: 0;
        li{
          list-style: none;
          display: flex;
          height: 35px;
          line-height: 35px;
          text-align: left;
          font-size: 14px;
          justify-content: space-between;
          border-bottom: 1px solid #eeeeee;
          span{
            display: inline-block;
          }
          span.active{
            color: red;
          }
          .tag{
            width: 5%;
            color: transparent;
            text-align: center;
            font-size: 20px;
          }
          .text{
            width: 70%;
            color: #3D3C41;
          }
          .time{
            width: 25%;
          }
        }
      }
    }
  }
</style>