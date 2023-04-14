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
@import "../assets/main.scss";
.post {
  border: 1px solid #A5CAE4;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  @include adaptive-value("margin-top", 30, 0, 1);
  @include adaptive-value("margin-bottom", 30, 0, 1);
  @include adaptive-value("margin-left", 120, 0, 1);
  @include adaptive-value("margin-right", 120, 0, 1);
  @include adaptive-value("padding-top", 15, 0, 1);
  @include adaptive-value("padding-bottom", 15, 0, 1);
  @include adaptive-value("padding-left", 40, 0, 1);
  @include adaptive-value("padding-right", 40, 0, 1);
  &_textBody {
    @include adaptive-value("padding-top", 50, 0, 1);
    @include adaptive-value("padding-bottom", 50, 0, 1);
    font-family: 'Inter',sans-serif;
    font-style: normal;
    font-weight: 600;
    @include adaptive-value("font-size", 24, 18, 1);
    line-height: 19px;
    color: #141414;
  }
  &_noComments {
    @include adaptive-value("padding-top", 50, 0, 1);
    @include adaptive-value("padding-bottom", 50, 0, 1);
    font-family: 'Inter',sans-serif;
    font-style: normal;
    font-weight: 600;
    @include adaptive-value("font-size", 24, 18, 1);
    line-height: 19px;
    color: #141414;
  }
  &_header {
    display: flex;
    @include adaptive-value("gap", 25, 0, 1);
    justify-content: space-between;
  }
  &_title{
    width: 85%;
    font-family: 'Inter',sans-serif;
    font-style: normal;
    font-weight: 700;
    @include adaptive-value("font-size", 34, 24, 1);
    line-height: 42px;
    color: #176093;
  }
  &_admin {
    @include adaptive-value("height", 40, 20, 1);
    width: 15%;
    background: #176093;
    border-radius: 5px;
    font-family: 'Inter',sans-serif;
    font-style: normal;
    font-weight: 600;
    @include adaptive-value("font-size", 16, 12, 1);
    line-height: 19px;
    color: #141414;
    &-ban {
      @include adaptive-value("height", 40, 20, 1);
      width: 100%;
      background: #176093;
      border-radius: 5px;
      font-family: 'Inter',sans-serif;
      font-style: normal;
      font-weight: 600;
      @include adaptive-value("font-size", 16, 12, 1);
      line-height: 19px;
      color: #141414;
    }
  }
  &_tags {
    display: flex;
    @include adaptive-value("gap", 20, 0, 1);
    @include adaptive-value("margin-top", 10, 0, 1);
    p {
      font-family: 'Inter',sans-serif;
      font-style: normal;
      font-weight: 400;
      @include adaptive-value("font-size", 14, 10, 1);
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
    @include adaptive-value("font-size", 16, 12, 1);
    line-height: 19px;
    color: #141414;
  }
  &_data {
    font-family: 'Inter',sans-serif;
    font-style: normal;
    font-weight: 600;
    @include adaptive-value("font-size", 14, 10, 1);
    line-height: 17px;
    color: #969696;
  }
  &_noLogin {
    font-family: 'Inter',sans-serif;
    font-style: normal;
    font-weight: 600;
    @include adaptive-value("font-size", 14, 10, 1);
    line-height: 17px;
    color: #969696;
    p {
      @include adaptive-value("margin-top", 40, 0, 1);
      @include adaptive-value("margin-bottom", 40, 0, 1);
    }
  }
  &_textarea {
    width: 100%;
    @include adaptive-value("height", 200, 100, 1);
    max-height: 200px;
    border: 1px solid #A5CAE4;
    border-radius: 5px;
    resize: none;
    font-family: 'Inter',sans-serif;
    font-style: normal;
    font-weight: 600;
    @include adaptive-value("font-size", 16, 12, 1);
    line-height: 19px;
    color: #141414;
    @include adaptive-value("padding-top", 10, 0, 1);
    @include adaptive-value("padding-bottom", 10, 0, 1);
    @include adaptive-value("padding-left", 10, 0, 1);
    @include adaptive-value("padding-right", 10, 0, 1);
  }
  &_button {
    @include adaptive-value("margin-top", 25, 0, 1);
    background: #A5CAE4;
    border-radius: 5px;
    font-family: 'Inter',sans-serif;
    font-style: normal;
    font-weight: 600;
    @include adaptive-value("font-size", 14, 10, 1);
    line-height: 17px;
    color: #141414;
    border: none;
    @include adaptive-value("padding-top", 15, 0, 1);
    @include adaptive-value("padding-bottom", 15, 0, 1);
    @include adaptive-value("padding-left", 15, 0, 1);
    @include adaptive-value("padding-right", 15, 0, 1);
  }
}
.item {
  border-bottom: 1px solid #A5CAE4;
  display: flex;
  @include adaptive-value("gap", 30, 0, 1);
  @include adaptive-value("padding-top", 60, 0, 1);
  @include adaptive-value("padding-bottom", 60, 0, 1);
  &_user {
    width: 8%;
    display: flex;
    flex-direction: column;
    @include adaptive-value("gap", 20, 0, 1);
  }
  &_username {
    font-family: 'Inter',sans-serif;
    font-style: normal;
    font-weight: 600;
    @include adaptive-value("font-size", 16, 12, 1);
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
    @include adaptive-value("font-size", 14, 10, 1);
    line-height: 17px;
    color: #969696;
  }
}
</style>