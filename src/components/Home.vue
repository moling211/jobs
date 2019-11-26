<template>
<div>
<div>
  <!-- 头部 -->
  <div class="nav-wrapper" :class="navActive?'navActive':''">
    <Nav></Nav>
  </div>
  <div class="home-wrapper" ref="homeScroll">
    <div class="home">
      <!-- banner -->
      <el-carousel trigger="click" height="150px" class="banner-wrapper">
        <el-carousel-item>
          <img src="./home/banner1.jpg" alt="" class="bg-img">
        </el-carousel-item>
        <el-carousel-item>
          <img src="./home/banner2.jpg" alt="" class="bg-img">
        </el-carousel-item>
      </el-carousel>
      <!-- 导航三个圈 -->
      <div class="quan-wrapper">
        <router-link class="quan-item" tag="div" :to="{path:'/Home/Person'}">
          <div class="ball-nav"  style="background:#FFBD55"><i class="el-icon-s-custom"></i></div>
          <p>找人才</p>
        </router-link>
        <router-link class="quan-item" tag="div" :to="{path:'/Home/Conmunite'}" >
          <div class="ball-nav" style="background:#22DFE1"><i class="el-icon-date"></i></div>
          <p>项目合伙人</p>
        </router-link>
        <router-link class="quan-item" tag="div" :to="{path:'/Home/Make'}" >
          <div class="ball-nav" style="background:#5589FF"><i class="el-icon-menu"></i></div>
          <p>人才定制</p>
        </router-link>
      </div>
      <Aside></Aside>
      <!-- 公告 -->
      <div class="notice-wrapper">
        <div class="left">
          <p>公告</p>
        </div>
        <div class="middle">2</div>
        <div class="right">更多<i class="el-icon-arrow-right"></i></div>
      </div>
      <Aside></Aside>
      <!-- 推荐合伙人 -->
      <div class="conmunite-wrapper">
        <h3 class="title red"><i class="el-icon-user i-title"></i>推荐合伙人 <span class="span-title">查看更多<i class="el-icon-arrow-right"></i></span></h3>
        <ul>
          <li v-for="(item,index) in conmuniteList" :key="index">
            <p class="time-wrapper">
              <span>项目名称：</span>
              <span class="text-color">{{item.name}}</span>
              <span class="time">{{item.time}}</span>
            </p>
            <p>
              <span>项目资金：</span>
              <span class="text-red">{{item.money}}</span>
            </p>
            <p class="time-wrapper">
              <span>项目类型：</span>
              <span class="text-color">{{item.type}}</span>
              <span class="tag" :class="item.isRenzheng==1?'tagTrue':'tagFalse'">{{item.isRenzheng==1?'已认证':'未认证'}}</span>
            </p>
          </li>
        </ul>
      </div>
      <Aside></Aside>
      <!-- 推荐求职 -->
      <div class="recomend-wrapper">
        <h3 class="title blue"><i class="el-icon-office-building i-title"></i>推荐求职 <span class="span-title yellow">换一批<i class="el-icon-refresh"></i></span></h3>
        <ul>
          <li v-for="(item,index) in recomendList" :key="index">
            <p class="time-wrapper text-color">
              <span>{{item.name}} {{item.sex}} 求职：{{item.work}}</span>
              <span class="time">{{item.time}}</span>
            </p>
            <p>
              <span>{{item.school}} {{item.workyear}} <b class="text-red">{{item.money}}</b></span>
            </p>
            <p class="time-wrapper">
              <span>期望工作地点</span>
              <span>{{item.place}}</span>
              <span class="tag" :class="item.isRenzheng==1?'tagTrue':'tagFalse'">{{item.isRenzheng==1?'已认证':'未认证'}}</span>
            </p>
          </li>
        </ul>
      </div>
      <Aside></Aside>
      <!-- 热门求职 -->
      <div class="hotWork-wrapper">
        <h3 class="title blue"><i class="el-icon-chat-line-round i-title"></i>热门求职 <span class="span-title">查看更多<i class="el-icon-arrow-right"></i></span></h3>
        <div class="hotwork">
          <span class="text-color" v-for="(item,index) in workList" :key="index">{{item}}</span>
        </div>
        <el-carousel trigger="click" height="80px" class="banner-wrapper">
          <el-carousel-item>
            <img src="./home/banner1.jpg" alt="" class="bg-img">
          </el-carousel-item>
          <el-carousel-item>
            <img src="./home/banner2.jpg" alt="" class="bg-img">
          </el-carousel-item>
        </el-carousel>
        <!-- 登录注册同行入驻 -->
        <div class="login-wrapper">
          <span style="padding-right:10px;border-right:1px solid #ddd;">登录</span>
          <span style="padding:0 10px;border-right:1px solid #ddd;">注册</span>
          <span style="padding-left:10px;">同行入驻 </span>
        </div>
      </div>
      <Footer></Footer>
    </div>
    
  </div>
</div>
</div>
</template>

<script>
import Nav from './common/Nav'
import Aside from './common/Aside'
import BScroll from 'better-scroll'
import Footer from './common/Footer'
export default {
  name: 'Mine',
  components:{Nav,Aside,Footer},
  data () {
    return {
      yScroll:0,
      navActive:false,
      conmuniteList:[],
      recomendList:[],
      workList:[]
    }
  },
  watch:{
		data(){
			setTimeout(()=>{
				this.homeScroll.refresh()
			},20)
		}
	},
  created () {
    this.conmuniteList=[
      {name:'开个茶艺馆',money:'20万',type:'休闲娱乐',isRenzheng:1,time:'2019-11-21'},
      {name:'开个茶艺馆',money:'100万',type:'休闲娱乐',isRenzheng:1,time:'2019-11-19'},
      {name:'开个茶艺馆',money:'120万',type:'休闲娱乐',isRenzheng:0,time:'2019-11-15'}
    ],
    this.recomendList=[
      {name:'李章红',sex:'女',yearOld:24,work:'营养师',school:'大专',workyear:'3-5年',money:'3000-5000元',isRenzheng:1,time:'2019-11-21',place:'贵阳市'},
      {name:'李旭',sex:'男',yearOld:36,work:'厨师',school:'大专',workyear:'8-10年',money:'面议',isRenzheng:1,time:'2019-11-21',place:'长沙市'},
      {name:'张建华',sex:'男',yearOld:32,work:'园艺工程师',school:'大专',workyear:'3-5年',money:'3000-5000',isRenzheng:1,time:'2019-11-21',place:'杭州市'},
      {name:'欧阳小琪',sex:'女',yearOld:32,work:'教师',school:'大专',workyear:'3-5年',money:'3000-5000',isRenzheng:1,time:'2019-11-21',place:'杭州市'},
      {name:'张丹',sex:'女',yearOld:32,work:'前端工程师',school:'大专',workyear:'3-5年',money:'3000-5000',isRenzheng:1,time:'2019-11-21',place:'杭州市'}
    ],
    this.workList=['营养师','厨师','园艺工程师','教师','前端工程师','营养师','园艺工程师','护士长','教师','装修设计师','电子商务师','厨师','园艺工程师','教师','前端工程师','营养师','园艺工程师']
    setTimeout(()=>{
      this.$nextTick(() => {
        this._initScroll();
      })
    },20)
    
  },
  methods:{
    _initScroll(){
      if (!this.homeScroll) {
        this.homeScroll = new BScroll(this.$refs.homeScroll, {
          click: true,
          useTransition:false//阻止iphone滑动卡顿
        })
        this.homeScroll.on('scroll',(pos)=>{
          // 使用abs绝对值（否则 pos.y拿到值是负数）
          this.yScroll = Math.abs(Math.round(pos.y));
          // console.log(this.yScroll);
          //判断滑动距离大于"商品介绍"元素时, 吸顶title,否则隐藏
          if(this.yScroll >= 90) {
            this.navActive = true;
          }else {
            this.navActive = false;
          }
        })
      } else {
        // this.homeScroll.refresh()
      }
    }
  },
  destroy() {
    this.homeScroll.destroy()
  },
  destroyed() {
    this.$refs.homeScroll && this.$refs.homeScroll.destroy()
  },
}
</script>
<style scoped lang="scss">
  @import './common/public.css';
  .nav-wrapper{
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 50;
  }
  .navActive{
    background: rgba($color: $active, $alpha: 0.8)
  }
  .home-wrapper{
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 65px;
    z-index:30;
    .home{
      width: 100%;
      .banner-wrapper{
        .bg-img{
          width: 100%;
          height: 150px;
        }
      }
      .quan-wrapper{
        padding:0 5%;
        height:100px;
        display: flex;
        justify-content: center;
        .quan-item{
          width: 32%;
          height: 100%;
          .ball-nav{
            width: 55px;
            height: 55px;
            margin: 10px auto;
            margin-bottom: 5px;
            border-radius: 50%;
            line-height: 65px;
            color: #fff;
            i{
              font-size: 30px;
              font-weight: bold;
            }
          }
          p{
            margin:0px;
          }
        }
      }
      .notice-wrapper{
        width: 100%;
        display: flex;
        padding: 5px 0;
        justify-content: space-between;
        .left{
          width: 15%;
          p{
            color: $active;
            font-weight: bold;
            font-size: 14px;
            background: #3D3C41;
            width: 40px;
            height:22px;
            line-height: 22px;
            margin: 0 auto;
          }
        }
        .middle{
          width: 70%;
          text-align: left;
          height:25px;
          line-height: 25px;
        }
        .right{
          width: 15%;
          height:25px;
          line-height: 25px;
          text-align: right;
        }
      }
      .conmunite-wrapper{
        text-align: left;
        width: 100%;
        .red{
          color: #FF0000;
        }
        ul{
          padding: 0;
          margin: 0;
          li{
            list-style: none;
            border-top:$borderTop;
            padding-left: 5px;
            p{
              margin: 8px 0;
            }
            .time-wrapper{
              position: relative;
              .time{
                position: absolute;
                right: 10px;
                padding: 1px;
              }
              .tag{
                position: absolute;
                right: 10px;
                padding: 1px;
                font-size: 12px;
                border-radius: 2px;
              }
              .tagTrue{
                border:1px solid $active;
                color: $active;
                background: rgba($color: $active, $alpha: 0.2);
              }
              .tagFalse{
                border:1px solid $err;
                color: $err;
                background: rgba($color: $err, $alpha: 0.2);
              }
            }
          }
        }
      }
      .recomend-wrapper{
        text-align: left;
        width: 100%;
        .blue{
          color: #588BFF;
          .yellow{
            color:rgba($color: $active, $alpha: 1);
          }
        }
        ul{
          padding: 0;
          margin: 0;
          li{
            list-style: none;
            border-top:$borderTop;
            padding-left: 5px;
            p{
              margin: 8px 0;
            }
            .time-wrapper{
              position: relative;
              .time{
                position: absolute;
                right: 10px;
                padding: 1px;
              }
              .tag{
                position: absolute;
                right: 10px;
                padding: 1px;
                font-size: 12px;
                border-radius: 2px;
              }
              .tagTrue{
                border:1px solid $active;
                color: $active;
                background: rgba($color: $active, $alpha: 0.2);
              }
              .tagFalse{
                border:1px solid $err;
                color: $err;
                background: rgba($color: $err, $alpha: 0.2);
              }
            }
          }
        }
      }
      .hotWork-wrapper{
        text-align: left;
        width: 100%;
        .blue{
          color: #588BFF;
        }
        .hotwork{
          border-top:$borderTop;
          padding: 10px 5px;
          span{
            display: inline-block;
            margin-right: 8px;
          }
        }
        .login-wrapper{
          padding:10px 0;
          text-align: center;
        }
      }
    }
  }
</style>