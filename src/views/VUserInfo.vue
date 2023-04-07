<template>
  <div class="userInfo_body">
    <div class="userInfo">
      <h3 class="userInfo_title">Доброго дня,<span class="userInfo_titleUser">User2323</span>!</h3>
      <p class="userInfo_subtitle">Для зміни логіна заповни нижче поле</p>
      <div class="userInfo_update">
        <input class="userInfo_input" type="text">
        <button class="userInfo_updateBtn">Оновити</button>
      </div>
      <p class="userInfo_subtitle">Для зміни паролю заповни нижче поле</p>
      <input class="userInfo_input" type="text">
      <input class="userInfo_input" type="text">
      <button class="userInfo_updateBtn">Оновити</button>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.userInfo {
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid #A5CAE4;
  border-radius: 5px;
  gap: 15px;
  padding: 10px;
}
.userInfo_body {
  margin: 50px;
}
.userInfo_title {
  font-family: 'Inter',sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 42px;
  color: #969696;
}
.userInfo_titleUser {
  font-family: 'Inter',sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 42px;
  color: #176093;
}
.userInfo_subtitle {
  font-family: 'Inter',sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #969696;
}
.userInfo_update {
  display: flex;
  width: 100%;
  gap: 15px;
}
.userInfo_input {
  width: 60%;
  border: 1px solid #969696;
  border-radius: 5px;
  height: 50px;
}
.userInfo_updateBtn {
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
</style>