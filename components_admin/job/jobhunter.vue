<template>
  <table class="table table-striped table-hover">
    <thead>
    <tr>
      <th>#</th>
      <th>姓名</th>
      <th>手机号码</th>
      <th>电邮</th>
      <th>应聘职业</th>
      <th>期望薪资</th>
      <th>提交时间</th>
      <th>操作</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="jh in listData.data">
      <th scope="row">{{jh.id}}</th>
      <td>{{jh.name}}</td>
      <td><h5>{{jh.phone}}</h5></td>
      <td>{{jh.mail}}</td>
      <td>{{jh.position}}</td>
      <td>{{jh.compensation | currency '￥'}}</td>
      <td>{{jh.date | dateTime}}</td>
      <td>
        <a href="javascript:;" class="btn btn-secondary btn-sm"
           @click="delete(jh,$index)">
          <i class="fa fa-trash-o"></i>
        </a>
      </td>
    </tr>
    </tbody>
  </table>
  <div class="alert alert-info text-center" role="alert" v-show="showEmptyAlert">
    <strong>:/</strong> 还没有相应的应聘信息记录! &nbsp;&nbsp;
  </div>
  <nav>
    <ul class="pager">
      <li class="pager-prev" v-show="showPREV">
        <a href="javascript:;"
           @click="getData('prev')">
          上一页
        </a>
      </li>
      <li class="pager-next" v-show="showNEXT">
        <a href="javascript:;"
           @click="getData('next')">
          下一页
        </a>
      </li>
    </ul>
  </nav>
</template>

<script type="text/babel">
  import init from '../mixin/mixin_initPage';
  export default{
    data(){
      return {
        getAPI: '/admin/jobhunter/get',
        delAPI: '/admin/jobhunter/del',
        pageIndex: null,
        listData: {}
      }
    },
    mixins: [init]
  }
</script>