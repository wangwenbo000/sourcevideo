<template>
    <a href="javascript:;" id="follow">FOLLOW</a>
    <a href="javascript:;" @click="showModal = true" id="contact">CONTACT</a>
    <Contact :show.sync="showModal"></Contact>
</template>

<script type="text/babel">
    import Contact from './map.vue'
    export default{
        data(){
            return {
                showModal: false
            }
        },
        components: {
            Contact
        },
        methods: {}
    }
</script>

<style lang="sass">
    @import "share.scss";
</style>