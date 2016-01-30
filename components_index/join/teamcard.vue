<template>
  <div class="cardbg">
  <div class="teamCard ani" transition="fadeInDown">
    <img :src="'/static/img/face/'+ memberInfo.face" alt="">
    <a v-link="{name:'join'}" class="close"></a>
    <div class="memberInfo">
      <h2>{{memberInfo.name}}</h2>
      <span>{{memberInfo.profession}}</span>
      <p>
      {{memberInfo.memberinfo}}
      </p>
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