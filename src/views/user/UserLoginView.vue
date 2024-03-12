<script setup lang="ts">
import { reactive } from "vue";

import type { UserLoginRequest } from "@/../generated/models/UserLoginRequest";
import { UserControllerService } from "@/../generated/services/UserControllerService";
import { Message } from "@arco-design/web-vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/userState";

const router = useRouter()
const userStore = useUserStore()

const form = reactive({
  userAccount: '',
  userPassword: '',
} as UserLoginRequest);
const handleSubmit = async () => {
  const res = await UserControllerService.userLoginUsingPost(form)
  //登录成功后跳转到首页
  if (res.code === 0) {
    //获取最新的登录用户
    await userStore.getLoginUser()

    router.push({
      path: "/",
      replace: true,
    })

    console.log("登录成功", res.data);
  } else {
    Message.error("登录失败" + res.message)
  }
};
</script>

<template>
  <div id="userLoginView">
    <h2>登录页面</h2>
    <a-form :model="form" :style="{ width: '600px' }" @submit="handleSubmit">
      <a-form-item field="userAccount" label="账号">
        <a-input v-model="form.userAccount" placeholder="请输入账号" />
      </a-form-item>
      <a-form-item field="userPassword" label="密码">
        <a-input-password v-model="form.userPassword" placeholder="请输入密码" />
      </a-form-item>

      <a-form-item>
        <a-button html-type="submit" type="primary">登录</a-button>
      </a-form-item>
    </a-form>

  </div>
</template>

<style scoped>
#userLoginView {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h2 {
  margin-bottom: 20px;
}
</style>
