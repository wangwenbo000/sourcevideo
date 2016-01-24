<template>
  <a href="javascript:;" @click="showFollowModal = true" id="follow">FOLLOW</a>
  <a href="javascript:;" @click="showContactModal = true" id="contact">CONTACT</a>
  <Contact :show.sync="showContactModal"></Contact>
  <Follow :show.sync="showFollowModal"></Follow>
</template>

<script type="text/babel">
  import Contact from './map.vue'
  import Follow from './follow.vue'
  export default{
    data(){
      return {
        showContactModal: false,
        showFollowModal: false
      }
    },
    components: {
      Contact,
      Follow
    },
    methods: {}
  }
</script>

<style lang="sass">
  @import "share.scss";
</style>