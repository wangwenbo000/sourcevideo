<template>
  <div class="design" >
    <div class="grid-item"></div>
    <div class="grid-item" v-for="d in designlist.data">
      <img :src="'./static/img/graphic/'+d.graphic">
    </div>
  </div>
</template>

<script type="text/babel">
  import moment from 'moment'
  export default{
    data(){
      return {
        location: 'design',
        getVideoData:'/home/index/getdesigndata',
        designlist:[]
      }
    },
    ready(){
//      this.M = new Masonry('.design', {
////        itemSelector: '.grid-item',
////        columnWidth: 1
//        itemSelector: '.grid-item',
//        columnWidth: 1,
//        isFitWidth: true
//      });
//      this.M.imagesLoaded().progress( function() {
//        this.M.masonry('layout');
//      });

      var $grid = $('.design').imagesLoaded( function() {
        // init Masonry after all images have loaded
        $grid.masonry({
          itemSelector: '.grid-item'
        });

        $grid.masonry('reloadItems')
      });
    },
    route: {
      activate(complete){
        this.$http.post(this.getVideoData).then(response=> {
          this.$set('designlist', response.data.data);
          complete.next();
        })
      }
    },
    filters: {
      dateTime(value){
        return moment(value).format('L');
      }
    }
  }
</script>
<style lang="sass">
  @import "design.scss";
</style>