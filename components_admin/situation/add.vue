<template>
    <div class="card">
        <div class="card-header">
            <strong>公告列表</strong>
        </div>
        <div class="card-block">
            <form>
                <fieldset class="form-group">
                    <label for="title">标题</label>
                    <input type="text" class="form-control" id="title" placeholder="请输入文章大标题" v-model="input.title">
                    <small class="text-muted">这个标题是显示在公告页面首页的</small>
                </fieldset>
                <fieldset class="form-group">
                    <label for="category">选择分类</label>
                    <div class="row">
                        <div class="col-xs-2">
                            <select class="c-select" v-model="input.catagory">
                                <option>请選擇</option>
                                <option value="doing">正在做</option>
                                <option value="Industy">行业动态</option>
                                <option value="update">更新</option>
                            </select>
                        </div>
                        <div class="col-xs-4 form-group">
                            <div class="input-group">
                                <input type="text" class="form-control" id="exampleInputAmount" placeholder="添加新分类">
                                <a class="input-group-addon btn btn-primary">增加分类</a>
                            </div>
                        </div>
                    </div>
                    <small class="text-muted">请选择最新分类</small>
                </fieldset>
                <fieldset class="form-group uploadForm">
                    <label for="category">上传封面图</label>
                    <input id="upload_situation_cover" name="situation_cover" type="file" multiple class="file-loading"
                           accept="image/*">
                    <small class="text-muted">请选择最新分类</small>
                </fieldset>
                <fieldset class="form-group">
                    <label for="category">撰写文章内容</label>
                    <textarea id="editor" placeholder="Enter text ..." style=""></textarea>
                    <small class="text-muted">请撰写文章内容,请不要再编辑器内使用代码,保证板式正确</small>
                </fieldset>
                <fieldset class="form-group">
                    <input type="checkbox">
                    <small class="text-muted">该篇文章不显示在首页,(可以修改,但首页显示最新5篇文章超过5篇首页可能不显示)</small>
                </fieldset>
                <button type="submit" @click="add" class="btn btn-primary">发布新公告</button>
            </form>
        </div>
    </div>
</template>

<script type="text/babel">
    export default{
        ready(){
            tinymce.init({
                selector: '#editor',
                plugins: "image imagetools",
                height: 360
            });
            this.fileInputConfig = {
                uploadUrl: "/admin/situation/uploadcover",
                showCancel: false,
                showRemove: false,
                allowedFileExtensions: ["jpg", "png", "gif"],
                maxFileCount: 1,
                minImageWidth: 50,
                minImageHeight: 50
            };

            this.uploadDom = "#upload_situation_cover";


            if (this.$route.params.newsId != 'upload') {
                //更新配置
                this.isEdit(parseInt(this.$route.params.newsId));
                this.uploadCommand = 'filebatchuploadsuccess';
            }else {
                //添加配置
                $(this.uploadDom).fileinput(this.fileInputConfig);
                this.uploadCommand = 'fileuploaded';

            }
        },
        beforeDestroy(){
            tinymce.remove("#editor");
        },
        methods: {
            add(event){
                event.preventDefault();
                $(this.uploadDom).fileinput('upload');
                $(this.uploadDom).on(this.uploadCommand, (event, data)=> {
                    console.log(data);
                    this.saveData(data);
                });
            },
            isEdit(id){
                var getStiuationAPI = '/admin/situation/getlist';
                this.$http.post(getStiuationAPI, {id: id}).then((response)=> {
                    var response = response.data.data[0];
                    this.$set("input", response);
                    tinymce.activeEditor.setContent(response.content);
                    this.fileInputConfig.uploadExtraData = {filename: response.cover};
                    this.fileInputConfig.initialPreview = ["<img src='/static/img/indexCover/"+ response.cover +"' class='file-preview-image'>"];
                    this.fileInputConfig.initialPreviewConfig= [
                        {
                            caption: response.cover,
                            width: '120px',
                            url: 'http://localhost/avatar/delete', // server delete action
                            key: 100,
                            extra: {filename: response.cover}
                        }
                    ]
                    $(this.uploadDom).fileinput(this.fileInputConfig);
                });
            },
            saveData(data){
                var resource = this.$resource('/admin/situation/addlist');
                this.$data.input.content = tinymce.activeEditor.getContent();
                this.$data.input.cover = data.response.data;
                this.$data.input.date = moment().format('YYYY-MM-DD HH:mm:ss');
                resource.save(this.$data.input).then((response)=> {
                    window.location.href = "#!/situation";
                });
            }
        }
    }
</script>

<style lang="sass?outputStyle=expanded">
</style>