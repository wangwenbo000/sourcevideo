<template>
    <div id="index">
        <img src="./img/logo.png" alt="" id="logo">
        <ul class="slider">
            <li v-for="img in newlist">
                <img v-bind:src="'static/img/index/'+img.img" title="{{img.title}}">
            </li>
        </ul>
        <ul class="slider-bar">
            <li v-for="list in newlist">
                <span>{{list.category}}</span>
                <time>{{list.date}}</time>
                <h2>{{list.title}}</h2>
            </li>
        </ul>
    </div>
</template>

<script type="text/babel">
    export default{
        data(){
            return {
                location: 'index',
                newlist:[
                    {category:'正在做',date:'2015/07/23',title:'索斯光影工作室最新电影南方拍摄',img:'1.jpg'},
                    {category:'正在做',date:'2015/07/23',title:'索斯光影工作室最新电影南方拍摄',img:'2.jpg'},
                    {category:'正在做',date:'2015/07/23',title:'索斯光影工作室最新电影南方拍摄',img:'3.jpg'},
                    {category:'正在做',date:'2015/07/23',title:'索斯光影工作室最新电影南方拍摄',img:'4.jpg'},
                    {category:'正在做',date:'2015/07/23',title:'索斯光影工作室最新电影南方拍摄',img:'5.jpg'}
                ]
            }
        }
    }
</script>
<style lang="sass">
    @import "index.scss";
</style>