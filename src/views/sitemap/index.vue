<template>
  <div class="sitemap">
    <div class="sitemap-wrapper">
      <div class="tags">
        <h2 class="tags-title">Tags</h2>
        <ul class="tag-list">
          <li class="tag-item">java</li>
          <li class="tag-item">python</li>
          <li class="tag-item">java</li>
          <li class="tag-item">python</li>
          <li class="tag-item">java</li>
          <li class="tag-item">python</li>
        </ul>
      </div>
      <div class="category">
        <h2 class="category-title">
          Categorys
        </h2>
        <ul data-v-d0af0c3e="" class="category-list">
          <li data-v-d0af0c3e="" class="category-item">
            <div data-v-d0af0c3e="" class="category-wrapper">
              <div
                data-v-d0af0c3e=""
                class="category-image"
                style='background-image: url("https://resource.shirmy.me/lighthouse.jpeg");'
              ></div>
              <h2 data-v-d0af0c3e="" class="title">Essay</h2>
              <p data-v-d0af0c3e="" class="desc">#惟有文字 长情陪伴#</p>
            </div>
          </li>
          <li data-v-d0af0c3e="" class="category-item">
            <div data-v-d0af0c3e="" class="category-wrapper">
              <div
                data-v-d0af0c3e=""
                class="category-image"
                style='background-image: url("https://resource.shirmy.me/blog/covers/dark-line.jpg");'
              ></div>
              <h2 data-v-d0af0c3e="" class="title">Poetry</h2>
              <p data-v-d0af0c3e="" class="desc">诗</p>
            </div>
          </li>
          <li data-v-d0af0c3e="" class="category-item">
            <div data-v-d0af0c3e="" class="category-wrapper">
              <div
                data-v-d0af0c3e=""
                class="category-image"
                style='background-image: url("https://resource.shirmy.me/blog/covers/category/coding-cover.jpg");'
              ></div>
              <h2 data-v-d0af0c3e="" class="title">Code</h2>
              <p data-v-d0af0c3e="" class="desc">代码</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
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
.tags {
  display: block;
  margin-bottom: 2.5em;
}
.tags-title,
.category-title {
  color: #adabac;
  font-size: 1.11111em;
  margin-bottom: 1.5em;
  position: relative;
  text-align: center;
  h2 {
    font-size: 1.66667em;
    margin: 1.5em 0 0.66667em;
  }
}

.tags-title:before,
.category-title:before,
.tags-title:after,
.category-title:after {
  content: "\00a0\2013\00a0";
}
.tag-list {
  text-align: center;
}
.tag-item {
  display: inline-block;
  padding: 15px 30px;
  margin: 5px;
  color: var(--font-color-primary);
  font-size: 12px;
  font-weight: normal;
  letter-spacing: 1.5px;
  border-radius: 1px;
  background: var(--tag-color);
  cursor: pointer;
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
    border-radius: 2px;
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
