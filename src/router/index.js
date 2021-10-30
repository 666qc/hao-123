import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NProgress from "nprogress";




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    
  },
  
  {
    path: '/login',
    name: 'Login',    
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },


  
  {
    path:'/history',
    name:'History',
    component: () => import(/* webpackChunkName: "about" */ '@/components/History.vue')
  },
  {
    path:'/fashion',
    name:'Fashion',
    component: () => import(/* webpackChunkName: "about" */ '@/components/Fashion.vue')
  },
  {
    path:'/recreation',
    name:'Recreation',
    component: () => import(/* webpackChunkName: "about" */ '@/components/Recreation.vue')
  },
  
  
]



const router = new VueRouter({
  routes,

})


// 全局前守卫
router.beforeEach((to, from, next) => {
  // console.log(to)
  let { path } = to;
  let { title, requiresAuth } = to.meta;
  document.title = title;
  NProgress.start()
  //  true 不用校验  false 需要校验
  let token = localStorage.getItem('token')
  if (path === "/login" || path === "/register") {
    console.log('登录不需要校验');
    next()
  } else if (token) {
    if (path !== "/login") {
      console.log("需要校验");
      requiresAuth = true
      next()
    }
  }else {
    console.log("不需要校验");
    NProgress.done()
    // 没权限打到登录页面
    next({ path: '/login' })
  }


})


//  全局后守卫
router.afterEach((to, from) => {
  NProgress.done()
})




export default router
