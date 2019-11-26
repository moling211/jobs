<template>
  <div class="footer-wrapper" ref="footerScroll">
    <div>
      <h1>sds</h1>
      <h1>sds</h1>
      <h1>sds</h1>
      <h1>sds</h1>
      <h1>sds</h1>
      <h1>sds</h1>
      <h1>sds</h1>
      <h1>sds</h1>
      <h1>sds</h1>
      <h1>sds</h1>
      <h1>sds</h1>
      <h1>sds</h1>
      <h1>555</h1>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'FooterSlot',
  data () {
    return {
      
    }
  },
  created () {
    this.$nextTick(() => {
      if (!this.footerScroll) {
        this.footerScroll = new BScroll(this.$refs.footerScroll, {
          click: true
         })
      } else {
        this.footerScroll.refresh()
      }
    })
  },
  destroy() {
    this.footerScroll.destroy()
  },
  destroyed() {
    this.$refs.footerScroll && this.$refs.footerScroll.destroy()
  },
}
</script>
<style scoped lang="scss">
  .footer-wrapper{
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    bottom: -60px;
    z-index:60;
    background: red;
  }
</style>