<template>
  <div class="mineList-werapper" ref="minListScroll">
		<Slotcom>
			<span slot="menuText">{{menuList[type]}}</span>
			<div slot="slot-container">
				<!-- 资料设置 -->
				<div v-if="type==0" class="data-wrapper">
					<div class="head-wrapper">
						<div class="img-wrapper">
							<img src="../../assets/title.jpg" alt="">
						</div>
						<div class="contain-wrapper" @click="toChange(0)">
							<p class="text-active">驰通科技集团有限公司</p>
							<p>普通雇主</p>
						</div>
						<div class="icon-wrapper">
							<i class="el-icon-arrow-right"></i>
						</div>
					</div>
					<Aside></Aside>
					<div class="head-list">
						<div class="list-item" @click="toChange(1)">
							<span class="txt">账户与安全</span>
							<i class="el-icon-arrow-right"></i>
						</div>
					</div>
					<div class="footer-wrapper">
						退出当前账户
					</div>
				</div>
				<!-- 我的发布 -->
				<div v-if="type==2" class="send-wrapper">
					<!-- tab -->
					<div class="tab-wrapper">
						<span :class="cur==0?'active':''" @click="cur=0">职业招聘</span>
						<span :class="cur==1?'active':''" @click="cur=1">创业项目</span>
					</div>
					<!-- list -->
					<div class="list-wrapper" v-if="cur==0">
						<div class="list-item" v-for="(item,index) in sendList" :key="index">
							<p><span class="text-color">{{item.position}}</span> <span class="f-right">{{item.time}}</span></p>
							<p>待遇：<span class="text-red">{{item.money}}</span></p>
							<p class="list-btns">
								<span v-for="(it,index) in item.list" :key="index">{{it}}</span>
								<span class="f-right tag">{{item.sure}}</span>
							</p>
						</div>
					</div>
					<div class="list-wrapper" v-if="cur==1">
						<div class="list-item" v-for="(item,index) in proList" :key="index">
							<p>项目名称：<span class="text-color">{{item.name}}</span> <span class="f-right">{{item.time}}</span></p>
							<p>项目资金：<span class="text-red">{{item.money}}</span></p>
							<p class="list-btns">项目类型：<span class="text-color">{{item.type}}</span><span class="f-right tag">{{item.sure}}</span></p>
						</div>
					</div>
				</div>
				<!-- 收到的简历 -->
				<div v-if="type==3" class="resume-wrapper">
					<div v-for="(item,index) in resumeList" :key="index" @click="toResume">
						<div class="resume-item">
							<div class="img-wrapper">
								<img src="../../assets/title.jpg" alt="">
							</div>
							<div class="con-wrapper">
								<p><span class="text-color">{{item.name}}</span> <span>{{item.sex}}</span> <span>{{item.old}}</span> <span>{{item.school}}</span></p>
								<p>申请职位：<span class="text-color">{{item.position}}</span></p>
							</div>
						</div>
						<Aside></Aside>
					</div>
				</div>
				<!-- 我的定制 -->
				<div v-if="type==4" class="make-wrapper">
					<div v-for="(item,index) in makeList" :key="index">
						<div class="make-item">
							<p><span class="text-color">{{item.position}}</span> <span class="text-active">({{item.num}})人</span> <span class="f-right">{{item.time}}</span></p>
							<p class="btn-group">
								<span>{{item.sure}}</span>
								<span class="active">{{item.cancel}}</span>
							</p>
						</div>
						<Aside></Aside>
					</div>
				</div>
				<!-- 下一级子页 -->
				<div v-if="childPage">
					<Acount @toFather="getFather" :acountText="acountText" :listType="listType"></Acount>
				</div>
			</div>
		</Slotcom>
  </div>
</template>
<script>
import Slotcom from '../common/Slotcom'
import BScroll from 'better-scroll'
import Aside from '../common/Aside'
import Acount from './Acount'
import {mapState,mapMutations,mapActions} from 'vuex'
  export default{
    name:'MineList',
    data(){
      return{
				cur:0,
				type:this.$route.params.index,
				menuList:['资料设置','','我的发布','收到求职简历','我的定制','我的收藏'],
				childPage:false,
				acountText:'',
				list:['账户信息','账户与安全'],
				listType:0,
				resumeList:[
					{name:'吕小布',sex:'男',old:'26',school:'本科',position:'婚礼策划'},
					{name:'欣欣',sex:'女',old:'26',school:'本科',position:'婚礼策划'},
					{name:'李丽丽',sex:'女',old:'24',school:'本科',position:'公共营养师'}
				],
				makeList:[
					{num:'6',time:'2019-11-11',position:'人力资源管理师',cancel:'取消定制',sure:'确认定制'},
					{num:'5',time:'2019-6-11',position:'职业化医院管理师',cancel:'取消定制',sure:'确认定制'},
					{num:'6',time:'2019-4-11',position:'心理指导师',cancel:'取消定制',sure:'确认定制'}
				],
				sendList:[
					{money:'3000-5000元',num:'6',time:'2019-11-11',position:'人力资源管理师',sure:'已通过',list:['包吃住','餐补','加班补助','包吃住','餐补','加班补助']},
					{money:'面议',num:'5',time:'2019-6-11',position:'职业化医院管理师',sure:'未通过',list:['包吃住','餐补','加班补助']},
					{money:'3000-5000元',num:'6',time:'2019-4-11',position:'心理指导师',sure:'未通过',list:['包吃住','餐补','加班补助']}
				],
				proList:[
					{money:'3000-5000元',type:'娱乐休闲',time:'2019-11-11',name:'开个茶馆',sure:'审核中'},
					{money:'面议',type:'娱乐休闲',time:'2019-6-11',name:'开个茶馆',sure:'审核中'},
					{money:'3000-5000元',type:'娱乐休闲',time:'2019-4-11',name:'开个茶馆',sure:'审核中'}
				]
      }
		},
		watch:{
			data(){
				setTimeout(()=>{
					this.refresh();
					},20)
			}
		},
		components:{Slotcom,Aside,Acount},
    methods:{
			toChange(index){
				this.childPage = true;
				this.acountText = this.list[index],
				this.listType = index
			},
			getFather(data){
				this.childPage = data;
			},
			toResume(){
				this.$router.push({name:'Resume'})
			}
		},
		created () {
			this.type = sessionStorage.getItem("type");
			this.$nextTick(() => {
				if (!this.minListScroll) {
					this.minListScroll = new BScroll(this.$refs.minListScroll, {
						click: true
					})
				} else {
					
				}
			})
		},
		destroy() {
			this.minListScroll.destroy()
		},
		destroyed() {
			this.$refs.minListScroll && this.$refs.minListScroll.destroy()
		},
  }
</script>
<style scoped lang="scss">
  @import '../common/public.css';
  .mineList-werapper{
		width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index:30;
		background: #F5F5F5;
		text-align: left;
		.data-wrapper{
			width: 100%;
			.head-wrapper{
				padding:10px 0 10px 10px;
				display: flex;
				justify-content: flex-start;
				background: #fff;
				.img-wrapper{
					width: 65px;
					height: 65px;
					border-radius: 50%;
					overflow: hidden;
					img{
						width: 65px;
						height: 65px;
						border-radius: 50%; 
					}
				}
				.contain-wrapper{
					flex: 65px 1 1;
					padding-left: 10px;
					p{
						margin: 10px 0;
					}
				}
				.icon-wrapper{
					width: 5%;
					display: flex;
					flex-direction: column;
					justify-content: center;
				}
			}
			.head-list{
				.list-item{
					padding-left:10px;
					height: 40px;
					line-height: 40px;
					// border-top: 1px solid #dddddd;
					display: flex;
					justify-content: space-between;
					background: #fff;
					span{
						width: 95%;
						display: inline-block;
					}
					i{
						width: 5%;
						display: inline-block;
						height: 40px;
						line-height: 40px;
					}
				}
			}
      .footer-wrapper{
				width: 100%;
				height: 60px;
				line-height: 60px;
				text-align: center;
				color: #fff;
				position: fixed;
				z-index: 20;
				background: $active;
				bottom: 0;
				font-size: 16px;
			}
		}
		.resume-wrapper{
			background: #fff;
			.resume-item{
				padding: 6px 0px;
				display: flex;
				justify-content: flex-start;
				.img-wrapper{
					margin-left: 10px;
					width: 65px;
					height: 65px;
					border-radius: 50%;
					img{
						width: 65px;
						height: 65px;
						border-radius: 50%;
					}
				}
				.con-wrapper{
					padding-left:10px; 
					p{
						margin: 10px 0;
					}
					
				}
			}
		}
		// 我的定制
		.make-wrapper{
			background: #fff;
			.make-item{
				padding: 10px;
				p{
					margin-top: 0px;
					margin-bottom: 0px;
					height: 25px;
					line-height: 25px;
				}
				.btn-group{
					span{
						width: 80px;
						height: 30px;
						line-height: 30px;
						border-radius: 2px;
						font-size: 12px;
						padding: 2px 5px;
						border:1px solid $active;
						color: $active;
					}
					span.active{
						background: $active;
						color: #fff;
					}
				}
			}
		}
		// 我的发布
		.send-wrapper{
			padding: 5px 0;
			.tab-wrapper{
				height: 40px;
				line-height: 40px;
				border-bottom:1px solid #ddd;
				display: flex;
				justify-content: space-around;
				span{
					width: 49.5%;
					display: inline-block;
					text-align: center;
				}
				span.active{
					border-bottom: 2px solid $active;
					color: $active;
				}
			}
			.list-wrapper{
				background: #fff;
				width: 100%;
				.list-item{
					padding:5px;
					border-bottom: 1px solid #ddd;
					p{
						margin: 0;
						height: 30px;
						line-height: 30px;
					}
					p.list-btns{
						span{
							border: 1px solid $active;
							padding: 2px 2px;
							border-radius: 2px;
							margin-right: 3px;
							font-size: 12px;
							color: $active;
						}
						span.tag{
							padding: 0;
							width: 45px;
							line-height: 20px;
							text-align: center;
							background: $active;
							color: #fff;
							margin-top: 4px;
						}
					}
				}
			}
		}
  } 
</style>
