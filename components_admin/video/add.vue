<template>
  <div class="card">
    <div class="card-header">
      <strong><i class="fa fa-cloud-upload"></i> 上传视频</strong>
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
          <input type="text" class="form-control" id="title" placeholder="请输入id" v-model="input.videoid">
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
    ready(){
      $('#datetimepicker10').datetimepicker({
        viewMode: 'years',
        format: 'YYYY/MM'
      });
      this.fileInputConfig = {
        uploadUrl: "/admin/video/uploadvideocover",
        showCancel: false,
        showRemove: false,
        showUpload: false,
        allowedFileExtensions: ["jpg", "png", "gif"],
        maxFileCount: 1,
        minImageWidth: 50,
        minImageHeight: 50
      };

      $("#upload_video_cover").fileinput(this.fileInputConfig);
      if (this.$route.params.videoId != 'upload') {
        this.isEdit(parseInt(this.$route.params.videoId));
      }
    },
    beforeDestroy(){
      tinymce.remove("#editor");
    },
    methods: {
      add(event){
        event.preventDefault();
        var resource = this.$resource('/admin/video/add');
        $('#upload_video_cover').fileinput('upload');
        $('#upload_video_cover').on('fileuploaded', (event, data)=> {
          this.$data.input.content = tinymce.activeEditor.getContent();
          this.$data.input.cover = data.response.data;
          this.$data.input.date = moment().format('YYYY-MM-DD HH:mm:ss');
          $('#upload_video').fileinput('upload');
          $('#upload_video').on('fileuploaded', (event, data)=> {
            this.$data.input.runtime = data.response.data;
            resource.save(this.$data.input).then((response)=> {
//                            window.location.href = "#!/situation";
            });
          })
        });


      },
      isEdit(id){

      }
    }
  }
</script>

<style lang="sass?outputStyle=expanded">
</style>