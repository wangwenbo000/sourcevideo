import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'

import App from './app.vue'

import Index from './index/index.vue'
import Work from './work/work.vue'
import Video from './video/video.vue'
import Videoplayer from './video/videoplayer.vue'
import Design from './design/design.vue'
import About from './about/about.vue'
import Situation from './situation/situation.vue'
import Join from './join/join.vue'
import Newslist from './situation/situation_list.vue'
import Newscontent from './situation/situation_content.vue'

Vue.use(Router);
Vue.use(VueResource);

Vue.http.options.root = '/root';
Vue.http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk';
Vue.http.options.emulateJSON = true;

//vue路由设置

var router=new Router();

router.redirect({
  '/index/situation':'/index/situation/newslist'
});
router.map({
  '/': {
    name:'Index',
    component: Index
  },
  '/index': {
    name:'Index',
    component: Index,
    subRoutes: {
      '/situation': {
        name:'Situation',
        component: Situation,
        subRoutes: {
          '/newslist': {
            name:'Newslist',
            component: Newslist
          },
          '/content/:id':{
            name:'Newscontent',
            component:Newscontent
          }
        }
      }
    }
  },
  '/work': {
    name:'Work',
    component: Work
  },
  '/design': {
    name:'Design',
    component: Design
  },
  '/video': {
    name:'Video',
    component: Video,
    subRoutes:{
      '/player/:id':{
        name:'Videoplayer',
        component:Videoplayer
      }
    }
  },
  '/about': {
    name:'About',
    component: About
  },
  '/join': {
    name:'Join',
    component: Join
  }
});

router.start(App, '#app');
