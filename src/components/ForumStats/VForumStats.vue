<template>
<div class="stats_body">
  <h4 class="stats_title">Статистика Форуму</h4>
  <div class="stats_main">
    <div class="stats_block">
      <p class="stats_text">Теми</p>
      <p class="stats_text">{{$store.getters.getThemesCount}}</p>
    </div>
    <div class="stats_block">
      <p class="stats_text">Повідомлення</p>
      <p class="stats_text">{{$store.getters.getMessageCount}}</p>
    </div>
    <div class="stats_block">
      <p class="stats_text">Користувачі</p>
      <p class="stats_text">{{$store.getters.getUsersCount}}</p>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.stats_body {
  border: 1px solid #A5CAE4;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 25px;
}
.stats_title {
  font-family: 'Inter',sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #032A46;
  padding-bottom: 5px;
  border-bottom: .5px solid #A5CAE4;
}
.stats_main {
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.stats_block {
  display: flex;
  justify-content: space-between;
}
.stats_text {
  font-family: 'Inter',sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #176093;
}
</style>