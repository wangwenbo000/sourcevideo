<template>
  <ul id="nav">
    <li><a v-link="{name:'index'}">Index <h2>首页</h2></a></li>
    <li><a v-link="{name:'work'}">Work <h2>项目</h2></a></li>
    <li><a v-link="{name:'newslist'}">Situation <h2>公告</h2></a></li>
    <li><a v-link="{name:'about'}">About <h2>关于</h2></a></li>
    <li><a v-link="{name:'join'}">Join us <h2>加入</h2></a></li>
  </ul>
  <router-view transition="fade" transition-mode="in-out"></router-view>
  <Share></Share>
</template>

<script type="text/babel">
  import Share from './share.vue'
  export default{
    components: {
      Share
    }
  }
</script>

<style lang="sass">
  @import "nav.scss";
</style>