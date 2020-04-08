import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../components/Home.vue'
// import User from '../components/User.vue'

const Home = () => import('../components/Home.vue')
const HomeNews = () => import('../components/HomeNews.vue')
const HomeMessages = () => import('../components/HomeMessages.vue')

const About = () => import('../components/About.vue')
const User = () => import('../components/User.vue')
const Profile = () => import('../components/Profile.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    meta: {
      title: '首页'
    },
    component: Home,
    children: [
      // {
      //   path: '/',
      //   redirect: 'news'
      // },
      {
        path: 'news',
        component: HomeNews
      },
      {
        path: 'messages',
        component: HomeMessages
      }
    ]
  },
  {
    path: '/about',
    meta: {
      title: '关于'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../components/About.vue')
    component: About
  },
  {
    path: '/user/:userId',
    meta: {
      title: '用户'
    },
    component: User,
    // beforeEnter(to, from, next) {
    //   console.log('user beforeEnter')
    //   next('/about')
    // }
  },
  {
    path: '/profile',
    meta: {
      title: '档案'
    },
    component: Profile
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  // console.log(from);
  // console.log(to);
  document.title = to.matched[0].meta.title
  next();
})

export default router
