<script setup lang="ts">
import { useRoute } from "vue-router";
import BasicLayout from "./layouts/BasicLayout.vue"
import { onMounted } from "vue";
import UserLayout from "./layouts/UserLayout.vue";

const route = useRoute()

/**
 * 全局初始化函数, 有全局单次调用的代码, 都可以放到这里
 */
const doInit = () => {
  console.log("~~~~~~~~~~~~~~")
}

onMounted(() => {
  doInit();
})
</script>

<template>
  <div id="app">
    <template v-if="route.path.startsWith('/user')">
      <router-view />
    </template>
    <template v-else>
      <BasicLayout />
    </template>

  </div>
</template>

<style scoped></style>
