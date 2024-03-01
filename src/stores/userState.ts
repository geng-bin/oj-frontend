
import { reactive } from 'vue'
import { defineStore } from 'pinia'
import ACCESS_ENUM from '@/access/accessEnum'
import {UserControllerService} from "../../generated/services/UserControllerService"
  
export const useUserStore = defineStore('userState', () => {
  let loginUser = reactive({
    userName: "未登录",
    
  })

  const getLoginUser = async () => {
    //从后端获取登录信息
    const res = await UserControllerService.getLoginUserUsingGet();
    console.log("--------",res);
    
    if (res.code === 0) {
      loginUser = updateUser(res.data);
    } else {
      loginUser = updateUser({
        ...loginUser,
        userRole: ACCESS_ENUM.NOT_LOGIN
      })
    }
    return loginUser;
  }
  
  const updateUser = ((user: any) => {
    loginUser = user
    return loginUser
  })

  return { getLoginUser, updateUser }
})
