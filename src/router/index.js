import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import Mall from '../views/Mall.vue'
import PageOne from '../views/PageOne.vue'
import PageTwo from '../views/PageTwo.vue'
import Main from '../views/Main.vue'
import Come from '../views/Come.vue'
import Introduce from '../views/Introduce.vue'
Vue.use(VueRouter)
//router的引入
//1.创建路由组件
//2.将路由与组件进行映射
//3.创建router实例
const routes = [
    {
        path:'/',
        component:Come,
        chaildren:[
            {path:'introduce', component:Introduce},
        ]
    },
    //主路由
    {
        path:'/manage',
        component:Main,
        redirect:'/manage/home',
        children:[
            {path:'home', component:Home},  //首页
            {path:'user', component:User},  //用户管理页面
            {path:'mall', component:Mall},  //商品管理页面
            {path:'page1', component:PageOne},  //子页面1
            {path:'page2', component:PageTwo},  //子页面2
        ]
    }
]
export default new VueRouter({
    routes   //简写形式
})
