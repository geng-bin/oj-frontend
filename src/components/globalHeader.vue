<script setup lang="ts">
import { useRouter } from "vue-router";
import { routes } from "../router/routes"
import { computed, reactive, ref } from "vue";
import { useUserStore } from "../stores/userState";
import checkAccess from "@/access/checkAccess";
import ACCESS_ENUM from "@/access/accessEnum";
const router = useRouter()
const userStore = useUserStore()

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

let loginUser = userStore.loginUser
//展示的菜单数组
const visableRoutes = computed(() => {
  return routes.filter((item) => {
    if (item.meta?.hideInMenu) {
      return false;
    }
    //根据权限过滤
    if (!checkAccess(loginUser, item.meta?.access as string)) {
      return false;
    }
    return true;
  })
})

// setTimeout(() => {
//   loginUser.userName = "昼锦"
//   loginUser.userRole = ACCESS_ENUM.ADMIN
// }, 2000);

// setTimeout(() => {
//   Object.assign(loginUser, {
//     userName: "昼锦",
//     userRole: ACCESS_ENUM.ADMIN
//   })

// }, 2000);

</script>

<template>
  <a-row id="globalHeader" align="center" :wrap="false">

    <a-col flex="auto">
      <a-menu mode="horizontal" :selected-keys="selectedKeys" @menu-item-click="clickMenu">
        <a-menu-item key="0" :style="{ padding: 0, marginRight: '38px' }" disabled>
          <div class="title-bar">
            <img class="logo" src="../assets/logo.png" alt="">
            <div class="title">在线 OJ</div>
          </div>
        </a-menu-item>

        <a-menu-item v-for=" item  in  visableRoutes " :key="item.path">{{ item.name }}</a-menu-item>
      </a-menu>
    </a-col>
    <a-col flex="100px">
      <div>{{ loginUser?.userName ?? "未登录" }} {{ loginUser?.userRole }}</div>
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
