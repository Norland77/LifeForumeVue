<template>
<div class="body_loginBtn">
  <button @click="loginOpen" class="loginBtn" v-if="!store.isLogin">Увійти або зареєструватися</button>
  <div class="loginBody" v-else>
    <p class="user">{{activeUser.name}}</p>
    <button @click="loginClose" class="exit">
      <img src="../../assets/img/exit.svg" alt="exit">
    </button>
  </div>
  <div v-if="isActive.active" class="login" @click="closeClickHandler()">
    <div class="login-content" @click.stop="disableErrors()">
      <h2 class="title-medium login-content-title">{{store.haveAccount ? "Увійти" : "Зареєструватися"}}</h2>
      <input
          type="text"
          v-model="store.inputLogin"
          class="subtitle-small"
          placeholder="Логін"
          :style="{border: store.errorLogin ? '1px solid red' : ''}"
      >
      <input
          type="email"
          v-model="store.inputEmail"
          class="subtitle-small"
          placeholder="Пошта"
          v-if="!store.haveAccount"
          :style="{border: store.errorEmail ? '1px solid red' : ''}"
      >
      <input
          type="password"
          v-model="store.inputPassword"
          class="subtitle-small"
          placeholder="Пароль"
          :style="{border: store.errorPassword ? '1px solid red' : ''}"
      >
      <input
          type="password"
          v-model="store.inputPasswordRepeat"
          class="subtitle-small"
          placeholder="Підтвердіть пароль"
          v-if="!store.haveAccount"
          :style="{border: store.errorPassword ? '1px solid red' : ''}"
      >
      <span @click="store.haveAccount = !store.haveAccount" class="login-content-change text-medium">{{store.haveAccount ? "Зареєструватися": "Увійти"}}</span>
      <button
          class="headline-medium login-content-submit"
          @click.stop="login()"
      >
        {{store.haveAccount ? "Увійти" : "Зареєструватися"}}
      </button>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">

import {reactive, ref} from "vue";
const isActive = reactive({active: false});
const store = reactive({
  isLogin: false,
  haveAccount: false,
  inputLogin: '',
  inputEmail: '',
  inputPassword: '',
  inputPasswordRepeat: '',
  errorPassword: false,
  errorLogin: false,
  errorEmail: false
})
function closeClickHandler():void{
  isActive.active = false
}
function disableErrors(){
  store.errorPassword = store.errorLogin = store.errorEmail = false
}

console.log(isActive.active)
function loginOpen(): void {
  isActive.active = true
}
function loginClose(): void {
  store.isLogin = false
  console.log(store.isLogin)
}
let activeUser = {
  name: ""
}
import json from "../../json/users.json";

let dataStr = JSON.stringify(json)
let data = JSON.parse(dataStr)
let usersData = ref(data)
function login(): void {
  console.log(store.inputLogin);
  console.log(store.inputPassword)
  for (let item in usersData.value) {
    console.log(usersData.value[item])
    if (usersData.value[item].login === store.inputLogin && usersData.value[item].password === store.inputPassword) {
      isActive.active = false;
      activeUser = {
        name: usersData.value[item].name
      }
      store.isLogin = true;
      console.log(activeUser)
    }
  }
}

</script>

<style scoped>
.body_loginBtn {
  align-items: center;
  text-align: center;
  width: 10%;
  background: #032A46;
  box-shadow: 0 2px 5px #032A46;
  border-radius: 0 0 10px 10px;
}
.loginBtn {
  font-family: 'Liberation Sans',sans-serif;
  font-style: italic;
  font-weight: 400;
  font-size: 10px;
  line-height: 20px;
  color: #FFFFFF;
  background: none;
  border: none;
}
.loginBody {
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  padding: 0 10px;
}
.user {
  font-family: 'Liberation Sans',sans-serif;
  font-style: italic;
  font-weight: 400;
  font-size: 10px;
  line-height: 20px;
  color: #FFFFFF;
}
.exit {
  background: none;
  border: none;
}
img {
  width: 100%;
}
.login {
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
}
.login-content {
  display: flex;
  flex-direction: column;
  border: 1px solid #A5CAE4;
  border-radius: 5px;
  padding: 10px 20px;
  gap: 15px;
  width: 50%;
  background: #FCFCFF;
  align-items: center;
  text-align: center;
}
.title-medium {
  font-family: 'Inter',sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 46px;
  color: #032A46;
}
.login-content-title {
  margin: 20px 0;
}
.subtitle-small {
  width: 100%;
  height: 80px;
  background: #D9D9D9;
  border-radius: 5px;
  border: none;
  font-family: 'Inter',sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 37px;
  display: flex;
  align-items: center;
  text-align: center;
  color: rgba(0, 0, 0, 0.5);
}
.login-content-submit {
  width: 50%;
  border: 1px solid #A5CAE4;
  border-radius: 5px;
  font-family: 'Inter',sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 37px;
  color: #000000;
  background: none;
  padding: 20px 40px;
}
.login-content-change {
  width: 25%;
  border: 1px solid #A5CAE4;
  border-radius: 5px;
  font-family: 'Inter',sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 37px;
  color: #000000;
  background: none;
  padding: 10px;
  cursor: pointer;
}
</style>