import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import { setTitle } from '@/lib/util.js'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})
// 实际项目中结合路由元信息（是否认证）判断是否登陆才能访问
// 实际项目通过登陆时存取后台传回来的token值，访问页面时查看是否有token判断是否登录

// 这里无token先自定义一个登陆标记
const HAS_LOGIN = true
router.beforeEach((to, from, next) => {
  // console.log(to.matched.some(record => record.meta.requiresAuth))
  // console.log(to.meta.requiresAuth)
  // console.log(HAS_LOGIN)
  // 是否需要登陆
  // if (to.meta.requiresAuth) {
  // 标记是否登录
  // if (!HAS_LOGIN) {
  //   // 未登录先去登录
  //   next({ name: 'Login' })
  // } else {
  //   // 已登录 判断跳转页。
  //   // 如果是login默认跳转首页
  //   console.log(to)
  //   if (to.path === '/login') {
  //     next({ name: 'Home' })
  //   } else {
  //     // 已登录跳转其他页面
  //     next()
  //   }
  // }
  // } else {
  //   next()
  // }
  to.meta && to.meta.title && setTitle(to.meta.title)
  if (to.path === '/login') {
    // 跳转登录页时判断是否已登录;已登录跳转到home；未登录继续跳转到login
    if (HAS_LOGIN) next({ name: 'Home' })
    else next()
  } else {
    // 不是跳转登录页，跳转某一个页面，判断是否登录，登录继续跳转目标页面
    // 未登录跳转登陆页先登录
    if (HAS_LOGIN) next()
    else next({ name: 'Login' })
  }
})

router.afterEach((to, from) => {
  // loading false
})

export default router
