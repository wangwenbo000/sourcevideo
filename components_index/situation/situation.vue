<template>
  <div id="situation">
    <div class="content">
      <a href="#!/" class="close"></a>
      <a v-link="{name:'newslist'}" v-show="$route.name=='newscontent'" class="backList"></a>
      <router-view class="ani" transition="fadeInUp" transition-mode="out-in"></router-view>
    </div>
  </div>
</template>

<script type="text/babel">
  export default{}
</script>
<style lang="sass">
  @import "situation.scss";
</style>