import vue from 'vue'
import vueRouter from 'vue-router'

const Home = () => import('../views/home/Home')//首页
const Category = () => import('../views/category/Category')//分类
const Shop = () => import('../views/cart/Cart')//购物车
const Mine = () => import('../views/profile/Profile')//我的




vue.use(vueRouter)

const router = new vueRouter({
  routes: [{
    path: '',
    redirect: '/home'
  },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/cart',
      component: Shop
    },
    {
      path: '/profile',
      component: Mine
    }],
  mode: 'history'
})


export default router
