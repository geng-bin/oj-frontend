<script setup lang="ts">
import { useRouter } from "vue-router";
import BasicLayout from "./layouts/BasicLayout.vue"
import { useUserStore } from "./stores/userState";
const router = useRouter()
const userStore = useUserStore()
router.beforeEach((to, from, next) => {
  console.log(to);
  if (to.meta.access === 'admin') {
    if (userStore.loginUser.userRole !== 'admin') {
      next("/noAuth")
      return
    }
  }
  next()

})
</script>

<template>
  <div id="app">
    <BasicLayout />
  </div>
</template>

<style scoped></style>
