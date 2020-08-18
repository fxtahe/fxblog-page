<template>
  <div id="app">
    <div class="logo-area">
      <div class="container">
        <div class="logo-box">
          <h2 style="text-align:center">FxBolg</h2>
        </div>
      </div>
    </div>
    <page-header :navList="navList"></page-header>
    <main class="view">
      <transition name="fade-transform" mode="out-in">
        <router-view />
      </transition>
    </main>
    <page-footer></page-footer>
    <scroll-top></scroll-top>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import PageHeader from "@/components/Header/Header.vue";
import PageFooter from "@/components/Footer/Footer.vue";
import ScrollTop from "@/components/ScrollTop/index";
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
  }
];
export default {
  name: "App",
  components: {
    PageHeader,
    PageFooter,
    ScrollTop
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
@import "@/styles/animation.scss";
.main-container {
  height: 100px;
}
.logo-area {
  position: relative;
  width: 100%;
  //background: #ffffff;
  padding: 48px 0px 40px 0px;
}
@media (max-width: 1023px) {
  .logo-area {
    display: none !important;
  }
}
</style>
