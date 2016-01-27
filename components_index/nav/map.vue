<template>
  <div id="contactUs" v-show="show" transition="fade">
    <div id="GDMap"></div>
    <div class="contactInfo">
      <h2>Contact us
        <small>联系我们</small>
      </h2>
      <div class="mailme">
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
        center: [116.422929,40.052125]
      });
//      map.setMapStyle('fresh');
      map.setLang('zh_en');

      new AMap.Marker({
        map: map,
        position: [116.422929,40.052125],
        icon: new AMap.Icon({
          size: new AMap.Size(78, 79),  //图标大小
          image: "/static/img/location.png",
//          imageOffset: new AMap.Pixel(0, -60)
        })
      });
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