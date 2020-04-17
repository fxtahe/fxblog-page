<template>
  <div>
    <carousel-card> </carousel-card>
    <section class="article-wrapper">
      <article-list></article-list>
    </section>
  </div>
</template>
<script>
import CarouselCard from "@/components/CarouselCard/CarouselCard.vue";
//import CarouselItem from "@/components/CarouselCard/CarouselItem.vue";
import ArticleList from "@/components/ArticleList/ArticleList.vue";
export default {
  components: {
    CarouselCard,
    //CarouselItem,
    ArticleList
  },
  data() {
    return {
      swiperList: [1, 2, 3],
      articles: [
        {
          id: 1,
          authorId: 1,
          author: {
            authorId: 1,
            authorName: "fxtahe"
          },
          title: "Ehcahce使用",
          excerpt:
            "Ehcache 是一个开源的、基于标准的，健壮、可靠、快速、简单、轻量级的java分布式缓存，支持与其他框架的集成，是Hibernate默认的CacheProvider。同时也实现了JSR107的规范，是Jcache的一种实现。 Ehcache 目前提供四层模型，支持四种级别：...",
          content: null,
          markdown: null,
          likes: null,
          views: null,
          createDate: "2020-04-15T15:22:53",
          updateDate: null,
          state: 2,
          categoryId: 1,
          tags: [
            {
              id: 1,
              tagName: "ehcache",
              useCount: 1
            }
          ],
          category: {
            id: 1,
            categoryName: "java"
          }
        }
      ]
    };
  }
};
</script>
<style lang="scss" scope>
.article-wrapper {
  margin-top: 50px;
}
</style>
