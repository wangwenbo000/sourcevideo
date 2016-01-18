<template>
  <div class="card">
    <div class="card-header">
      公告列表
    </div>
    <div class="card-block">
      <ul class="nav nav-tabs" role="tablist">
        <li class="nav-item">
          <a class="nav-link"
             :class="[$route.name=='joblist'?'active':'']"
             v-link="{name:'joblist'}">招聘职位</a>
        </li>
        <li class="nav-item">
          <a class="nav-link"
             :class="[$route.name=='jobhunter'?'active':'']"
             v-link="{name:'jobhunter'}">应聘反馈 &nbsp;
            <span class="label label-pill label-danger pull-right">2</span>
          </a>
        </li>
      </ul>
      <div class="tab-content">
        <div role="tabpanel " class="tab-pane active p-t-md">
          <router-view transition="fade" transition-mode="out-in"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  export default{

  }
</script>

<style lang="sass?outputStyle=expanded">
  .p-t-md {
    padding-top: 10px;
  }
</style>