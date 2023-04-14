<template>
<div class="login">
  <div class="login_isLogin" v-if="isLogged">
    <router-link :style="{ color: $store.state.loginStore.isAdmin === 'Admin' ? 'red' : 'white' }" :to="{name: 'profile'}" class="login_isLogin-name">{{name}}</router-link>
    <router-link :to="{name: 'home'}" @click.stop="logoutClickHandler" class="login_isLogin-exit">
      <img src="../../assets/img/exit.svg" alt="exit">
    </router-link>
  </div>
  <button v-else @click="$store.commit('loginOpen')" class="login_button" ><span>Увійти</span> або <span >зареєструватися</span></button>
  <div v-if="$store.state.loginStore.isActive" class="login_popup popup" @click="$store.commit('closeClickHandler')">
    <div class="popup_content" @click.stop="$store.commit('disableErrors')">
      <h2 class="popup_content-title">{{$store.state.loginStore.haveAccount ? "Увійти" : "Зареєструватися"}}</h2>
      <input
          type="text"
          v-model="$store.state.loginStore.inputLogin"
          class="popup_content-input"
          placeholder="Логін"
          :style="{border: $store.state.loginStore.errorLogin ? '1px solid red' : ''}"
      >
      <input
          type="email"
          v-model="$store.state.loginStore.inputEmail"
          class="popup_content-input"
          placeholder="Пошта"
          v-if="!$store.state.loginStore.haveAccount"
          :style="{border: $store.state.loginStore.errorEmail ? '1px solid red' : ''}"
      >
      <input
          type="password"
          v-model="$store.state.loginStore.inputPassword"
          class="popup_content-input"
          placeholder="Пароль"
          :style="{border: $store.state.loginStore.errorPassword ? '1px solid red' : ''}"
      >
      <input
          type="password"
          v-model="$store.state.loginStore.inputPasswordRepeat"
          class="popup_content-input"
          placeholder="Підтвердіть пароль"
          v-if="!$store.state.loginStore.haveAccount"
          :style="{border: $store.state.loginStore.errorPassword ? '1px solid red' : ''}"
      >
      <span @click="$store.state.loginStore.haveAccount = !$store.state.loginStore.haveAccount" class="popup_content-change">{{$store.state.loginStore.haveAccount ? "Зареєструватися": "Увійти"}}</span>
      <button
          class="popup_content-submit"
          @click.stop="$store.dispatch('login')"
      >
        {{$store.state.loginStore.haveAccount ? "Увійти" : "Зареєструватися"}}
      </button>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">

import {computed} from "vue";
import { useUserStore } from "../../store/users";
const userStore = useUserStore()
const emit = defineEmits(["openLogin"])
const isLogged = computed(() => {
  return userStore.token !== undefined;
})
const name = computed(() => {
  if (userStore.username !== undefined){
    return userStore.username
  }
  return "Default User";
})
function logoutClickHandler(){
  userStore.logout();
}
function loginClickHandler(haveAccount: boolean): void{
  emit("openLogin", haveAccount)
}

</script>

<style scoped lang="scss">
@import "../../assets/main.scss";
.login {
  align-items: center;
  text-align: center;
  width: 15%;
  background: #032A46;
  box-shadow: 0 2px 5px #032A46;
  border-radius: 0 0 10px 10px;
  &_button {
    font-family: 'Liberation Sans',sans-serif;
    font-style: italic;
    font-weight: 400;
    @include adaptive-value("font-size", 10, 6, 1);
    line-height: 20px;
    color: #FFFFFF;
    background: none;
    border: none;
  }
  &_isLogin {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    @include adaptive-value("padding-left", 10, 0, 1);
    @include adaptive-value("padding-right", 10, 0, 1);
    &-name {
      font-family: 'Liberation Sans',sans-serif;
      font-style: italic;
      font-weight: 400;
      @include adaptive-value("font-size", 10, 6, 1);
      line-height: 20px;
      color: #FFFFFF;
    }
    &-exit {
      background: none;
      border: none;
      img {
        width: 100%;
      }
    }
  }
}
.popup {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:rgba(0, 0, 0, 0.5);
  z-index: 1;
  &_content {
    display: flex;
    flex-direction: column;
    border: 1px solid #A5CAE4;
    border-radius: 5px;
    @include adaptive-value("padding-top", 10, 0, 1);
    @include adaptive-value("padding-bottom", 10, 0, 1);
    @include adaptive-value("padding-left", 20, 0, 1);
    @include adaptive-value("padding-right", 20, 0, 1);
    @include adaptive-value("gap", 15, 0, 0);
    width: 50%;
    background: #FCFCFF;
    align-items: center;
    text-align: center;
    &-title {
      font-family: 'Inter',sans-serif;
      font-style: normal;
      font-weight: 700;
      @include adaptive-value("font-size", 40, 24, 1);
      line-height: 46px;
      color: #032A46;
      @include adaptive-value("margin-top", 20, 0, 1);
      @include adaptive-value("margin-bottom", 20, 0, 1);
    }
    &-input {
      width: 100%;
      @include adaptive-value("height", 80, 40, 1);
      background: #D9D9D9;
      border-radius: 5px;
      border: none;
      font-family: 'Inter',sans-serif;
      font-style: normal;
      font-weight: 600;
      @include adaptive-value("font-size", 30, 18, 1);
      line-height: 37px;
      display: flex;
      align-items: center;
      text-align: center;
      color: rgba(0, 0, 0, 0.5);
    }
    &-change {
      width: 25%;
      border: 1px solid #A5CAE4;
      border-radius: 5px;
      font-family: 'Inter',sans-serif;
      font-style: normal;
      font-weight: 600;
      @include adaptive-value("font-size", 20, 16, 1);
      line-height: 37px;
      color: #000000;
      background: none;
      @include adaptive-value("padding-top", 10, 0, 1);
      @include adaptive-value("padding-bottom", 10, 0, 1);
      @include adaptive-value("padding-left", 10, 0, 1);
      @include adaptive-value("padding-right", 10, 0, 1);
      cursor: pointer;
    }
    &-submit {
      width: 50%;
      border: 1px solid #A5CAE4;
      border-radius: 5px;
      font-family: 'Inter',sans-serif;
      font-style: normal;
      font-weight: 600;
      @include adaptive-value("font-size", 30, 12, 1);
      line-height: 37px;
      color: #000000;
      background: none;
      @include adaptive-value("padding-top", 20, 0, 1);
      @include adaptive-value("padding-bottom", 20, 0, 1);
      @include adaptive-value("padding-left", 40, -10, 1);
      @include adaptive-value("padding-right", 40, -10, 1);
    }
  }
}
</style>