<template>
  <div id="app">
    <page-header :navList="navList"></page-header>
    <keep-alive>
      <router-view />
    </keep-alive>
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
  name: "App",
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
<style lang="scss">
#app {
  height: 1800px;
}
.main-container {
  height: 100px;
}
</style>
