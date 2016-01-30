<template>
  <div class="card">
    <div class="card-header">
      团队人员列表
    </div>
    <div class="card-block">
      <a v-link="{name:'addMember', params:{memberId:'upload'}}" class="btn btn-primary btn-sm text-right"><i class="fa fa-plus-circle"></i> 增加团队人员</a>
      <div class="dropdown-divider"></div>
      <table class="table table-striped table-hover">
        <thead>
        <tr>
          <th>#</th>
          <th>照片</th>
          <th>姓名</th>
          <th>职业</th>
          <th>排序</th>
          <th>发布时间</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="t in listData.data | orderBy 'order' 1">
          <th scope="row">{{t.id}}</th>
          <th><img :src="'/static/img/face/'+t.face" alt="" class="img-circle" width="60"></th>
          <td>{{t.name}}</td>
          <td>{{t.profession}}</td>
          <td>{{t.order}}</td>
          <td>{{t.date}}</td>
          <td>
            <a href="javascript:;" class="btn btn-secondary btn-sm"
               v-link="{name:'addMember',params:{memberId:t.id}}">
              <i class="fa fa-pencil-square-o"></i>
            </a>
            <a href="javascript:;" class="btn btn-secondary btn-sm"
               @click="deleteItem(t,$index)">
              <i class="fa fa-trash-o"></i>
            </a>
          </td>
        </tr>
        </tbody>
      </table>
      <div class="alert alert-info text-center" role="alert" v-show="showEmptyAlert">
        <strong>人生在勤!</strong> 到目前为止你还没有发布过一篇文章:/ &nbsp;&nbsp;
        <a v-link="{name:'addMember',params:{memberId:'upload'}}" class="btn btn-success btn-sm">发布第一条记录！</a>
      </div>
    </div>
    <div class="card-footer text-muted clearfix">
      <div class="pagebox pull-right">
        <div class="pagination-info">共有{{listData.count}}条，每页显示：{{listData.numsPerPage}}条</div>
        <nav id="pagination"></nav>
        <div class="pagination-go">
          <input type="text" class="form-control ipt">
          <a class="btn btn-secondary">GO</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  import init from '../mixin/mixin_initPage';
  export default{
    data(){
      return {
        getAPI: '/admin/team/get',
        delAPI: '/admin/team/del',
        pageIndex: null,
        listData: {}
      }
    },
    mixins: [init]
  }
</script>