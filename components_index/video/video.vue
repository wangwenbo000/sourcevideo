<template>
    <div id="video">
        <ul class="videoCover">
            <li v-for="video in videolist | filterBy query in 'category' | filterBy search in 'title'" @mouseenter="video.state = true" @mouseleave="video.state = false" transition="cover" stagger="60">
                <a href="javascript:;">
                    <img v-bind:src="'static/img/video/'+video.img" class="gray">
                    <div class="videoCoverHover" v-show="video.state" transition="modal">
                        <span class="videoDate">{{video.year}}</span>
                        <h2>{{video.title}}<span class="enName">{{video.enname}}</span></h2>
                        <span class="videoCategory">{{video.category}}</span>
                        <time>{{video.time}}</time>
                    </div>
                </a>
            </li>
        </ul>
        <div class="videoToolBar">
            <ul>
                <li @click="query = ''"><a href="javascript:;"><h3>All</h3>全部分类</a></li>
                <li @click="query = 'Movie'"><a href="javascript:;"><h3>Movie</h3>电影</a></li>
                <li @click="query = 'TV'"><a href="javascript:;"><h3>TV</h3>电视</a></li>
                <li @click="query = 'Progaganda'"><a href="javascript:;"><h3>Progaganda</h3>宣传片</a></li>
                <li @click="query = 'Documentary'"><a href="javascript:;"><h3>Documentary</h3>记录片</a></li>
                <li @click="query = 'Activity'"><a href="javascript:;"><h3>Documentary</h3>活动</a></li>
            </ul>
            <input type="text" placeholder="输入影片关键词检索作品" v-model="search">
            <a href="" class="goDesign">Design</a>
        </div>
    </div>
</template>

<script type="text/babel">
    export default{
        data(){
            return {
                query:'',
                search:'',
                videolist: [
                    {
                        img: '1.jpg',
                        time: "30:40",
                        title: "神犬小七",
                        enname: "hero dog",
                        year: "2015",
                        category: "TV",
                        state: false
                    },
                    {
                        img: '2.jpg',
                        time: "30:40",
                        title: "麻辣变形计",
                        enname: "hero dog",
                        year: "2015",
                        category: "Activity",
                        state: false
                    },
                    {
                        img: '3.jpg',
                        time: "30:40",
                        title: "一个名字超级无敌长的",
                        enname: "A very very long name",
                        year: "2015",
                        category: "Activity",
                        state: false
                    },
                    {
                        img: '4.jpg',
                        time: "30:40",
                        title: "神犬小七",
                        enname: "hero dog",
                        year: "2015",
                        category: "Documentary",
                        state: false
                    },
                    {
                        img: '5.jpg',
                        time: "30:40",
                        title: "神犬小七",
                        enname: "hero dog",
                        year: "2015",
                        category: "TV",
                        state: false
                    },
                    {
                        img: '6.jpg',
                        time: "30:40",
                        title: "神犬小七",
                        enname: "hero dog",
                        year: "2015",
                        category: "Progaganda",
                        state: false
                    },
                    {
                        img: '7.jpg',
                        time: "30:40",
                        title: "神犬小七",
                        enname: "hero dog",
                        year: "2015",
                        category: "Progaganda",
                        state: false
                    },
                    {
                        img: '8.jpg',
                        time: "30:40",
                        title: "神犬小七",
                        enname: "hero dog",
                        year: "2015",
                        category: "Activity",
                        state: false
                    },
                    {
                        img: '4.jpg',
                        time: "30:40",
                        title: "神犬小七",
                        enname: "hero dog",
                        year: "2015",
                        category: "Activity",
                        state: false
                    },
                    {
                        img: '5.jpg',
                        time: "30:40",
                        title: "神犬小七",
                        enname: "hero dog",
                        year: "2015",
                        category: "TV",
                        state: false
                    },
                    {
                        img: '6.jpg',
                        time: "30:40",
                        title: "神犬小七",
                        enname: "hero dog",
                        year: "2015",
                        category: "Movie",
                        state: false
                    }
                ]
            }
        }
    }
</script>
<style lang="sass">
    @import "video.scss";
</style>