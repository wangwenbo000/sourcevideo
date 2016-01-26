<template>
  <div id="video">
    <ul class="videoCover">
      <li v-for="video in videolist | filterBy query in 'catagory' | filterBy search in 'title'"
           transition="cover" stagger="60" @mouseenter="video.display = true" @mouseleave="video.display = false">
        <a v-link="{name:'videoplayer',params:{id:video.id}}">
          <img v-bind:src="'./static/img/videoCover/'+video.cover" class="gray">
          <div class="videoCoverHover" v-show="video.display" transition="modal">
            <span class="videoDate">{{video.maketime}}</span>
            <h2>{{video.title}}<span class="enName">{{video.entitle}}</span></h2>
            <span class="videoCategory">{{video.catagory}}</span>
            <time>{{video.time}}</time>
          </div>
        </a>
      </li>
    </ul>
    <div class="videoToolBar" transition="bounceInUp">
      <ul>
        <li @click="query = ''"><a href="javascript:;"><h3>All</h3>全部分类</a></li>
        <li @click="query = 'Movie'"><a href="javascript:;"><h3>Movie</h3>电影</a></li>
        <li @click="query = 'TV'"><a href="javascript:;"><h3>TV</h3>电视</a></li>
        <li @click="query = 'Progaganda'"><a href="javascript:;"><h3>Progaganda</h3>宣传片</a></li>
        <li @click="query = 'Documentary'"><a href="javascript:;"><h3>Documentary</h3>记录片</a></li>
        <li @click="query = 'Activity'"><a href="javascript:;"><h3>Documentary</h3>活动</a></li>
      </ul>
      <input type="text" placeholder="输入影片关键词检索作品" v-model="search">
      <a v-link="{name:'design'}" class="goDesign">Design</a>
    </div>
    <router-view transition="bounceInUp" transition-mode="out-in"></router-view>
  </div>
</template>

<script type="text/babel">
  export default{
    data(){
      return {
        query: '',
        search: '',
        getVideoData:'/home/index/getvideodata',
        videolist: []
      }
    },
    route: {
      activate(complete){
        this.$http.post(this.getVideoData).then(response=> {
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
    methods:{
      showVideoCover(index){
      }
    }
  }
</script>
<style lang="sass">
  @import "video.scss";
  .showVideoInfo{
    display: block;
  }
</style>