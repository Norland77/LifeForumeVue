<template>
  <div class="tags">
    <form  id="tags_search">
      <input class="tags_input" placeholder="Пошук тегів" name="query" v-model="searchQuery">
    </form>
    <VTagsList :tagsCount="tagsCount" :data="store.tagsData" :filter-key="searchQuery">></VTagsList>
    <button v-if="store.tagsData.length > 13" @click="showMore" class="tags_show">{{buttonName}}</button>
  </div>
</template>

<script setup lang="ts">
import {computed, onMounted, ref, reactive} from "vue";
import VTagsList from "./VTagsList.vue";

const store = reactive({
  tagsData: []
})

const apiUrl = computed<string>(() => import.meta.env.VITE_APP_API_URL)
async function getTags() {
  const response = await fetch(`${apiUrl.value}/tags/get/all`, {
    method: "GET",
  })
  const result = await response.json();
  console.log(result.tags)
  store.tagsData = result.tags
}

onMounted(getTags)

let tagsCount = ref(13)
const searchQuery = ref('')
let buttonName = ref('Більше')

function showMore () {
  if (tagsCount.value === store.tagsData.length) {
    tagsCount.value = 13
    buttonName.value = "Більше";
  } else {
    tagsCount.value = store.tagsData.length;
    buttonName.value = "Сховати";
  }
}
</script>

<style scoped lang="scss">
.tags {
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
  &_input {
    border: 1px solid #A5CAE4;
    border-radius: 5px;
    padding: 8px 35px;
  }
}
</style>