<script setup lang="ts">
import { useRouter } from "vue-router";
import { routes } from "../router/routes"
import { ref } from "vue";
import { useUserStore } from "../stores/userState";
const router = useRouter()
const clickMenu = (key: string) => {
  router.push({
    path: key,
  });
};

//默认的选中菜单项
const selectedKeys = ref(["/"])
//路由跳转后 更新选中的菜单项
router.afterEach((to) => {
  selectedKeys.value = [to.path]
})


const userStore = useUserStore()



</script>

<template>
  <a-row id="globalHeader" style="margin-bottom: 16px;" align="center">

    <a-col flex="auto">
      <a-menu mode="horizontal" :selected-keys="selectedKeys" @menu-item-click="clickMenu">
        <a-menu-item key="0" :style="{ padding: 0, marginRight: '38px' }" disabled>
          <div class="title-bar">
            <img class="logo" src="../assets/logo.png" alt="">
            <div class="title">在线 OJ</div>
          </div>
        </a-menu-item>
        <a-menu-item v-for="item in routes" :key="item.path">{{ item.name }}</a-menu-item>
      </a-menu>
    </a-col>
    <a-col flex="100px">
      <div>{{ userStore.loginUser.userName }}</div>
    </a-col>
  </a-row>
</template>

<style scoped>
.title-bar {
  display: flex;
  align-items: center;
}

.logo {
  height: 48px;
}

.title {
  color: darkturquoise;
  margin-left: 12px;
}
</style>
