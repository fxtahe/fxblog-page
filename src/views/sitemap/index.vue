<template>
  <div class="sitemap">
    <div class="author" v-if="authors.length>1">
      <ul class="author-list">
        <li v-for="author in authors" :key="author.id">
          <div class="author-avatar">
            <img
              :src="author.avatar"
              :class="authorInfo.id==author.id?'active':''"
              @click="changeAuthor(author)"
              :alt="author.authorName"
            />
            <p>
              <router-link
                class="author-link"
                :class="authorInfo.id==author.id?'active':''"
                :to="`/author/${author.authorName}/${author.id}`"
              >{{author.authorName}}</router-link>
            </p>
          </div>
        </li>
      </ul>
    </div>
    <div class="sitemap-wrapper">
      <div class="tags">
        <div class="sitemap-title">Tags</div>
        <transition name="fade-transform" mode="out-in">
          <div class="tags-wrapper" :key="index">
            <tags :tags="tags" v-if="tags && tags.length>0"></tags>
            <p v-else>空空如也~</p>
          </div>
        </transition>
      </div>
      <div class="category">
        <div class="sitemap-title">Categorys</div>
        <transition name="fade-transform" mode="out-in">
          <ul class="category-list" :key="index" v-if="categories && categories.length>0">
            <router-link
              :tag="`li`"
              v-for="category in categories"
              :key="category.id"
              class="category-item"
              @click.native="choiceCategory(category)"
              :to="`/category/${category.categoryName}/${category.id}`"
            >
              <div class="category-wrapper">
                <div
                  class="category-image"
                  :style="{backgroundImage: `url(${category.cover==''?defaultCover:category.cover})`}"
                ></div>
                <h2 class="title">{{category.categoryName}}</h2>
                <p class="desc">{{category.description}}</p>
              </div>
            </router-link>
          </ul>
          <p v-else>空空如也~</p>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
import defaultCover from "@/assets/image/bg.jpg";
import Tags from "@/components/Tag";
import { mapState } from "vuex";
export default {
  components: {
    Tags
  },
  data() {
    return {
      index: 0,
      defaultCover: defaultCover
    };
  },
  methods: {
    changeAuthor(author) {
      this.index++;
      this.$store.dispatch("sitemap/setAuthorInfo", author);
    },
    choiceCategory(category) {
      this.$store.dispatch("sitemap/setCategory", category);
    }
  },
  computed: {
    ...mapState({
      authors: state => state.sitemap.authors,
      authorInfo: state => state.sitemap.author,
      categories: state => state.sitemap.categories,
      tags: state => state.sitemap.tags
    })
  },
  created() {
    this.$store.dispatch("sitemap/getAuthorsInfo");
  }
};
</script>
<style lang="scss" scoped>
@import "@/styles/animation.scss";

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.sitemap {
  margin: 0 10%;
  padding: 20px 0;
}
.author {
  text-align: center;
  .author-list {
    display: inline-flex;
    .active {
      color: var(--theme-active);
    }
  }
  .author-avatar {
    padding: 40px 0;
    &:hover {
      img {
        filter: none;
      }
      .author-link {
        color: var(--theme-active);
      }
    }
    img {
      width: 80px;
      height: 80px;
      border-radius: 8%;
      margin: 0 40px;
      filter: grayscale(100%);
      transition: 0.3s;
      cursor: pointer;
      &:hover,
      &.active {
        filter: none;
      }
    }
  }
}
.sitemap-wrapper {
  font-family: "Hind", sans-serif;
  position: relative;
  z-index: 99;
  display: -webkit-box;
  display: -ms-flexbox;
  max-width: calc(100% + 30px);
  margin: 0px auto 16vh;
  padding: 0 8%;
  -webkit-animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
.tags,
.category {
  .sitemap-title {
    font-size: 1.2em;
    margin-bottom: 40px;
    display: block;
    position: relative;
  }
  .sitemap-title::before {
    left: 10%;
  }
  .sitemap-title::after {
    right: 10%;
  }
  .sitemap-title::before,
  .sitemap-title::after {
    content: ""; // CSS伪类用法
    position: absolute; // 定位横线的位置
    top: 50%;
    background-color: #eee;
    width: 30%; // 横线的宽度，每边分半为50%则是左右两边横线之间没有空隙
    height: 1px; // 横线的高度
  }
  text-align: center;

  margin-bottom: 2.5em;
}
.tags-wrapper {
  display: inline-block;
}

.tag-list {
  text-align: center;
}

.category-list {
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 0 -15px;

  .category-item {
    flex: 1 auto;
    position: relative;
    margin: 15px;
    border-radius: 6px;
    overflow: hidden;
    transition: all 0.25s ease-in-out;
    cursor: pointer;

    &:hover {
      transform: translateY(-4px);
    }

    @media (max-width: 470px) {
      margin: 15px 15px 0;
    }
  }
}
.category-wrapper {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  color: #fff;

  .category-image {
    @include cover;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
  }

  .title {
    padding: 15px 30px;
    font-size: $title-font-size-medium;
    font-weight: $font-weight-bold;
  }

  .center {
    text-align: center;
  }

  .desc {
    box-sizing: border-box;
    max-width: 450px;
    padding: 0 60px 3vh 30px;
  }
}
</style>
