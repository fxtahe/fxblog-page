<template>
  <detail :id="id" :name="name" :type="`tag`" :cover="cover"></detail>
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
      cover: ""
    };
  },
  created() {
    this.$store.dispatch("sitemap/getArticles", {
      tagId: this.$route.params.id,
      page: 0
    });
  }
};
</script>
<style lang="scss" scoped></style>
