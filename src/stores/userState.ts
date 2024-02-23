
import { reactive } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('userState', () => {
  const loginUser = reactive({
    userName: "未登录"
  })

  const getLoginUser = (() => {
    loginUser.userName="昼锦"
  })
  
  const updateUser = ((userName: string) => {
    loginUser.userName = userName
  })

  return { loginUser, getLoginUser, updateUser }
})
