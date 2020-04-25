<template>
  <ul class="nav-list">
    <li class="nav-list-item" v-for="(item, index) in navList" :key="index">
      <router-link class="nav-link" tag="a" :to="item.link">{{
        item.name
      }}</router-link>
    </li>
    <li class="nav-list-item">
      <i class="icon icon-search" @click="showSearch"></i>
    </li>
  </ul>
</template>
<script>
import { mapActions } from "vuex";
export default {
  props: {
    navList: Array
  },
  methods: {
    showSearch() {
      this.showSearch(true);
    },
    ...mapActions({
      showSearch: "app/setShowSearch"
    })
  }
};
</script>
<style lang="scss" scoped>
.nav-list {
  display: flex;
  // justify-content: center;
  // align-items: center;
  // flex-wrap: wrap;
  // font-size: 1rem;
  // width: 100%;
  // margin-right: 10%;
  .nav-list-item {
    position: relative;
    font-weight: normal;
    margin: 5px 12px;

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

      &:hover {
        color: var(--theme-active);
      }
    }
  }
}
</style>
