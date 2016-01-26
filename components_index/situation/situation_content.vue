<template>
  <div id="situation_content" class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" transition="bounceInUp">
        <h1>{{newlist.title}}</h1>
        <time>{{newlist.date | dateTime}} / </time>
        <span class="catagory">{{newlist.catagory}}</span>
        <hr>
        <p style="font-family:microsoft yahei; line-height:1.8;">{{{newlist.content}}}</p>
      </div>
    </div>
    <!-- Add Scroll Bar -->
    <div class="swiper-scrollbar"></div>
  </div>
</template>

<script type="text/babel">
  import moment from 'moment'
  export default{
    data(){
      return {
        query: '',
        search: '',
        getIndexData:'/home/index/getsituationdatabyid',
        show: false,
        newlist: []
      }
    },
    ready(){
      this.swiper = new Swiper('.swiper-container', {
        scrollbar: '.swiper-scrollbar',
        direction: 'vertical',
        slidesPerView: 'auto',
        mousewheelControl: true,
        freeMode: true
      });
    },
    route: {
      activate(complete){
        this.$http.post(this.getIndexData,{id:complete.to.params.id}).then(response=> {
          this.$set('newlist', response.data.data);
          complete.next();
        })
      }
    },
    filters: {
      dateTime(value){
        return moment(value).format('LLL');
      }
    },
  }
</script>
<style lang="sass">
  @import "situation_content.scss";
</style>