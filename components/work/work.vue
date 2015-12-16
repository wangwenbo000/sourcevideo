<template>
    <div id="work">
        <h1>{{location}}</h1>
        <ul>
            <li><a href="#/work/video">video</a></li>
            <li><a href="#/work/design">design</a></li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script type="text/babel">
    export default{
        data(){
            return {
                location: 'work'
            }
        }
    }
</script>