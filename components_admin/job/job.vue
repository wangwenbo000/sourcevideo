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
      <!-- Tab panes -->
      <div class="tab-content">
        <div role="tabpanel " class="tab-pane active p-t-md">
          <!--<component :is="currentView" :list-data="listData"></component>-->
          <router-view></router-view>
        </div>
      </div>
    </div>
    <div class="card-footer text-muted">

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