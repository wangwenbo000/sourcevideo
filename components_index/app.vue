<template>
  <div>
    <Menu></Menu>
    <router-view transition="fade" transition-mode="out-in"></router-view>
    <div class="border-left"></div>
    <div class="border-right"></div>
    <div class="border-top"></div>
    <div class="border-bottom">
      <span>Copyright soure video © 2006-2016 design&power
        <a href="http://superset.love" target="_blank">superset.love</a>
      </span>
    </div>
  </div>
</template>

<script type="text/babel">
  import Menu from './nav/nav.vue'
  export default{
    components: {
      Menu
    }
  }
</script>

<style lang="sass">
  /*全局样式表*/
  @import "fontface.scss";
  @import "normalize.scss";
  @import "style.scss";
  @import "animate.scss";
</style>