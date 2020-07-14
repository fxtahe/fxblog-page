<template>
  <div class="sitemap">
    <div class="sitemap-wrapper">
      <div class="tags">
        <div class="sitemap-title">Tags</div>
        <div class="tags-wrapper">
          <tags :tags="tags"></tags>
        </div>
      </div>
      <div class="category">
        <div class="sitemap-title">Categorys</div>
        <ul class="category-list">
          <router-link :tag="li" class="category-item" :to="`/category/poetry`">
            <div class="category-wrapper">
              <div
                class="category-image"
                style="background-image: url('https://resource.shirmy.me/lighthouse.jpeg');"
              ></div>
              <h2 class="title">Essay</h2>
              <p class="desc">#惟有文字 长情陪伴#</p>
            </div>
          </router-link>
          <router-link :tag="li" class="category-item" :to="`/category/poetry`">
            <div class="category-wrapper">
              <div
                class="category-image"
                style="background-image: url('https://resource.shirmy.me/blog/covers/dark-line.jpg');"
              ></div>
              <h2 class="title">Poetry</h2>
              <p class="desc">诗</p>
            </div>
          </router-link>
          <router-link :tag="li" class="category-item" :to="`/category/poetry`">
            <div class="category-wrapper">
              <div
                class="category-image"
                style="background-image: url('https://resource.shirmy.me/blog/covers/category/coding-cover.jpg');"
              ></div>
              <h2 class="title">Code</h2>
              <p class="desc">代码</p>
            </div>
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
const tags = [
  { tagName: "python" },
  { tagName: "java" },
  { tagName: "python" },
  { tagName: "python" },
  { tagName: "python" },
  { tagName: "python" }
];
import Tags from "@/components/Tag";
export default {
  components: {
    Tags
  },
  data() {
    return {
      tags: tags
    };
  }
};
</script>
<style lang="scss" scoped>
.sitemap {
  margin: 0 10%;
  padding: 100px 0;
}
.sitemap-wrapper {
  position: relative;
  z-index: 99;
  display: -webkit-box;
  display: -ms-flexbox;
  //display: flex;
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
    display: block; // 必须是块元素（形成上下居中效果） 否则无效果
    position: relative; // 定位为横线的父元素
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
  display: flex;
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
