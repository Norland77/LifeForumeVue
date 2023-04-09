<template>
  <div class="header">
    <h1 class="header_title">Life Forum</h1>
    <VLoginButton ></VLoginButton>
  </div>
  <div class="header_subtitle">
    <button class="header_subtitle-btn">Правила</button>
    <router-link class="header_subtitle-btn" :to="{name: 'home'}">Форум</router-link>
  </div>
</template>

<script setup lang="ts">
import VLoginButton from "./VLoginButton.vue";
</script>

<style scoped lang="scss">
.header {
  height: 100px;
  width: 100%;
  background: #176093;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 120px;
  gap: 10px;
  &_title {
    font-family: 'Liberation Sans',sans-serif;
    font-style: italic;
    font-weight: 400;
    font-size: 48px;
    color: #FFFFFF;
  }
  &_subtitle {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 5px 120px;
    gap: 25px;
    background: #2B485C;
    border-radius: 0 0 5px 5px;
    &-btn {
      font-family: 'Liberation Sans',sans-serif;
      font-style: italic;
      font-weight: 400;
      font-size: 11px;
      line-height: 25px;
      color: #FFFFFF;
      background: none;
      border: none;
    }
  }
}
</style>