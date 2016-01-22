<template>
  <div class="card">
    <div class="card-header">
      <strong>{{actionName}}</strong>
    </div>
    <div class="card-block">
      <form>
        <fieldset class="form-group">
          <label for="title">标题</label>
          <input type="text" class="form-control" placeholder="请输入文章大标题" v-model="input.title">
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
          <script id="editor" name="content" type="text/plain"></script>
          <small class="text-muted">请撰写文章内容,请不要再编辑器内使用代码,保证板式正确</small>
        </fieldset>
        <fieldset class="form-group">
          <input type="checkbox" v-model="input.show">
          <small class="text-muted">该篇文章不显示在首页,(可以修改,但首页显示最新5篇文章超过5篇首页可能不显示)</small>
        </fieldset>
        <button type="submit" @click="add" class="btn btn-primary">发布新公告</button>
      </form>
    </div>
  </div>
</template>

<script type="text/babel">
  export default{
    data(){
      return {
        input: {
          content:''
        },
        fileInputConfig: {
          uploadUrl: "/admin/situation/uploadcover",
          showCancel: false,
          showRemove: false,
          allowedFileExtensions: ["jpg", "png", "gif"],
          maxFileCount: 1,
          minImageWidth: 50,
          minImageHeight: 50
        },
        ueditorConfig: {
          initialFrameHeight: 500
        },
        actionName: '',
        ueditorDom: 'editor',
        uploadDom: "#upload_situation_cover",
        getAPI: '/admin/situation/getlist',
        saveAPI: '/admin/situation/addlist',
      }
    },
    route: {
      activate(transition){
        var id = transition.to.params.newsId;
        if (id == 'upload') {
          this.$set("actionName", "增加新的公告");
          transition.next();
        } else if (!isNaN(parseInt(id))) {
          this.$http.post(this.getAPI, {id: id}).then(response=> {
            var response = response.data.data[0];
            this.$set("actionName", "更新公告ID:" + response.id);
            this.$set("input", response);
            this.$set("fileInputConfig.uploadExtraData", {filename: response.cover});
            this.$set("fileInputConfig.initialPreview", ["<img src='/static/img/indexCover/" + response.cover + "' class='file-preview-image'>"]);
            this.$set("fileInputConfig.initialPreviewConfig", [{
              caption: response.cover,
              width: '120px',
              url: '/admin/situation/delcover',
              extra: {filename: response.cover}
            }]);
          });
          transition.next();
        } else {
          alert("非法转入,操作被终端");
          transition.abort();
        }
      }
    },
    ready(){
      $(this.uploadDom).fileinput(this.fileInputConfig);
      //上传结束后更新图片文件名
      $(this.uploadDom).on('fileuploaded', (event, data)=> {
        this.$set("input.cover", data.response.data);
      });
      //删除提示
      $(this.uploadDom).on("filepredelete", ()=> {
        return confirm("你确定删除这张照片么?") ? false : true;
      });
      UE.getEditor(this.ueditorDom, this.ueditorConfig);
      this.ueSelf = UE.getEditor('editor');
      var _this = this;
      this.ueSelf.ready(function () {
        _this.ueSelf.setContent(_this.input.content);
      });
    },
    destroyed(){
      this.ueSelf.destroy();
    },
    methods: {
      add(event){
        event.preventDefault();
        this.saveData();
      },
      saveData(){
        this.input.date = moment().format('YYYY-MM-DD HH:mm:ss');
        this.input.content = this.ueSelf.getContent(this.input.content);
        this.input.show == true ? this.input.show = 1 : this.input.show = 0;
        this.$http.post(this.saveAPI, this.input).then(response=> {
          window.location.href = "#!/situation";
        });
      }
    }
  }
</script>

<style lang="sass?outputStyle=expanded">

</style>