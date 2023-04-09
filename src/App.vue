<template>
  <div class="app">
    <VHeader></VHeader>
    <div class="main">
      <router-view></router-view>
    </div>
    <VFooter></VFooter>
  </div>
</template>

<script setup lang="ts">

import VHeader from "./components/Header/VHeader.vue";
import VFooter from "./components/Footer/VFooter.vue";
</script>

<style scoped>
.app {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
.main {
  flex: 1 1 auto;
}
</style>
