<template>
<div class="stats">
  <h4 class="stats_title">Статистика Форуму</h4>
  <div class="stats_body">
    <div class="stats_body-block">
      <p class="stats_body-text">Теми</p>
      <p class="stats_body-text">{{store.themes}}</p>
    </div>
    <div class="stats_body-block">
      <p class="stats_body-text">Повідомлення</p>
      <p class="stats_body-text">{{store.comments}}</p>
    </div>
    <div class="stats_body-block">
      <p class="stats_body-text">Користувачі</p>
      <p class="stats_body-text">1</p>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
import {computed, onMounted, reactive} from "vue";

const store = reactive({
  themes: 0,
  comments: 0
})
onMounted(getInfoTheme)
const apiUrl = computed<string>(() => import.meta.env.VITE_APP_API_URL)
async function getInfoTheme() {
  const response = await fetch(`${apiUrl.value}/theme/get/all`, {
    method: "GET",
  })
  const result = await response.json();
  store.themes = result.themes.length
  for (let item of result.themes) {
    store.comments += item.commentCount
  }
}

</script>

<style scoped lang="scss">
@import "../../assets/main.scss";
.stats {
  border: 1px solid #A5CAE4;
  border-radius: 5px;
  @include adaptive-value("padding-top", 10, 0, 1);
  @include adaptive-value("padding-bottom", 10, 0, 1);
  @include adaptive-value("padding-left", 10, 0, 1);
  @include adaptive-value("padding-right", 10, 0, 1);
  @include adaptive-value("margin-bottom", 25, 0, 1);
  &_title {
    font-family: 'Inter',sans-serif;
    font-style: normal;
    font-weight: 400;
    @include adaptive-value("font-size", 16, 8, 1);
    line-height: 19px;
    color: #032A46;
    padding-bottom: 5px;
    border-bottom: .5px solid #A5CAE4;
   }
  &_body {
    @include adaptive-value("margin-top", 5, 0, 1);
    display: flex;
    flex-direction: column;
    @include adaptive-value("gap", 5, 0, 1);
    &-block {
      display: flex;
      justify-content: space-between;
    }
    &-text {
      font-family: 'Inter',sans-serif;
      font-style: normal;
      font-weight: 400;
      @include adaptive-value("font-size", 14, 8, 1);
      line-height: 17px;
      color: #176093;
    }
  }
}
</style>