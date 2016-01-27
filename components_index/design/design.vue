<template>
  <div>
    <div class="designNav"></div>
    <div class="design">
      <div class="grid-item">graphic design</div>
      <div class="grid-item" v-for="d in designlist.data">
        <a v-link="{name:'graphiclist', params:{id:d.id}}">
        <span class="designCatagory">
          {{d.catagory}}
        </span>
          <span class="imgInfo">
            {{d.date | dateTime}}
          </span>
          <img :src="'./static/img/graphic/'+d.graphic" class="gray">
        </a>
      </div>
    </div>
    <router-view transition="fade" transition-mode="out-in"></router-view>
  </div>
</template>

<script type="text/babel">
  import moment from 'moment'
  export default{
    data(){
      return {
        location: 'design',
        getVideoData: '/home/index/getdesigndata',
        designlist: []
      }
    },
    ready(){
      var $grid=$('.design').imagesLoaded(function(){
        $grid.masonry({
          itemSelector: '.grid-item'
        });
        $grid.masonry('reloadItems')
      });
    },
    route: {
      activate(complete){
        this.$http.post(this.getVideoData).then(response=>{
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