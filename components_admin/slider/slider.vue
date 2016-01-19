<template>
  <!--侧边栏管理员面板-->
  <Panel></Panel>
  <!--侧边栏按钮列表-->
  <div class="list-group">
    <a href="#" name="a" class="list-group-item"
       :class="[$route.name=='Index'?'active':'']">
      <i class="fa fa-tachometer"></i> 控制台
    </a>
    <a href="javascript:;" v-link="{name:'situation'}" class="list-group-item"
       :class="[$route.name=='situation' || $route.name=='addSituation'?'active':'']">
      <i class="fa fa-newspaper-o"></i> 新闻发布
    </a>
    <a v-link="{name:'video'}" class="list-group-item"
       :class="[$route.name=='video' || $route.name=='addVideo'?'active':'']">
      <i class="fa fa-youtube-play"></i> 视频管理
    </a>

    <!--<a v-link="{name:'photos'}" class="list-group-item"-->
       <!--:class="[$route.name=='photos' || $route.name=='addPhotos' ? 'active':'']">-->
      <!--<i class="fa fa-camera"></i> 项目剧照-->
    <!--</a>-->
    <a v-link="{name:'graphic'}" class="list-group-item"
       :class="[$route.name=='graphic' || $route.name=='addGraphic' ? 'active':'']">
      <i class="fa fa-diamond"></i> 平面管理
    </a>
    <a v-link="{name:'team'}" class="list-group-item"
       :class="[$route.name=='team' || $route.name == 'addMember' ? 'active':'']">
      <i class="fa fa-users"></i> 团队管理
    </a>
    <a v-link="{name:'joblist'}" class="list-group-item"
       :class="[$route.name=='job' || $route.name=='addJob' || $route.name=='joblist' || $route.name=='jobhunter' ?'active':'']">
      <i class="fa fa-eye"></i> 人才招聘
      <span class="label label-pill label-danger pull-right">2</span>
    </a>
    <!--<a  class="list-group-item"-->
       <!--:class="[$route.name=='manage'?'active':'']">-->
      <!--<i class="fa fa-user-secret"></i> 账号管理-->
    <!--</a>-->
    <a href="javascript:;" class="list-group-item"
       :class="[$route.name=='opensource'?'active':'']" data-toggle="modal" data-target="#myModal">
      <i class="fa fa-github-alt"></i> 开源库
    </a>
  </div>
  <Opensource></Opensource>
</template>

<script type="text/babel">
  import Panel from './panel.vue'
  import Opensource from './opensource.vue'
  export default{
    components: {
      Panel,
      Opensource
    }
  }
</script>

<style lang="sass?outputStyle=expanded">

</style>