<template>
  <div class="container">
    <form class="form-signin">
      <h2 class="form-signin-heading">Admin Panel</h2>
      <input type="email" id="inputEmail" class="form-control" placeholder="username" required autofocus v-model="login.username">
      <input type="password" id="inputPassword" class="form-control" placeholder="Password" required v-model="login.password">
      <a class="btn btn-lg btn-primary btn-block" @click="login">Sign in</a>
    </form>
  </div>
</template>

<script type="text/babel">
  export default{
    ready(){
    },
    methods:{
      login(event){
        event.preventDefault();

      }
    }
  }
</script>

<style lang="sass">
  /*body {*/
    /*padding-top: 40px;*/
    /*padding-bottom: 40px;*/
    /*background-color: #eee;*/
  /*}*/
  .container{
    min-width: 10px;
    max-width: 300px;
  }
  .form-signin {
    max-width: 330px;
    padding: 15px;
    margin: 0 auto;
  }
  .form-signin .form-control {
    position: relative;
    height: auto;
     -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 10px;
    font-size: 16px;
  }
  .form-signin-heading{
    margin-bottom: 20px;
    text-align: center;
  }
  .form-signin .form-control:focus {
    z-index: 2;
  }
  .form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  .form-signin input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
</style>