<template>
  <div class="mine-wrapper" ref="mineScroll">
    <div>
      <!-- 头部 -->
      <div class="mine-head">
        <div class="img-wrapper">
          <img src="../assets/title.jpg" alt="">
        </div>
        <p class="type">普通雇主</p>
        <p class="company">驰通科技集团有限公司</p>
        <p class="btn">退出</p>
      </div>
      <Aside></Aside>
      <!-- list -->
      <div class="mine-list">
        <div class="list-item" v-for="(item,index) in list" :key="index" @click="toGo(index)">
          <i :class="item.tag" :style="{color:item.color}"></i>
          <span class="txt">{{item.name}}</span>
          <span class="num text-red">{{item.num}}</span>
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>
      <Aside></Aside>
      <div class="mine-list">
        <div class="list-item" v-for="(item,index) in anotherList" :key="index">
          <i :class="item.tag" :style="{color:item.color}"></i>
          <span class="txt">{{item.name}}</span>
          <span class="num">{{item.num}}</span>
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>
      <Aside></Aside>
      <Footer>
        <p slot="title" style="margin-top:0;font-size:14px;height:14px;line-height:14px;">
          <span style="padding-right:10px;border-right:1px solid rgb(221, 221, 221);">驰通科技集团有限公司</span><span style="padding-left:10px;">同行入驻</span>
        </p>
      </Footer>
    </div>
    
  </div>
</template>

<script>
import Aside from './common/Aside'
import BScroll from 'better-scroll'
import Footer from './common/Footer'
export default {
  name: 'Mine',
  data () {
    return {
      list:[
        {tag:'el-icon-s-tools',name:'资料设置',color:'#00C7F2',num:''},
        {tag:'el-icon-s-promotion',name:'发布招聘/项目',color:'#F200B1',num:''},
        {tag:'el-icon-menu',name:'我的发布',color:'#F25000',num:''},
        {tag:'el-icon-s-order',name:'收到求职简历',color:'#009AF2',num:'12'},
        {tag:'el-icon-s-claim',name:'我的定制',color:'#F2B300',num:''},
        {tag:'el-icon-star-on',name:'我的收藏',color:'#0044F2',num:''},
      ],
      anotherList:[
        {tag:'el-icon-s-tools',name:'我的人才库',color:'#F20061',num:'需要开通入驻'},
      ]
    }
  },
  watch:{
		data(){
			setTimeout(()=>{
				this.mineScroll.refresh()
				},20)
		}
	},
  methods:{
    toGo(index){
      if(index==1){
        this.$router.push({path:'/Issue'})
      }else{
        // console.log("去",index);
        this.$router.push({name:'MineList',params:{index:index}}); 
        sessionStorage.setItem("type",index);
      }
    }
  },
  components:{Aside,Footer},
  created () {
    this.$nextTick(() => {
      if (!this.mineScroll) {
        this.mineScroll = new BScroll(this.$refs.mineScroll, {
          click: true
         })
      } else {
        // this.mineScroll.refresh()
      }
    })
  },
  destroy() {
    this.mineScroll.destroy()
  },
  destroyed() {
    this.$refs.mineScroll && this.$refs.mineScroll.destroy()
  },
}
</script>
<style scoped lang="scss">
  @import './common/public.css';
  .mine-wrapper{
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 60px;
    z-index:30;
    background: #fff;
    .mine-head{
      position: relative;
      padding: 15px 10px;
      text-align: center;
      color: #fff;
      background: rgba($color: $active, $alpha: 1.0);
      p{
        margin: 10px 0
      }
      .img-wrapper{
        width: 65px;
        height:65px;
        margin: 0 auto;
        border-radius: 50%;
        overflow: hidden;
        border:2px solid #fff;
        img{
          width: 65px;
          height:65px;
          border-radius: 50%;
        }
      }
      .type{
        color: #000;
      }
      .btn{
        position: absolute;
        right: 10px;
        top: 10px;
        width: 50px;
        height: 20px;
        line-height: 20px;
        border-radius: 15px;
        border: 1px solid #fff;
      }
    }
    // list
    .mine-list{
      .list-item{
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #ddd;
        font-size: 14px;
        span{
          display: inline-block;
          height: 40px;
          line-height: 40px;
          text-align: left;
        }
        .txt{
          width: 55%;
        }
        .num{
          width: 29%;
          text-align: right;
        }
        i{
          display: inline-block;
          width: 8%;
          height: 40px;
          line-height: 40px;
          font-size: 16px;
        }
      }
    }
  }
</style>