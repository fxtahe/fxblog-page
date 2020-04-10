<template>
  <div class="content-container">
    <page-header :navList="navList"></page-header>
    <div class="content-container"></div>
    <page-footer></page-footer>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import PageHeader from "@/components/Header/Header.vue";
import PageFooter from "@/components/Footer/Footer.vue";

const navList = [
  {
    link: "/",
    name: "首页"
  },
  {
    link: "/archive",
    name: "归档"
  },
  {
    link: "/sitemap",
    name: "标签"
  },
  {
    link: "/about",
    name: "关于"
  },
  {
    link: "/messages",
    name: "留言墙"
  }
];
export default {
  components: {
    PageHeader,
    PageFooter
  },
  data() {
    return {
      navList
    };
  },
  methods: {
    ...mapActions({
      setTheme: "app/setTheme"
    })
  },
  mounted() {
    const theme = window.localStorage.getItem("THEME");
    this.setTheme(theme || "light");
  }
};
</script>
<style lang="scss" scope>
.content-container {
  height: 1800px;
  background-color: bisque;
}
</style>
