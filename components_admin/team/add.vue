<template>
  <div class="card">
    <div class="card-header">
      <strong>{{actionName}}</strong>
    </div>
    <div class="card-block">
      <form>
        <fieldset class="form-group">
          <label for="title">姓名</label>
          <input type="text" class="form-control" placeholder="请输入团队人员姓名" v-model="input.name">
          <small class="text-muted">请输入团队人员姓名</small>
        </fieldset>
        <fieldset class="form-group">
          <label for="title">位置排序</label>
          <input type="text" class="form-control" placeholder="请输入排序序号" v-model="input.order">
          <small class="text-muted">按照倒序排列,请按照需求调整人员位置</small>
        </fieldset>
        <fieldset class="form-group">
          <label>职业标签</label>
          <div class="row">
            <div class="col-xs-4">
              <input type="text" class="form-control" v-model="input.profession">
            </div>
          </div>
          <small class="text-muted">请选择最新分类</small>
        </fieldset>
        <fieldset class="form-group uploadForm">
          <label for="category">上传照片</label>
          <input id="upload_face" name="face" type="file" multiple class="file-loading" accept="image/*">
          <small class="text-muted">请选择最新分类</small>
        </fieldset>
        <fieldset class="form-group">
          <label for="memberInfo">请输入该成员的介绍信息</label>
          <textarea class="form-control" id="memberInfo" rows="5" v-model="input.memberinfo"></textarea>
        </fieldset>
        <a class="btn btn-primary" @click="add">添加新成员</a>
      </form>
    </div>
  </div>

</template>

<script type="text/babel">
  export default{
    data(){
      return {
        input: {
          memberinfo:''
        },
        fileInputConfig: {
          uploadUrl: "/admin/team/uploadcover",
          showCancel: false,
          showRemove: false,
          allowedFileExtensions: ["jpg", "png", "gif"],
          maxFileCount: 1,
          minImageWidth: 50,
          minImageHeight: 50
        },
        actionName: '',
        uploadDom: "#upload_face",
        dateDom: "#datetimepicker10",
        getAPI: '/admin/team/get',
        saveAPI: '/admin/team/add'
      }
    },
    route: {
      activate(transition){
        var id=transition.to.params.memberId;
        if(id=='upload'){
          this.$set("actionName", "增加新的平面作品");
          transition.next();
        }else if(!isNaN(parseInt(id))){
          this.$http.post(this.getAPI, {id: id}).then(response=>{
            var response=response.data.data[0];
            this.$set("actionName", "更新平面作品ID:" + response.id);
            this.$set("input", response);
            this.$set("fileInputConfig.uploadExtraData", {filename: response.face});
            this.$set("fileInputConfig.initialPreview", ["<img src='/static/img/face/" + response.face + "' class='file-preview-image'>"]);
            this.$set("fileInputConfig.initialPreviewConfig", [{
              caption: response.face,
              width: '120px',
              url: '/admin/team/delcover',
              extra: {filename: response.face}
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
        this.$set("input.face", data.response.data);
      });
      //删除提示
      $(this.uploadDom).on("filepredelete", ()=>{
        return confirm("你确定删除这张照片么?") ? false : true;
      });
    },
    methods: {
      add(event){
        event.preventDefault();
        this.saveData();
      },
      saveData(){
        this.input.date=moment().format('YYYY-MM-DD HH:mm:ss');
        this.$http.post(this.saveAPI, this.input).then(response=>{
          window.location.href="#!/team";
        });
      }
    }
  }
</script>

<style lang="sass?outputStyle=expanded">
</style>