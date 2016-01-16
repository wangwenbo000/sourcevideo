<template>
  <div class="card">
    <div class="card-header">
      公告列表
    </div>
    <div class="card-block">
      <a v-link="{name:'addSituation',params:{newsId:'upload'}}" class="btn btn-primary btn-sm text-right"><i
            class="fa fa-plus-circle"></i> 增加公告</a>
      <div class="dropdown-divider"></div>
      <table class="table table-striped table-hover">
        <thead>
        <tr>
          <th>#</th>
          <th>新闻标题</th>
          <th>分类</th>
          <th>首页显示</th>
          <th>发布时间</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="l in listData.data">
          <th scope="row">{{l.id}}</th>
          <td>{{l.title}}</td>
          <td>{{l.catagory}}</td>
          <td><span :class="[l.show == 0 ? 'text-primary':'text-muted']">{{l.show | isShowIndex}}</span></td>
          <td>{{l.date | dateTime}}</td>
          <td>
            <a class="btn btn-secondary btn-sm" v-link="{name:'addSituation',params:{newsId:l.id}}"><i
                  class="fa fa-pencil-square-o"></i></a>
            <a class="btn btn-secondary btn-sm" @click="delete(l,$index)"><i
                  class="fa fa-trash-o"></i></a>
          </td>
        </tr>
        </tbody>
      </table>
      <div class="alert alert-info text-center" role="alert" v-show="showEmptyAlert">
        <strong>人生在勤!</strong> 到目前为止你还没有发布过一篇文章:/ &nbsp;&nbsp;
        <a v-link="{name:'addSituation',params:{newsId:'upload'}}" class="btn btn-success btn-sm">发布第一条记录！</a>
      </div>
      <nav>
        <ul class="pager">
          <li class="pager-prev" v-show="showPREV">
            <a href="javascript:;"
               @click="getData('prev')">
              上一页
            </a>
          </li>
          <li class="pager-next" v-show="showNEXT">
            <a href="javascript:;"
               @click="getData('next')">
              下一页
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script type="text/babel">
  import init from '../mixin/mixin_initPage';
  export default{
    data(){
      return {
        getAPI: '/admin/situation/getlist',
        delAPI: '/admin/situation/delnews',
        pageIndex: null,
        listData: {}
      }
    },
    mixins: [init],
    filters: {
      isShowIndex(value){
        return value ? "不显示" : "显示";
      }
    }
  }
</script>