<template>
  <div>
    <carousel-card :articles="featureArticles"></carousel-card>
    <section class="article-wrapper">
      <article-list
        :articles="articles"
        :loading="loading"
        :total="total"
        @loadMore="onLoadMore"
      ></article-list>
    </section>
  </div>
</template>
<script>
import CarouselCard from "@/components/CarouselCard/CarouselCard.vue";
import ArticleList from "@/components/ArticleList/ArticleList.vue";
import { mapState } from "vuex";
export default {
  components: {
    CarouselCard,
    ArticleList
  },
  data() {
    return {
      page: 1
    };
  },
  methods: {
    onLoadMore() {
      if (this.loading) {
        return;
      }
      this.page++;
      this.$store.dispatch("article/getMoreArticles", {
        page: this.page
      });
    }
  },
  computed: {
    ...mapState({
      loading: state => state.article.loading,
      articles: state => state.article.articles,
      featureArticles: state => state.article.featureArticles,
      total: state => state.article.total
    })
  },
  created() {
    this.$store.dispatch("article/getHomeArticles", {
      page: 1
    });
  }
};
</script>
<style lang="scss" scope>
.article-wrapper {
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 1200px) {
  .article-wrapper {
    max-width: 84%;
  }
}
</style>
