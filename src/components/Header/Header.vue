<template>
  <header class="header">
    <div class="header-wrapper">
      <div
        class="header-container"
        :class="[isTop && !isScrollFadeIn ? 'top' : '', homeClass]"
      >
        <router-link :to="`/`">
          <div class="header-logo">
            <i class="logo">Fxblog</i>
          </div>
        </router-link>
        <nav class="nav-wrapper center-nav">
          <desktop-nav
            class="desktop desktop-nav"
            :navList="navList"
          ></desktop-nav>
          <div class="search-wrapper">
            <search></search>
          </div>

          <mobile-nav :navList="navList"></mobile-nav>
        </nav>
        <switch-theme class="desktop"></switch-theme>
      </div>
    </div>
  </header>
</template>
<script>
import Search from "../Search/Search";
import DesktopNav from "@/components/Navbar/DesktopNav.vue";
import MobileNav from "@/components/Navbar/MobileNav.vue";
import SwitchTheme from "@/components/SwitchTheme";
export default {
  components: {
    DesktopNav,
    MobileNav,
    SwitchTheme,
    Search
  },
  props: {
    navList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      isScrollFadeIn: false,
      isTop: false,
      previousTop: 0
    };
  },
  methods: {
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      var offsetHeight = document.querySelector("header").offsetHeight;
      if (scrollTop > 200) {
        this.isTop = true;
      } else {
        this.isTop = false;
      }
      if (scrollTop < this.previousTop) {
        //up
        if (this.isScrollFadeIn || scrollTop > offsetHeight) {
          this.isScrollFadeIn = false;
        }
      } else {
        //down
        if (scrollTop < offsetHeight) {
          this.isScrollFadeIn = false;
        } else {
          if (!this.isScrollFadeIn) {
            this.isScrollFadeIn = true;
          }
        }
      }
      this.previousTop = scrollTop;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  computed: {
    homeClass() {
      return this.$route.path === "/" ? "home-class" : "";
    }
  }
};
</script>
<style lang="scss" scoped>
.header {
  left: 0;
  right: 0;
  z-index: $index-popper;
}
.header-container {
  @include container;
}
.nav-wrapper {
  display: flex;
}

@media (min-width: 1024px) {
  .center-nav {
    margin-left: auto;
    margin-right: auto;
  }
  .header-logo {
    display: none !important;
  }
  .header-wrapper {
    height: 70px;
  }
}
@keyframes nav-fixed {
  0% {
    margin-top: -100px;
  }

  50% {
    margin-top: -90px;
  }

  100% {
    margin-top: 0;
  }
}
.top {
  margin: 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99999;
  animation-name: nav-fixed;
  animation-duration: 0.9s;
  animation-timing-function: ease-out;
  box-shadow: 0 0 5px 0px rgba(0, 0, 0, 0.49);
  background-color: var(--navbar-backgroup-color);
  @media (max-width: 1023px) {
    position: absolute;
  }
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  width: 100%;
  z-index: 100000;
  box-sizing: border-box;
}

.header-logo {
  .logo {
    font-size: $title-font-size-medium;
    transition: $theme-transition;
  }
}

@media (max-width: 1023px) {
}

@media (max-width: 1023px) {
  .desktop {
    display: none !important;
  }
  ::v-deep.home-class {
    position: absolute;
    .header-logo,
    .icon-search {
      color: #fff;
    }
  }
  .search-wrapper {
    margin-top: 14px;
    ::v-deep.icon-search {
      font-size: 1.4rem;
    }
  }
}
.desktop-nav {
  padding-left: 80px;
}
</style>
