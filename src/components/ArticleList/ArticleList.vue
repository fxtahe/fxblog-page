<template>
  <div class="article-list">
    <div class="article-item-container">
      <div class="article-item-wrapper">
        <ul>
          <li v-for="article in articles" :key="article.id">
            <article-list-item :article="article"></article-list-item>
          </li>
        </ul>
        <div v-if="isLoadMore" class="load-more" @click="this.$emit('loadMore')"></div>
        <loading v-if="loading"></loading>
        <!-- <empty v-if="!loading && !articles.length"></empty> -->
      </div>
    </div>
  </div>
</template>
<script>
import Loading from "@/components/Loading/Loading";
import ArticleListItem from "./ArticleListItem";
export default {
  components: {
    ArticleListItem,
    Loading
  },
  props: {
    articles: {
      type: Array,
      default: () => []
    },

    loading: {
      type: Boolean,
      default: false
    },

    total: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {};
  },
  computed: {
    isLoadMore() {
      if (this.articles.length && !this.loading) {
        return this.total > this.articles.length;
      } else {
        return false;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.load-more {
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  margin: 0 auto;
  border: 8px solid #dcdfe7;
  border-radius: 50%;
  transition: all 0.25s ease-in-out;
  cursor: pointer;

  @media (max-width: 479px) {
    width: 30px;
    height: 30px;
    border-width: 5px;
  }

  &:hover {
    border-color: var(--theme-active);
    background-color: var(--theme-active);
    transform: scale(0.65);
  }
}
</style>
