<template>
  <div>
    <h1>Situationp <p>索斯最新通告</p></h1>
    <input type="text" v-model="search" class="newsListSearch" placeholder="输入关键词检索通告">
    <ul class="listCategory">
      <li>
        <a href="javascript:;" v-bind:class="query" @click="query = ''">
          <h2>全部</h2>
          <span>all</span>
        </a>
      </li>
      <li>
        <a href="javascript:;" v-bind:class="query" @click="query = 'doing'">
          <h2>正在做</h2>
          <span>doing</span>
        </a>
      </li>
      <li>
        <a href="javascript:;" v-bind:class="query" @click="query = 'Industy'">
          <h2>行业动态</h2>
          <span>Industy trends</span>
        </a>
      </li>
      <li>
        <a href="javascript:;" v-bind:class="query" @click="query = 'update'">
          <h2>更新</h2>
          <span>update</span>
        </a>
      </li>
    </ul>
    <ul class="listCategoryInList">
      <li v-for="list in newlist.data | filterBy query in 'catagory' | filterBy search in 'title'" transition="staggered"
          stagger="60">
        <time>{{list.date | dateTime}}</time>
        <span>/ 23:59:34</span>
        <a v-link="{name:'Newscontent',params:{id:list.id}}">
          <h2>{{list.title}}</h2>
        </a>
      </li>
    </ul>
  </div>
</template>

<script type="text/babel">
  import moment from 'moment'
  export default{
    data(){
      return {
        query: '',
        search: '',
        getIndexData:'/home/index/getindexdata',
        show: false,
        newlist: []
      }
    },
    route: {
      activate(complete){
        this.$http.post(this.getIndexData).then(response=> {
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
  @import "situation_list.scss";
</style>