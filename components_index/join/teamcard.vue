<template>
<div class="teamCard" v-show="show" transition="modal">
  <img src="" alt="">
  <a href="javascript:;" class="close" @click="show = false"></a>
</div>
</template>

<script type="text/babel">
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
      twoWay: true
    }
  }
}
</script>

<style lang="sass">
  @import "teamcard.scss";
</style>