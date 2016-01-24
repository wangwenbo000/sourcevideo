<template>
  <div id="situation_content">
    <h1>{{newlist.title}}</h1>
    <p>{{{newlist.content}}}</p>
  </div>
</template>

<script type="text/babel">
  export default{
    data(){
      return {
        query: '',
        search: '',
        getIndexData:'/home/index/getsituationdatabyid',
        show: false,
        newlist: []
      }
    },
    route: {
      activate(complete){
        this.$http.post(this.getIndexData,{id:complete.to.params.id}).then(response=> {
          this.$set('newlist', response.data.data);
          complete.next();
        })
      }
    },
    filters: {
      dateTime(value){
        return moment(value).format('L');
      }
    },
  }
</script>
<style lang="sass">
  @import "situation_content.scss";
</style>