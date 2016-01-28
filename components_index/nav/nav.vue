<template>
  <ul id="nav">
    <li><a v-link="{name:'index'}" :class="[$route.name=='index'?'active':'']">Index <h2>首页</h2></a></li>
    <li><a v-link="{name:'work'}" :class="[$route.name=='work'?'active':'']">Work <h2>项目</h2></a></li>
    <li><a v-link="{name:'newslist'}" :class="[$route.name=='newslist'?'active':'']">Situation <h2>公告</h2></a></li>
    <li><a v-link="{name:'about'}" :class="[$route.name=='about'?'active':'']">About <h2>关于</h2></a></li>
    <li><a v-link="{name:'join'}" :class="[$route.name=='join'?'active':'']">Join us <h2>加入</h2></a></li>
  </ul>
  <Share></Share>
  <!--<router-view transition="fade" transition-mode="in-out"></router-view>-->
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
  .active{color:#d6b264}
</style>