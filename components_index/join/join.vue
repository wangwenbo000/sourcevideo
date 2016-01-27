<template>
  <div class="join">
    <div class="swiper-container">
      <div class="joblist swiper-wrapper">
        <div class="jobInfo swiper-slide" v-for="j in joblist.data">
          <h2>{{j.position}}</h2>
          <span>{{j.compensation}}</span>
          <i>{{j.quantity}}</i>
          <p>{{{j.content}}}</p>
          <time>{{j.date | dateTime}}</time>
        </div>
      </div>
      <div class="swiper-scrollbar"></div>
    </div>
  </div>
</template>

<script type="text/babel">
  import moment from 'moment'
  export default{
    data(){
      return {
        query: '',
        search: '',
        getjobData: '/home/index/getjobdata',
        show: false,
        joblist: []
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
        this.$http.post(this.getjobData).then(response=> {
          this.$set('joblist', response.data.data);
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