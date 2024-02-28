
import { reactive } from 'vue'
import { defineStore } from 'pinia'
import ACCESS_ENUM from '@/access/accessEnum'

export const useUserStore = defineStore('userState', () => {
  const loginUser = reactive({
    userName: "未登录",
    userRole: ACCESS_ENUM.NOT_LOGIN
  })

  const getLoginUser = (() => {
    loginUser.userName="昼锦"
  })
  
  const updateUser = ((userName: string) => {
    loginUser.userName = userName
  })

  return { loginUser, getLoginUser, updateUser }
})
