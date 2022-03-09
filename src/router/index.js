import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home')
const Course = () => import('views/course/Course')
const Mycour = () => import('views/mycour/Mycour')
const Profile = () => import('views/profile/Profile')
const Weather = () => import('views/weather/Weather')
const Recommend = () => import('views/recommend/Recommend')
const Study = () => import('views/study/Study')
const SetPage = () => import('views/set/Set')
const CommentPage = () => import('views/comment/Comment')
const Login = () => import('views/login/Login')
const Regist = () => import('views/regist/Regist')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      isTabBarShow: true
    }
  },
  {
    path: '/course',
    component: Course,
    meta: {
      isTabBarShow: true
    }
  },
  {
    path: '/mycour',
    component: Mycour,
    meta: {
      isTabBarShow: true
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      isTabBarShow: true
    }
  },
  {
    path: '/weather',
    component: Weather,
    meta: {
      isTabBarShow: false
    }
  },
  {
    path: '/recommend',
    component: Recommend,
    meta: {
      isTabBarShow: false
    }
  },
  {
    path: '/study/:id',
    component: Study,
    meta: {
      isTabBarShow: false
    }
  },
  {
    path: '/set',
    component: SetPage,
    meta: {
      isTabBarShow: false
    }
  },
  {
    path: '/comment',
    component: CommentPage,
    meta: {
      isTabBarShow: false
    }
  },
  {
    path: '/login',
    component: Login,
    meta: {
      isTabBarShow: false
    }
  },
  {
    path: '/regist',
    component: Regist,
    meta: {
      isTabBarShow: false
    }
  },
]

const router = new VueRouter({
  routes,
  mode: "history"
})

export default router
