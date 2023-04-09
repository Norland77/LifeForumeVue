<template>
<div class="stats">
  <h4 class="stats_title">Статистика Форуму</h4>
  <div class="stats_body">
    <div class="stats_body-block">
      <p class="stats_body-text">Теми</p>
      <p class="stats_body-text">{{$store.getters.getThemesCount}}</p>
    </div>
    <div class="stats_body-block">
      <p class="stats_body-text">Повідомлення</p>
      <p class="stats_body-text">{{$store.getters.getMessageCount}}</p>
    </div>
    <div class="stats_body-block">
      <p class="stats_body-text">Користувачі</p>
      <p class="stats_body-text">{{$store.getters.getUsersCount}}</p>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.stats {
  border: 1px solid #A5CAE4;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 25px;
  &_title {
    font-family: 'Inter',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #032A46;
    padding-bottom: 5px;
    border-bottom: .5px solid #A5CAE4;
   }
  &_body {
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    &-block {
      display: flex;
      justify-content: space-between;
    }
    &-text {
      font-family: 'Inter',sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: #176093;
    }
  }
}
</style>