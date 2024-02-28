import HelloWorld from '@/views/HelloView.vue'
import About from '@/views/AboutView.vue';
import Admin from "@/views/AdminView.vue";
import NoAuthView from "@/views/NoAuthView.vue";
import { createRouter, createWebHistory } from 'vue-router'
import ACCESS_ENUM from '@/access/accessEnum';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {
          path: "/",
          name: "浏览题目",
          component: HelloWorld,
      }, {
            path: "/about",
          name: "关于",
          component: About,
      }, {
          path: '/admin',
          name: "admin",
          component: Admin,
          meta: {
            access: ACCESS_ENUM.ADMIN
          }
      } ,{
          path: '/noAuth',
          name: "无权限",
          component: NoAuthView,  
      } ,{
          path: '/hide',
          name: "隐藏页面",
          component: NoAuthView,  
          meta: {
            hideInMenu: true
          }
      } 
    
  ]
})

export const routes = router.options.routes; 