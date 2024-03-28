
import { reactive } from 'vue'
import { defineStore } from 'pinia'
import ACCESS_ENUM from '@/access/accessEnum'
import {UserControllerService} from "../../generated/services/UserControllerService"
  
// 从LocalStorage中获取已登录的用户信息
const savedUser = JSON.parse(localStorage.getItem('loginUser')) 

export const useUserStore = defineStore('userState', () => {
  const loginUser = reactive({
    userName: savedUser ? savedUser.userName : "未登录",
    userRole: savedUser ? savedUser.userRole : ACCESS_ENUM.NOT_LOGIN
  })

  const getLoginUser = async () => {
    //从后端获取登录信息
    const res = await UserControllerService.getLoginUserUsingGet();
    
    
    if (res.code === 0) {
      updateUser(res.data);
      // 将登录用户信息存储到LocalStorage中
      localStorage.setItem('loginUser', JSON.stringify(res.data))
    } else {
      updateUser({
        userName: "未登录",
        userRole: ACCESS_ENUM.NOT_LOGIN
      })
      // 清除LocalStorage中的用户信息
      localStorage.removeItem('loginUser')
    }
    // console.log("获取登录用户 ", loginUser);
    return loginUser;
  }
  
  const updateUser = ((user: any) => {
    Object.assign(loginUser, user)
  })

  return {loginUser, getLoginUser, updateUser }
})
