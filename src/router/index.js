import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/page/login'
import Article from '../components/page/back/article/index'
import Event from "../components/commom/event"
import MarkDown from '../components/page/back/article/post/index'
import BackBlog from '../components/layout/backBlog'
import Blog from '../components/layout/blog'
Vue.use(Router);
export default new Router({
  linkActiveClass: 'routerActive',
    routes: [
      {
        path: '/back',
        component: BackBlog,
        children: [
          {
            path: '/mark',
            component: MarkDown
          },
          {
            path: '/article',
            component: Article
          },
        ]
      },
      {
        path: '/',
        component: Blog,
        children: [
          {
            path: '/event',
            component: Event

          },
          {
            path: '/article',
            component: Article
          },
        ]
      },
      {
        path: '/login',
        component: Login
      },
    ]
  }
)
