<template>
  <div class="rules">
    <h3 class="rules_title">Правила Форуму</h3>
    <p class="rules_paragraph">Ласкаво просимо на наш форум! Щоб забезпечити конструктивну та поважну атмосферу для всіх користувачів, ми маємо наступні правила, які необхідно дотримуватись:</p>
    <ol class="rules_list">
      <li class="rules_list-item">Поважайте інших користувачів. Будьте ввічливими та толерантними до думок та переконань інших людей. Не терпіть будь-яку форму дискримінації або образи в стосунку до інших користувачів.</li>
      <li class="rules_list-item">Не публікуйте ніякого непристойного або образливого контенту. Відверто або приховано непристойний контент, включаючи образливі коментарі, фотографії, відео, анімації, посилання, рекламу тощо, не дозволений.</li>
      <li class="rules_list-item">Не розміщуйте будь-яку неправдиву або обманливу інформацію на форумі. Якщо ви розміщуєте інформацію, переконайтеся, що вона є точною та обґрунтованою.</li>
      <li class="rules_list-item">Не зловживайте форумом. Не публікуйте спам, не рекламуйте свій продукт або послугу, не розсилайте масові повідомлення або запити друзів.</li>
      <li class="rules_list-item">Зберігайте конфіденційність. Не розголошуйте особисту інформацію інших користувачів форуму.</li>
      <li class="rules_list-item">Не порушуйте авторські права. Не розміщуйте матеріали, захищені авторським правом, які не належать вам, без належної дозволу від власників авторських прав.</li>
      <li class="rules_list-item">Звертайте увагу на тему розмови. Якщо ви хочете розпочати нову тему, переконайтеся, що вона відповідає загальному контексту форуму та має значення для інших користувачів.</li>
      <li class="rules_list-item">Повідомляйте адміністраторів форуму про будь-які порушення</li>
    </ol>
  </div>
</template>

<script setup lang="ts">



</script>

<style scoped lang="scss">
@import "../assets/main.scss";
.rules {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin: 5% 20%;
  padding: 2.5%;
  border: 1px solid #A5CAE4;
  border-radius: 5px;
  &_title {
    margin-bottom: 20px;
    font-family: 'Inter',sans-serif;
    font-style: normal;
    font-weight: 700;
    @include adaptive-value("font-size", 34, 24, 1);
    line-height: 42px;
    color: #176093;
  }
  &_paragraph {
    font-family: 'Inter',sans-serif;
    font-style: normal;
    font-weight: 600;
    @include adaptive-value("font-size", 16, 12, 1);
    line-height: 19px;
    color: #141414;
    margin-bottom: 10px;
  }
  &_list {
    display: flex;
    flex-direction: column;
    text-align: left;
    @include adaptive-value("gap", 20, 0, 1);
    &-item {
      font-family: 'Inter',sans-serif;
      font-style: normal;
      font-weight: 600;
      @include adaptive-value("font-size", 16, 12, 1);
      line-height: 19px;
      color: #141414;
    }
  }
}
</style>