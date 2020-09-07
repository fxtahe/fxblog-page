<template>
  <div class="desktop-nav">
    <ul class="nav-list menu">
      <li class="nav-list-item" v-for="(item, index) in navList" :key="index">
        <router-link class="nav-link" tag="a" :to="item.link">
          {{
          item.name
          }}
        </router-link>
      </li>
      <li class="nav-list-item"></li>
    </ul>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  props: {
    navList: Array
  },
  methods: {
    showSearch() {
      this.$store.dispatch("app/setShowSearch", true);
    }
  },
  computed: {
    ...mapState({
      visible: state => state.app.showSearch
    })
  }
};
</script>
<style lang="scss" scoped>
.desktop-nav {
  display: flex;
}
.nav-list {
  display: flex;
  margin-right: 20px;
  .nav-list-item {
    position: relative;
    font-weight: normal;
    //margin: 5px 12px;

    .nav-link {
      cursor: pointer;
      transition: $theme-color-transtion;
      &:hover {
        color: var(--theme-active);
      }
    }
    .router-link-exact-active {
      color: var(--theme-active);
    }

    .icon-search {
      font-size: $font-size-large;
      cursor: pointer;
      padding: 10px 40px;
      &:hover {
        color: var(--theme-active);
      }
    }
  }
}

.menu a {
  padding: 10px 30px;
  text-transform: uppercase;
  font-weight: 600;
  //transition: 0.3s linear;
  position: relative;
  padding-right: 20px;
}
</style>
