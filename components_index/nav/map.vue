<template>
  <div id="contactUs" v-show="show" transition="modal">
    <div id="GDMap"></div>
    <div class="contactInfo">
      <h2>Contact us
        <small>联系我们</small>
      </h2>
      <div class="mailme">
        <i class="iconfont">&#xe609;</i>
      </div>
    </div>
    <a href="javascript:;" class="close" @click="show = false"></a>
  </div>
</template>

<script type="text/babel">
  export default{
    ready(){
      var map = new AMap.Map('GDMap', {
        zoom: 16,
        center: [116.39, 39.9]
      });
      map.setMapStyle('fresh');
    },
    props: {
      show: {
        type: Boolean,
        required: true,
        twoWay: true
      }
    }
  }
</script>

<style lang="sass">
  @import "map.scss";
</style>