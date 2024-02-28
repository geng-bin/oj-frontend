<script setup lang="ts">
import globalHeader from "../components/globalHeader.vue"
</script>

<template>
  <div id="basicLayout">
    <a-layout style="height: 400px;">
      <a-layout-header class="header">
        <globalHeader />
      </a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer">我来组成底部</a-layout-footer>

    </a-layout>

  </div>
</template>

<style scoped>
#basicLayout {}

#basicLayout .header {
  margin-bottom: 16px;
}

#basicLayout .content {
  background-color: yellow;
  margin-bottom: 16px;
  padding: 20px;
}

#basicLayout .footer {
  background-color: gray;
  padding: 16px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
