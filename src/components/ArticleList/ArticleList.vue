<template>
  <div class="article-list">
    <div class="article-list-container">
      <article class="post-card post tag-technology post-access-public  even ">
        <div class="post-card-image aos-init aos-animate" data-aos="fade-up">
          <a
            class="post-card-image-link"
            href="/video-games-playing-with-imagination/"
            aria-label="Video Games Playing With Imagination"
          >
            <div
              class="post-card-image-background"
              style='background-image: url("https://weiss-pro.eduardogomez.io/content/images/2020/03/jeshoots-com-eCktzGjC-iU-unsplash.jpg");'
            ></div>
          </a>
        </div>
        <div class="post-card-content aos-init aos-animate">
          <span
            class="m-access-tag in-post-card public"
            data-visibility="public"
          ></span>
          <h2 class="m-post-card__title">
            <a href="/video-games-playing-with-imagination/"
              >Video Games Playing With Imagination</a
            >
          </h2>
          <p class="m-post-card__excerpt">
            If Linux is ever to compete with Windows, it must become more user
            friendly and provide serious technical support.
          </p>
          <div class="m-post-card__metas">
            <div class="m-post-card__authors">
              <a
                href="/author/zachary/"
                class="m-post-card__author author-0 js-tooltip"
                aria-label="Author"
                data-tippy-content="Zachary Gilbert"
              >
                <div
                  style="background-image: url(/content/images/size/w100/2020/03/photo2.jpg);"
                ></div>
              </a>
            </div>
            <div class="m-post-card__timestamp">
              <span>3 months ago</span>
              <span>&nbsp; • &nbsp;</span>
              <span>2 min read</span>
            </div>
          </div>
          <a
            href="https://weiss-pro.eduardogomez.io/tag/technology/"
            class="m-post-card__tag"
            >Technology</a
          >
        </div>
      </article>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.article-list {
  @include container;
  box-sizing: border-box;
  margin: 0 auto;
}
.article-list-container {
  position: relative;
  margin: 0 auto;
}
.post-card {
  width: calc(100% + 40px);
  margin: 0 -20px;
}
.post-card-image {
  position: relative;
  height: 250px;
  margin-left: auto;
}
.post-card-image-link {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--empty-color);
  z-index: 2;
}
.post-card-image-background {
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
}
.post-card-content {
  padding: 20px;
  margin-bottom: 20px;
  h2 {
    color: var(--primary-foreground-color);
    letter-spacing: 0.4px;
    line-height: 1.3;
    font-size: 2rem;
    font-family: Playfair Display, Georgia, imes New Roman, sans-serif;
    font-weight: 700;
    margin: 0 0 20px;
  }
  p {
    color: var(--primary-foreground-color);
    letter-spacing: 0.6px;
    line-height: 1.5;
    font-size: 0.875rem;
    margin-bottom: 20px;
  }
}

@media only screen and (min-width: 1023px) {
  .article-list {
    padding-top: 75px;
    padding-bottom: 75px;
  }
  .article-list-container {
    padding-bottom: 115px;
    max-width: 1000px;
  }
  .post-card {
    display: flex;
    -webkit-box-align: start;
    align-items: flex-start;
    -webkit-box-pack: justify;
    width: 100%;
    margin: 0 0 95px;
    .post-card-image {
      width: 400px;
      height: 400px;
      order: 1;
    }
    .post-card-content {
      padding-top: 40px;
      width: 450px;
      h2 {
        font-size: 2.25rem;
        margin-bottom: 25px;
      }
      p {
        margin: 0;
        margin-bottom: 25px;
        max-width: 400px;
      }
    }
  }
}
</style>
