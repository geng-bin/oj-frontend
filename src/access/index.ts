import { useUserStore } from "../stores/userState";
import router from "@/router/index";




router.beforeEach((to, from, next) => {
    const userStore = useUserStore()
    const loginUser = userStore.getLoginUser()

    
    
 
})