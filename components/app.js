import Vue from 'vue'
import Router from 'vue-router'

import App from './app.vue'

import Index from './index/index.vue'
import Work from './work/work.vue'
import Video from './video/video.vue'
import Design from './design/design.vue'
import About from './about/about.vue'
import Situation from './situation/situation.vue'
import Join from './join/join.vue'
import Newslist from './situation/situation_list.vue'
import Newscontent from './situation/situation_content.vue'

//vue路由设置
Vue.use(Router);
var router=new Router();
router.redirect({
  '/index/situation':'/index/situation/newslist'
});
router.map({
  '/': {
    component: Index
  },
  '/index': {
    component: Index,
    subRoutes: {
      '/situation': {
        component: Situation,
        subRoutes: {
          '/newslist': {
            component: Newslist
          },
          '/content/:id':{
            component:Newscontent
          }
        }
      }
    }
  },
  '/work': {
    component: Work,
    subRoutes: {
      '/design': {
        component: Design
      },
      '/video': {
        component: Video
      }
    }
  },
  '/about': {
    component: About
  },
  '/join': {
    component: Join
  }
});

router.start(App, '#app');
