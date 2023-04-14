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
@import "../assets/main.scss";
.home {
  display: flex;
  @include adaptive-value("gap", 25, 10, 1);
  &_rightSide {
    width: 20%;
    display: flex;
    flex-direction: column;
    @include adaptive-value("gap", 15, 5, 1);
  }
  &_create {
    border: 1px solid #A5CAE4;
    border-radius: 5px;
    width: 100%;
    @include adaptive-value("padding-top", 40, 0, 1);
    @include adaptive-value("padding-bottom", 40, 0, 1);
    @include adaptive-value("padding-left", 5, 0, 1);
    @include adaptive-value("padding-right", 5, 0, 1);
    background: none;
    font-family: 'Inter',sans-serif;
    font-style: normal;
    font-weight: 600;
    @include adaptive-value("font-size", 18, 6, 1);
    line-height: 22px;
    color: #176093;
    text-align: center;
  }
}
</style>