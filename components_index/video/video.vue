<template>
  <div id="video">
    <div class="videoBg"></div>
    <ul class="videoCover" transition="fade">
      <li v-for="video in videolist | filterBy query in 'catagory' | filterBy search in 'title'">
        <a v-link="{name:'videoplayer',params:{id:video.id}}" @mouseenter="video.display=true" @mouseleave="video.display=false">
          <img :src="'./static/img/videoCover/'+video.cover" class="gray">
          <div class="videoCoverHover" v-show="video.display" transition="modal">
            <span class="videoDate">{{video.maketime}}</span>
            <h2>{{video.title}}<span class="enName">{{video.entitle}}</span></h2>
            <span class="videoCategory"><i class="iconfont">&#xe603;</i> {{video.catagory}}</span>
            <time>{{video.date | dateTime}}</time>
          </div>
        </a>
      </li>
    </ul>
    <div class="videoToolBar ani" transition="fadeInUp">
      <ul>
        <li @click="query = ''"><a href="javascript:;"><h3>All</h3>全部分类</a></li>
        <li @click="query = 'Movie'"><a href="javascript:;"><h3>Movie</h3>电影</a></li>
        <li @click="query = 'TV'"><a href="javascript:;"><h3>TV</h3>电视</a></li>
        <li @click="query = 'Progaganda'"><a href="javascript:;"><h3>Progaganda</h3>宣传片</a></li>
        <li @click="query = 'Documentary'"><a href="javascript:;"><h3>Documentary</h3>纪录片</a></li>
        <li @click="query = 'Activity'"><a href="javascript:;"><h3>Documentary</h3>活动</a></li>
      </ul>
      <input type="text" placeholder="输入影片关键词检索作品" v-model="search">
      <a v-link="{name:'design'}" class="goDesign">Design</a>
    </div>
    <router-view transition="fade" transition-mode="out-in"></router-view>
  </div>
</template>

<script type="text/babel">
  import moment from 'moment'
  export default{
    data(){
      return {
        query: '',
        search: '',
        getVideoData: '/home/index/getvideodata',
        videolist: []
      }
    },
    route: {
      activate(complete){
        this.$http.post(this.getVideoData).then(response=> {
          for(var i in response.data.data){
            response.data.data[i].display = false;
          }
          this.$set('videolist', response.data.data);
          complete.next();
        })
      }
    },
    filters: {
      dateTime(value){
        return moment(value).format('L');
      }
    },
  }
</script>
<style lang="sass">
  @import "video.scss";

  .showVideoInfo {
    display: block;
  }
</style>