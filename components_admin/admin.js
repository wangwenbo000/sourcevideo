/**
 * Created by wangwenbo on 15/12/29.
 */
import Dropdown from './bootstrap/js/dropdown.js'
import Modal from './bootstrap/js/modal.js'
import Vue from 'vue'
import Router from 'vue-router'
import VueValidator from 'vue-validator'
import VueResource from 'vue-resource'
import App from './admin.vue'

//admin Components
import Index from './index/index.vue'
import Situation from './situation/situation.vue'
import addStiuation from './situation/add.vue'
import Video from './video/video.vue'
import addVideo from './video/add.vue'
import Graphic from './graphic/graphic.vue'
import addGraphic from './graphic/add.vue'
import Team from './team/team.vue'
import addMember from './team/add.vue'
import Job from './job/job.vue'
import jobList from './job/joblist.vue'
import jobHunter from './job/jobhunter.vue'
import addJob from './job/add.vue'
import Photos from './photos/photos.vue'
import addPhotos from './photos/add.vue'

//vue路由设置
Vue.use(Router);
Vue.use(VueValidator);
Vue.use(VueResource);

Vue.http.options.root = '/root';
Vue.http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk';
Vue.http.options.emulateJSON = true;

var router = new Router();
router.redirect({
  '/job':'/job/joblist'
});
router.map({
  '/': {
    name: 'Index',
    component: Index
  },
  '/situation': {
    name: 'situation',
    component: Situation
  },
  '/addSituation/:newsId': {
    name: 'addSituation',
    component: addStiuation
  },
  '/video': {
    name: 'video',
    component: Video
  },
  '/addVideo/:videoId': {
    name: 'addVideo',
    component: addVideo
  },
  'graphic': {
    name: 'graphic',
    component: Graphic
  },
  '/addGraphic/:graphicId': {
    name: 'addGraphic',
    component: addGraphic
  },
  'team': {
    name: 'team',
    component: Team
  },
  '/addMember/:memberId': {
    name: 'addMember',
    component: addMember
  },
  '/job': {
    name: 'job',
    component: Job,
    'subRoutes':{
      '/joblist': {
        name: 'joblist',
        component: jobList
      },
      '/jobhunter': {
        name: 'jobhunter',
        component: jobHunter
      }
    }
  },
  '/addJob/:jobId': {
    name: 'addJob',
    component: addJob
  },
  'photos': {
    name: 'photos',
    component: Photos
  },
  '/addPhotos/:photoId': {
    name: 'addPhotos',
    component: addPhotos
  }
});

router.start(App, '#app');
