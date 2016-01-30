<template>
  <div id="index">
    <img src="./img/logo2.png" alt="" id="logo" class="ani ANI_delay" transition="fadeInDown">
    <!--<div class="mainBtn ani" transition="fadeInDown">-->
      <!--<a v-link="{name:'video'}">VIDEO</a>-->
      <!--<a v-link="{name:'design'}">GRAPHIC</a>-->
    <!--</div>-->
    <ul class="slider swiper-wrapper ani" transition="fade">
      <li v-for="img in newlist.data" class="swiper-slide"
          :style="{backgroundImage: 'url(/static/img/indexCover/'+img.cover+')'}">
      </li>
    </ul>
    <a v-link="{name:'newslist'}" class="moreNews">MORE+</a>
    <ul class="slider-bar ani" transition="fadeInUp">
      <li v-for="list in newlist.data" @mouseenter="slideTo($index)" @mouseleave="swiperAutoPlay">
        <a v-link="{name:'newscontent',params:{id:list.id}}">
          <span>{{list.catagory}}</span>
          <time>{{list.date | dateTime}}</time>
          <h2>{{list.title}}</h2>
        </a>
      </li>
    </ul>
    <router-view class="ani" transition="fade" transition-mode="out-in"></router-view>
  </div>

</template>

<script type="text/babel">
  import moment from 'moment'
  export default{
    data(){
      return {
        getIndexData: '/home/index/getindexdata',
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
        observer: true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents: true,//修改swiper的父元素时，自动初始化swiper
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