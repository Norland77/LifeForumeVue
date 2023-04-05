<template>
  <div class="themeList_body">
    <div v-for="item of message">
      <ThemeItem :model="item"></ThemeItem>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import ThemeItem from "./VThemeItem.vue";
import json from "../../json/message.json"

let dataStr = JSON.stringify(json)
let data = JSON.parse(dataStr)
const message = ref(data)
</script>

<style scoped>
.themeList_body {
  width: 75%;
  border: 1px solid #A5CAE4;
  border-radius: 5px;
  margin: 25px 0 25px 120px;
}
</style>