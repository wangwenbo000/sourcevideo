<template>
  <div class="card">
    <div class="card-header">
      <strong><i class="fa fa-cloud-upload"></i> {{actionName}}</strong>
    </div>
    <div class="card-block">
      <form>
        <fieldset class="form-group">
          <label for="title">标题</label>
          <input type="text" class="form-control" id="title" placeholder="请输入视频大标题" v-model="input.title">
          <small class="text-muted">这个标题是显示在视频页面首页的</small>
        </fieldset>
        <fieldset class="form-group">
          <label for="title">英文标题</label>
          <input type="text" class="form-control" id="title" placeholder="请输入视频英文标题" v-model="input.entitle">
          <small class="text-muted">若视频有英文标题请输入,若没有请留空</small>
        </fieldset>
        <fieldset class="form-group">
          <label for="category">选择分类</label>
          <div class="row">
            <div class="col-xs-4">
              <select class="c-select" v-model="input.catagory">
                <option value="">選擇分类</option>
                <option value="Movie">电影</option>
                <option value="TV">电视</option>
                <option value="Progaganda">宣传片</option>
                <option value="Documentary">纪录片</option>
                <option value="Documentary">活动</option>
              </select>
            </div>
            <div class="col-xs-4">
              <div class="input-group">
                <input type="text" class="form-control" id="exampleInputAmount" placeholder="添加新分类">
                <a class="input-group-addon btn btn-primary">增加分类</a>
              </div>
            </div>
            <div class="col-xs-4">
              <div class='input-group date' id='datetimepicker10'>
                <input type='text' class="form-control" placeholder="影片拍摄时间" v-model="input.maketime"/>
                <div class="input-group-addon"><i class="fa fa-calendar"></i></div>
              </div>
            </div>
          </div>
          <small class="text-muted">请选择最新分类</small>
        </fieldset>
        <fieldset class="form-group">
          <label for="title"><strong class="text-primary">请输入优酷视频ID</strong></label>
          <input type="text" class="form-control" placeholder="请输入id" v-model="input.youkuid">
          <small class="text-muted">上传的时候会得到一个优酷视频id,系统将根据id请求播放视频</small>
        </fieldset>
        <fieldset class="form-group uploadForm">
          <label for="category">上传封面图</label>
          <input id="upload_video_cover" name="video_cover" type="file" multiple class="file-loading"
                 accept="image/*">
          <small class="text-muted">上传图片质量限制在800Kb,最佳分辨率300px × 300px</small>
        </fieldset>
        <button type="submit" class="btn btn-primary" @click="add">开始上传</button>
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
          uploadUrl: "/admin/video/uploadcover",
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
        uploadDom: "#upload_video_cover",
        dateDom: "#datetimepicker10",
        getAPI: '/admin/video/get',
        saveAPI: '/admin/video/add'
      }
    },
    route: {
      activate(transition){
        var id=transition.to.params.videoId;
        if(id=='upload'){
          this.$set("actionName", "增加新的视频记录");
          transition.next();
        }else if(!isNaN(parseInt(id))){
          this.$http.post(this.getAPI, {id: id}).then(response=>{
            var response=response.data.data[0];
            this.$set("actionName", "更新视频youkuID:" + response.youkuid);
            this.$set("input", response);
            this.$set("fileInputConfig.uploadExtraData", {filename: response.cover});
            this.$set("fileInputConfig.initialPreview", ["<img src='/static/img/videoCover/" + response.cover + "' class='file-preview-image'>"]);
            this.$set("fileInputConfig.initialPreviewConfig", [{
              caption: response.cover,
              width: '120px',
              url: '/admin/video/delcover',
              extra: {filename: response.cover}
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
          window.location.href="#!/video";
        });
      }
    }
  }
</script>

<style lang="sass?outputStyle=expanded">
</style>