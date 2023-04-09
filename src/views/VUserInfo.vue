<template>
  <div class="profile">
    <div class="profile_body">
      <h3 class="profile_title">Доброго дня,<span class="profile_username">{{$store.state.loginStore.activeUser.name}}</span>!</h3>
      <p class="profile_subtitle">Для зміни логіна заповни нижче поле</p>
      <div class="profile_update">
        <input class="profile_input" type="text">
        <button class="profile_update-button">Оновити</button>
      </div>
      <p class="profile_subtitle">Для зміни паролю заповни нижче поле</p>
      <input class="profile_input" type="text">
      <input class="profile_input" type="text">
      <button class="profile_update-button">Оновити</button>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.profile {
  margin: 50px;
  &_body {
    display: flex;
    flex-direction: column;
    width: 100%;
    border: 1px solid #A5CAE4;
    border-radius: 5px;
    gap: 15px;
    padding: 10px;
  }
  &_title {
    font-family: 'Inter',sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 34px;
    line-height: 42px;
    color: #969696;
  }
  &_username {
    font-family: 'Inter',sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 34px;
    line-height: 42px;
    color: #176093;
  }
  &_subtitle {
    font-family: 'Inter',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #969696;
  }
  &_update {
    display: flex;
    width: 100%;
    gap: 15px;
    &-button {
      background: #A5CAE4;
      border-radius: 5px;
      font-family: 'Inter',sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      color: #141414;
      width: 10%;
      height: 50px;
      border: none;
    }
  }
  &_input {
    width: 60%;
    border: 1px solid #969696;
    border-radius: 5px;
    height: 50px;
  }
}
</style>