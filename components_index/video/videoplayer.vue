<template>
  <div id="videoplayer">
    <div id="content">
      <div id="player"></div>
      <div class="videoInfo">
        <h3>{{videoinfo.title}}</h3>
      </div>
      <a v-link="{name:'video'}" class="close"></a>
    </div>
  </div>
</template>

<script type="text/babel">
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
        autoplay: true,
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