<template>
    <div id="contactUs" v-show="show" transition="modal">
        <div id="GDMap"></div>
        <a href="javascript:;" class="close" @click="show = false"></a>
    </div>
</template>

<script type="text/babel">
    export default{
        ready(){
            var map=new AMap.Map('GDMap', {
                zoom: 16,
                center: [116.39, 39.9]
            });
            map.setMapStyle('fresh');
            new AMap.Marker({
                map: map,
                position: [116.405467, 39.907761],
                icon: new AMap.Icon({
                    size: new AMap.Size(40, 50),  //图标大小
                    image: "http://webapi.amap.com/theme/v1.3/images/newpc/way_btn2.png",
                    imageOffset: new AMap.Pixel(0, -60)
                })
            });
        },
        props:{
            show:{
                type: Boolean,
                required: true,
                twoWay: true
            }
        },
    }
</script>

<style lang="sass">
    @import "map.scss";
</style>