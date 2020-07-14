<template>
  <nav class="mobile-nav-container" v-click-outside="hide">
    <div
      class="mobile-nav-btn"
      :class="{ 'is-active': isShowMobileNav }"
      @click="isShowMobileNav = !isShowMobileNav"
    >
      <span class="mobile-nav-inner"></span>
    </div>
    <transition name="mobile-slide">
      <div class="nav-list-wrapper" v-if="isShowMobileNav">
        <div class="close-btn" @click="isShowMobileNav = false">
          <i class="icon icon-close"></i>
        </div>
        <ul class="menu">
          <li class="nav-list-item" v-for="(item, index) in navList" :key="index">
            <router-link
              class="nav-link"
              tag="a"
              :to="item.link"
              @click.native="isShowMobileNav = false"
            >{{ item.name }}</router-link>
          </li>
        </ul>
        <switch-theme></switch-theme>
      </div>
    </transition>
  </nav>
</template>
<script>
import SwitchTheme from "@/components/SwitchTheme";
import { mapActions } from "vuex";
import ClickOutside from "@/utils/click-outside";
export default {
  components: {
    SwitchTheme
  },
  props: {
    navList: {
      type: Array
    }
  },
  data() {
    return {
      isShowMobileNav: false
    };
  },
  methods: {
    hide() {
      this.isShowMobileNav = false;
    },
    showSearch() {
      this.setShowSearch(true);
    },
    ...mapActions({
      setShowSearch: "app/setShowSearch"
    })
  },

  directives: {
    ClickOutside
  }
};
</script>
<style lang="scss" scoped>
@import "@/styles/animation.scss";

.mobile-nav-container {
  display: none;
  margin-top: 14px;

  @media (max-width: 1023px) {
    display: inline-block;
  }
}

.search-wrapper {
  @include extend-click;
  float: left;
  margin-right: 20px;
  cursor: pointer;

  .icon-search {
    font-size: $font-size-extra-large;
    transition: $theme-transition;
  }
}

.mobile-nav-btn {
  float: left;
  @include extend-click;
  position: relative;
  width: 30px;
  height: 24px;
  cursor: pointer;

  .mobile-nav-inner {
    position: absolute;
    top: 10px;
    width: 30px;
    height: 4px;
    background-color: var(--font-color-primary);
    transition: bottom 0.08s 0s ease-out, top 0.08s 0s ease-out,
      opacity 0s linear, color 0.1s linear;

    &::before {
      content: "";
      display: block;
      position: absolute;
      top: -10px;
      width: 30px;
      height: 4px;
      background-color: var(--font-color-primary);
      transition: bottom 0.08s 0s ease-out, top 0.08s 0s ease-out,
        opacity 0s linear, color 0.1s linear;
    }

    &::after {
      content: "";
      display: block;
      position: absolute;
      top: 10px;
      width: 30px;
      height: 4px;
      background-color: var(--font-color-primary);
      transition: bottom 0.08s 0s ease-out, top 0.08s 0s ease-out,
        opacity 0s linear;
    }
  }

  @media (max-width: 1023px) {
    .mobile-nav-inner {
      background-color: var(--font-color-primary);

      &::before,
      &::after {
        background-color: var(--font-color-primary);
      }
    }
  }
}

.is-active {
  .mobile-nav-inner {
    &::before {
      top: 0;
    }

    &::after {
      top: 0;
    }
  }
}

.nav-list-wrapper {
  text-align: center;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  width: 300px;
  padding: 40px 30px 20px;
  border-bottom-left-radius: 5px;
  background: var(--navbar-backgroup-color);
  box-shadow: 0 2px 24px 5px rgba(0, 0, 0, 0.1);
  z-index: $index-top;
}

.close-btn {
  position: absolute;
  top: 16px;
  right: 20px;

  .icon-close {
    font-size: $font-size-large;
    cursor: pointer;

    &:hover {
      color: var(--theme-active);
    }
  }
}

@media (max-width: 1023px) {
  .home-class {
    .search-wrapper {
      .icon-search {
        color: #fff;
      }
    }

    .mobile-nav-inner {
      background-color: #fff;

      &::before,
      &::after {
        background-color: #fff;
      }
    }
  }
}

.menu a {
  display: inline-block;
  padding: 12px 60px;
  text-transform: uppercase;
  font-weight: 600;
  transition: 0.3s linear;
  position: relative;
}

.menu a:hover {
  color: var(--theme-active);
}

.menu a::before,
.menu a::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 0%;
  left: 0;
  box-sizing: border-box;
  z-index: -1;
}

.menu a::before {
  bottom: 0;
  border-left: 1px solid #f1f1f1;
  border-right: 1px solid #f1f1f1;
  transition: 0.3s linear;
}

.menu a::after {
  top: 0;
  background-color: #f1f1f1;
  transition: 0.3s linear 0.3s;
}

.menu a:hover::before,
.menu a:hover::after {
  height: 100%;
}
</style>
