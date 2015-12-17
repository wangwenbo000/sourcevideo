<template>
    <ul id="nav">
        <li><a href="#/index">Index</a></li>
        <li><a href="#/work">Work</a></li>
        <li><a href="#/index/situation">Situation</a></li>
        <li><a href="#/about">About</a></li>
        <li><a href="#/join">Join us</a></li>
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