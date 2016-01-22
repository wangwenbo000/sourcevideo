<template>
  <div class="row">
    <div class="col-sm-3">
      <div class="card card-block card-inverse card-primary text-center">
        <h2 class="card-text">30</h2>
        <p class="card-text">视频播放</p>
      </div>
    </div>
    <div class="col-sm-3">
      <div class="card card-block card-inverse card-primary text-center">
        <h2 class="card-text">30</h2>
        <p class="card-text">公告</p>
      </div>
    </div>
    <div class="col-sm-3">
      <div class="card card-block card-inverse card-primary text-center">
        <h2 class="card-text">30</h2>
        <p class="card-text">访问数</p>
      </div>
    </div>
    <div class="col-sm-3">
      <div class="card card-block card-inverse card-success text-center">
        <h2 class="card-text">{{serverLastDay}}</h2>
        <p class="card-text">服务器时限 | 从2015-10-30</p>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  export default{
    computed: {
      serverLastDay(){
        return moment([2016, 9, 30]).toNow();
      }
    }
  }

</script>

<style lang="sass?outputStyle=expanded">

</style>
