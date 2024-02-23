<script setup lang="ts">
import { useRouter } from "vue-router";
import { routes } from "../router/routes"

const router = useRouter()

const clickMenu = (key: string) => {
  router.push({
    path: key,
  });
};
</script>

<template>
  <div id="globalHeader">
    <a-menu mode="horizontal" :default-selected-keys="['1']" @menu-item-click="clickMenu">
      <a-menu-item key="0" :style="{ padding: 0, marginRight: '38px' }" disabled>
        <div class="title-bar">
          <img class="logo" src="../assets/logo.png" alt="">
          <div class="title">在线 OJ</div>
        </div>
      </a-menu-item>
      <a-menu-item v-for="item in routes" :key="item.path">{{ item.name }}</a-menu-item>

    </a-menu>
  </div>
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
