<template>
  <div class="home">
    <ThemeList></ThemeList>
    <div class="home_rightSide">
      <VTagsBlock></VTagsBlock>
      <div v-if="!isLogged" class="home_create">
        <p>Щоб створити тему будь ласка зареєструйтесь</p>
      </div>
      <div v-else-if="$store.state.loginStore.isBanned" class="home_create">
        <p>Нажаль ви заблоковані адміністрацією, дочекайтесь поки вас розблокують</p>
      </div>
      <router-link v-else :to="{name: 'createTheme'}"  class="home_create">Створити тему</router-link>
      <VForumStats></VForumStats>
    </div>
  </div>
</template>
<script setup lang="ts">

import ThemeList from "../components/ThemeList/VThemeList.vue";
import VTagsBlock from "../components/Tags/VTagsBlock.vue";
import VForumStats from "../components/ForumStats/VForumStats.vue";
import {computed} from "vue";
import { useUserStore } from "../store/users";
const userStore = useUserStore()
const isLogged = computed(() => {
  return userStore.token !== undefined;
})
</script>

<style scoped lang="scss">
.home {
  display: flex;
  gap: 25px;
  &_rightSide {
    width: 15%;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  &_create {
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
    text-align: center;
  }
}
</style>