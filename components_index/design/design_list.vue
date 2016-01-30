<template>
  <div class="showGraphic">
    <img :src="'./static/img/graphic/' + designInfo.graphic" transition="fadeInDown" class="ani">
    <a v-link="{name:'design'}" class="close"></a>
    <div class="graphicInfo ani" transition="fadeInUp">
      <h2>{{designInfo.title}}</h2>
      <span>{{designInfo.catagory}}</span>
      <time>{{designInfo.date | dateTime}}</time>
    </div>
  </div>
</template>

<script type="text/babel">
  import moment from 'moment'
  export default{
    data(){
      return {
        getDesignData: '/home/index/getdesigninfobyid',
        designInfo: {}
      }
    },
    ready(){
      var $grid=$('.showGraphic').imagesLoaded(function(){
        console.log('hello');
      });
    },
    route: {
      activate(complete){
        this.$http.post(this.getDesignData, {id: complete.to.params.id}).then(response=>{
          this.$set('designInfo', response.data.data[0]);
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
  @import "design_list.scss";
</style>