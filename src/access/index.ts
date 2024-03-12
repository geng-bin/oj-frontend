import { useUserStore } from "../stores/userState";
import router from "@/router/index";
import ACCESS_ENUM from "./accessEnum";
import checkAccess from "./checkAccess";




router.beforeEach((to, from, next) => {
    const userStore = useUserStore()
    const loginUser = userStore.loginUser
    const needAccess = to.meta?.access ?? ACCESS_ENUM.NOT_LOGIN

    console.log("登录用户:",loginUser);
    console.log("需要的权限:",needAccess);
    
    //要跳转的页面必须要登录
    if (needAccess !== ACCESS_ENUM.NOT_LOGIN) {
        if (loginUser.userName === "未登录") {
            next(`/user/login?redirect=${to.fullPath}`);
            return;
        }
    }
    //如果已经登录了 但权限不足  跳转到无权限页面
    if (!checkAccess(loginUser, needAccess as string)) {
        next('/noAuth');
        return;
    }
    next();
})