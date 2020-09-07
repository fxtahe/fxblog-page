<template>
  <div class="article-list">
    <div class="article-item-container">
      <div class="article-item-wrapper">
        <ul>
          <li v-for="article in articles" :key="article.id">
            <article-list-item :article="article"></article-list-item>
          </li>
        </ul>
        <div v-if="isLoadMore" class="load-more" @click="loadMore()">
          <p>Previous</p>
        </div>
        <loading v-if="loading"></loading>
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
  },
  methods: {
    loadMore() {
      this.$emit("loadMore");
    }
  }
};
</script>
<style lang="scss" scoped>
.load-more {
  width: 100%;
  padding: 20px 0;
  text-align: center;
  display: inline-block;
  p {
    padding: 13px 35px;
    border: 1px solid #d6d6d6;
    border-radius: 50px;
    color: #adadad;
    width: 160px;
    margin: auto;
    &:hover {
      cursor: pointer;
      box-shadow: 0 0 4px var(--theme-active);
    }
  }
}
@media (max-width: 1023px) {
  .load-more {
    p {
      width: 160px;
    }
  }
}
@media (max-width: 579px) {
  .load-more {
    p {
      width: 100px;
    }
  }
}
</style>
