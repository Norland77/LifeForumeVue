<template>
<div class="theme_body">
  <div class="theme_leftSide">
    <img class="theme_img" src="../../assets/img/MessageIcon.svg" alt="Message">
    <div class="theme_leftSideMain">
      <router-link  :to="{ name: 'post', params: {id: model.id} }">
        <p class="theme_title">
          {{ model.title }}
        </p>
      </router-link>
      <div class="theme_about">
        <p class="theme_count">Повідомлення: {{model.messages.length}}</p>
        <div class="theme_tags" v-for="item of model.tags">
          <span class="theme_tag">{{item}}</span>
        </div>
      </div>
    </div>
  </div>
  <div class="theme_rightSide">
    <p class="theme_lastTxt">Останнє:</p>
    <p class="theme_last"><span class="theme_lastUser">{{model.messages.at(-1).user}}</span><span class="theme_lastData">{{setData.setData(model.messages.at(-1).data)}}</span></p>
  </div>
</div>
</template>

<script setup lang="ts">
import setData from '../../helpers/index'
interface ModelProps {
  id: number
  title: string,
  messages: object[],
  tags: string[]
}
interface TypeProps {
  model: ModelProps
}
const props = withDefaults(defineProps<TypeProps>(), {
  model: Object
})

</script>

<style scoped>
.theme_body {
  padding: 20px 20px;
  display: flex;
  justify-content: space-between;
}
.theme_leftSide {
  width: 85%;
  display: flex;
  gap: 12px;
  border-bottom: 2px solid #A5CAE4;
  border-radius: 5px;
}
.theme_img {
  width: 30px;
}
.theme_leftSideMain {
  width: 85%;
  display: flex;
  flex-direction: column;
}
.theme_title {
  font-family: 'Inter',sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #176093;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; /* не переносить текст на новую строку */
}
.theme_about {
  display: flex;
  gap: 10px;
  font-family: 'Roboto',sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 22px;
  color: #000000;
}
.theme_rightSide {
  display: flex;
  flex-direction: column;
  min-width: 15%;
  gap: 5px;
  padding: 5px 10px;
  border-width: 2px 2px 2px 2px;
  border-style: solid;
  border-color: #A5CAE4;
  border-radius: 5px;
}
.theme_lastTxt {
  width: 100%;
  font-family: 'Liberation Sans',sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;
  color: #000000;
}
.theme_last {
  width: 100%;
  display: flex;
  gap: 5px;

}
.theme_lastUser {
  width: 50%;
  font-family: 'Liberation Sans',sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 22px;
  color: #176093;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; /* не переносить текст на новую строку */
}
.theme_lastData {
  width: 100%;
  font-family: 'Liberation Sans',sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 22px;
  color: #969696;
}
</style>