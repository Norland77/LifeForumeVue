<template>
  <div class="footer">
    <router-link class="footer_btn" :to="{name: 'rules'}">Правила</router-link>
    <router-link class="footer_btn" :to="{name: 'home'}">Форум</router-link>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.footer {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 5px 120px;
  gap: 25px;
  background: #2B485C;
  border-radius: 5px 5px 0 0;
  &_btn {
    font-family: 'Liberation Sans',sans-serif;
    font-style: italic;
    font-weight: 400;
    font-size: 11px;
    line-height: 25px;
    color: #FFFFFF;
    background: none;
    border: none;
  }
}
</style>