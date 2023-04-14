<template>
  <div class="header">
    <h1 class="header_title">Life Forum</h1>
    <VLoginButton ></VLoginButton>
  </div>
  <div class="header_subtitle">
    <router-link class="header_subtitle-btn" :to="{name: 'rules'}">Правила</router-link>
    <router-link class="header_subtitle-btn" :to="{name: 'home'}">Форум</router-link>
  </div>
</template>

<script setup lang="ts">
import VLoginButton from "./VLoginButton.vue";
</script>

<style scoped lang="scss">
@import "../../assets/main.scss";
.header {
  @include adaptive-value("height", 100, 25, 1);
  width: 100%;
  background: #176093;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  @include adaptive-value("padding-left", 120, 0, 1);
  @include adaptive-value("padding-right", 120, 0, 1);
  @include adaptive-value("gap", 10, 0, 1);
  &_title {
    margin-top: 5px;
    font-family: 'Liberation Sans',sans-serif;
    font-style: italic;
    font-weight: 400;
    @include adaptive-value("font-size", 48, 24, 1);
    color: #FFFFFF;
  }
  &_subtitle {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    @include adaptive-value("padding-top", 5, 0, 1);
    @include adaptive-value("padding-bottom", 5, 0, 1);
    @include adaptive-value("padding-left", 120, 0, 1);
    @include adaptive-value("padding-right", 120, 0, 1);
    @include adaptive-value("gap", 25, 0, 0);
    background: #2B485C;
    border-radius: 0 0 5px 5px;
    &-btn {
      font-family: 'Liberation Sans',sans-serif;
      font-style: italic;
      font-weight: 400;
      @include adaptive-value("font-size", 11, 8, 1);
      line-height: 25px;
      color: #FFFFFF;
      background: none;
      border: none;
    }
  }
}
</style>