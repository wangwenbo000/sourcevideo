<template>
    <div id="index">
        <h1>{{location}}</h1>
        <router-view></router-view>
    </div>
</template>

<script type="text/babel">
    export default{
        data(){
            return {
                location: 'index'
            }
        }
    }
</script>