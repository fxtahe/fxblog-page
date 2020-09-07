<template>
  <div class="tags-detail-container">
    <header-detail :description="description" :cover="cover==''?defaultCover:cover">
      <template v-slot:info>
        <div class="avatar" v-if="avatar">
          <img :src="avatar" />
          <span>{{name}}</span>
        </div>
        <h1 class="title" v-else>{{name}}</h1>
        <div class="posts-number">
          <i class="icon icon-post"></i>
          <span>{{total || 0}}&nbsp;posts</span>
        </div>
      </template>
    </header-detail>
    <section class="article-wrapper">
      <article-list :articles="articles" :loading="loading" :total="total" @loadMore="onLoadMore"></article-list>
    </section>
  </div>
</template>
<script>
import defaultCover from "@/assets/image/bg.jpg";
import HeaderDetail from "@/components/HeaderDetail/index";
import ArticleList from "@/components/ArticleList/ArticleList.vue";
import { mapState } from "vuex";
export default {
  components: {
    HeaderDetail,
    ArticleList
  },
  props: {
    id: String,

    type: {
      type: String,
      default: "tag"
    },

    name: {
      type: String,
      deault: ""
    },

    avatar: {
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
      page: 1,
      defaultCover: defaultCover
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
.article-wrapper {
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 1200px) {
  .article-wrapper {
    max-width: 84%;
  }
}
.avatar {
  margin: auto;
  position: relative;
  margin-bottom: 2px;
  img {
    width: 160px;
    height: 160px;
    border-radius: 50%;
  }
  span {
    font-size: $font-size-base;
    display: block;
    text-align: center;
  }
}
.posts-number {
  display: flex;
  text-align: center;
  align-items: center;
  margin: 0 auto;

  .icon-post {
    font-size: $title-font-size-base;
  }
}
span {
  font-size: $font-size-small;
  font-weight: $font-weight-bold;
  padding-left: 5px;
  letter-spacing: 2px;
  text-transform: uppercase;
}
.article-list {
  position: relative;
}
</style>