<template>
  <div class="carousel-item">
    <div class="carousel-item-wrapper" :style="{backgroundImage: 'url(' + articleCover + ')'}">
      <div class="feature-content">
        <div class="tag-list">
          <tags :tags="article.tags"></tags>
        </div>
        <div class="post-meta">
          <p>
            <router-link
              class="category-name"
              :to="`/category/${category.categoryName}/${category.id}`"
            >{{category.categoryName}}</router-link>
          </p>
          <p>
            <time
              class="post-date"
              :datetime="article.createDate"
            >{{timestampToTime(article.createDate)}}</time>
          </p>
        </div>
        <div>
          <h2>
            <router-link :to="`/article/${article.id}`" class="article-title">{{article.title}}</router-link>
          </h2>
        </div>
        <div class="author-meta">
          <div class="author-avatar">
            <img class="avatar" :src="article.author.avatar" :alt="article.author.authorName" />
          </div>
          <span class="post-author">
            by
            <router-link :to="`/author/${article.author.id}`">{{article.author.authorName}}</router-link>
          </span>
        </div>
        <div class="read-more">
          <router-link :to="`/article/${article.id}`">CONTINUE READING</router-link>
        </div>
      </div>
    </div>
  </div>
  <!--  -->
</template>
<script>
import { timestampToTime } from "@/utils/index";
import Tags from "@/components/Tag";
import defaultCover from "@/assets/image/defaultcover.jpg";
export default {
  components: {
    Tags
  },
  props: {
    article: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {};
  },
  computed: {
    category() {
      return this.article.category;
    },
    articleCover() {
      return this.article.cover ? this.article.cover : defaultCover;
    }
  },
  methods: {
    timestampToTime(timestamp) {
      return timestampToTime(timestamp);
    }
  }
};
</script>
<style lang="scss" scoped>
.carousel-item {
  width: 100%;
  float: left;
}
.carousel-item-wrapper {
  position: relative;
  height: 600px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  &:before {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: var(--image-color-cover);
    content: "";
  }
  &:after {
    position: absolute;
    left: 30px;
    top: 50%;
    transform: translateY(-50%) rotate(-90deg);
    content: "";
    text-transform: uppercase;
    color: #ffffff;
    letter-spacing: 6.13px;
    font-size: 16px;
    z-index: 1;
  }
}
.feature-content {
  position: relative;
  max-width: 700px;
  padding: 120px 150px;
  margin: auto;
  color: #ffffff;
  .article-title {
    color: var(--font-color-light);
    font-size: 30px;
    line-height: 1.3;
    @media (max-width: 479px) {
      font-size: $title-font-size-base;
    }
  }
  p {
    font-size: 15px;
  }
}
.post-meta {
  border-left: 3px solid var(--link-color);
  padding-left: 15px;
  margin-bottom: 10px;
  .category-name {
    color: var(--font-color-light);
    font-size: 16px;
    font-style: italic;
    margin: 0;
    a {
      color: var(--font-color-light);
      &:hover {
        color: var(--link-color);
      }
    }
  }
  .post-date {
    color: var(--font-color-light);
  }
}
.author-meta {
  margin-top: 20px;
  display: inline-flex;
  .avatar {
    border-radius: 50%;
    height: 35px;
    width: 35px;
  }
  .post-author {
    display: block;
    font-family: "Playfair Display", serif;
    font-size: 0.88889em;
    font-style: italic;
    line-height: 1.25;
    margin: auto;
    padding-left: 10px;
    a {
      color: var(--font-color-light);
    }
  }
}

.read-more {
  margin-top: 20px;
  a {
    font-size: 16px;
    color: var(--font-color-light);
    position: relative;
    padding: 10px 15px;
    display: inline-block;
    &:before {
      position: absolute;
      left: 0;
      top: 0;
      width: 10px;
      height: 10px;
      content: "";
      border-top: 1px solid var(--link-color);
      border-left: 1px solid var(--link-color);
      padding: 10px;
      display: inline-block;
      transition: 0.3s;
    }
    &:after {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 10px;
      height: 10px;
      content: "";
      border-bottom: 1px solid var(--link-color);
      border-right: 1px solid var(--link-color);
      padding: 10px;
      display: inline-block;
      transition: 0.3s;
    }
    &:hover {
      &:before,
      &:after {
        width: 100%;
        height: 100%;
      }
    }
  }
}

@media (max-width: 767px) {
  .carousel-item {
    .carousel-item-wrapper {
      height: 400px;
      &:after {
        left: -30px;
      }
    }
  }
  .feature-content {
    padding-left: 60px;
    padding-right: 60px;
    h2 {
      font-size: 28px;
    }
  }
}
@media (max-width: 575px) {
  .carousel-item {
    .card-item-wrapper {
      padding: 100px 15px 100px;
      &:after {
        left: auto;
        right: -20px;
        top: 90px;
        transform: translateY(0) rotate(90deg);
        letter-spacing: 3px;
      }
      .feature-content {
        padding: 60px 15px 100px;
      }
    }
    .read-more {
      a {
        float: right;
      }
    }
  }
}
</style>
