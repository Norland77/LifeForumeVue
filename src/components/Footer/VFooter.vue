<template>
  <div class="footer">
    <router-link class="footer_btn" :to="{name: 'rules'}">Правила</router-link>
    <router-link class="footer_btn" :to="{name: 'home'}">Форум</router-link>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
@import "../../assets/main.scss";
.footer {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  @include adaptive-value("padding-top", 5, 0, 1);
  @include adaptive-value("padding-bottom", 5, 0, 1);
  @include adaptive-value("padding-left", 120, 0, 1);
  @include adaptive-value("padding-right", 120, 0, 1);
  @include adaptive-value("gap", 25, 0, 0);
  background: #2B485C;
  border-radius: 5px 5px 0 0;
  &_btn {
    font-family: 'Liberation Sans',sans-serif;
    font-style: italic;
    font-weight: 400;
    @include adaptive-value("font-size", 11, 8, 1);
    line-height: 25px;
    color: #FFFFFF;
    background: none;
    border: none;
  }
}
</style>