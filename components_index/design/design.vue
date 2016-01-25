<template>
  <div>
  <div class="designNav">

  </div>
  <div class="design" >
    <div class="grid-item">graphic design</div>
    <div class="grid-item" v-for="d in designlist.data">
      <div class="imgInfo">
        <h2>{{d.title}}</h2>
        <span>{{d.catagory}}</span>
        <time>{{d.date | dateTime}}</time>
      </div>
      <img :src="'./static/img/graphic/'+d.graphic" class="gray">
    </div>
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
        return moment(value).format('LLL');
      }
    }
  }
</script>
<style lang="sass">
  @import "design.scss";
</style>