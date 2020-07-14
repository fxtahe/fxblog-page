<template>
  <tag-detail type="category" :name="name" :cover="cover" :description="description"></tag-detail>
</template>
<script>
import Detail from "@/components/SitemapDetail/index";
export default {
  components: {
    Detail
  },
  data() {
    return {
      name: "",
      description: "",
      cover: "",
      page: 0
    };
  },
  methods: {
    getArticles() {}
  },
  created() {}
};
</script>
<style lang="scss" scoped>
</style>