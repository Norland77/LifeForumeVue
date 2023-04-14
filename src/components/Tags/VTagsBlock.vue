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
@import "../../assets/main.scss";
.tags {
  width: 100%;
  @include adaptive-value("max-height", 550, 450, 1);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: center;
  @include adaptive-value("margin-top", 25, 0, 1);
  @include adaptive-value("margin-right", 120, -25, 1);
  mix-blend-mode: normal;
  border: 1px solid #A5CAE4;
  border-radius: 5px;
  @include adaptive-value("padding-top", 10, 0, 1);
  @include adaptive-value("padding-bottom", 10, 0, 1);
  @include adaptive-value("padding-left", 10, 0, 1);
  @include adaptive-value("padding-right", 10, 0, 1);
  overflow-scrolling: auto;
  overflow: auto;
  overflow-x: hidden;
  form {
    width: 100%;
  }
  &_input {
    width: 100%;
    border: 1px solid #A5CAE4;
    border-radius: 5px;
    @include adaptive-value("padding-top", 8, 0, 1);
    @include adaptive-value("padding-bottom", 8, 0, 1);
    @include adaptive-value("padding-left", 35, 0, 1);
    @include adaptive-value("padding-right", 35, 0, 1);
  }
}
</style>