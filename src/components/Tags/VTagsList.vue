<template>
<div class="tag" v-for="item of filteredData">
  <input class="tag_check" type="checkbox" v-bind:id="item" v-bind:value="item" v-model="$store.state.tagsStore.checkedTags">
  <label class="tag_label" v-bind:for="item">{{item}}</label>
</div>
</template>

<script setup lang="ts">
import { computed } from "vue";


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
.tag {
  margin-top: 10px;
  display: flex;
  gap: 15px;
  text-align: left;
  &_check {
    width: 15px;
    border: none;
  }
  &_label {
    font-family: 'Inter',sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: #176093;
  }
}
</style>