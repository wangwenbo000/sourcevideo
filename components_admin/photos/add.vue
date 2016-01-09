<template>
    <div class="card">
        <div class="card-header">
            <strong>增加项目剧照</strong>
        </div>
        <div class="card-block">
            <form>
                <fieldset class="form-group">
                    <label for="title">项目名称</label>
                    <input type="text" class="form-control" id="title" placeholder="请输入项目标题">
                    <small class="text-muted">项目的主标题</small>
                </fieldset>
                <fieldset class="form-group">
                    <label for="category">选择分类</label>
                    <div class="row">
                        <div class="col-xs-4">
                            <select class="c-select">
                                <option>正在做</option>
                                <option>行业动态</option>
                                <option>更新</option>
                            </select>
                        </div>
                        <div class="col-xs-4">
                            <div class="input-group">
                                <input type="text" class="form-control" id="exampleInputAmount" placeholder="添加新分类">
                                <a class="input-group-addon btn btn-primary">增加分类</a>
                            </div>
                        </div>
                    </div>
                    <small class="text-muted">请选择最新分类</small>
                </fieldset>
                <fieldset class="form-group">
                    <label for="category">上传封面图</label>
                    <Uploadphotoscover></Uploadphotoscover>
                    <small class="text-muted">作为项目列表封面,尺寸任意,但大小不超过800Kb</small>
                </fieldset>
                <fieldset class="form-group uploadForm">
                    <label for="category">上传封剧照</label>
                    <Uploadphotos></Uploadphotos>
                    <small class="text-muted">作为项目列表封面,尺寸任意,但大小不超过800Kb</small>
                </fieldset>
                <button type="submit" class="btn btn-primary">发布新公告</button>
            </form>
        </div>
    </div>

</template>

<script type="text/babel">
    import Uploadphotoscover from './uploadphotocover.vue'
    import Uploadphotos from './uploadphotos.vue'
    export default{
        ready(){
            tinymce.init({
                selector:'#editor',
                plugins: "image imagetools" ,
                height: 200
            });
        },
        beforeDestroy(){
            tinymce.remove("#editor");
        },
        components:{
            Uploadphotoscover,
            Uploadphotos
        }
    }
</script>

<style lang="sass?outputStyle=expanded">
</style>