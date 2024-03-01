<script setup lang="ts">
import BasicLayout from "./layouts/BasicLayout.vue"
import { onMounted } from "vue";
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
    <BasicLayout />
  </div>
</template>

<style scoped></style>
