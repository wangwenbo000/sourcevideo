<template>
    <div id="work">
        <img src="./img/sourcework.png" class="workTitle">
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
<style lang="sass">
@import "work.scss";
</style>