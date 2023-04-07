<template>
  <div class="themeList_body">
    <div v-for="item of filteredMessage">
      <ThemeItem :model="item"></ThemeItem>
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
console.log(message.value[0].tags)
console.log(store.state.checkedTags)
let filteredPosts = {}

const filteredMessage = computed(() => {
  if (store.state.checkedTags.length === 0) {
    return message.value;
  } else {
    return message.value.filter((post: { tags: any[]; }) => {
      return post.tags.some(tag => store.state.checkedTags.includes(tag))
    })
  }
})

console.log(filteredPosts)
</script>

<style scoped>
.themeList_body {
  width: 75%;
  border: 1px solid #A5CAE4;
  border-radius: 5px;
  margin: 25px 0 25px 120px;
}
</style>