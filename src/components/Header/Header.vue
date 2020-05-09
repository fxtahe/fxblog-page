<template>
  <header
    class="header"
    :class="[isTop && !isScrollFadeIn ? 'top' : '', homeClass]"
  >
    <div class="header-container">
      <div class="header-logo">
        <theme></theme>
        <i class="logo">Fxblog</i>
      </div>
      <nav class="nav-wrapper center-nav">
        <desktop-nav class="desktop-nav" :navList="navList"></desktop-nav>
        <mobile-nav :navList="navList"></mobile-nav>
      </nav>
    </div>
  </header>
</template>
<script>
import DesktopNav from "@/components/Navbar/DesktopNav.vue";
import MobileNav from "@/components/Navbar/MobileNav.vue";
import Theme from "@/components/Theme/Theme.vue";
export default {
  components: {
    DesktopNav,
    MobileNav,
    Theme
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
      if (scrollTop > 100) {
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
@media (min-width: 1024px) {
  .center-nav {
    margin-left: auto;
    margin-right: auto;
  }
  .header-logo {
    display: none !important;
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
  max-width: 1200px;
  margin: auto;
  z-index: 100000;
  box-sizing: border-box;
  // @media (max-width: 1023px) {
  //   height: 100px;
  //   padding-left: 5%;
  //   padding-right: 5%;
  // }
}

.header-logo {
  .logo {
    font-size: $title-font-size-medium;
    transition: $theme-transition;
  }
}

@media (max-width: 1023px) {
  .home-class {
    position: absolute;
    .header-logo,
    a {
      color: #fff;
    }
  }
}

@media (max-width: 1023px) {
  .desktop-nav {
    display: none !important;
  }
}
</style>
