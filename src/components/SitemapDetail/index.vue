<template>
  <div class="tags-detail-container">
    <detail-header :name="name" :description="description" :cover="cover">
      <template v-slot:info>
        <div class="posts-number">
          <i class="icon icon-post"></i>
          <span>{{total || 0}}&nbsp;posts</span>
        </div>
      </template>
    </detail-header>
    <article class="article-list">
      <article-list :articles="articles" :loading="loading" :total="total" @loadMore="onLoadMore"></article-list>
    </article>
  </div>
</template>
<script>
import HeaderDetail from "@/components/HeaderDetail/index";
import ArticleList from "@/components/ArticleList/ArticleList.vue";

export default {
  props: {
    id: Number,

    type: {
      type: String,
      default: "tag"
    },

    name: {
      type: String,
      deault: ""
    },

    description: {
      type: String,
      default: ""
    },

    cover: {
      type: String,
      default: ""
    }
  }
};
</script>
<style lang="scss" scoped>
</style>