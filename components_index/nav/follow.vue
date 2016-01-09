<template>
    <div class="follow" v-show="show" transition="modal">
        <a href="javascript:;" class="close" @click="show = false"></a>
        <h3>Share</h3>
        <img src="./img/qrcode.jpg" alt="">
        <a href="javascript:;" name="shareBtn"><i class="iconfont">&#xe600;</i></a>
        <a href="javascript:;" name="shareBtn"><i class="iconfont">&#xe601;</i></a>
        <a href="javascript:;" name="shareBtn"><i class="iconfont">&#xe607;</i></a>
    </div>
</template>

<script type="text/babel">
    export default{
        props:{
            show:{
                type: Boolean,
                required: true,
                twoWay: true
            }
        }
    }
</script>

<style lang="sass">
    @import "follow.scss";
</style>