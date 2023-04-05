<template>
<div class="body_loginBtn">
  <button @click="login" class="loginBtn" v-if="!isLogin">Увійти або зареєструватися</button>
  <div class="loginBody" v-else>
    <p class="user">{{model.name}}</p>
    <button @click="login" class="exit">
      <img src="../../assets/img/exit.svg" alt="exit">
    </button>
  </div>
</div>
</template>

<script setup lang="ts">
interface TypeProps {
  model: object
}

import {ref} from "vue";
const props = withDefaults(defineProps<TypeProps>(), {
  model: Object
})
const isLogin = ref(true);

function login() {
  isLogin.value = !isLogin.value
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
</style>