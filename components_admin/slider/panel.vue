<template>
  <div class="card card-block" style="text-align: center">
    <!--<img class="card-img-top" data-src="img/admintop.jpg" src="../img/admintop.jpg" style="width:100%" alt="Card image cap">-->
    <h4 class="card-title">
      {{adminInfo.nickname}}
      <small text-muted>{{adminInfo.username}}</small>
    </h4>
    <a class="btn btn-danger btn-sm"><i class="fa fa-user-secret"></i></a>
    <a class="btn btn-secondary btn-sm">修改密码</a>
    <a class="btn btn-secondary btn-sm" href="/admin/login/logout">
      <i class="fa fa-power-off"></i>
    </a>
  </div>
</template>

<script type="text/babel">
  export default{
    data(){
      return{
        getInfoAPI:'/admin/index/logininfo',
        adminInfo:{
          nickname:'',
          username:''
        }
      }
    },
    ready(){
      this.$http.post(this.getInfoAPI).then(response=> {
        this.$set("adminInfo", response.data.data);
      });
    },
    computed: {
      serverLastDay(){
        return moment([2016, 9, 30]).toNow();
      }
    }
  }
</script>