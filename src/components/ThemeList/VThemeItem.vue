<template>
<div class="theme">
  <div class="theme_leftSide">
    <img class="theme_img" src="../../assets/img/MessageIcon.svg" alt="Message">
    <div class="theme_leftSide-body">
      <router-link  :to="{ name: 'post', params: {id: data._id} }">
        <p class="theme_leftSide-title">
          {{ data.title }}
        </p>
      </router-link>
      <div class="theme_leftSide-by">
        <p class="theme_leftSide-count">Повідомлення: {{data.commentCount}}</p>
        <div class="theme_leftSide-tags" v-for="item of data.tags">
          <span>{{item.name}}</span>
        </div>
      </div>
    </div>
  </div>
  <div class="theme_rightSide">
    <p class="theme_rightSide-lastTxt">Останнє:</p>
    <p v-if="data.commentCount > 0" class="theme_rightSide-last"><span class="theme_rightSide-lastUser">{{data.lastComment.createdBy}}</span><span class="theme_rightSide-lastData">{{setData.setData(data.lastComment.createdAt)}}</span></p>
  </div>
</div>
</template>

<script setup lang="ts">
import setData from '../../helpers/index'
interface CommentType {
  createdAt: string,
  createdBy: string
}

interface TagsType {
  _id: string,
  name: string
}

interface CommentsProps {
  _id: string
  title: string,
  commentCount: number,
  lastComment: CommentType
  tags: TagsType[]
}

interface TypeProps {
  data: CommentsProps
}
const props = withDefaults(defineProps<TypeProps>(), {
  data: Object
})


</script>

<style scoped lang="scss">
.theme {
  padding: 20px 20px;
  display: flex;
  justify-content: space-between;
  &_leftSide {
    width: 85%;
    display: flex;
    gap: 12px;
    border-bottom: 2px solid #A5CAE4;
    border-radius: 5px;
    img {
      width: 30px;
    }
    &-body {
      width: 85%;
      display: flex;
      flex-direction: column;
    }
    &-title {
      font-family: 'Inter',sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 19px;
      color: #176093;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    &-by {
      display: flex;
      gap: 10px;
      font-family: 'Roboto',sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 10px;
      line-height: 22px;
      color: #000000;
    }
    &-count {
      font-family: 'Roboto',sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 10px;
      line-height: 22px;
      color: #000000;
    }
    &-tags {
      display: flex;
      span {
        font-family: 'Roboto',sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 10px;
        line-height: 22px;
        color: #000000;
      }
    }
  }
  &_rightSide {
    display: flex;
    flex-direction: column;
    min-width: 15%;
    gap: 5px;
    padding: 5px 10px;
    border-width: 2px 2px 2px 2px;
    border-style: solid;
    border-color: #A5CAE4;
    border-radius: 5px;
    &-lastTxt {
      width: 100%;
      font-family: 'Liberation Sans',sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 22px;
      color: #000000;
    }
    &-last {
      width: 100%;
      display: flex;
      gap: 5px;
      justify-content: space-between;
    }
    &-lastUser {
      width: 50%;
      font-family: 'Liberation Sans',sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 11px;
      line-height: 22px;
      color: #176093;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    &-lastData {
      width: 50%;
      font-family: 'Liberation Sans',sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 11px;
      line-height: 22px;
      color: #969696;
    }
  }
}
</style>