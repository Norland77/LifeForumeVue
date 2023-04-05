<template>
<div class="post_body">
  <h3 class="post_title">{{message.title}}</h3>
  <div class="post_tags">
    <p  v-for="item of message.tags" class="post_tag">{{item}}</p>
  </div>
  <div class="post_items" v-for="item of message.messages">
    <p class="post_user"> {{ item.user }}</p>
    <p class="post_message">{{item.message}}</p>
  </div>
  <form>
    <textarea class="post_textArea"></textarea>
    <button class="post_button">Відправити</button>
  </form>
</div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import {onMounted, ref} from "vue";
import json from "../json/message.json";

let dataStr = JSON.stringify(json)
let data = JSON.parse(dataStr)
let messages = ref(data)
const route = useRoute()
let message = ref(data)


for(let item in messages.value) {
  if (messages.value[item].id == route.params.id) {
    console.log(messages.value[item])
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
.post_title {
  font-family: 'Inter',sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 42px;
  color: #176093;
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
.post_items {
  display: flex;
  gap: 30px;
  padding: 60px 0;
}
.post_user {
  width: 5%;
  font-family: 'Inter',sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #176093;
}
.post_message {
  width: 80%;
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
</style>