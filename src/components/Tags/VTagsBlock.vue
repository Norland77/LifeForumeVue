<template>
  <div class="tagsBlock_body">
    <form  id="search">
      <input class="searchTags" placeholder="Пошук тегів" name="query" v-model="searchQuery">
    </form>
    <VTagsList :tagsCount="tagsCount" :data="tagsData" :filter-key="searchQuery">></VTagsList>
    <button @click="showMore" class="showMore">{{buttonName}}</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import VTagsList from "./VTagsList.vue";
import json from "../../json/tags.json";

let tagsCount = ref(13)
const searchQuery = ref('')
let tagID = ref(1)
let buttonName = ref('Більше')
let dataStr = JSON.stringify(json)
let data = JSON.parse(dataStr)
const tagsData = data
console.log(tagsData.length);
function showMore () {
  if (tagsCount.value === tagsData.length) {
    tagsCount.value = 13
    buttonName.value = "Більше";
  } else {
    tagsCount.value = tagsData.length;
    buttonName.value = "Сховати";
  }
}
</script>

<style scoped>
.tagsBlock_body {
  width: 100%;
  max-height: 550px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: center;
  margin-top: 25px;
  margin-right: 120px;
  mix-blend-mode: normal;
  border: 1px solid #A5CAE4;
  border-radius: 5px;
  padding: 10px;
  overflow-scrolling: auto;
  overflow: auto;
  overflow-x: hidden;
}
.searchTags {
  border: 1px solid #A5CAE4;
  border-radius: 5px;
  padding: 8px 35px;
}
.showMore {
  border: 1px solid #A5CAE4;
  border-radius: 5px;
  background: none;
  width: 100%;
  padding: 5px;
  font-family: 'Inter',sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #176093;
  margin-top: 10px;
}
</style>