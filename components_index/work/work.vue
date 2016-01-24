<template>
    <div id="work">
        <img src="./img/sourcework.png" class="workTitle">
        <ul class="workNav">
            <li><a v-link="{name:'Video'}">Video Cases / 视频案例</a></li>
            <li><a v-link="{name:'Design'}">Graphic Design / 平面案例</a></li>
        </ul>
    </div>
</template>

<script type="text/babel">
    export default{

    }
</script>
<style lang="sass">
@import "work.scss";
</style>