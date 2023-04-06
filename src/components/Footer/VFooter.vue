<template>
  <div class="body_subTitle">
    <button class="subTitleBtn">Правила</button>
    <router-link class="subTitleBtn" :to="{name: 'home'}">Форум</router-link>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.body_subTitle {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 5px 120px;
  gap: 25px;
  background: #2B485C;
  border-radius: 5px 5px 0 0;
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