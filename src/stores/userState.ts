
import { reactive } from 'vue'
import { defineStore } from 'pinia'
import ACCESS_ENUM from '@/access/accessEnum'
import {UserControllerService} from "../../generated/services/UserControllerService"
  
export const useUserStore = defineStore('userState', () => {
  const loginUser = reactive({
    userName: "未登录",
    userRole: ACCESS_ENUM.NOT_LOGIN
  })

  const getLoginUser = async () => {
    //从后端获取登录信息
    const res = await UserControllerService.getLoginUserUsingGet();
    // console.log("--------",res);
    
    if (res.code === 0) {
      updateUser(res.data);
    } else {
      updateUser({
        userName: "未登录",
        userRole: ACCESS_ENUM.NOT_LOGIN
      })
    }
    // console.log("获取登录用户 ", loginUser);
    return loginUser;
  }
  
  const updateUser = ((user: any) => {
    Object.assign(loginUser, user)
  })

  return {loginUser, getLoginUser, updateUser }
})
