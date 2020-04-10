<template>
  <header class="header" :class="isScrollFadeIn ? 'header-scrollFadeIn' : ''">
    <div class="header-container" :class="indexMobileClass">
      <div class="header-logo">
        <theme></theme>
        <i class="logo">
          <router-link tag="a" to="/">
            Smile
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
      isFxed: false,
      isVisible: false,
      isScrollFadeIn: false,
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
    indexMobileClass() {
      return this.$route.path === "/" ? "index-mobile-class" : "";
    }
  }
};
</script>
<style lang="scss" scoped>
.header {
  position: fixed;
  left: 0;
  right: 0;
  opacity: 0;
  animation: header-fadeInTop 1s forwards;
  transform: translateY(-100px);
  background-color: whitesmoke;
}
.header-scrollFadeIn {
  animation: scrollFadeIn 1s forwards;
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
.header-container {
  @include container;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  z-index: 100000;
  box-sizing: border-box;
  @media (max-width: 479px) {
    height: 100px;
  }
}
.is-fixed {
  position: fixed;
  top: -70px;
  background-color: whitesmoke;
  -webkit-transition: -webkit-transform 0.3s;
  -moz-transition: -moz-transform 0.3s;
  transition: transform 0.3s;
  @media (max-width: 479px) {
    top: -100px;
  }
}
.is-visible {
  -webkit-transform: translate3d(0, 100%, 0);
  -moz-transform: translate3d(0, 100%, 0);
  -ms-transform: translate3d(0, 100%, 0);
  -o-transform: translate3d(0, 100%, 0);
  transform: translate3d(0, 100%, 0);
}
@media (min-width: 1150px) {
  .header-logo {
    .logo {
      font-size: $title-font-size-medium;
      transition: $theme-transition;
    }
  }
}
.header-logo {
  .logo {
    font-size: $title-font-size-medium;
    transition: $theme-transition;
  }
}

@media (max-width: 1023px) {
  .home-mobile-class {
    .header-logo {
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
