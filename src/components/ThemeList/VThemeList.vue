<template>
  <div class="themeList_main">
    <div class="themeList_body">
      <ThemeItem v-for="item of displayedMessage" :model="item"></ThemeItem>
    </div>
    <div class="pagination_body">
      <button v-for="page in totalPages" :key="page" class="pagination" @click="currentPage = page">
        <span class="pagination_number">{{page}}</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, ref} from "vue";
import {useStore} from "vuex";
import ThemeItem from "./VThemeItem.vue";
import json from "../../json/message.json"
const store = useStore()

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

const currentPage = ref(1)
const itemsPerPage = 7
const totalPages = computed(() => Math.ceil(filteredMessage.value.length / itemsPerPage))

const displayedMessage = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  return filteredMessage.value.slice(startIndex, endIndex)
})



</script>

<style scoped>
.themeList_body {
  border: 1px solid #A5CAE4;
  border-radius: 5px;
  margin: 25px 0 25px 120px;
  flex: 1 1 auto;
}
.themeList_main {
  width: 75%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
.pagination {
  border: 3px solid #176093;
  border-radius: 5px;
  padding: 5px 10px;
}
.pagination_body {
  margin: 25px 120px;
  display: flex;
  gap: 10px;
}
.pagination_number {
  font-family: 'Inter',sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #969696;
}
</style>