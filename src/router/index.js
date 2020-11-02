import vue from 'vue'
import vueRouter from 'vue-router'

const Home = () => import('../views/home/Home')//首页
const Category = () => import('../views/category/Category')//分类
const Cart = () => import('../views/cart/Cart')//购物车
const Profile = () => import('../views/profile/Profile')//我的
const Detail = () =>import('../views/detail/Detail')//详情页面




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
      component: Cart
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path:'/detail/:iid',
      component:Detail
    }],
  mode: 'history'
})


export default router
