<template>
  <div class="search-container">
    <i class="icon icon-search" @click.stop="showSearch()"></i>
    <div v-show="visible" v-click-outside="hideSearch">
      <div class="arrow" style="left: 20px;"></div>
      <div class="popover-header">
        <i class="icon icon-close" @click="hideSearch"></i>
        <form>
          <input
            id="search-field"
            placeholder="Search"
            autocomplete="off"
            ref="searchVal"
            @input="searchArticles($event)"
          />
        </form>
      </div>
      <simplebar class="popover" data-simplebar-auto-hide="true">
        <div>
          <div class="popover-body">
            <div class="results" data-other="Other" v-show="result">
              <div v-for="category in result" :key="category.id">
                <h5>{{ category.categoryName }}</h5>
                <ul :data-tag="category.categoryName" class="list-box">
                  <li v-for="article in category.articles" :key="article.id">
                    <time>17 Apr 2018</time>
                    <p class="article-title" @click="selectArticle(article.id)">
                      {{ article.title }}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </simplebar>
    </div>
  </div>
</template>
<script>
import simplebar from "simplebar-vue";
import "simplebar-vue/dist/simplebar.min.css";
import { mapState } from "vuex";
import ClickOutside from "@/utils/click-outside";
export default {
  components: {
    simplebar
  },

  directives: { ClickOutside },
  methods: {
    hideSearch() {
      if (this.visible) {
        this.clearSearch();
        this.$store.dispatch("app/setShowSearch", false);
      }
    },
    showSearch() {
      this.$store.dispatch("app/setShowSearch", true);
    },
    clearSearch() {
      this.$refs.searchVal.value = "";
      if (this.result && this.result.length > 0) {
        this.$store.dispatch("article/searchArticles", "");
      }
    },
    selectArticle(id) {
      this.$router.push(`/article/${id}`);
      this.hideSearch();
    },
    searchArticles(event) {
      if (event.currentTarget.value != null) {
        let key = event.currentTarget.value;
        this.$store.dispatch("article/searchArticles", key.trim());
      }
    }
  },
  mounted() {},
  computed: {
    ...mapState({
      visible: state => state.app.showSearch,
      result(state) {
        return state.article.searchArticles;
      }
    })
  }
};
</script>
<style lang="scss" scoped>
.test {
  max-height: calc(100vh - 250px);
}
.search-container {
  align-items: center;
  justify-content: center;
  position: relative;
  width: 25px;
  height: 25px;
  z-index: 9999;
  .icon-search {
    cursor: pointer;
  }
  .arrow {
    top: 7px;
    right: 10px;
    left: auto !important;
    display: block;
    width: 1rem;
    height: 0.5rem;
    margin: 0 0.3rem;
    &:before,
    &:after {
      position: absolute;
      display: block;
      content: "";
      border-color: transparent;
      border-style: solid;
      border-bottom-color: var(--search-input);
      border-width: 0 0.5rem 0.5rem 0.5rem;
    }
  }
}
.popover-header {
  max-width: 276px;
  margin-left: -230px;
  width: 300px;
  background: var(--search-input);
  color: #212529;
  .icon-close {
    position: absolute;
    top: 4px;
    right: 12px;
    z-index: 999;
    width: 10px;
    height: 10px;
    color: #fff;
    font-size: small;
    background-size: 14px;
    opacity: 1;
    padding: 12px;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 3px;
    display: none;
  }
  form {
    width: 100%;
    input {
      background: var(--search-input);
      border: none;
      outline: 0;
      color: #fff;
      padding: 10px 15px;
      width: 240px;
      height: 100%;

      border-radius: 3px 3px 0 0;

      top: 15px;
      left: 0;
      border-bottom: 1px solid var(--search-input);
      z-index: 99;
    }
  }
}
.popover {
  position: absolute;
  background: transparent;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  margin-top: 0;
  width: 300px;
  border: none;
  max-height: calc(100vh - 250px);
  margin-left: -230px;
  opacity: 1;
  max-width: 276px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  word-break: normal;
  word-spacing: normal;
  white-space: normal;
  line-break: auto;
  font-size: 0.875rem;
  z-index: 10000;
  .popover-body {
    padding: 0;
    background: var(--search-color);
    color: #212529;
    .results {
      h5 {
        padding: 10px 15px;
        line-height: 20px;
        font-size: 12px;
        color: #a0a8bd;
        background: rgba(160, 168, 189, 0.2);
        margin: 0;
        font-weight: bold;
      }
      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        li {
          padding: 10px 35px 10px 15px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.2);
          position: relative;
          time {
            color: #fff;
            font-size: 12px;
            margin-bottom: 5px;
            display: block;
          }
          p {
            color: #fff;
            display: block;
            font-weight: bold;
            &:hover {
              cursor: pointer;
              color: var(--theme-active);
            }
          }
        }
      }
    }
  }
}

@media (max-width: 575px) {
  .search-container {
    position: static;
    .arrow {
      display: none !important;
    }
  }

  .popover-header {
    .icon-close {
      position: fixed;
      display: block;
    }
    form {
      input {
        top: 0;
        height: 36px;
        position: fixed;
        width: 100%;
      }
    }
  }
  .popover {
    position: fixed;
    height: calc(100vh - 46px);
    max-height: calc(100vh - 46px);
    left: 0 !important;
    width: 100vw;
    max-width: 100vw;
    margin-left: 0;
    transform: initial !important;
    will-change: initial !important;
    margin-top: 0;
    top: 46px !important;
    padding-top: 0;
    overflow: auto;
  }
  .popover-body {
    min-height: calc(100vh - 46px);
  }
}
</style>
