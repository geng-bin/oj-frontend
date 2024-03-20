import HelloWorld from '@/views/HelloView.vue'
import About from '@/views/AboutView.vue';
import Admin from "@/views/AdminView.vue";
import NoAuthView from "@/views/NoAuthView.vue";
import { createRouter, createWebHistory } from 'vue-router'
import ACCESS_ENUM from '@/access/accessEnum';
import UserLogin from '@/views/user/UserLoginView.vue';
import UserRegiste from '@/views/user/UserRegisteView.vue';
import UserLayout from '@/layouts/UserLayout.vue';
import AddQuestion from '@/views/user/question/AddQuestionView.vue';
import ManageQuestion from '@/views/user/question/ManageQuestionView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {
        path: "/user",
        name: " 用户",
        component: UserLayout,
        meta: {
          hideInMenu: true
        },
        children: [
          {
            path: "/user/login",
            name: "用户登录",
            component: UserLogin,
        },
        {
            path: "/user/register",
            name: " 用户注册",
            component: UserRegiste,
          }
        ]
      },
  
      {
          path: "/add/questiuon",
          name: "创建题目",
          component: AddQuestion,
            // meta: {
            //   access: ACCESS_ENUM.ADMIN
            // }
    },
    {
        path: "/manage/questiuon",
        name: "管理题目",
        component: ManageQuestion,
          // meta: {
          //   access: ACCESS_ENUM.ADMIN
          // }
    },
    {
        path: "/update/question",
        name: "更新题目",
        component: AddQuestion,
          // meta: {
          //   access: ACCESS_ENUM.ADMIN
          // }
    },
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