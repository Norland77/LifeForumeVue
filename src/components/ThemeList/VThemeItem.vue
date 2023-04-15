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
@import "../../assets/main.scss";
.theme {
  @include adaptive-value("padding-top", 20, 0, 1);
  @include adaptive-value("padding-bottom", 20, 0, 1);
  @include adaptive-value("padding-left", 20, 0, 1);
  @include adaptive-value("padding-right", 20, 0, 1);
  display: flex;
  justify-content: space-between;
  &_leftSide {
    width: 85%;
    display: flex;
    @include adaptive-value("gap", 12, 0, 1);
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
      @include adaptive-value("font-size", 16, 8, 1);
      line-height: 19px;
      color: #176093;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    &-by {
      display: flex;
      @include adaptive-value("gap", 10, 0, 1);
      font-family: 'Roboto',sans-serif;
      font-style: normal;
      font-weight: 400;
      @include adaptive-value("font-size", 10, 0, 1);
      line-height: 22px;
      color: #000000;
    }
    &-count {
      font-family: 'Roboto',sans-serif;
      font-style: normal;
      font-weight: 400;
      @include adaptive-value("font-size", 10, 8, 1);
      line-height: 22px;
      color: #000000;

    }
    &-tags {
      display: flex;
      span {
        font-family: 'Roboto',sans-serif;
        font-style: normal;
        font-weight: 400;
        @include adaptive-value("font-size", 10, 8, 1);
        line-height: 22px;
        color: #000000;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
  &_rightSide {
    display: flex;
    flex-direction: column;
    min-width: 15%;
    @include adaptive-value("gap", 5, 0, 1);
    @include adaptive-value("padding-top", 5, 0, 1);
    @include adaptive-value("padding-bottom", 5, 0, 1);
    @include adaptive-value("padding-left", 10, 0, 1);
    @include adaptive-value("padding-right", 10, 0, 1);
    border-width: 2px;
    border-style: solid;
    border-color: #A5CAE4;
    border-radius: 5px;
    &-lastTxt {
      width: 100%;
      font-family: 'Liberation Sans',sans-serif;
      font-style: normal;
      font-weight: 400;
      @include adaptive-value("font-size", 12, 8, 1);
      line-height: 22px;
      color: #000000;
    }
    &-last {
      width: 100%;
      display: flex;
      @include adaptive-value("gap", 5, 0, 1);
      justify-content: space-between;
    }
    &-lastUser {
      width: 30%;
      font-family: 'Liberation Sans',sans-serif;
      font-style: normal;
      font-weight: 400;
      @include adaptive-value("font-size", 11, 8, 1);
      line-height: 22px;
      color: #176093;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    &-lastData {
      width: 70%;
      font-family: 'Liberation Sans',sans-serif;
      font-style: normal;
      font-weight: 400;
      @include adaptive-value("font-size", 11, 8, 1);
      line-height: 22px;
      color: #969696;
    }
  }
}
</style>