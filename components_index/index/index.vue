<template>
  <div id="index">
    <img src="./img/logo.png" alt="" id="logo" transition="fadeInDown">
    <ul class="slider swiper-wrapper">
      <li v-for="img in newlist.data" class="swiper-slide">
        <img :src="'./static/img/indexCover/'+img.cover">
        <!--<div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>-->
      </li>
    </ul>
    <a v-link="{name:'newslist'}" class="moreNews">MORE+</a>
    <ul class="slider-bar" transition="bounceInUp">
      <li v-for="list in newlist.data" @mouseenter="slideTo($index)" @mouseleave="swiperAutoPlay">
        <a v-link="{name:'newscontent',params:{id:list.id}}">
          <span>{{list.catagory}}</span>
          <time>{{list.date | dateTime}}</time>
          <h2>{{list.title}}</h2>
        </a>
      </li>
    </ul>
    <router-view transition="fade" transition-mode="out-in"></router-view>
  </div>

</template>

<script type="text/babel">
  import moment from 'moment'
  export default{
    data(){
      return {
        getIndexData:'/home/index/getindexdata',
        newlist: []
      }
    },
    route: {
      activate(complete){
        this.$http.post(this.getIndexData).then(response=> {
          this.$set('newlist', response.data.data);
          complete.next();
        })
      }
    },
    ready(){
      this.swiper = new Swiper('#index', {
        autoplay: 5000,//可选选项，自动滑动
        effect: 'fade',
        speed: 1000,
        loop: true,
        fade: {
          crossFade: true
        }
      });
    },
    filters: {
      dateTime(value){
        return moment(value).format('L');
      }
    },
    methods: {
      slideTo(index){
        this.swiper.stopAutoplay();
        this.swiper.slideTo(index);
      },
      swiperAutoPlay(){
        this.swiper.startAutoplay();
      }
    }
  }
</script>
<style lang="sass">
  @import "index.scss";
</style>