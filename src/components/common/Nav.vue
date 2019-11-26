<template>
<div>
  <div class="nav">
    <div class="logo">
      <i class="el-icon-info"></i>
      人和职业
    </div>
    <!-- input -->
    <div class="input-wrapper">
      <i class="el-icon-search"></i>
      <input type="text" v-model="inputValue" @click="clickSearchInput">
    </div>
    <!-- position -->
    <div class="position-wrapper">
      <i class="el-icon-location-outline"></i>
      <span>贵阳</span>
    </div>
    
  </div>
  <!-- 搜所页面 -->
  <div class="search-wrapper" v-if="searchShow">
    <Search @closeSearch="closeSearchBox" @sendTag="getTagValue"></Search>
  </div>

</div>
</template>

<script>
import Search from '../home/Search'
export default {
  name: 'Nav',
  data () {
    return {
      inputValue:'',
      searchShow:false,
    }
  },
  components:{Search},
  methods:{
    // 打开搜索面板
    clickSearchInput(){
      this.searchShow = true;
    },
    // 接收返回search返回值
    closeSearchBox(data){
      this.searchShow = data;
    },
    // 接收到搜索值
    getTagValue(data){
      this.inputValue = data;
    }
  }
}
</script>
<style scoped lang="scss">
  .nav{
      width: 100%;
      height: 40px;
      line-height: 40px;
      background: transparent;
      display: flex;
      justify-content: space-between;
      color: #ffffff;
      .logo{
        width: 25%;
      }
      .input-wrapper{
        width: 60%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
        & >i{
          position: absolute;
          left: 10px;
        }
        input{
          padding-left: 30px;
          // width: 90%;
          color:#fff;
          background-color: rgba($color: #eeeeee, $alpha: 0.2);
          height: 25px;
          line-height: 25px;
          border-radius: 18px;
          border:1px solid #eeeeee;
          outline: none;
        }
      }
      .position-wrapper{
        width: 15%;
      }
  }
  .search-wrapper{
    width: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    background: #fff;
    z-index: 30;
  }
</style>