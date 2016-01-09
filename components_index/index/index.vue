<template>
    <div id="index">
        <img src="./img/logo.png" alt="" id="logo">
        <ul class="slider swiper-wrapper">
            <li v-for="img in newlist" class="swiper-slide">
                <img data-src="static/img/index/{{img.img}}" class="swiper-lazy">
                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
            </li>
        </ul>
        <a href="#/index/situation" class="moreNews">MORE+</a>
        <ul class="slider-bar">
            <li v-for="list in newlist" @mouseenter="slideTo($index)" @mouseleave="swiperAutoPlay">
                <a href="#/index/situation/content/{{list.id}}">
                    <span>{{list.category}}</span>
                    <time>{{list.date}}</time>
                    <h2>{{list.title}}</h2>
                </a>
            </li>
        </ul>
    </div>
</template>

<script type="text/babel">
    export default{
        ready(){
            this.swiper=new Swiper('#index', {
                autoplay: 5000,//可选选项，自动滑动
                effect: 'fade',
                speed: 1000,
                loop:true,
                fade: {
                    crossFade: true
                },
                preloadImages: false,
                lazyLoading: true
            })
        },
        data(){
            return {
                location: 'index',
                show: false,
                newlist: [
                    {id:0, category: '正在做', date: '2015/07/23', title: '索斯光影工作室最新电影南方拍摄', img: '1.jpg'},
                    {id:1, category: '正在做', date: '2015/07/23', title: '索斯光影工作室最新电影南方拍摄', img: '2.jpg'},
                    {id:2, category: '正在做', date: '2015/07/23', title: '索斯光影工作室最新电影南方拍摄', img: '3.jpg'},
                    {id:3, category: '正在做', date: '2015/07/23', title: '索斯光影工作室最新电影南方拍摄', img: '4.jpg'},
                    {id:4, category: '正在做', date: '2015/07/23', title: '索斯光影工作室最新电影南方拍摄', img: '5.jpg'}
                ]
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