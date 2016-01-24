<template>
    <div id="situation">
        <div class="content">
            <a v-link="{name:'Index'}" class="close"></a>
            <router-view transition="fade" transition-mode="out-in"></router-view>
        </div>
    </div>
</template>

<script type="text/babel">
    export default{

    }
</script>
<style lang="sass">
@import "situation.scss";
</style>