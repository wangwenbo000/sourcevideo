<template>
  <div class="card">
    <div class="card-header">
      <strong>{{actionName}}</strong>
    </div>
    <div class="card-block">
      <form>
        <fieldset class="form-group">
          <label for="title">职位名称</label>
          <input type="text" class="form-control" placeholder="请输入项目标题" v-model="input.position">
          <small class="text-muted">项目的主标题</small>
        </fieldset>
        <fieldset class="form-group">
          <label for="title">薪资待遇</label>
          <input type="text" class="form-control" placeholder="薪资待遇" v-model="input.compensation" number>
          <small class="text-muted">若不填写,网站将为默认显示为'面谈'</small>
        </fieldset>
        <fieldset class="form-group">
          <label for="title">需求名额</label>
          <input type="text" class="form-control" placeholder="名额数量" v-model="input.quantity" number>
          <small class="text-muted">该岗位的需求名额</small>
        </fieldset>
        <fieldset class="form-group">
          <label for="category">职位描述</label>
          <textarea id="editor"></textarea>
          <small class="text-muted">请撰写文章内容,主要描述项目的图文细节,类似博客文章</small>
        </fieldset>
        <a class="btn btn-primary" @click="add">发布新职位</a>
      </form>
    </div>
  </div>

</template>

<script type="text/babel">
  export default{
    data(){
      return {
        input: {},
        tinyMCEConfig:{
          selector: '#editor',
          height: 360
        },
        getAPI: '/admin/joblist/get',
        saveAPI: '/admin/joblist/add',
        actionName:''
      }
    },
    route: {
      activate(transition){
        var id = transition.to.params.jobId;
        if (id == 'upload') {
          this.$set("actionName", "增加新的招聘职位");
          transition.next();
        } else if (!isNaN(parseInt(id))) {
          this.$http.post(this.getAPI, {id: id}).then(response=> {
            var response = response.data.data[0];
            this.$set("actionName", "更新视频职位信息 ID:" + response.id);
            this.$set("input", response);
          });
          transition.next();
        } else {
          alert("非法转入,操作被终端");
          transition.abort();
        }
      }
    },
    ready(){
      tinymce.init(this.tinyMCEConfig);
      tinymce.activeEditor.setContent(this.input.content);
    },
    beforeDestroy(){
      tinymce.remove("#editor");
    },
    methods: {
      add(event){
        event.preventDefault();
        this.saveData();
      },
      saveData(){
        this.input.date = moment().format('YYYY-MM-DD HH:mm:ss');
        this.input.content = tinymce.activeEditor.getContent();
        this.$http.post(this.saveAPI, this.input).then(response=> {
          window.location.href = "#!/job/joblist";
        });
      }
    }
  }
</script>

<style lang="sass?outputStyle=expanded">
</style>