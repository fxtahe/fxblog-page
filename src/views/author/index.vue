<template>
  <detail
    :id="id"
    :name="name"
    :type="author"
    :avatar="avatar"
    :cover="cover"
  ></detail>
</template>
<script>
import Detail from "@/components/SitemapDetail/index";
import { mapState } from "vuex";
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
  computed: {
    ...mapState({
      avatar(state) {
        return state.sitemap.author.avatar;
      }
    })
  },
  created() {
    this.$store.dispatch("sitemap/getArticles", {
      authorId: this.$route.params.id,
      page: 0
    });
  }
};
</script>
<style lang="scss" scoped></style>
