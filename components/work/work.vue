<template>
    <div id="work">
        <img src="./img/sourcework.png" class="workTitle">
        <ul class="workNav">
            <li><a href="#/work/video">Video Cases / 视频案例</a></li>
            <li><a href="#/work/design">Graphic Design / 平面案例</a></li>
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
<style lang="sass">
@import "work.scss";
</style>