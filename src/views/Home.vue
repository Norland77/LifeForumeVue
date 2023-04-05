<template>

  <div class="home_body">
    <ThemeList></ThemeList>
    <div class="home_rightSide">
      <VTagsBlock></VTagsBlock>
      <button class="createThemeBtn">Створити тему</button>
      <VForumStats></VForumStats>
    </div>
  </div>
</template>

<script setup lang="ts">

import VHeader from "../components/Header/VHeader.vue";
import ThemeList from "../components/ThemeList/VThemeList.vue";
import VTagsBlock from "../components/Tags/VTagsBlock.vue";
import VForumStats from "../components/ForumStats/VForumStats.vue";
</script>

<style scoped>
.home_body {
  display: flex;
  gap: 25px;
}
.home_rightSide {
  width: 15%;
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.createThemeBtn {
  border: 1px solid #A5CAE4;
  border-radius: 5px;
  width: 100%;
  padding: 40px 0;
  background: none;
  font-family: 'Inter',sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #176093;
}
</style>