<script setup lang="ts">
import type { UserRegisterRequest } from '@/../generated/models/UserRegisterRequest';
import { UserControllerService } from '@/../generated/services/UserControllerService';
import { Message } from '@arco-design/web-vue';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const form = reactive({
  userAccount: '',
  userPassword: '',
  checkPassword: '',
} as UserRegisterRequest)

const handleSubmit = async () => {
  const res = await UserControllerService.userRegisterUsingPost(form);
  if (res.code === 0) {
    console.log("注册成功");
    //注册成功跳转到登录页面
    router.push({
      path: "/user/login",
      replace: true,
    })
  } else {
    Message.error("注册失败" + res.message)
  }

}
</script>

<template>
  <div id="userRegisterView">
    <h2>注册页面</h2>
    <a-form :model="form" :style="{ width: '600px' }" @submit="handleSubmit">
      <a-form-item field="userAccount" label="账号">
        <a-input v-model="form.userAccount" placeholder="请输入账号" />
      </a-form-item>
      <a-form-item field="userPassword" label="密码">
        <a-input-password v-model="form.userPassword" placeholder="请输入密码" />
      </a-form-item>
      <a-form-item field="checkPassword" label="确认密码">
        <a-input-password v-model="form.checkPassword" placeholder="请输入密码" />
      </a-form-item>

      <a-form-item>
        <a-button html-type="submit" type="primary">注册</a-button>
      </a-form-item>
    </a-form>

  </div>
</template>

<style scoped>
#userRegisterView {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h2 {
  margin-bottom: 20px;
}
</style>
