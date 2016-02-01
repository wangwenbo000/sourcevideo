<template>
  <div class="jobBg">
    <div class="jobBox ani" transition="bounceInUp">
      <a v-link="{name:'join'}" class="close"></a>
      <div class="swiper-container">
        <ul class="swiper-wrapper">
          <li class="swiper-slide" v-for="j in joblist.data">
            <div class="pdt">
              <h2>{{j.position}}</h2>
              <time>
                最后更新时间:{{j.date | dateTime}}
              </time>
              <div class="compensation">
                <small>薪资待遇:</small>
                <i>{{j.compensation | jobfee}}</i>
              </div>
              <div class="quantity">
                需求名额 : {{j.quantity}}
              </div>
              <div class="content">
                {{{j.content}}}
              </div>

            </div>
          </li>
        </ul>
        <!-- Add Scrollbar -->
        <div class="swiper-scrollbar"></div>
      </div>
      <div class="jobInput">
        <input type="text" name="name" placeholder="告诉我们您的大名" v-model="newJoberInfo.name"/>
        <input type="text" name="phone" placeholder="您的手机号方便我面联系您" v-model="newJoberInfo.phoneNum"/>
        <input type="text" name="mail" placeholder="您的邮箱" v-model="newJoberInfo.email">
        <input type="text" name="position" placeholder="您招聘的职位" v-model="newJoberInfo.position">
        <input type="text" name="compensation" placeholder="您期望的薪资" v-model="newJoberInfo.compensation">
        <a href="javascript:;" @click="saveJob">发送信息</a>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  import moment from 'moment'
  export default{
    ready(){
      new Swiper('.swiper-container', {
        scrollbar: '.swiper-scrollbar',
        scrollbarHide: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 20,
        grabCursor: true,
        observer: true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents: true,//修改swiper的父元素时，自动初始化swiper
        mousewheelControl: true
      });
    },
    data(){
      return {
        getJobListAPI: '/home/index/getjobdata',
        saveNewJoberInfo:'/home/index/savenewjoberinfo',
        joblist: {},
        newJoberInfo:{}
      }
    },
    filters: {
      dateTime(value){
        return moment(value).format('LLL');
      },
      jobfee(value){
        return value == 0 || value == null ? "面议" : value;
      }
    },
    route: {
      activate(complete){
        this.$http.post(this.getJobListAPI).then(response=> {
          this.$set('joblist', response.data.data);
          Pace.restart();
          complete.next();
        })
      }
    },
    methods:{
      saveJob(){
        this.newJoberInfo.date = moment().format('YYYY-MM-DD HH:mm:ss');
        this.$http.post(this.saveNewJoberInfo,this.newJoberInfo).then(response=> {
          console.log(response);
        })
      }
    }
  }
</script>

<style lang="sass">
  @import "job.scss";
</style>