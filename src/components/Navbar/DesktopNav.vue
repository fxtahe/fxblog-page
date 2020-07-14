<template>
  <ul class="nav-list menu">
    <li class="nav-list-item" v-for="(item, index) in navList" :key="index">
      <router-link class="nav-link" tag="a" :to="item.link">
        {{
        item.name
        }}
      </router-link>
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
}

// .menu a:hover {
//   color: var(--theme-active);
// }

// .menu a::before,
// .menu a::after {
//   content: "";
//   position: absolute;
//   width: 100%;
//   height: 0%;
//   //left: 0;
//   box-sizing: border-box;
//   z-index: -1;
// }

// .menu a::before {
//   bottom: 0;
//   border-left: 1px solid #f1f1f1;
//   border-right: 1px solid #f1f1f1;
//   transition: 0.3s linear;
// }

// .menu a::after {
//   top: 0;
//   background-color: #f1f1f1;
//   transition: 0.3s linear 0.3s;
// }

// .menu a:hover::before,
// .menu a:hover::after {
//   height: 100%;
// }
</style>
