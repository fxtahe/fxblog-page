<template>
  <div class="website">
    <div class="website-content" v-html="markdownContent(about)"></div>
  </div>
</template>
<script>
import website from "@/api/website";
import markdown from "@/utils/marked";
export default {
  data() {
    return {
      about: ""
    };
  },
  methods: {
    markdownContent(content) {
      return markdown(content);
    }
  },
  created() {
    website.getWebsite().then(res => {
      this.about = res.data.about;
    });
  }
};
</script>
<style lang="scss" scoped>
.website {
  @include cover;
  display: flex;
  justify-content: center;
  width: calc(100% - 85px - 85px);
  height: calc(100vh - 245px);
  margin: 0 auto;
  box-sizing: border-box;
  overflow: hidden;
}
</style>
