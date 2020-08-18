<template>
  <div class="container">
    <header class="article-header" :style="articleCover">
      <div class="header-wrapper">
        <div class="content">
          <tags :tags="article.tags"></tags>
          <h1 class="title">{{article.title}}</h1>
          <div class="author-wrapper" v-show="article.created_date">
            by&nbsp;
            <router-link
              tag="span"
              :key="article.author.id"
              class="author-name"
              :to="`/about/${article.author.id}`"
            >{{article.author.name}}</router-link>&nbsp;
            <time
              :datetime="article.createdDate | filterTime"
            >&nbsp;{{article.createdDate | filterTime}}</time>
          </div>
        </div>
      </div>
    </header>
    <!-- 文章区域 -->
    <div class="article-container">
      <div class="content">
        <!-- 文章内容 -->
        <div class="article-wrapper">
          <article ref="markedContent" class="markdown" v-html="markedContent"></article>
        </div>
        <!-- 文章信息 -->
        <div class="article-info-wrapper">
          <div class="tags-wrapper">
            <i class="icon icon-tags-fill"></i>
            <ul class="tags">
              <router-link
                tag="li"
                class="tag-item"
                v-for="tag in article.tags"
                :key="tag.id"
                :to="`/tags/${tag.id}/${tag.name}`"
              >{{tag.name}}</router-link>
            </ul>
          </div>
          <div class="like-btn" @click="likeArticle">
            <i class="icon icon-heart-fill" :class="{'is-like': isLike}"></i>
            <span>{{articleLike}}</span>
          </div>
        </div>
      </div>
    </div>

    <Dialog :visible.sync="dialogVisible" :loading="imgLoading" :imgSrc="imgSrc"></Dialog>
  </div>
</template>
<script>
import Tags from "@/components/Tag";
// import marked from "marked";
// import hljs from "highlight.js";
export default {
  components: {
    Tags
  }
};
</script>
<style lang="scss" scoped>
</style>