<template>
  <header
    class="header"
    :class="[
      isScrollFadeIn ? 'header-scrollFadeIn' : '',
      isTop && homeClass ? 'top' : ''
    ]"
  >
    <div class="header-container" :class="homeClass">
      <div class="header-logo">
        <theme></theme>
        <i class="logo">
          <router-link tag="a" to="/">
            FxBlog
          </router-link>
        </i>
      </div>
      <nav class="nav-wrapper">
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
      isTop: true,
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
      console.log(offsetHeight);
      if (scrollTop == 0) {
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
  opacity: 0;
  animation: header-fadeInTop 1s forwards;
  transform: translateY(-100px);
  position: absolute;
  z-index: $index-popper;
  @media (min-width: 1024px) {
    position: fixed;
    background-color: var(--navbar-backgroup-color);
    //background-color: rgba(25, 28, 30, 0.33);
  }
}
@media (min-width: 1024px) {
  .header-scrollFadeIn {
    animation: scrollFadeIn 1s forwards;
  }
}
@keyframes scrollFadeIn {
  from {
    opacity: 1;
    -webkit-transform: translateY(0);
  }

  to {
    opacity: 0;
    -webkit-transform: translateY(-100px);
  }
}
@-webkit-keyframes header-fadeInTop {
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
  }
}

@keyframes header-fadeInTop {
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
  }
}
.top {
  background-color: transparent;
  .header-logo,
  a {
    color: #fff;
  }
}
@media (min-width: 1023px) {
  .top {
    ::v-deep a {
      color: #fff;
    }
    ::v-deep .icon-search {
      color: #fff;
    }
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
  @media (max-width: 1023px) {
    height: 100px;
    padding-left: 5%;
    padding-right: 5%;
  }
}

.header-logo {
  .logo {
    font-size: $title-font-size-medium;
    transition: $theme-transition;
  }
}

@media (max-width: 1023px) {
  .home-class {
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
