<template>
    <Menu></Menu>
    <router-view transition transition-mode="out-in"></router-view>
</template>

<script type="text/babel">
    import Menu from './nav/nav.vue'
    export default{
        components:{Menu}
    }
</script>
