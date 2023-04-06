<template>
  <div class="app">
    <VHeader></VHeader>
    <router-view></router-view>
    <VFooter></VFooter>
  </div>
</template>

<script setup lang="ts">

import VHeader from "./components/Header/VHeader.vue";
import VSubHeader from "./components/Header/VSubHeader.vue";
import VFooter from "./components/Footer/VFooter.vue";
</script>

<style scoped>

</style>
