import Vue from 'vue'
import Router from 'vue-router'

const Home = resolve => require(['@/views/Home'], resolve)
const Image = resolve => require(['@/views/Image'], resolve)
const Detail = resolve => require(['@/views/Detail'], resolve)
const Text = resolve => require(['@/views/Text'], resolve)
const WeiboMaker = resolve => require(['@/views/WeiboMaker'], resolve)
const Xinxin = resolve => require(['@/views/Xinxin'], resolve)
const Error404 = resolve => require(['@/views/error/Error404'], resolve)

Vue.use(Router)

let routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/image',
        component: Image
    },
    {
        path: '/text',
        component: Text
    },
    {
        path: '/detail/:id',
        component: Detail
    },
    {
        path: '/weibo_maker',
        component: WeiboMaker
    },
    {
        path: '/xinxin',
        component: Xinxin
    },
    {
        path: '*',
        component: Error404
    }
]

let router = new Router({
    mode: 'history',
    routes: routes,
    scrollBehavior (to, from, savedPosition) {
        return {
            x: 0,
            y: 0
        }
    }
})

export default router
