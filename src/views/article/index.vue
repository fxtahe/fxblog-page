<template>
  <div class="detail-container">
    <header class="article-header" :style="articleCover">
      <div class="header-wrapper">
        <div class="header-content">
          <tags :tags="article.tags"></tags>
          <div class="post-meta">
            <p v-show="article.category">
              <router-link
                class="category-name"
                :to="
                  `/category/${article.category.categoryName}/${article.category.id}`
                "
              >{{ article.category.categoryName }}</router-link>
            </p>
            <p>
              <time class="post-date" :datetime="article.createDate">
                {{
                timestampToTime(article.createDate)
                }}
              </time>
            </p>
          </div>
          <h1 class="title">{{ article.title }}</h1>
          <div class="author-meta">
            <div class="author-avatar">
              <img class="avatar" :src="article.author.avatar" :alt="article.author.authorName" />
            </div>
            <span class="post-author">
              by
              <router-link :to="`/author/${article.author.id}`">
                {{
                article.author.authorName
                }}
              </router-link>
            </span>
          </div>
        </div>
      </div>
    </header>
    <div class="article-container">
      <div class="content">
        <div class="article-wrapper">
          <article ref="markedContent" class="markdown" v-html="markedContent"></article>
        </div>
      </div>
    </div>
    <aside class="like-wrapper">
      <div class="item" @click="likeArticle">
        <span class="count">{{ articleLike }}</span>
        <i class="icon icon-heart-fill" :class="{ 'is-like': isLike }"></i>
      </div>
    </aside>
  </div>
</template>
<script>
import { mapState } from "vuex";
import markdown from "@/utils/marked";
import Tags from "@/components/Tag";
import { timestampToTime } from "@/utils/index";
import defaultCover from "@/assets/image/bg.jpg";
import article from "@/api/article";
export default {
  components: {
    Tags
  },
  data() {
    return {
      id: this.$route.params.id,
      articleCover: {},
      likeArticles: [],
      articleLike: 0
    };
  },
  computed: {
    ...mapState({
      article(state) {
        const article = state.article.article;
        if (!article) {
          return {
            author: {
              id: "",
              authorName: ""
            },
            category: {
              categoryName: ""
            }
          };
        }
        if (article.cover) {
          this.articleCover = { backgroundImage: `url(${article.cover})` };
        } else {
          this.articleCover = { backgroundImage: `url(${defaultCover})` };
        }
        this.articleLike = article.likes;
        return article;
      }
    }),
    isLike() {
      return this.likeArticles.includes(this.id);
    },
    markedContent() {
      if (this.article.content) {
        return markdown(this.article.content);
      } else {
        return "";
      }
    }
  },
  methods: {
    timestampToTime(timestamp) {
      return timestampToTime(timestamp);
    },
    marked(content) {
      return markdown(content);
    },
    async likeArticle() {
      if (this.isLike) {
        return;
      }
      try {
        await article.likeArticle(this.id);
        this.articleLike++;
        this.likeArticles.push(this.id);
        window.localStorage.setItem(
          "LIKE_ARTICLES",
          JSON.stringify(this.likeArticles)
        );
      } catch (e) {
        console.log(e);
      }
    },
    getLikeArticles() {
      this.likeArticles = JSON.parse(
        window.localStorage.getItem("LIKE_ARTICLES") || "[]"
      );
    }
  },
  created() {
    this.$store.dispatch("article/getArticleDetail", this.$route.params.id);
    this.getLikeArticles();
  },
  beforeRouteUpdate(to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    if (to.fullPath != from.fullPath) {
      next();
      this.$store.dispatch("article/getArticleDetail", this.$route.params.id);
    }
  }
};
</script>
<style lang="scss" scoped>
.article-header {
  @include cover;
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 85px - 85px);
  height: calc(100vh - 245px);
  margin: 0 auto;
  color: #fff;
  border-radius: 5px;
  background: no-repeat center center;
  background-size: cover;
  box-sizing: border-box;
  overflow: hidden;
  background-color: var(--image-color-cover);
  @media (max-width: 1399px) {
    width: 100%;
    border-radius: 0;
  }

  @media (max-width: 1023px) {
    height: calc(100vh - 160px);
  }

  @media (max-width: 479px) {
    height: auto;
    padding: 15vh 0 15vh;
  }

  .header-wrapper {
    position: relative;
    margin: 0 auto;
  }

  .header-content {
    @include headerPadding;
    margin-top: -10vh;

    @media (max-width: 479px) {
      margin-top: 0;
    }
  }

  .title {
    margin: 0.7em 0;
    line-height: 1;
    font-size: $title-font-size-extra-large;
    font-weight: $font-weight-bold;

    @media (max-width: 479px) {
      font-size: $title-font-size-base;
    }
  }
  .post-meta {
    border-left: 3px solid var(--link-color);
    padding-left: 15px;
    margin-bottom: 10px;
    .category-name {
      color: var(--font-color-light);
      font-size: 16px;
      font-style: italic;
      margin: 0;
      a {
        color: var(--font-color-light);
        &:hover {
          color: var(--link-color);
        }
      }
    }
    .post-date {
      color: var(--font-color-light);
    }
  }
  .author-meta {
    margin-top: 20px;
    display: inline-flex;
    .avatar {
      border-radius: 50%;
      height: 35px;
      width: 35px;
    }
    .post-author {
      display: block;
      font-family: "Playfair Display", serif;
      font-size: $font-size-small;
      font-style: italic;
      line-height: 1.25;
      margin: auto;
      padding-left: 10px;
      a {
        color: var(--font-color-light);
      }
    }
    @media (max-width: 479px) {
      font-size: $font-size-minimum;
    }
  }
  .author-wrapper {
    font-size: $font-size-small;

    .author-name {
      font-size: $font-size-large;
      font-weight: $font-weight-bold;
      cursor: pointer;

      @media (max-width: 479px) {
        font-size: $font-size-small;
      }

      &:not(:first-child)::before {
        content: "、";
      }
    }
  }
}
.article-container {
  @include container;
  position: relative;
  margin-top: -10vh;
  border-radius: 5px 5px 0 0;

  @media (max-width: 479px) {
    margin-top: 0;
  }

  .content {
    @include articlePadding;
    border-radius: 5px 5px 0 0;
    background-color: var(--app-background-color-light);
    transition: $theme-transition;

    @media (max-width: 479px) {
      box-shadow: none;
      background-color: var(--app-background-color);
    }
  }

  .split-line {
    margin: 20px 0;

    @media (max-width: 479px) {
      margin: 10px 0;
    }
  }
}

.like-wrapper {
  position: fixed;
  right: 0;
  bottom: 21%;
  z-index: $index-popper;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.14);

  @media (max-width: 479px) {
    display: none;
  }

  .item {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 42px;
    height: 42px;
    border: 1px solid var(--tag-color);
    background-color: var(--app-background-color);
    cursor: pointer;

    &:not(:last-child) {
      border-bottom: none;
    }

    &:hover {
      > i {
        color: var(--theme-active);
      }
    }

    .count {
      position: absolute;
      top: 0;
      left: 0;
      padding: 0 5px;
      font-size: $font-size-small;
      border-radius: 8px;
      transform: translate(-50%, -50%);
      background-color: var(--tag-color);
    }

    > i {
      font-size: $font-size-extra-large;
      transition: all 0.15s linear;
    }

    .is-like {
      color: var(--theme-active);
    }
  }
}
</style>
