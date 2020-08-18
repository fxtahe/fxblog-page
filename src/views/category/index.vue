<template>
  <detail :type="`category`" :id="id" :name="name" :cover="cover" :description="description"></detail>
</template>
<script>
import Detail from "@/components/SitemapDetail/index";
export default {
  components: {
    Detail
  },
  data() {
    return {
      id: this.$route.params.id,
      name: this.$route.params.name,
      description: this.$store.state.sitemap.category.description,
      cover: this.$store.state.sitemap.category.cover
    };
  },
  methods: {},
  created() {
    this.$store.dispatch("sitemap/getArticles", {
      categoryId: this.$route.params.id,
      page: 0
    });
  }
};
</script>
<style lang="scss" scoped>
</style>