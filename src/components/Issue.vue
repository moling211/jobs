<template>
  <div class="issue-wrapper" ref="issueScroll">
    <div>
      <Slotcom>
        <span slot="menuText">发布招聘/项目</span>
        <div slot="slot-container" class="slot-container">
          <!-- tab切换 -->
          <div class="tab">
            <div class="item" @click="changeTab(1)" :class="cur==1?'active':''">发布职位招聘<span></span></div>
            <div class="item" @click="changeTab(2)" :class="cur==2?'active':''">发布创业项目<span></span></div>
          </div>
          <!-- 内容list -->
          <div class="issue-main">
            <!-- 发布职位招聘 -->
            <div class="work-list" v-show="cur==1">
              <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                <el-form-item label="招聘标题">
                  <el-input v-model="sizeForm.title" placeholder="请输入招聘标题"></el-input>
                </el-form-item>
                <el-form-item label="招聘职位">
                  <el-cascader :options="options" v-model="sizeForm.position" class="sendbtn"></el-cascader>
                </el-form-item>
                <el-form-item label="学历要求">
                  <el-select v-model="sizeForm.school" placeholder="请选择学历" style="width:100%">
                    <el-option label="硕士及以上" value="shuoshi"></el-option>
                    <el-option label="本科" value="benke"></el-option>
                    <el-option label="大专" value="dazhuan"></el-option>
                    <el-option label="中专/技校" value="zhongzhuan"></el-option>
                    <el-option label="高中" value="gaozhong"></el-option>
                    <el-option label="初中及以下" value="chuzhong"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="薪资待遇">
                  <el-select v-model="sizeForm.money" placeholder="请选择薪资" style="width:100%">
                    <el-option label="3000-5000" value="3000-5000"></el-option>
                    <el-option label="5000-8000" value="5000-8000"></el-option>
                    <el-option label="8000-10k" value="8000-10k"></el-option>
                    <el-option label="10k以上" value="10k"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="招聘人数">
                  <el-input v-model="sizeForm.num" placeholder="请输入招聘人数"></el-input>
                </el-form-item>
                <el-form-item label="经验要求">
                  <el-select v-model="sizeForm.workTime" placeholder="请选择工作经验" style="width:100%">
                    <el-option label="1-3年" value="1-3"></el-option>
                    <el-option label="3-5年" value="3-5"></el-option>
                    <el-option label="5-8年" value="5-8"></el-option>
                    <el-option label="8-10年" value="8-10"></el-option>
                    <el-option label="10年以上" value="10"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="工作地址">
                  <el-input v-model="sizeForm.address" placeholder="请输入工作地址"></el-input>
                </el-form-item>
                <el-form-item label="福利待遇">
                  <el-checkbox-group v-model="sizeForm.type" class="issue-checkbox">
                    <el-checkbox-button label="加班补助" name="type" class="checkbox-item"></el-checkbox-button>
                    <el-checkbox-button label="年底双薪" name="type" class="checkbox-item"></el-checkbox-button>
                    <el-checkbox-button label="包吃住" name="type" class="checkbox-item"></el-checkbox-button>
                    <el-checkbox-button label="餐补" name="type" class="checkbox-item"></el-checkbox-button>
                    <el-checkbox-button label="话补" name="type" class="checkbox-item"></el-checkbox-button>
                    <el-checkbox-button label="住房补贴" name="type" class="checkbox-item"></el-checkbox-button>
                    <el-checkbox-button label="带薪年假" name="type" class="checkbox-item"></el-checkbox-button>
                    <el-checkbox-button label="五险" name="type" class="checkbox-item"></el-checkbox-button>
                    <el-checkbox-button label="五险一金" name="type" class="checkbox-item"></el-checkbox-button>
                    <el-checkbox-button label="员工旅游" name="type" class="checkbox-item"></el-checkbox-button>
                    <el-checkbox-button label="弹性工作" name="type" class="checkbox-item"></el-checkbox-button>
                    <el-checkbox-button label="周末双休" name="type" class="checkbox-item"></el-checkbox-button>
                  </el-checkbox-group>
                </el-form-item>
                <el-form-item label="岗位职责">
                  <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入工作内容及职位要求" v-model="sizeForm.textarea"></el-input>
                </el-form-item>
                <el-form-item label="联系人">
                  <el-input v-model="sizeForm.name" placeholder="请输入联系人"></el-input>
                </el-form-item>
                <el-form-item label="联系电话">
                  <el-input v-model="sizeForm.phone" placeholder="请输入联系电话"></el-input>
                </el-form-item>
                <el-form-item label="企业名称">
                  <el-input v-model="sizeForm.Qyname"></el-input>
                </el-form-item>
                <el-form-item label="企业介绍">
                  <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入工作内容及职位要求" v-model="sizeForm.intro"></el-input>
                </el-form-item> 
                <el-form-item size="large">
                  <el-button type="primary" @click="onSubmit" class="sendbtn">立即发布职位</el-button>
                </el-form-item>
              </el-form>
            </div>
            <!-- 发布创业项目 -->
            <div class="pro-list" v-show="cur==2">
              <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                <el-form-item label="项目名称">
                  <el-input v-model="sizeForm.proName" placeholder="请输入项目名称"></el-input>
                </el-form-item>
                <el-form-item label="项目主体">
                  <el-input v-model="sizeForm.proBody" placeholder="请输入项目主体"></el-input>
                </el-form-item>
                <el-form-item label="项目资金">
                  <el-input v-model="sizeForm.proMoney" placeholder="请输入项目资金"></el-input>
                </el-form-item>
                <el-form-item label="项目类型">
                  <el-cascader :options="options" v-model="sizeForm.position" class="sendbtn"></el-cascader>
                </el-form-item>
                <el-form-item label="项目地址">
                  <el-input v-model="sizeForm.proAddress" placeholder="请输入项目地址"></el-input>
                </el-form-item>
                <el-form-item label="企业介绍">
                  <el-input type="textarea" :autosize="{ minRows: 3, maxRows: 4}" placeholder="请输入工作内容及职位要求" v-model="sizeForm.intro"></el-input>
                </el-form-item> 
                <el-form-item label="项目介绍">
                  <el-input type="textarea" :autosize="{ minRows: 3, maxRows: 4}" placeholder="请输入项目介绍" v-model="sizeForm.proIntro"></el-input>
                </el-form-item>
                <el-form-item label="项目优势">
                  <el-input type="textarea" :autosize="{ minRows: 3, maxRows: 4}" placeholder="请输入项目优势" v-model="sizeForm.proIGood"></el-input>
                </el-form-item>
                <el-form-item size="large">
                  <el-button type="button" @click="onButton" class="sendbtn">+添加其他栏目</el-button>
                </el-form-item>  
                <el-form-item size="large">
                  <el-button type="primary" @click="onSubmit" class="sendbtn">立即发布职位</el-button>
                </el-form-item>
                <!-- 弹出框 添加新项目 -->
                <el-dialog title="添加项目" :visible.sync="dialogFormVisible" style="width:100%;" center :modal-append-to-body="false">
                  <el-form :model="form">
                    <el-input v-model="form.addname" autocomplete="off" placeholder="请输入栏目名称(最多4字)"></el-input>
                    <p></p>
                    <el-input type="textarea" :autosize="{ minRows: 3, maxRows: 4}" placeholder="请输入栏目介绍" v-model="form.addregion"></el-input>
                  </el-form>
                  <div slot="footer" class="dialog-footer">
                    <el-button type="primary" @click="dialogFormVisible = false" class="sendbtn">确 定</el-button>
                  </div>
                </el-dialog>
              </el-form>
            </div>
          </div>
        </div>
      </Slotcom>
    </div>
    
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import Slotcom from './common/Slotcom'
export default {
  name: 'Issue',
  data () {
    return {
      cur:1,
      sizeForm: {
        title:'',
        name: '',
        phone:'',
        num:'',
        position:'',
        address:'',
        money:'',
        Qyname:'驰通科技集团有限公司',
        textarea:'',
        intro:'驰通科技集团有限公司是全国数一数二的，公司以驰通科技集团有限公司是全国数一数二的公司以',
        school: '',
        workTime:'',
        delivery: false,
        type: [],
        desc: '',
        proName:'',
        proBody:'',
        proMoney:'',
        proAddress:'',
        proIntro:'',
        proIGood:'',
        addname:'',
        addregion:''
      },
      form:{
        addname:'',
        addregion:''
      },
      dialogFormVisible:false,
      options: [
        {
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
          }],
        },
        {
          value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
        }
      ]
    }
  },
  methods:{
    changeTab(index){
      this.cur = index;
    },
    onSubmit() {
      console.log('submit!');
    },
    // 增加一个新的弹出框
    onButton(){
      this.dialogFormVisible = true
    }
  },
  components:{Slotcom},
  created () {
    this.$nextTick(() => {
      if (!this.issueScroll) {
        this.issueScroll = new BScroll(this.$refs.issueScroll, {
          click: true
         })
      } else {
        this.issueScroll.refresh()
      }
    })
  },
  destroy() {
    this.issueScroll.destroy()
  },
  destroyed() {
    this.$refs.issueScroll && this.$refs.issueScroll.destroy()
  },
}
</script>
<style lang="scss">
  // 弹出框样式
  .issue-main .el-dialog{
    width: 90%;
  }
  // 表单元素样式
  .issue-main .el-checkbox-button:first-child .el-checkbox-button__inner{
    border-left:1px solid transparent;
  }
  .el-select .el-input.is-focus .el-input__inner{
    border-color: rgba($color: $active, $alpha: 1.0)
  }
  .el-select .el-input__inner:focus{
    border-color: rgba($color: $active, $alpha: 1.0)
  }
  .el-textarea .el-textarea__inner:focus-within{
    border-color: rgba($color: $active, $alpha: 1.0)
  }
  .el-input__inner:focus-within,.el-select:focus-within{
    border-color: rgba($color: $active, $alpha: 1.0)
  }
  .el-checkbox-button.is-checked .el-checkbox-button__inner{
    border-color: rgba($color: $active, $alpha: 1.0);
    background-color: rgba($color: $active, $alpha: 1.0);
    box-shadow:none;
  }
  .el-checkbox-button--mini.is-focus .el-checkbox-button__inner{
    border-color: #DCDFE6;
  }
  .el-checkbox-button.is-focus .el-checkbox-button__inner{
    border-color: #DCDFE6;
  }
  .el-button--primary:focus-within{
    border-color: rgba($color: $active, $alpha: 1.0);
    background: rgba($color: $active, $alpha: 1.0);
  }
  .el-button--primary{
    border-color: rgba($color: $active, $alpha: 1.0);
    background: rgba($color: $active, $alpha: 1.0);
  }
  .el-cascader-menu{
      min-width:97px;
  }
  .el-button:focus, .el-button:hover{
    color: rgba($color: $active, $alpha: 1.0);
    border-color: rgba($color: $active, $alpha: 0.6);
    background-color: rgba($color: $active, $alpha: 0.1);
  }
</style>
<style scoped lang="scss">
  .issue-wrapper{
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 60px;
    z-index:30;
    background: fff;
    .slot-container{
      width: 100%;
      .tab{
        height: 40px;
        line-height: 40px;
        width: 100%;
        color: #999;
        font-size: 14px;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #ddd;
        .item{
          width: 49.5%;
          text-align: center;
          position: relative;
          span{
            height:3px;
            position: absolute;
            width: 100%;
            background: transparent;
            left: 0;
            bottom: 0;
          }
        }
        .active{
          color: rgba($color: $active, $alpha: 1.0);
          span{
            background: rgba($color: $active, $alpha: 1.0)
          }
        }
      }
      .issue-main{
        font-size: 14px;
        padding:10px 5px;
        .issue-checkbox{
          display: flex;
          flex-wrap: wrap;
          &:first-child .checkbox-item{
            border-left:1px solid #DCDFE6;
          }
          .checkbox-item{
            margin-right: 5px;
            margin-bottom: 5px;
            border-left: 1px solid #DCDFE6;
          }
        }
        .sendbtn{
          width: 100%;
        }
      }
    }
  }
</style>