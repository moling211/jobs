<template>
<div>
  <div class="search-head">
    <!-- 左边 -->
    <div class="left" @click="hiddenSearch">
        <i class="el-icon-arrow-left"></i>返回
    </div>
    <!-- 中间 -->
    <div class="middle">
        <select  v-model="selectValue">                                        
            <option>人才</option>
            <option>项目</option>                                     
        </select>
        <input type="text" />
        <i class="el-icon-search"></i>
    </div>
    <!-- 右边 -->
    <div class="right"></div>
  </div>
  <div class="tag-wrapper">
      <p>大家都在搜</p>
      <div>
          <span class="tag" v-for="(item,index) in tagList" :key="index" @click="getTag(item)">{{item}}</span>
      </div>
      
  </div>
</div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      tagList:[],
      selectValue:'人才',
    }
  },
  mounted(){
      this.tagList = ['公告营养师','园艺设计','建筑设计','育婴师','养护师','平面设计','web工程师','学前教育','环保工程师']
  },
  methods:{
      hiddenSearch(){
          this.$emit('closeSearch',false)
      },
      getTag(item){
          this.hiddenSearch();
          this.$emit('sendTag',item);
      }
  }
}
</script>
<style scoped lang="scss">
  .search-head{
      width: 100%;
      height: 40px;
      line-height: 40px;
      background: $active;
      color: #fff;
      display: flex;
      justify-content: space-between;
      .left{
          width: 20%;
          text-align: left;
          padding-left:10px; 
      }
      .middle{
          width: 55%;
          display: flex;
          flex-direction: column;
          position: relative;
          justify-content: center;
          i{
              position: absolute;
              right:0;
              color: #999999
          }
          select{
              position: absolute;
              left: 10px;
              width: 50px;
              height: 25px;
              line-height: 25px;
              border: 1px solid transparent;
              color: #999999;
              outline: none;
              option{
                  height: 25px;
                  line-height: 25px;
              }
          }
          input{
            width: 100%;
            height: 25px;
            line-height: 25px;
            border-radius: 18px;
            padding-left: 10px;
            border: none;
            outline: none;
          }
          
      }
      .right{
          width: 20%;
      }
  }
  .tag-wrapper{
      width: 100%;
      p{
          color:$active;
          text-align: left;
          padding-left: 15px;
      }
      div{
          padding:0 15px;
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;
          .tag{
            display: inline-block;
            border:1px solid #DDDDDD;
            background: #F5F5F5;
            color: #999999;
            padding:2px 5px;
            margin:0 5px 5px 0;
          }
      }
      
  }
</style>