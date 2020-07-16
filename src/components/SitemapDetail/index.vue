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
//import HeaderDetail from "@/components/HeaderDetail/index";
import ArticleList from "@/components/ArticleList/ArticleList.vue";
import { mapState } from "vuex";
export default {
  components: {
    ArticleList
  },
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
  },
  data() {
    return {
      page: 0
    };
  },
  computed: {
    ...mapState({
      loading: state => state.sitemap.loading,
      articles: state => state.sitemap.articles,
      total: state => state.sitemap.total
    })
  },
  methods: {
    onLoadMore() {
      this.page++;
      const params = {
        page: this.page,
        [this.type === "tag" ? "tagId" : "categoryId"]: this.id
      };
      this.$store.dispatch("sitemap/getMoreArticles", params);
    }
  }
};
</script>
<style lang="scss" scoped>
</style>