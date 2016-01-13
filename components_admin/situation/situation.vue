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
                    <th>发布时间</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="l in newslist.data">
                    <th scope="row">{{l.id}}</th>
                    <td>{{l.title}}</td>
                    <td>{{l.catagory}}</td>
                    <td>{{l.date | dateTime}}</td>
                    <td>
                        <div class="btn-group btn-group-sm" role="group" aria-label="...">
                            <a class="btn btn-secondary" v-link="{name:'addSituation',params:{newsId:l.id}}"><i
                                    class="fa fa-pencil-square-o"></i></a>
                            <a class="btn btn-secondary" @click="isDelete(l,$index)"><i
                                    class="fa fa-trash-o text-danger"></i></a>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
            <div class="alert alert-info text-center" role="alert" v-show="showEmptyAlert">
                <strong>人生在勤!</strong> 到目前为止你还没有发布过一篇文章:/
            </div>
            {{$data|json}}
            <nav>
                <ul class="pager">
                    <li class="pager-prev disabled"><a href="javascript:;" @click="getData('older')">Older</a></li>
                    <li class="pager-next"><a href="javascript:;" @click="getData(newslist.currentPage++)">Newer</a></li>
                </ul>
            </nav>
        </div>
    </div>

</template>

<script type="text/babel">
    import moment from 'moment';
    export default{
        ready(){
            this.getData(0);
        },
        filters: {
            dateTime(value){
                return moment(value).format('L');
            }
        },
        methods: {
            isDelete(news, index){
                var isDel=window.confirm("确定要删除这条记录么?");
                if(isDel){
                    var delStiuationAPI='/admin/situation/delnews';
                    this.$http.post(delStiuationAPI, {id: news.id, filename: news.cover}).then((response)=>{
                        this.newslist.$remove(this.newslist[index]);
                        this.showEmptyAlert=true;
                    });
                }
            },
            getData(page){
                console.log(page);
//                switch(page){
//                    case 'newer':
//                        this.pageindex = this.$data.newslist.currentPage++;
//                        break;
//                    case 'older':
//                        this.pageindex = this.$data.newslist.currentPage--;
//                        break;
//                };
                var getStiuationAPI='/admin/situation/getlist';
                this.$http.post(getStiuationAPI, {page: page}).then((response)=>{
                    this.$set('newslist', response.data.data);
                    page<=response.data.data.totalPages && page>0 ? page : page=1;
                    console.log(response.data);
                    this.$data.newslist.data.length ? this.showEmptyAlert=false : this.showEmptyAlert=true;
                })
            }
        }
    }
</script>

<style lang="sass?outputStyle=expanded">

</style>