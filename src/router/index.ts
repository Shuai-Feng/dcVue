import { createRouter,createWebHistory,RouteRecordRaw } from 'vue-router'

const routes:RouteRecordRaw[] = [
    {
        path:'/',
        name:'layout',
        component:()=>import('@/layout/DashLayout.vue'),
        children:[
            {
                path:'/home',
                component:()=>import('@/pages/Home.vue')
            },{
                path:'/ui',
                children:[
                    {
                        path:'/ui/button',
                        component:()=>import('@/pages/UI/Button.vue')
                    },  {
                        path:'/ui/modal',
                        component:()=>import('@/pages/UI/Modal.vue')
                    },  {
                        path:'/ui/loading',
                        component:()=>import('@/pages/UI/Loading.vue')
                    },  {
                        path:'/ui/message',
                        component:()=>import('@/pages/UI/Notifycation.vue')
                    }
                ]
            }
        ]
    }
]

const router = createRouter({
    routes,
    history:createWebHistory()
})

export default router