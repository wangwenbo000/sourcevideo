<template>
  <div class="card">
    <div class="card-header">
      视频列表
      <small class="text-muted">视频托管服务商为优酷视频</small>
    </div>
    <div class="card-block">
      <a v-link="{name:'addVideo',params:{videoId:'upload'}}" class="btn btn-primary btn-sm text-right"><i
            class="fa fa-cloud-upload"></i>上传视频</a>
      <div class="dropdown-divider"></div>
      <table class="table table-striped table-hover">
        <thead>
        <tr>
          <th>#</th>
          <th>预览</th>
          <th>视频标题</th>
          <th>分类</th>
          <th>发布时间</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="v in listData.data">
          <th scope="row">{{v.id}}</th>
          <td><img :src="'/static/img/videoCover/'+v.cover" width="80" alt=""></td>
          <td>{{v.title}}</td>
          <td>{{v.catagory}}</td>
          <td>{{v.date | dateTime}}</td>
          <td>
            <a href="javascript:;" class="btn btn-secondary btn-sm"
               v-link="{name:'addVideo',params:{videoId:v.id}}">
              <i class="fa fa-pencil-square-o"></i>
            </a>
            <a href="javascript:;" class="btn btn-secondary btn-sm"
               @click="deleteItem(v,$index)">
              <i class="fa fa-trash-o"></i>
            </a>
          </td>
        </tr>
        </tbody>
      </table>
      <div class="alert alert-info text-center" role="alert" v-show="showEmptyAlert">
        <strong>人生在勤!</strong> 到目前为止你还没有发布过一篇文章:/ &nbsp;&nbsp;
        <a v-link="{name:'addVideo',params:{videoId:'upload'}}" class="btn btn-success btn-sm">发布第一条记录！</a>
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
        getAPI: '/admin/video/get',
        delAPI: '/admin/video/del',
        pageIndex: null,
        listData: {}
      }
    },
    mixins: [init]
  }
</script>