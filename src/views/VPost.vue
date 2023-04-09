<template>
<div class="post">
  <div class="post_header">
    <h3 class="post_title">{{message.title}}</h3>
    <button v-if="$store.state.loginStore.isAdmin === 'Admin'" class="post_admin">Видалити тему</button>
  </div>
  <div class="post_tags">
    <p  v-for="item of message.tags">{{item}}</p>
  </div>
  <div class="post_item item" v-for="item of message.messages">
    <div class="item_user">
      <p class="item_username"> {{ item.user }}</p>
      <p class="item_role">{{$store.state.loginStore.isAdmin}}</p>
      <div v-if="$store.state.loginStore.isAdmin === 'Admin'">
        <button v-if="$store.state.loginStore.isBanned" class="post_admin-ban">Розбанити</button>
        <button v-else class="post_admin-ban">Забанити</button>
      </div>
    </div>
    <div class="post_messages">
      <p class="post_message">{{item.message}}</p>
      <p class="post_data">{{setData.setData(item.data)}}</p>
    </div>
  </div>
  <div v-if="!$store.state.loginStore.isLogin" class="post_noLogin">
    <p>
      Для відповіді на  цю тему будь ласка увійдіть або створіть новий акаунт
    </p>
  </div>
  <div v-else-if="$store.state.loginStore.isBanned" class="post_noLogin">
    <p>
      Нажаль вас заблоковано адміністрацією, тому ви не можете писати коментарі, дочекайтесь поки вас розблокують
    </p>
  </div>
  <form v-else>
    <textarea class="post_textarea"></textarea>
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

<style scoped lang="scss">
.post {
  border: 1px solid #A5CAE4;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin: 30px 120px;
  padding: 15px 40px;
  &_header {
    display: flex;
    gap: 25px;
    justify-content: space-between;
  }
  &_title{
    width: 85%;
    font-family: 'Inter',sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 34px;
    line-height: 42px;
    color: #176093;
  }
  &_admin {
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
    &-ban {
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
  }
  &_tags {
    display: flex;
    gap: 20px;
    margin-top: 10px;
    p {
      font-family: 'Inter',sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: #141414;
    }
  }
  &_messages {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 92%;
  }
  &_message {
    font-family: 'Inter',sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #141414;
  }
  &_data {
    font-family: 'Inter',sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: #969696;
  }
  &_noLogin {
    font-family: 'Inter',sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: #969696;
    p {
      margin: 40px 0;
    }
  }
  &_textarea {
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
  &_button {
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
}
.item {
  border-bottom: 1px solid #A5CAE4;
  display: flex;
  gap: 30px;
  padding: 60px 0;
  &_user {
    width: 8%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  &_username {
    font-family: 'Inter',sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #176093;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  &_role {
    font-family: 'Inter',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #969696;
  }
}
</style>