<template>
  <div class="cardbg">
  <div class="teamCard ani" transition="fadeInDown">
    <img :src="'/static/img/face/'+ memberInfo.face" alt="">
    <a v-link="{name:'join'}" class="close"></a>
    <div class="memberInfo">
      <h2>{{memberInfo.name}}</h2>
      <span>{{memberInfo.profession}}</span>
      <p>
        姜文，中国大陆演员、导演、编剧。1984年毕业于中央戏剧学院，24岁即凭借在《芙蓉镇》中的表演获得了1987年大众电影百花奖最佳男演员，之后的一系列作品也都产生了较大的反响，包括获得1988年柏林国际电影节金熊奖的《红高粱》、获得1993年中国电视金鹰奖的《北京人在纽约》等。</p>
    </div>
  </div>
  </div>
</template>

<script type="text/babel">
  export default {
    data(){
      return {
        getMemberInfoAPI: '/home/index/getmemberinfobyid',
        memberInfo:{}
      }
    },
    route: {
      activate(complete){
        this.$http.post(this.getMemberInfoAPI,{id:complete.to.params.id}).then(response=> {
          this.$set('memberInfo', response.data.data[0]);
          complete.next();
        })
      }
    }
  }
</script>

<style lang="sass">
  @import "teamcard.scss";
</style>