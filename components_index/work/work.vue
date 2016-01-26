<template>
    <div id="work">
      <img src="./img/sourcework.png" class="workTitle ani ANI_delay" transition="zoomIn">
      <ul class="workNav ani" transition="fadeInUp">
        <li><a v-link="{name:'video'}">Video Cases / 视频案例</a></li>
        <li><a v-link="{name:'design'}">Graphic Design / 平面案例</a></li>
      </ul>
    </div>
</template>

<script type="text/babel">
  export default{}
</script>
<style lang="sass">
  @import "work.scss";
</style>