<template>
<div class="body_loginBtn">
  <button @click="$store.commit('loginOpen')" class="loginBtn" v-if="!$store.state.loginStore.isLogin">Увійти або зареєструватися</button>
  <div class="loginBody" v-else>
    <router-link :to="{name: 'userInfo'}" class="user">{{$store.state.loginStore.activeUser.name}}</router-link>
    <router-link :to="{name: 'home'}" @click="$store.commit('loginClose')" class="exit">
      <img src="../../assets/img/exit.svg" alt="exit">
    </router-link>
  </div>
  <div v-if="$store.state.loginStore.isActive" class="login" @click="$store.commit('closeClickHandler')">
    <div class="login-content" @click.stop="$store.commit('disableErrors')">
      <h2 class="title-medium login-content-title">{{$store.state.loginStore.haveAccount ? "Увійти" : "Зареєструватися"}}</h2>
      <input
          type="text"
          v-model="$store.state.loginStore.inputLogin"
          class="subtitle-small"
          placeholder="Логін"
          :style="{border: $store.state.loginStore.errorLogin ? '1px solid red' : ''}"
      >
      <input
          type="email"
          v-model="$store.state.loginStore.inputEmail"
          class="subtitle-small"
          placeholder="Пошта"
          v-if="!$store.state.loginStore.haveAccount"
          :style="{border: $store.state.loginStore.errorEmail ? '1px solid red' : ''}"
      >
      <input
          type="password"
          v-model="$store.state.loginStore.inputPassword"
          class="subtitle-small"
          placeholder="Пароль"
          :style="{border: $store.state.loginStore.errorPassword ? '1px solid red' : ''}"
      >
      <input
          type="password"
          v-model="$store.state.loginStore.inputPasswordRepeat"
          class="subtitle-small"
          placeholder="Підтвердіть пароль"
          v-if="!$store.state.loginStore.haveAccount"
          :style="{border: $store.state.loginStore.errorPassword ? '1px solid red' : ''}"
      >
      <span @click="$store.state.loginStore.haveAccount = !$store.state.loginStore.haveAccount" class="login-content-change text-medium">{{$store.state.loginStore.haveAccount ? "Зареєструватися": "Увійти"}}</span>
      <button
          class="headline-medium login-content-submit"
          @click.stop="$store.commit('login')"
      >
        {{$store.state.loginStore.haveAccount ? "Увійти" : "Зареєструватися"}}
      </button>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">



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