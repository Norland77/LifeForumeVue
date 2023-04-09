<template>
<div class="post_body">
  <div class="post_header">
    <h3 class="post_title">{{message.title}}</h3>
    <button v-if="$store.state.loginStore.isAdmin === 'Admin'" class="admin_btn">Видалити тему</button>
  </div>
  <div class="post_tags">
    <p  v-for="item of message.tags" class="post_tag">{{item}}</p>
  </div>
  <div class="post_items" v-for="item of message.messages">
    <div class="post_user">
      <p class="post_user_name"> {{ item.user }}</p>
      <p class="post_user_role">{{$store.state.loginStore.isAdmin}}</p>
      <div v-if="$store.state.loginStore.isAdmin === 'Admin'">
        <button v-if="$store.state.loginStore.isBanned" class="admin_btn_ban">Розбанити</button>
        <button v-else class="admin_btn_ban">Забанити</button>
      </div>
    </div>
    <div class="post_messageBlock">
      <p class="post_message">{{item.message}}</p>
      <p class="post_messageData">{{setData.setData(item.data)}}</p>
    </div>
  </div>
  <div v-if="!$store.state.loginStore.isLogin" class="post_noLoginText_body">
    <p class="post_noLoginText">
      Для відповіді на  цю тему будь ласка увійдіть або створіть новий акаунт
    </p>
  </div>
  <div v-else-if="$store.state.loginStore.isBanned" class="post_noLoginText_body">
    <p class="post_noLoginText">
      Нажаль вас заблоковано адміністрацією, тому ви не можете писати коментарі, дочекайтесь поки вас розблокують
    </p>
  </div>
  <form v-else>
    <textarea class="post_textArea"></textarea>
    <button class="post_button">Відправити</button>
  </form>
</div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import {onMounted, ref} from "vue";
import json from "../json/message.json";
import setData from "../helpers/index"

let dataStr = JSON.stringify(json)
let data = JSON.parse(dataStr)
let messages = ref(data)
const route = useRoute()
let message = ref(data)


for(let item in messages.value) {
  if (messages.value[item].id == route.params.id) {
    message = {
      title: messages.value[item].title,
      tags: messages.value[item].tags,
      messages: messages.value[item].messages
    }
  }
}

</script>

<style scoped>
.post_body {
  border: 1px solid #A5CAE4;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin: 30px 120px;
  padding: 15px 40px;
}
.post_header {
  display: flex;
  gap: 25px;
}
.post_title {
  font-family: 'Inter',sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 42px;
  color: #176093;
}
.admin_btn {
  height: 40px;
  width: 15%;
  background: #176093;
  border-radius: 5px;
  font-family: 'Inter',sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #141414;
}
.admin_btn_ban {
  height: 40px;
  width: 100%;
  background: #176093;
  border-radius: 5px;
  font-family: 'Inter',sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #141414;
}
.post_tags {
  display: flex;
  gap: 20px;
  margin-top: 10px;
}
.post_tag {
  font-family: 'Inter',sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #141414;
}
.post_messageBlock {
  display: flex;
  flex-direction: column;
  width: 92%;
  gap: 30px;
}
.post_messageData {
  font-family: 'Inter',sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #969696;
}
.post_items {
  border-bottom: 1px solid #A5CAE4;
  display: flex;
  gap: 30px;
  padding: 60px 0;
}
.post_user {
  width: 8%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.post_user_name {
  font-family: 'Inter',sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #176093;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; /* не переносить текст на новую строку */
}
.post_message {
  font-family: 'Inter',sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #141414;
}
.post_textArea {
  width: 100%;
  height: 200px;
  max-height: 200px;
  border: 1px solid #A5CAE4;
  border-radius: 5px;
  resize: none;
  font-family: 'Inter',sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #141414;
  padding: 10px;
}
.post_button {
  margin-top: 25px;
  background: #A5CAE4;
  border-radius: 5px;
  font-family: 'Inter',sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #141414;
  border: none;
  padding: 15px;
}
.post_noLoginText {
  font-family: 'Inter',sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #969696;
}
.post_noLoginText_body {
  margin: 40px 0;
}
</style>