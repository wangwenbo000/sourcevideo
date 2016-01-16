import moment from 'moment';
export default{
  /*
  系统列表渲染
  删除单条记录
  翻页
   numsPerPage() 实时更新每页显示的记录数量
   showPREV() 展示上一页按钮
   showNEXT() 展示下一页按钮
   showEmptyAlert() 是否显示没有记录的消息提示[没有记录的时候会显示]

   组件中的配置参数
   data(){
    return {
    =========================================
    getAPI: '/admin/photo/get', 查询
    delAPI: '/admin/photo/del', 删除
    pageIndex: null,            当前页指针
    listData:{}                 获取的主要数据存储在这个对象中
    =========================================
    }
   }
  */

  computed: {
    numsPerPage(){
      return this.listData.numsPerPage;
    },
    showPREV(){
      return this.listData.currentPage > 1 ? true : false;
    },
    showNEXT(){
      return this.listData.data.length >= this.numsPerPage && this.listData.count > this.numsPerPage ? true : false;
    },
    showEmptyAlert(){
      return this.listData.count > 0 && this.listData.data.length > 0 ? false : true;
    }
  },
  route: {
    activate(complete){
      this.$http.post(this.getAPI, {page: 1}).then((response)=> {
        this.$set('listData', response.data.data);
        complete.next();
      })
    }
  },
  filters: {
    dateTime(value){
      return moment(value).format('L');
    }
  },
  methods: {
    delete(item, index){
      var isDel = window.confirm('[' + item.id + ']' + '[' + item.title + ']' + " 将要被删除!");
      if (isDel) {
        this.$http.post(this.delAPI, {id: item.id, filename: item.cover}).then(()=> {
          this.listData.data.$remove(this.listData.data[index]);
        });
      }
    },
    getData(action){
      switch (action) {
        case 'prev':
          this.pageIndex = this.listData.currentPage - 1;
          break;
        case 'next':
          this.pageIndex = this.listData.currentPage + 1;
          break;
      }
      this.$http.post(this.getAPI, {page: this.pageIndex}).then(response=> {
        this.$set('listData', response.data.data);
      })
    }
  }
}