<template>
  <div class="join">
    <div class="joinBg"></div>
    <div class="joinTop">
      <div class="left">
        <h1>Team<small>索思团队</small></h1>
      </div>
      <div class="center">
        <p>索斯光影是一个充满活力，追求完美的团队，秉持整合优质业界资源与锐意创新的先锋理念，拥有一流的影视节目制作与平面设计团队，并致力于影视视频制作营销策划与文化传播经营整合。</p>
      </div>
      <div class="right">
        <a href="" class="findJob">我们需要你</a>
      </div>
    </div>
    <ul>
      <li v-for="t in teamlist">
        <a href="javascript:;" @click="showCard = true"><img :src="'/static/img/face/'+ t.face" class="gray"></a>
      </li>
      <li class="joinUs">
      </li>
    </ul>
    <!--<job v-show="showCard" transition="fade"></job>-->
    <teamcard :show.sync="showCard"></teamcard>
  </div>
</template>

<script type="text/babel">
  import moment from 'moment'
//  import job from './job.vue'
  import teamcard from './teamcard.vue'
  export default{
    data(){
      return {
        query: '',
        search: '',
        showCard:false,
        getTeamData: '/home/index/getteamdata',
        show: false,
        teamlist: []
      }
    },
    ready(){

    },
    components:{
//      job,
      teamcard
    },
    route: {
      activate(complete){
        this.$http.post(this.getTeamData).then(response=> {
          this.$set('teamlist', response.data.data);
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
  @import "join.scss";
</style>