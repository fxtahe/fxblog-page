<template>
  <detail :id="id" :name="name" :type="author" :avatar="cover" :cover="cover"></detail>
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
      cover: "https://resource.shirmy.me/lighthouse.jpeg"
    };
  },
  created() {
    this.$store.dispatch("sitemap/getArticles", {
      authorId: this.$route.params.id,
      page: 0
    });
  }
};
</script>
<style lang="scss" scoped>
</style>