<template>
	<div class="acount-wrapper">
		<div class="slot-head">
      <div class="left" @click="goBack"><i class="el-icon-arrow-left"></i>返回</div>
      <div class="middle">{{acountText}}</div>
			<div class="right"></div>
    </div>
		<!-- 账户信息 -->
		<div class="form-table" v-if="listType==0">
			<el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
				<el-form-item label="企业名称">
          <el-upload
					class="avatar-uploader"
					action="https://jsonplaceholder.typicode.com/posts/"
					:show-file-list="false"
					:on-success="handleAvatarSuccess"
					:before-upload="beforeAvatarUpload">
					<img v-if="imageUrl" :src="imageUrl" class="avatar">
					<i v-else class="el-icon-plus avatar-uploader-icon"></i>
					</el-upload>
        </el-form-item>
				<el-form-item label="企业名称">
          <el-input v-model="sizeForm.company" placeholder="请填写企业名称"></el-input>
        </el-form-item>
				<el-form-item label="企业名称">
          <el-input v-model="sizeForm.place" placeholder="请填写企业地址"></el-input>
        </el-form-item>
				<el-form-item label="联系电话" style="position:relative">
          <el-input v-model="sizeForm.phone"></el-input>
					<span style="position:absolute;right:10px;top:0px;font-size:12px;color:#F2B300">已认证</span>
        </el-form-item>
				<el-form-item size="large">
          <el-button type="primary" @click="onSubmit" class="sendbtn">确认修改</el-button>
        </el-form-item>
			</el-form>
		</div>
		<!-- 账户安全 -->
		<div class="form-table" v-if="listType==1">
			<el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
				<el-form-item label="原密码">
          <el-input v-model="sizeForm.oldCode" placeholder="请填写企业名称"></el-input>
        </el-form-item>
				<el-form-item label="新密码">
          <el-input v-model="sizeForm.newCode" placeholder="请填写企业地址"></el-input>
        </el-form-item>
				<el-form-item label="确认密码">
          <el-input v-model="sizeForm.sureCode"></el-input>
        </el-form-item>
				<el-form-item size="large">
          <el-button type="primary" @click="codeSubmit" class="sendbtn">确认修改</el-button>
        </el-form-item>
			</el-form>
		</div>
	</div>
</template>
<script>
import Slotcom from '../common/Slotcom'
	export default {
		name:'Acount',
		data(){
			return{
				sizeForm:{
					company:'驰通科技集团有限公司',
					place:'',
					phone:'18988999988',
					oldCode:'',
					newCode:'',
					sureCode:''
				},
				imageUrl: ''
			}
		},
		props:['acountText','listType'],
		components:{Slotcom},
		created(){
		},
		methods:{
			goBack(){
				this.$emit('toFather',false)
			},
			handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
			},
			onSubmit(){

			},
			codeSubmit(){
				
			},
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
		}
	}
</script>
<style scoped lang="scss">
	@import '../common/public.css';
	.acount-wrapper{
		position: fixed;
		bottom:0;
		top: 0;
		width: 100%;
		background: #fff;
		z-index: 30;
    .slot-head{
      width: 100%;
      height: 40px;
      line-height: 40px;
      background: rgba($color: $active, $alpha: 0.8);
      color: #fff;
      display: flex;
      justify-content: space-between;
      .left{
        width: 15%;
        text-align: left;
        padding-left: 10px;
      }
      .middle{
				width: 70%;
        text-align: center;
			}
			.right{
				width: 15%;
			}
		}
		.form-table{
			padding:10px;
			.sendbtn{
				width: 100%;
				background: $active;
				border:1px solid rgba($color: $active, $alpha: 0.8)
			}
			.avatar-uploader .el-upload {
				border: 1px dashed red;
				border-radius: 6px;
				cursor: pointer;
				position: relative;
				overflow: hidden;
			}
			.avatar-uploader .el-upload:hover {
				border-color: #409EFF;
			}
			.avatar-uploader-icon {
				font-size: 28px;
				color: #8c939d;
				width: 80px;
				height: 80px;
				line-height: 80px;
				text-align: center;
			}
			.avatar {
				width: 80px;
				height: 80px;
				display: block;
			}
		}	
        
  }
</style>