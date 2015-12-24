<template>
    <div class="border-left"></div>
    <div class="border-right"></div>
    <div class="border-top"></div>
    <div class="border-bottom">
        <span>Copyright soure video © 2010-2015 design&power superset.love</span>
    </div>
    <router-view transition="fade" transition-mode="out-in"></router-view>
    <Menu></Menu>

</template>

<script type="text/babel">
    import Menu from './nav/nav.vue'
    export default{
        components: {
            Menu
        }
    }
</script>

<style lang="sass">
    /*全局样式表*/
    @import "fontface.scss";
    @import "normalize.scss";
    @import "style.scss";
</style>