<template>
  <div class="article-list">
    <div class="article-item-container">
      <div class="article-item-wrapper">
        <div class="article-item">
          <div class="bg-medium">
            <div class="featured-flex">
              <div class="left">
                <div class="appear">
                  <a href="/">
                    <div
                      class="featured-image featured-home-image"
                      style="background-image: url(https://images.unsplash.com/photo-1587166366445-b2bbdf54b2b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80)"
                    ></div>
                  </a>
                </div>
              </div>
              <div class="right">
                <article class="post tag-getting-started featured">
                  <header class="post-header">
                    <div class="post-tags">
                      <!-- <a href="/tag/getting-started/">Getting Started</a> -->
                      <tags :tags="tags"></tags>
                    </div>
                    <div class="post-header-wrap">
                      <h2 class="post-title">
                        <a href="/the-editor/">中文测试Writing posts with Ghost</a>
                      </h2>
                      <div class="post-meta">
                        <div class="author-avatar">
                          <img class="avatar" src="../../assets/image/avatar.jpg" alt="Fxtahe" />
                        </div>
                        <span class="post-author">
                          by
                          <a href="/author/john-doe/">Fxtahe</a>
                        </span>
                        <span class="post-date">
                          <time class="published" datetime="2020-01-17">January 17, 2020</time>
                        </span>
                      </div>
                      <!-- .post-meta -->
                    </div>
                    <!-- .post-header-wrap -->
                  </header>
                  <!-- .post-header -->
                  <div class="post-content">
                    <p>
                      Getting started with the editor is simple, with familiar
                      formatting options in a functional toolbar and the ability
                      to add dynamic content seamlessly.
                    </p>
                  </div>
                  <div class="read-more">
                    <a href="#">READ MORE</a>
                  </div>
                  <!-- .post-content -->
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const tags = [{ tagName: "python" }, { tagName: "java" }];
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
.article-item-wrapper {
  margin-top: 20px;
}
.article-item {
  position: relative;
  z-index: 3;
  margin: 80px 0 15vh 0;
}
.bg-medium {
  margin: 0 3%;
  background-color: var(--article-list-back);
}

.featured-flex {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-flow: row wrap;
  flex-flow: row wrap;
}
.left {
  overflow: hidden;
  margin: -5vh 4% 3% 4%;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 42%;
  flex: 0 0 42%;
}
.appear {
  position: relative;
}
.featured-image {
  height: 380px;
  background: no-repeat center center;
  background-size: cover;
  &:before {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: var(--image-color-cover);
    content: "";
  }
}
.right {
  margin-top: 0;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 42%;
  flex: 0 0 48%;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-flow: row wrap;
  flex-flow: row wrap;
}

@media (max-width: 768px) {
  .featured-home-image {
    height: 240px;
  }
}
@media (max-width: 1023px) {
  .article-item {
    margin-bottom: 10vh;
  }
  .bg-medium {
    padding-bottom: 0vh;
  }
  .left {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 92%;
    flex: 0 0 92%;
  }

  .right {
    margin: 0 auto;
    text-align: center;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 75%;
    flex: 0 0 75%;
  }
}
.post {
  padding-top: 20px;
  margin-bottom: 3em;
  position: relative;
}
.post-header {
  margin-bottom: 1.2em;
  .post-tags {
    color: var(--theme-active);
    font-size: 14px;
    font-family: "sofia-pro", "Ubuntu", sans-serif;
    a {
      &::before {
        content: "\0023";
      }
    }
  }
  a {
    color: var(--theme-active);
    -webkit-transition: color 0.3s;
    transition: color 0.3s;
  }
  .post-header-wrap {
    position: relative;
    padding-top: 0.55556em;
    a {
      color: var(--font-color-dark);
      &:hover {
        color: var(--theme-active);
      }
      //color: #adabac;
    }
  }
  .post-title {
    font-family: "sofia-pro", "Ubuntu", sans-serif;
    font-weight: bold;
    line-height: 1.25;
    text-rendering: optimizeLegibility;
    font-size: 1.8em;
    margin: 0 0 0.41667em;
  }
  .post-meta {
    color: #adabac;
    &::before {
      content: "";
      display: table;
    }
    &::after {
      content: "";
      display: table;
    }
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
    }
    .post-date {
      display: block;
      font-size: 0.66667em;
      letter-spacing: 2px;
      line-height: 1.25;
      margin-top: 3px;
      text-transform: uppercase;
    }
  }
}
.post-content {
  p {
    margin: 0 0 1.66667em;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    color: var(--font-color-dark);
  }
  &::before {
    content: "";
    display: table;
  }
}
.read-more {
  margin-top: 40px;
  font-family: "Roboto", sans-serif;
  a {
    font-family: Oswald, sans-serif;
    font-weight: 400;
    font-size: 16px;
    position: relative;
    padding: 10px 15px;
    display: inline-block;
    &::before {
      position: absolute;
      left: 0;
      top: 0;
      width: 10px;
      height: 10px;
      content: "";
      border-top: 1px solid var(--theme-active);
      border-left: 1px solid var(--theme-active);
      padding: 10px;
      display: inline-block;
      transition: 0.3s;
    }
    &::after {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 10px;
      height: 10px;
      content: "";
      border-bottom: 1px solid var(--theme-active);
      border-right: 1px solid var(--theme-active);
      padding: 10px;
      display: inline-block;
      transition: 0.3s;
    }
    &:hover {
      -webkit-tap-highlight-color: transparent;
      transition: all 0.5s ease;
      &::before,
      &::after {
        width: 100%;
        height: 100%;
      }
    }
  }
}

@media (min-width: 1023px) {
  .post-meta {
    -webkit-align-items: center;
    align-items: center;
    .author-avatar {
      -webkit-flex: 0 0 auto;
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;

      float: left;
      margin: 2px 10px 0 0;
      .avatar {
        border-radius: 50%;
        height: 35px;
        width: 35px;
      }
    }
  }
}
@media (min-width: 1161px) {
  .post-author {
    padding: 0;
  }
}
@media (max-width: 640px) {
  .author-avatar {
    margin-top: 0;
  }
}
</style>
