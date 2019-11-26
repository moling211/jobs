<template>
<div>
  <div class="resume-wrapper" ref="resumeScroll">
    <div>
      <Slotcom>
        <span slot="menuText">个人简历</span>
        <span slot="menuIcon"><i class="el-icon-user" @click="toMine"></i></span>
        <div slot="slot-container" class="resume-detail">
          <!-- 头像 基础信息 -->
          <div class="base-wrapper">
            <div class="img-wrapper">
              <img src="../../assets/title.jpg" alt="">
            </div>
            <div class="base-main">
              <p class="text-color">圆圆 <span class="tagTrue tag">已认证</span></p>
              <p class="sex-p">女 26岁 本科<span class="right">2019-11-23 浏览量：9999+</span></p>
            </div>
          </div>
          <div class="main-wrapper">
            <p>工作经验：<span class="text-color">3-5年</span></p>
            <p>期望月薪：<span class="text-color">3000-5000元</span></p>
            <p>工作地点：<span class="text-color">观山湖</span></p>
            <p>求职意向：<span class="text-color">园艺设计/园林规划</span></p>
          </div>
          <Aside></Aside>
          <!-- 工作经历 -->
          <div class="work-wrapper">
            <h5 class="resume-title">工作经历</h5>
            <div class="resume-list">
              <p class="time">2018.03-2019.02</p>
              <p class="detail">贵州园艺之家有限公司，负责公司园林规划项目设计</p>
            </div>
            <div class="resume-list">
              <p class="time">2018.03-2019.02</p>
              <p class="detail">贵州园艺之家有限公司，负责公司园林规划项目设计</p>
            </div>
          </div>
          <Aside></Aside>
          <!-- 教育经历 -->
          <div class="edu-wrapper">
            <h5 class="resume-title">教育经历</h5>
            <div class="resume-list">
              <p class="time">2018.03-2019.02</p>
              <p class="detail">贵州园艺之家有限公司，负责公司园林规划项目设计</p>
            </div>
          </div>
          <Aside></Aside>
          <!-- 专业技能 -->
          <div class="techno-wrapper">
            <h5 class="resume-title">专业技能</h5>
            <p>熟练使用CAD绘图设计</p>
            <p>熟练使用Photoshop</p>
            <p>熟练使用其他各种专业设计软件</p>
          </div>
          <Aside></Aside>
          <!-- 自我描述 -->
          <div class="myself-wrapper">
            <h5 class="resume-title">自我描述</h5>
            <p>工作踏实认真，勤奋努力，富有朝气，每天都充满了工作的力量，为梦想和事业努力拼搏。</p>
          </div>
          <Aside></Aside>
        </div>
      </Slotcom>
      <Footer>
        <p slot="title" style="margin-top:0;font-size:14px;height:14px;line-height:14px;">
          <span style="padding-right:10px;border-right:1px solid rgb(221, 221, 221);">圆圆</span><span style="padding-left:10px;">同行入驻</span>
        </p>
      </Footer>
    </div>
  </div>
  <!-- 底部栏 -->
  <div class="Bottom-Mine">
    <div class="text-color">
      <i class="el-icon-star-off"></i>
      <p>收藏</p>
    </div>
    <div class="text-color">
      <i class="el-icon-phone-outline"></i>
      <p>电话</p>
    </div>
    <div class="yaoqing" style="width:40%;">
      邀请面试
    </div>
  </div>
</div>
</template>

<script>
import BScroll from 'better-scroll'
import Slotcom from '../common/Slotcom'
import Aside from '../common/Aside'
import Footer from '../common/Footer'
export default {
  name: 'Resume',
  data () {
    return {
      
    }
  },
  watch:{
		data(){
			setTimeout(()=>{
				this.resumeScroll.refresh()
				},20)
		}
	},
  components:{Slotcom,Aside,Footer},
  created () {
    this.$nextTick(() => {
      if (!this.resumeScroll) {
        this.resumeScroll = new BScroll(this.$refs.resumeScroll, {
          click: true
         })
      } else {
        // this.resumeScroll.refresh()
      }
    })
  },
  methods:{
    toMine(){
      this.$router.push({path:'/Mine'})
    }
  },
  destroy() {
    this.resumeScroll.destroy()
  },
  destroyed() {
    this.$refs.mineresumeScrollScroll && this.$refs.resumeScroll.destroy()
  },
}
</script>
<style scoped lang="scss">
  @import '../common/public.css';
  .resume-wrapper{
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 60px;
    z-index:30;
    font-size: 14px;
    background: #fff;
    .resume-detail{
      // 基础信息
      text-align: left;
      div{
        padding: 0 5px;
      }
      .base-wrapper{
        width: 100%;
        display: flex;
        padding: 5px 0;
        justify-content: flex-start;
        border-bottom: 1px solid #eeeeee;
        .img-wrapper{
          width: 70px;
          img{
            width: 70px;
            height: 70px;
            border-radius: 50%;
          }
        }
        .base-main{
          flex: 70px 1 1;
          padding-left: 10px;
          p{
            margin: 10px 0;
            .tag{
              font-size: 12px;
            }
          }
          .sex-p{
            position: relative;
            .right{
              position: absolute;
              right: 5px;
            }
          }
        }
      }
      .main-wrapper{
        p{
          margin: 10px 0
        }
      }
      .edu-wrapper{
        p{
          margin: 5px 0
        }
      }
      // 工作
      .work-wrapper{
        p{
          margin: 5px 0
        }
      }
      //专业技能 
      .techno-wrapper{
        p{
          padding: 0 5px;
          margin: 5px 0
        }
      }
      .myself-wrapper{
        p{
          padding: 0 5px;
          margin: 5px 0
        }
      }

    }
  }
  .Bottom-Mine{
    position: fixed;
    bottom: 0;
    z-index:35;
    width: 100%;
    height:60px;
    background: #fff;
    text-align: center;
    display: flex;
    justify-content: space-between;
    // border-top:1px solid rgba(0,0,0,0.1);
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    div{
      width: 30%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      font-size: 16px;
      border-right:1px solid rgba(0,0,0,0.1);
      i{
      }
      p{
        margin: 5px 0;
        height:14px;
        line-height: 14px;
      }
      
    }
    .yaoqing{
      color: #fff;
      background: rgba($color: $active, $alpha: 1.0);
      border-right:1px solid transparent;
    }

  }
</style>