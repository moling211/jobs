<template>
  <div class="hello">
    <!-- 中间 -->
    <div class="container">
      <router-view></router-view>
    </div>
    <!-- 底部 -->
    <Menu></Menu>
  </div>
</template>

<script>
import Menu from './common/Menu'
export default {
  name: 'HelloWorld',
  data () {
    return {
      
    }
  },
  components:{Menu}
}
</script>
<style scoped lang="scss">
  .container{
    position: relative;
    top:0;
    bottom:60px;
  }
</style>