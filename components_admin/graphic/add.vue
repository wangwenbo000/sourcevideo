<template>
  <div class="card">
    <div class="card-header">
      <strong>{{actionName}}</strong>
    </div>
    <div class="card-block">
      <form>
        <fieldset class="form-group">
          <label for="title">项目名称</label>
          <input type="text" class="form-control" placeholder="请输入项目标题" v-model="input.title">
          <small class="text-muted">项目的主标题</small>
        </fieldset>
        <fieldset class="form-group">
          <label for="category">选择分类</label>
          <div class="row">
            <div class="col-xs-4">
              <select class="c-select" v-model="input.catagory">
                <option>正在做</option>
                <option>行业动态</option>
                <option>更新</option>
              </select>
            </div>
            <div class="col-xs-4">
              <div class="input-group">
                <input type="text" class="form-control" placeholder="添加新分类">
                <a class="input-group-addon btn btn-primary">增加分类</a>
              </div>
            </div>
            <div class="col-xs-4">
              <div class='input-group date' id='datetimepicker10'>
                <input type='text' class="form-control" placeholder="影片拍摄时间" v-model="input.maketime" v-model="input.maketime">
                <div class="input-group-addon"><i class="fa fa-calendar"></i></div>
              </div>
            </div>
          </div>
          <small class="text-muted">请选择最新分类</small>
        </fieldset>
        <fieldset class="form-group uploadForm">
          <label for="category">上传封面图</label>
          <input id="upload_graphic_cover" name="graphic_cover" type="file" multiple class="file-loading" accept="image/*">
          <small class="text-muted">作为项目列表封面,尺寸任意,但大小不超过800Kb</small>
        </fieldset>
        <a type="submit" class="btn btn-primary" @click="add">发布新公告</a>
      </form>
    </div>
  </div>

</template>

<script type="text/babel">
  export default{
    data(){
      return {
        input: {},
        fileInputConfig: {
          uploadUrl: "/admin/graphic/uploadcover",
          showCancel: false,
          showRemove: false,
          allowedFileExtensions: ["jpg", "png", "gif"],
          maxFileCount: 1,
          minImageWidth: 50,
          minImageHeight: 50
        },
        datePickerConfig: {
          viewMode: 'years',
          format: 'YYYY/MM'
        },
        actionName: '',
        uploadDom: "#upload_graphic_cover",
        dateDom: "#datetimepicker10",
        getAPI: '/admin/graphic/get',
        saveAPI: '/admin/graphic/add'
      }
    },
    route: {
      activate(transition){
        var id=transition.to.params.graphicId;
        if(id=='upload'){
          this.$set("actionName", "增加新的平面作品");
          transition.next();
        }else if(!isNaN(parseInt(id))){
          this.$http.post(this.getAPI, {id: id}).then(response=>{
            var response=response.data.data[0];
            this.$set("actionName", "更新平面作品ID:" + response.id);
            this.$set("input", response);
            this.$set("fileInputConfig.uploadExtraData", {filename: response.graphic});
            this.$set("fileInputConfig.initialPreview", ["<img src='/static/img/videoCover/" + response.cover + "' class='file-preview-image'>"]);
            this.$set("fileInputConfig.initialPreviewConfig", [{
              caption: response.graphic,
              width: '120px',
              url: '/admin/graphic/delcover',
              extra: {filename: response.graphic}
            }]);
          });
          transition.next();
        }else{
          alert("非法转入,操作被终端");
          transition.abort();
        }
      }
    },
    ready(){
      $(this.uploadDom).fileinput(this.fileInputConfig);
      //上传结束后更新图片文件名
      $(this.uploadDom).on('fileuploaded', (event, data)=>{
        this.$set("input.cover", data.response.data);
      });
      //删除提示
      $(this.uploadDom).on("filepredelete", ()=>{
        return confirm("你确定删除这张照片么?") ? false : true;
      });
      $(this.dateDom).datetimepicker(this.datePickerConfig);
    },
    methods: {
      add(event){
        event.preventDefault();
        this.saveData();
      },
      saveData(){
        this.input.date=moment().format('YYYY-MM-DD HH:mm:ss');
        this.$http.post(this.saveAPI, this.input).then(response=>{
          window.location.href="#!/graphic";
        });
      }
    }
  }
</script>

<style lang="sass?outputStyle=expanded">
</style>