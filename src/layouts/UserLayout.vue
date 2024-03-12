<script setup lang="ts">

</script>

<template>
  <div id="userlayout">
    <a-layout style="height: 400px;">
      <a-layout-header class="header">
        <a-space>
          <img src="../assets/logo.png" class="logo">
          在线 OJ
        </a-space>

      </a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer">我来组成底部</a-layout-footer>

    </a-layout>

  </div>
</template>

<style scoped>
#userlayout {
  text-align: center;
  background: url("https://gw.alipayobjects.com/zos/rmsportal/FfdJeJRQWjEeGTpqgBKj.png") 0% 0% / 100% 100%;

}

#userlayout .logo {
  height: 64px;
  width: 64px;
}

#userlayout .header {
  margin-bottom: 16px;
}

#userlayout .content {
  margin-bottom: 16px;
  padding: 20px;
}

#userlayout .footer {
  background-color: gray;
  padding: 16px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
