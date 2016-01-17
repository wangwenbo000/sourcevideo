<template>
  <a v-link="{name:'addJob',params:{jobId:'upload'}}" class="btn btn-primary btn-sm text-right">
    <i class="fa fa-plus-circle"></i> 增加招聘需求</a>
  <div class="dropdown-divider"></div>
  <table class="table table-striped table-hover">
    <thead>
    <tr>
      <th>#</th>
      <th>职业</th>
      <th>名额</th>
      <th>薪资待遇</th>
      <th>发布时间</th>
      <th>操作</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="jl in listData.data">
      <th scope="row">{{jl.id}}</th>
      <td>{{jl.position}}</td>
      <td>{{jl.quantity}}</td>
      <td>{{jl.compensation}}</td>
      <td>{{jl.date | dateTime}}</td>
      <td>
        <a href="javascript:;" class="btn btn-secondary btn-sm"
           v-link="{name:'addJob',params:{jobId:g.id}}">
          <i class="fa fa-pencil-square-o"></i>
        </a>
        <a href="javascript:;" class="btn btn-secondary btn-sm"
           @click="delete(jl,$index)">
          <i class="fa fa-trash-o"></i>
        </a>
      </td>
    </tr>
    </tbody>
  </table>
  <div class="alert alert-info text-center" role="alert" v-show="showEmptyAlert">
    <strong>人员充足</strong> 到目前为止公司还没有发布过招聘:/ &nbsp;&nbsp;
    <a v-link="{name:'addJob',params:{jobId:'upload'}}" class="btn btn-success btn-sm">发布第一条记录！</a>
  </div>
  <div class="card-footer text-muted clearfix">
    <div class="pagebox pull-right">
      <div class="pagination-info">共有{{listData.count}}条，每页显示：{{listData.numsPerPage}}条</div>
      <nav id="pagination"></nav>
      <div class="pagination-go">
        <input type="text" class="form-control ipt" v-model="pagego">
        <a class="btn btn-secondary" @click="getData(pagego)">GO</a>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  import init from '../mixin/mixin_initPage';
  export default{
    data(){
      return {
        getAPI: '/admin/joblist/get',
        delAPI: '/admin/joblist/del',
        listData: {}
      }
    },
    mixins: [init]
  }
</script>

<style lang="sass?outputStyle=expanded">

</style>