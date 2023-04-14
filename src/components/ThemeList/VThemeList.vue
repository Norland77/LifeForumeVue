<template>
  <div class="themes">
    <div class="themes_list">
      <ThemeItem v-for="item of displayedMessage" :data="item"></ThemeItem>
    </div>
    <div v-if="filteredMessage.length > 7" class="themes_pagination">
      <router-link :to="`${$route.path}?page=${page}${$route.query.id ? '&id='+$route.query.id : ''}`" v-for="page in listOfPages()" :key="page" class="themes_pagination-buttons">
        <span class="themes_pagination-number">{{page}}</span>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, ref, onMounted, watch, watchEffect, reactive} from "vue";
import {useStore} from "vuex";
import ThemeItem from "./VThemeItem.vue";
import {useRoute} from "vue-router";
const store = useStore()
const route = useRoute()

const stored = reactive({
  message: []
})

onMounted(() => {
  setCurrentPage();
  getAllThemes()
})
watch(() => route.query.page, setCurrentPage)
function setCurrentPage(){
  let page:any = route.query.page
  if (!page) page = 1
  store.state.currentPage = page
}

const apiUrl = computed<string>(() => import.meta.env.VITE_APP_API_URL)
async function getAllThemes() {
  const response = await fetch(`${apiUrl.value}/theme/get/all`, {
    method: "GET",
  })
  const result = await response.json();
  console.log(result.themes)
  stored.message = result.themes
}

const filteredMessage = computed(() => {
  const tags = store.state.tagsStore.checkedTags;
  const message = stored.message;
  console.log(message)
  if (tags.length === 0) {
    return message;
  } else {
    return message.filter((post: { tags: any[] }) => {
      return post.tags.some(tag => tags.includes(tag.name));
    });
  }
});

console.log(filteredMessage)
function listOfPages():number[]{
  const arr = []
  const currentPage = +store.state.currentPage
  if (currentPage > store.state.totalPages) return []
  arr.push(1)
  for (let i = currentPage - 4; i < currentPage ; i++){
    if (i < 2) continue
    arr.push(i)
  }
  for (let i = currentPage; i <= currentPage + 4 ; i++){
    if (i === 1) continue
    if (i > store.state.totalPages - 1) break
    arr.push(i)
  }
  arr.push(store.state.totalPages)
  return arr
}
const displayedMessage = computed(() => {
  const startIndex = (store.state.currentPage - 1) * store.getters.getNumItemsPerPage;
  const endIndex = startIndex + store.getters.getNumItemsPerPage;
  return filteredMessage.value.slice(startIndex, endIndex);
});
store.state.totalPages = Math.ceil(filteredMessage.value.length / store.getters.getNumItemsPerPage);
watchEffect(() => {
  store.state.totalPages = Math.ceil(filteredMessage.value.length / store.getters.getNumItemsPerPage);
})


console.log(displayedMessage.value.length)



</script>

<style scoped lang="scss">
@import "../../assets/main.scss";
.themes {
  width: 75%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  &_list {
    border: 1px solid #A5CAE4;
    border-radius: 5px;
    @include adaptive-value("margin-top", 25, 0, 1);
    @include adaptive-value("margin-bottom", 25, 0, 1);
    @include adaptive-value("margin-left", 120, -25, 1);
    flex: 1 1 auto;
  }
  &_pagination {
    @include adaptive-value("margin-top", 25, 0, 1);
    @include adaptive-value("margin-bottom", 25, 0, 1);
    @include adaptive-value("margin-left", 120, 0, 1);
    @include adaptive-value("margin-right", 120, 0, 1);
    display: flex;
    @include adaptive-value("gap", 10, 0, 0);
    &-buttons {
      border: 3px solid #176093;
      border-radius: 5px;
      @include adaptive-value("width", 35, 15, 1);
      @include adaptive-value("padding-top", 5, 0, 1);
      @include adaptive-value("padding-bottom", 5, 0, 1);
      @include adaptive-value("padding-left", 10, 0, 1);
      @include adaptive-value("padding-right", 10, 0, 1);
    }
    &-number {
      font-family: 'Inter',sans-serif;
      font-style: normal;
      font-weight: 600;
      @include adaptive-value("font-size", 14, 8, 1);
      line-height: 17px;
      color: #969696;
    }
  }
}
</style>