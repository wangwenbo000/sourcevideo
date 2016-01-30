<template>
  <div class="join">
    <div class="joinBg"></div>
    <div class="joinTop">
      <div class="left">
        <h1>Team
          <small>索斯团队</small>
        </h1>
      </div>
      <div class="center">
        <p>索斯光影是一个充满活力，追求完美的团队，秉持整合优质业界资源与锐意创新的先锋理念，拥有一流的影视节目制作与平面设计团队，并致力于影视视频制作营销策划与文化传播经营整合。</p>
      </div>
      <div class="right">
        <a v-link="{name:'joblist'}" class="findJob">我们需要你!</a>
      </div>
    </div>
    <ul>
      <li v-for="t in teamlist | orderBy 'order' 1" @mouseenter="t.showCardInfo=true"
          @mouseleave="t.showCardInfo=false">

        <a v-link="{name:'membercard',params:{id:t.id}}"><img :src="'/static/img/face/'+ t.face" class="gray">
          <div class="simpleInfo ani" v-show="t.showCardInfo" transition="fadeInUp">
            <h4>{{t.name}}</h4>
            <span>{{t.profession}}</span>
          </div>
        </a>
      </li>
      <a v-link="{name:'joblist'}">
      <li class="joinUs">
        join us
      </li>
      </a>
    </ul>
    <router-view transition="fade" transition-mode="out-in"></router-view>
  </div>
</template>

<script type="text/babel">
  export default{
    data(){
      return {
        getTeamData: '/home/index/getteamdata',
        teamlist: []
      }
    },
    route: {
      activate(complete){
        this.$http.post(this.getTeamData).then(response=> {
          for (var i in response.data.data) {
            response.data.data[i].showCardInfo = false;
          }
          this.$set('teamlist', response.data.data);
          complete.next();
        })
      }
    }
  }
</script>

<style lang="sass">
  @import "join.scss";
</style>