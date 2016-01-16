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
        <tr v-for="l in newslist.data">
          <th scope="row">{{l.id}}</th>
          <td>{{l.title}}</td>
          <td>{{l.catagory}}</td>
          <td><span :class="[l.show == 0 ? 'text-primary':'text-muted']">{{l.show | isShowIndex}}</span></td>
          <td>{{l.date | dateTime}}</td>
          <td>
            <a class="btn btn-secondary btn-sm" v-link="{name:'addSituation',params:{newsId:l.id}}"><i
                    class="fa fa-pencil-square-o"></i></a>
            <a class="btn btn-secondary btn-sm" @click="isDelete(l,$index)"><i
                    class="fa fa-trash-o"></i></a>
          </td>
        </tr>
        </tbody>
      </table>
      <div class="alert alert-info text-center" role="alert" v-show="showEmptyAlert">
        <strong>人生在勤!</strong> 到目前为止你还没有发布过一篇文章:/
      </div>
      <!--{{$data|json}}-->
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
  import moment from 'moment';
  export default{
    data(){
      return{
        pageIndex :null,
      }
    },
    computed:{
      showPREV(){
        return this.newslist.currentPage>1?true:false;
      },
      showNEXT(){
        return this.newslist.data.length>=20?true:false;
      }
    },
    route: {
      activate(complete){
        var getStiuationAPI='/admin/situation/getlist';
        this.$http.post(getStiuationAPI, {page: 1}).then((response)=>{
          this.$set('newslist', response.data.data);
          complete.next();
        })
      }
    },
    filters: {
      dateTime(value){
        return moment(value).format('L');
      },
      isShowIndex(value){
        return value==0 ? "显示" : "不显示";
      }
    },
    methods: {
      isDelete(news, index){
        var isDel=window.confirm("确定要删除这条记录么?");
        if(isDel){
          var delStiuationAPI='/admin/situation/delnews';
          this.$http.post(delStiuationAPI, {id: news.id, filename: news.cover}).then((response)=>{
            this.newslist.data.$remove(this.newslist.data[index]);
            this.showEmptyAlert=true;
          });
        }
      },
      getData(action){
        switch(action){
          case 'prev':
          this.pageIndex = this.newslist.currentPage-1;
          break;
          case 'next':
          this.pageIndex = this.newslist.currentPage+1;
          break;
        };
        var getStiuationAPI='/admin/situation/getlist';
        this.$http.post(getStiuationAPI, {page: this.pageIndex}).then((response)=>{
          this.$set('newslist', response.data.data);
        })
      }
    }
  }
</script>

<style lang="sass?outputStyle=expanded">

</style>