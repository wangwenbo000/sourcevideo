import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'

import App from './app.vue'

import Index from './index/index.vue'
import Work from './work/work.vue'
import Video from './video/video.vue'
import Videoplayer from './video/videoplayer.vue'
import Design from './design/design.vue'
import Designlist from './design/design_list.vue'
import About from './about/about.vue'
import Situation from './situation/situation.vue'
import Join from './join/join.vue'
import Membercard from './join/teamcard.vue'
import Joblist from './join/job.vue'
import Newslist from './situation/situation_list.vue'
import Newscontent from './situation/situation_content.vue'

Vue.use(Router);
Vue.use(VueResource);

Vue.http.options.root = '/root';
Vue.http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk';
Vue.http.options.emulateJSON = true;

//vue路由设置

var router = new Router();

router.redirect({
  '/index/situation': '/index/situation/newslist',
});
router.map({
  '/': {
    name: 'index',
    component: Index
  },
  '/index': {
    name: 'index',
    component: Index
  },
  '/situation': {
    name: 'situation',
    component: Situation,
    subRoutes: {
      '/newslist': {
        name: 'newslist',
        component: Newslist
      },
      '/content/:id': {
        name: 'newscontent',
        component: Newscontent
      }
    }
  },
  '/work': {
    name: 'work',
    component: Work
  },
  '/design': {
    name: 'design',
    component: Design,
    subRoutes: {
      '/showGraphic/:id': {
        name: 'graphiclist',
        component: Designlist
      }
    }
  },
  '/video': {
    name: 'video',
    component: Video,
    subRoutes: {
      '/player/:id': {
        name: 'videoplayer',
        component: Videoplayer
      }
    }
  },
  '/about': {
    name: 'about',
    component: About
  },
  '/join': {
    name: 'join',
    component: Join,
    subRoutes: {
      '/memberCard/:id': {
        name: 'membercard',
        component: Membercard
      },
      '/joblist': {
        name: 'joblist',
        component: Joblist
      }
    }
  }
});

router.start(App, '#app');
