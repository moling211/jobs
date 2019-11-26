<template>
  <div class="menu">
    <router-link class="menu-item" tag="div" :to="{path:'/Home'}">
        <i class="el-icon-house"></i>
        <p>首页</p>
    </router-link>
    <router-link class="menu-item" tag="div" :to="{path:'/Issue'}">
        <i class="el-icon-edit-outline"></i>
        <p>发布</p>
    </router-link>
    <router-link class="menu-item" tag="div" :to="{path:'/News'}">
        <i class="el-icon-chat-line-square"></i>
        <p>消息</p>
    </router-link>
    <router-link class="menu-item" tag="div" :to="{path:'/Mine'}">
        <i class="el-icon-user"></i>
        <p>我的</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data () {
    return {
      
    }
  }
}
</script>
<style scoped lang="scss">
  .menu{
      position: fixed;
      bottom: 0;
      width: 100%;
      height: 60px;
      z-index: 40;
      color: #fff;
      background: #3D3C41;
      display: flex;
      justify-content: space-between;
      text-align: center;
      .router-link-active{
          color: $active
      }
      .menu-item{
          width: 25%;
          &>i{
              font-size: 18px;
              margin-top: 10px;
          }
          &>p{
              margin-top: 5px;
          }
      }
  }
</style>