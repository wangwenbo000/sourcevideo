<template>
    <ul id="nav">
        <li><a href="#/index">Index <h2>首页</h2></a></li>
        <li><a href="#/work">Work <h2>项目</h2></a></li>
        <li><a href="#/index/situation">Situation <h2>公告</h2></a></li>
        <li><a href="#/about">About <h2>关于</h2></a></li>
        <li><a href="#/join">Join us <h2>加入</h2></a></li>
    </ul>
    <Share></Share>
</template>

<script type="text/babel">
    import Share from './share.vue'
    export default{
        components: {
            Share
        }
    }
</script>

<style lang="sass">
    @import "nav.scss";
</style>