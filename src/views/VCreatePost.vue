<template>
  <div class="createTheme">
    <div class="createTheme_body">
      <h3 class="createTheme_title">Створення теми</h3>
      <form v-on:submit.prevent="createTheme" class="createTheme_form">
        <label class="createTheme_subtitle">Заголовок</label>
        <input
            v-model="store.title"
            type="text"
            class="createTheme_input"
        >
        <label class="createTheme_subtitle">Текст теми</label>
        <textarea v-model="store.textareaBody" class="createTheme_textarea"></textarea>
        <label class="createTheme_subtitle">Напишіть теги до теми у вигляді (життя, спорт, здоров’я, відеоігри)</label>
        <input
            v-model="store.tags"
            type="text"
            class="createTheme_input"
        >
        <button class="createTheme_button">Створити тему</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, reactive} from "vue";
import { useUserStore } from "../store/users";
const userStore = useUserStore()
const apiUrl = computed<string>(() => import.meta.env.VITE_APP_API_URL)

const store = reactive({
  title: "",
  textareaBody: "",
  tags: ""
})

async function createTheme () {
  const tagsArr = store.tags.split(", ");

  const requestBody = {
    title: store.title,
    body: store.textareaBody,
    tags: tagsArr
  }

  await fetch(`${apiUrl.value}/theme/create`, {
    method: "POST",
    body: JSON.stringify(requestBody),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${userStore.token}`
    },
  });

  store.textareaBody = "";
  store.title = "";
  store.tags = "";
}
</script>

<style scoped lang="scss">
.createTheme {
  display: flex;
  align-items: center;
  text-align: center;
  width: 100%;
  justify-content: center;
  &_body {
    display: flex;
    flex-direction: column;
    width: 50%;
    text-align: center;
    align-items: center;
    border: 1px solid #A5CAE4;
    border-radius: 5px;
    margin: 60px;
    padding: 30px;
  }
  &_title {
    font-family: 'Inter',sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 46px;
    color: #032A46;
  }
  &_form {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
  }
  &_subtitle {
    font-family: 'Inter',sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #032A46;
    text-align: left;
  }
  &_input {
    border: 2px solid #A5CAE4;
    border-radius: 5px;
    width: 100%;
    height: 35px;
  }
  &_textarea {
    width: 100%;
    height: 150px;
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
    margin-top: 15px;
    width: 50%;
    border: 1px solid #A5CAE4;
    border-radius: 5px;
    font-family: 'Inter',sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
    color: #032A46;
    background: none;
    padding: 20px 40px;
  }
}
</style>