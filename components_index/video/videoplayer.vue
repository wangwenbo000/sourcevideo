<template>
  <div id="videoplayer">
    <div id="content" class="ani" transition="fadeInUp">
      <div id="player"></div>
      <!--<div class="videoInfo">-->
        <!--<h2>{{videoinfo.title}}</h2>-->
        <!--<h3>{{videoinfo.entitle}}</h3>-->
        <!--<time>{{videoinfo.maketime | dateTime}}</time>-->
      <!--</div>-->
      <a v-link="{name:'video'}" class="close"></a>
    </div>
  </div>
</template>

<script type="text/babel">
  import moment from 'moment'
  export default{
    data(){
      return {
        getVideoData:'/home/index/getvideodatabyid',
        videoinfo: []
      }
    },
    route: {
      activate(complete){
        this.$http.post(this.getVideoData,{id:complete.to.params.id}).then(response=> {
          this.$set('videoinfo', response.data.data);
          complete.next();
        })
      }
    },
    ready(){
      new YKU.Player('player',{
        styleid: '1',
        client_id: '32094c383c670dbc',
        vid:this.videoinfo.fileid,
        autoplay: false,
        show_related: false
      });
    },
    filters: {
      dateTime(value){
        return moment(value).format('L');
      }
    }
  }
</script>

<style lang="sass">
@import "videoplayer.scss";
</style>