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

//vue路由设置
Vue.use(Router);
var router = new Router();

router.map({
    '/': {
        component: Index
    },
    '/index': {
        component: Index,
        subRoutes: {
            '/situation': {
                component: Situation
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
