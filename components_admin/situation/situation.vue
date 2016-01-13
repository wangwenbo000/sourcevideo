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
                    <td><span class="label" :class="[l.show == 0 ? 'label-success':'label-default']">{{l.show | isShowIndex}}</span></td>
                    <td>{{l.date | dateTime}}</td>
                    <td>
                            <a class="btn btn-secondary btn-primary-outline btn-sm" v-link="{name:'addSituation',params:{newsId:l.id}}"><i
                                    class="fa fa-pencil-square-o"></i></a>
                            <a class="btn btn-secondary btn-danger-outline btn-sm" @click="isDelete(l,$index)"><i
                                    class="fa fa-trash-o text-danger"></i></a>
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
                    <li class="pager-prev" v-show="newslist.currentPage>1">
                        <a href="javascript:;"
                           @click="getData(newslist.currentPage-1)">
                            上一页
                        </a>
                    </li>
                    <li class="pager-next" v-show="newslist.data.length>=20">
                        <a href="javascript:;"
                           @click="getData(newslist.currentPage+1)">
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
        ready(){
            this.totalPages = 0;
            this.getData(0);
        },
        filters: {
            dateTime(value){
                return moment(value).format('L');
            },
            isShowIndex(value){
                return value==0?"显示":"不显示";
            }
        },
        methods: {
            isDelete(news, index){
                var isDel = window.confirm("确定要删除这条记录么?");
                if (isDel) {
                    var delStiuationAPI = '/admin/situation/delnews';
                    this.$http.post(delStiuationAPI, {id: news.id, filename: news.cover}).then((response)=> {
                        this.newslist.data.$remove(this.newslist.data[index]);
                        this.showEmptyAlert = true;
                    });
                }
            },
            getData(page){
                this.totalPages < page ? page = 1 : page;
                var getStiuationAPI = '/admin/situation/getlist';
                this.$http.post(getStiuationAPI, {page: page}).then((response)=> {
                    this.$set('newslist', response.data.data);
                    this.totalPages = response.data.data.totalPages;
                })
            }
        }
    }
</script>

<style lang="sass?outputStyle=expanded">

</style>