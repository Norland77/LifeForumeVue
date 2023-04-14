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
@import "../assets/main.scss";
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
    @include adaptive-value("margin-top", 60, 0, 1);
    @include adaptive-value("margin-bottom", 60, 0, 1);
    @include adaptive-value("margin-left", 60, 0, 1);
    @include adaptive-value("margin-right", 60, 0, 1);
    @include adaptive-value("padding-top", 30, 0, 1);
    @include adaptive-value("padding-bottom", 30, 0, 1);
    @include adaptive-value("padding-left", 30, 0, 1);
    @include adaptive-value("padding-right", 30, 0, 1);
  }
  &_title {
    font-family: 'Inter',sans-serif;
    font-style: normal;
    font-weight: 700;
    @include adaptive-value("font-size", 40, 24, 1);
    line-height: 46px;
    color: #032A46;
  }
  &_form {
    align-items: center;
    display: flex;
    flex-direction: column;
    @include adaptive-value("gap", 15, 0, 1);
    width: 100%;
  }
  &_subtitle {
    font-family: 'Inter',sans-serif;
    font-style: normal;
    font-weight: 600;
    @include adaptive-value("font-size", 16, 12, 1);
    line-height: 19px;
    color: #032A46;
    text-align: left;
  }
  &_input {
    border: 2px solid #A5CAE4;
    border-radius: 5px;
    width: 100%;
    @include adaptive-value("height", 35, 15, 1);
  }
  &_textarea {
    width: 100%;
    @include adaptive-value("height", 150, 50, 1);
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
    padding: 10px;
  }
  &_button {
    @include adaptive-value("margin-top", 15, 0, 1);
    width: 50%;
    border: 1px solid #A5CAE4;
    border-radius: 5px;
    font-family: 'Inter',sans-serif;
    font-style: normal;
    font-weight: 600;
    @include adaptive-value("font-size", 24, 16, 1);
    line-height: 30px;
    color: #032A46;
    background: none;
    @include adaptive-value("padding-top", 20, 0, 1);
    @include adaptive-value("padding-bottom", 20, 0, 1);
    @include adaptive-value("padding-left", 40, 0, 1);
    @include adaptive-value("padding-right", 40, 0, 1);
  }
}
</style>