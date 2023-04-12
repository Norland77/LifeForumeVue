<template>
  <div class="themes">
    <div class="themes_list">
      <ThemeItem v-for="item of displayedMessage" :model="item"></ThemeItem>
    </div>
    <div class="themes_pagination">
      <router-link :to="`${$route.path}?page=${page}${$route.query.id ? '&id='+$route.query.id : ''}`" v-for="page in listOfPages()" :key="page" class="themes_pagination-buttons">
        <span class="themes_pagination-number">{{page}}</span>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, ref, onMounted, watch, watchEffect} from "vue";
import {useStore} from "vuex";
import ThemeItem from "./VThemeItem.vue";
import json from "../../json/message.json"
import {useRoute} from "vue-router";
const store = useStore()
const route = useRoute()

onMounted(() => {
  setCurrentPage()
})
watch(() => route.query.page, setCurrentPage)
function setCurrentPage(){
  let page:any = route.query.page
  if (!page) page = 1
  store.state.currentPage = page
}
let dataStr = JSON.stringify(json)
let data = JSON.parse(dataStr)
const message = ref(data)
const filteredMessage = computed(() => {
  if (store.state.tagsStore.checkedTags.length === 0) {
    return message.value;
  } else {
    return message.value.filter((post: { tags: any[]; }) => {
      return post.tags.some(tag => store.state.tagsStore.checkedTags.includes(tag))
    })
  }
})
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
  const startIndex = (store.state.currentPage - 1) * store.getters.getNumItemsPerPage
  const endIndex = startIndex + store.getters.getNumItemsPerPage
  return filteredMessage.value.slice(startIndex, endIndex)
})
store.state.totalPages = Math.ceil(filteredMessage.value.length / store.getters.getNumItemsPerPage);
watchEffect(() => {
  store.state.totalPages = Math.ceil(filteredMessage.value.length / store.getters.getNumItemsPerPage);
})


console.log(displayedMessage.value.length)



</script>

<style scoped lang="scss">
.themes {
  width: 75%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  &_list {
    border: 1px solid #A5CAE4;
    border-radius: 5px;
    margin: 25px 0 25px 120px;
    flex: 1 1 auto;
  }
  &_pagination {
    margin: 25px 120px;
    display: flex;
    gap: 10px;
    &-buttons {
      border: 3px solid #176093;
      border-radius: 5px;
      padding: 5px 10px;
    }
    &-number {
      font-family: 'Inter',sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      color: #969696;
    }
  }
}
</style>