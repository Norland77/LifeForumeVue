<template>
<div class="tag" v-for="item of filteredData">
  <input @click="test" class="tag_check" type="checkbox" v-bind:id="item" v-bind:value="item" v-model="$store.state.tagsStore.checkedTags">
  <label class="tag_label" v-bind:for="item">{{item}}</label>
</div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import {useStore} from "vuex";
const store = useStore()
function test() {
  console.log(store.state.tagsStore.checkedTags)
}

interface TypeProps {
  data: String[],
  filterKey: string,
  tagsCount: number
}
const props = withDefaults(defineProps<TypeProps>(), {
  data: Object,
  filterKey: String,
  tagsCount: Number
})
console.log(props.data)
const filteredData = computed(() => {
  const { data, filterKey, tagsCount } = props;
  return data
      .filter(item => item.toLowerCase().startsWith(filterKey.toLowerCase()))
      .sort((a, b) => a.localeCompare(b.toString()))
      .slice(0, tagsCount);
});
</script>

<style scoped lang="scss">
@import "../../assets/main.scss";
.tag {
  @include adaptive-value("margin-top", 10, 0, 1);
  display: flex;
  @include adaptive-value("gap", 15, 0, 1);
  text-align: left;
  &_check {
    @include adaptive-value("width", 15, 5, 1);
    border: none;
  }
  &_label {
    font-family: 'Inter',sans-serif;
    font-style: normal;
    font-weight: 600;
    @include adaptive-value("font-size", 18, 6, 1);
    line-height: 22px;
    color: #176093;
  }
}
</style>