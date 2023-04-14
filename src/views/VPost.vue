<template>
<div class="post">
  <div class="post_header">
    <h3 class="post_title">{{store.data.title}}</h3>
    <button v-if="$store.state.loginStore.isAdmin === 'Admin'" class="post_admin">Видалити тему</button>
  </div>
  <div class="post_tags">
<!--    <p  v-for="item of message.tags">{{item}}</p>-->
  </div>
  <div class="post_textBody">
    {{store.data.body}}
  </div>
  <div v-if="store.data.comments.length === 0" class="post_noComments">
    Ця тема поки не має коментарів, додайте перший коментар
  </div>
  <div class="post_item item" v-for="item of store.data.comments">
    <div class="item_user">
      <p class="item_username"> {{ item.user.login }}</p>
      <p class="item_role">{{$store.state.loginStore.isAdmin}}</p>
      <div v-if="$store.state.loginStore.isAdmin === 'Admin'">
        <button v-if="$store.state.loginStore.isBanned" class="post_admin-ban">Розбанити</button>
        <button v-else class="post_admin-ban">Забанити</button>
      </div>
    </div>
    <div class="post_messages">
      <p class="post_message">{{item.body}}</p>
      <p class="post_data">{{setData.setData(item.createdAt)}}</p>
    </div>
  </div>
  <div v-if="!isLogged" class="post_noLogin">
    <p>
      Для відповіді на  цю тему будь ласка увійдіть або створіть новий акаунт
    </p>
  </div>
  <div v-else-if="$store.state.loginStore.isBanned" class="post_noLogin">
    <p>
      Нажаль вас заблоковано адміністрацією, тому ви не можете писати коментарі, дочекайтесь поки вас розблокують
    </p>
  </div>
  <form v-on:submit.prevent="createComment" v-else>
    <textarea v-model="store.textareaBody" class="post_textarea"></textarea>
    <button class="post_button">Відправити</button>
  </form>
</div>
</template>

<script setup lang="ts">

import setData from "../helpers/index"

interface userType {
  email: string,
  login: string,
  _id: string
}
interface commentsType {
  body: string,
  createdAt: string,
  user: userType
}

interface dataType {
  _id: string,
  title: string,
  body: string,
  comments: commentsType[]
}

interface IData {
  data: dataType,
  textareaBody: string
}

import {computed, onMounted, reactive} from "vue";
import {useRoute} from "vue-router";
import { useUserStore } from "../store/users";
const userStore = useUserStore()
const isLogged = computed(() => {
  return userStore.token !== undefined;
})

const route = useRoute()
const store = reactive<IData>({
  data: {
    _id: "",
    title: "",
    body: "",
    comments: []
  },
  textareaBody: ""
})
onMounted(getThemesById)
const apiUrl = computed<string>(() => import.meta.env.VITE_APP_API_URL)
async function getThemesById() {
  const response = await fetch(`${apiUrl.value}/theme/get/${route.params.id}`, {
    method: "GET",
  })
  const result = await response.json();
  store.data = result
  console.log(store.data)
}

async function createComment () {
  const requestBody = {
    body: store.textareaBody,
    themeId: store.data._id
  }
  await fetch(`${apiUrl.value}/comment/create`, {
    method: "POST",
    body: JSON.stringify(requestBody),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${userStore.token}`
    },
  });
  await getThemesById();
  store.textareaBody = "";
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
  &_textBody {
    padding: 50px 0;
    font-family: 'Inter',sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 19px;
    color: #141414;
  }
  &_noComments {
    padding: 50px 0;
    font-family: 'Inter',sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 19px;
    color: #141414;
  }
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