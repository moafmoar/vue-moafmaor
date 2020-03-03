import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import {setTitle} from "../lib/util";

Vue.use(VueRouter)
/**
 *
 * @type {({path: string, component: {components: {HelloWorld: *}, name: string}, name: string, alias: string}|{path: string, component: (function(): *), name: string}|{path: string, component: (function(): *), name: string}|{path: string, component: (function(): *)}|{path: string, component: (function(): *), children: [{path: string, component: function(): *}]})[]}
 *
 * alias 别名
 */
const routes = [
  {
    path: '/',
    alias:'/home_page',
    name: 'Home',
    component: Home,
    /*路由中函数的方式传递参数*/
    props:route => ({
      food:route.query.food
    }),
    /*路由独享守卫*/
    beforeEnter: (to,from,next) => {
      /*if (from.name === 'About') alert('这是从About页来的')
      else alert('这不是从About也来的')*/
      next()
    }
  },
  {
    path:'/info',
    name:'info',
    component:() => import('../views/info')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    props:{
      food:'banana'  /*路由对象模式传参*/
    },
    /*存放在路由组件里面的信息*/
    meta: {
       title: '关于'
    }
  },
  {
    path:'/argu/:name',
    name:'argu',
    component:() => import('@/views/argu.vue'),
    props:true  /*路由动态传参*/
  },
  {
    path:'/parent',
    name:'parent',
    component:()=> import('@/views/parent.vue'),
    children:[  //嵌套路由，子级path前面不需要加 '/'
      {
        path:'child',
        component: () => import('../views/child.vue')
      }
    ]
  },
  {
    path:'/view_name',
    components:{
      default: () => import('@/views/child.vue'),
      email: () => import('@/views/email.vue'),
      tel:() => import('@/views/tel.vue')
    }
  },
  {
    path:'/main',
    /*redirect:{
      name:'info'
    }*/
    /*redirect: to =>{
      console.log(to);
    }*/
    redirect: to => {
      return 'info'
    }
  },
  {
    path:'/login',
    name:'login',
    component: () => import('@/views/login.vue')
  },
  {
    path:'*',
    component: () => import('@/views/error_404.vue')
  }
]

const router = new VueRouter({
  /*history  浏览器地址栏 #是隐藏的
  ，hash 模式是显示#*/
  mode:'hash',
  routes
})
/*路由守卫*/
const HAS_LIGINED = true
router.beforeEach((to,from,next) => {

  to.meta && setTitle(to.meta.title)  /* 如果 to.meta 是 true 就会执行 setTitle 函数*/

   if(to.name !== 'login'){
     if(HAS_LIGINED) next()
     else next({name:'login'})
   } else {
     if(HAS_LIGINED) next({name:'Home'})
     else next()
   }
})
/*全局守卫，导航被确认之前  所有的导航钩子被确认，所有组件内守卫，异步路由别解析之后 执行*/
/*router.beforeResolve(() => {

})*/

/*后置钩子
*
* 路由跳转之后做一些操作。
* */
/*router.afterEach((to,from) => {
 // const HAS_LIGINED = false
  //logining = false;
})*/

/**
 * 1. 导航被触发
 * 2. 在失活的组件（即将离开的页面组件）里调用离开守卫 beforeRouteLeave
 * 3. 调用全局的前置守卫 beforeEach
 * 4. 在重用的组件里调用 beforeRouteUpdate
 * 5. 调用路由独享的守卫 beforeEnter
 * 6. 解析异步路由组件
 * 7. 在被激活的组件（即将进入的页面组件）里调用 beforeRouteEnter
 * 8. 调用全局的解析守卫 beforeResolve
 * 9. 导航被确认
 * 10. 调用全局的后置守卫 afterEach
 * 11. 触发DOM更新
 * 12. 用创建好的实例调用beforeRouterEnter守卫里传给next的回调函数
 */

export default router
