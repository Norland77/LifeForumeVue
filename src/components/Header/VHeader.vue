<template>
  <div class="body">
    <h1 class="title">Life Forum</h1>
    <VLoginButton :model="user"></VLoginButton>
  </div>
  <div class="body_subTitle">
    <button class="subTitleBtn">Правила</button>
    <router-link class="subTitleBtn" :to="{name: 'home'}">Форум</router-link>
  </div>
</template>

<script setup lang="ts">
import {defineComponent, ref} from "vue";
import VLoginButton from "./VLoginButton.vue";

const user = ref({
  name: "Nikita"
})

</script>

<style scoped>
.body {
  height: 100px;
  width: 100%;
  background: #176093;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 120px;
  gap: 10px;
}
.title {
  font-family: 'Liberation Sans',sans-serif;
  font-style: italic;
  font-weight: 400;
  font-size: 48px;
  color: #FFFFFF;
}
.body_subTitle {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 5px 120px;
  gap: 25px;
  background: #2B485C;
  border-radius: 0 0 5px 5px;
}
.subTitleBtn {
  font-family: 'Liberation Sans',sans-serif;
  font-style: italic;
  font-weight: 400;
  font-size: 11px;
  line-height: 25px;
  color: #FFFFFF;
  background: none;
  border: none;
}
</style>