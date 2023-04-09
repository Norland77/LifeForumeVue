<template>
  <div class="createTheme">
    <div class="createTheme_body">
      <h3 class="createTheme_title">Створення теми</h3>
      <div class="createTheme_form">
        <p class="createTheme_subtitle">Заголовок</p>
        <input
            type="text"
            class="createTheme_input"
        >
        <p class="createTheme_subtitle">Текст теми</p>
        <textarea class="createTheme_textarea"></textarea>
        <p class="createTheme_subtitle">Напишіть теги до теми у вигляді (життя, спорт, здоров’я, відеоігри)</p>
        <input
            type="text"
            class="createTheme_input"
        >
      </div>
      <button class="createTheme_button">Створити тему</button>
    </div>
  </div>
</template>

<script setup lang="ts">

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