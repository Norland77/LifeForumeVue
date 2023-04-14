<template>
  <div class="profile">
    <div class="profile_body">
      <h3 class="profile_title">Доброго дня,<span class="profile_username">{{name}}</span>!</h3>
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
import {computed, reactive} from "vue";
import { useUserStore } from "../store/users";
const userStore = useUserStore()
const name = computed(() => {
  if (userStore.username !== undefined){
    return userStore.username;
  }
  return "DefaultName"
})
const store = reactive({
  inputNewLogin: '',
  inputOldPassword: '',
  inputNewPassword: '',
  inputNewPasswordRepeat: '',
  errorNewLogin: false,
  errorOldPassword: false,
  errorNewPassword: false,
})
function changeLogin(){
  if (store.inputNewLogin.length > 3){
    console.log('change login event')
  } else {
    store.errorNewLogin = true
  }
}
function changePassword(){
  if (store.inputNewPassword.length >= 6 && store.inputNewPassword === store.inputNewPasswordRepeat){
    console.log('change password event')
  } else {
    store.errorNewPassword = true
  }
}
function disableErrors(){
  store.errorNewLogin = store.errorOldPassword = store.errorNewPassword = false
}
</script>

<style scoped lang="scss">
@import "../assets/main.scss";
.profile {
  @include adaptive-value("margin-top", 50, 0, 1);
  @include adaptive-value("margin-bottom", 50, 0, 1);
  @include adaptive-value("margin-left", 120, 0, 1);
  @include adaptive-value("margin-right", 120, 0, 1);
  &_body {
    display: flex;
    flex-direction: column;
    width: 100%;
    border: 1px solid #A5CAE4;
    border-radius: 5px;
    @include adaptive-value("gap", 15, 0, 1);
    @include adaptive-value("padding-top", 10, 0, 1);
    @include adaptive-value("padding-bottom", 10, 0, 1);
    @include adaptive-value("padding-left", 10, 0, 1);
    @include adaptive-value("padding-right", 10, 0, 1);
  }
  &_title {
    font-family: 'Inter',sans-serif;
    font-style: normal;
    font-weight: 700;
    @include adaptive-value("font-size", 34, 24, 1);
    line-height: 42px;
    color: #969696;
  }
  &_username {
    font-family: 'Inter',sans-serif;
    font-style: normal;
    font-weight: 700;
    @include adaptive-value("font-size", 34, 24, 1);
    line-height: 42px;
    color: #176093;
  }
  &_subtitle {
    font-family: 'Inter',sans-serif;
    font-style: normal;
    font-weight: 400;
    @include adaptive-value("font-size", 14, 10, 1);
    line-height: 17px;
    color: #969696;
  }
  &_update {
    display: flex;
    width: 100%;
    @include adaptive-value("gap", 15, 0, 1);
    &-button {
      background: #A5CAE4;
      border-radius: 5px;
      font-family: 'Inter',sans-serif;
      font-style: normal;
      font-weight: 600;
      @include adaptive-value("font-size", 14, 10, 1);
      line-height: 17px;
      color: #141414;
      width: 10%;
      @include adaptive-value("height", 50, 25, 1);
      border: none;
    }
  }
  &_input {
    width: 60%;
    border: 1px solid #969696;
    border-radius: 5px;
    @include adaptive-value("height", 50, 25, 1);
  }
}
</style>