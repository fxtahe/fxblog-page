<template>
  <div class="article-list">
    <div class="article-item-container">
      <div class="article-item-wrapper">
        <div class="article-item">
          <div class="bg-medium">
            <div
              class="featured-flex"
              data-sr-id="1"
              style="; visibility: visible;  -webkit-transform: translateY(0) scale(1); opacity: 1;transform: translateY(0) scale(1); opacity: 1;-webkit-transition: -webkit-transform 0.65s ease-in-out 0s, opacity 0.65s ease-in-out 0s; transition: transform 0.65s ease-in-out 0s, opacity 0.65s ease-in-out 0s; "
            >
              <div class="left">
                <div class="appear">
                  <a href="/the-sky-perfectly-blended-into-the-landscape/">
                    <div
                      class="featured-image featured-home-image"
                      style="background-image: url(https://images.unsplash.com/photo-1587166366445-b2bbdf54b2b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80)"
                    ></div>
                  </a>
                </div>
              </div>
              <div class="right">
                <article class="featured-post-wrap">
                  <div class="featured-post">
                    <h2>
                      <a
                        href="/the-sky-perfectly-blended-into-the-landscape/"
                      >The Shy - The God Of Top</a>
                    </h2>
                    <div class="item-excerpt">
                      <p>
                        这是一段简介关于文章的见解这是一段简介关于文章的见解这是一段简介关于文章的见解这是一段简介关于文章的见解
                        这是一段简介关于文章的见解这是一段简介关于文章的见解这是一段简介关于文章的见解这是一段简介关于文章的见解
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="article-item-wrapper">
        <div class="article-item">
          <div class="bg-medium">
            <div class="featured-flex">
              <div class="left">
                <div class="appear">
                  <a href="/the-sky-perfectly-blended-into-the-landscape/">
                    <div
                      class="featured-image featured-home-image"
                      style="background-image: url(https://images.unsplash.com/photo-1587166366445-b2bbdf54b2b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80)"
                    ></div>
                  </a>
                </div>
              </div>
              <div class="right">
                <article class="featured-post-wrap">
                  <div class="featured-post">
                    <h2>
                      <a
                        href="/the-sky-perfectly-blended-into-the-landscape/"
                      >The Shy - The God Of Top</a>
                    </h2>
                    <div class="item-excerpt">
                      <p>
                        这是一段简介关于文章的见解这是一段简介关于文章的见解这是一段简介关于文章的见解这是一段简介关于文章的见解
                        这是一段简介关于文章的见解这是一段简介关于文章的见解这是一段简介关于文章的见解这是一段简介关于文章的见解
                        <a
                          href="/the-sky-perfectly-blended-into-the-landscape/"
                        >[...]</a>
                      </p>
                    </div>
                  </div>
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
export default {};
</script>
<style lang="scss" scoped>
.article-item-wrapper {
  margin-top: 20px;
}
.article-item {
  position: relative;
  z-index: 3;
  margin: 150px 0 25vh 0;
}
.bg-medium {
  margin: 0 3%;
  padding-bottom: 12vh;
  background-color: var(--article-list-back);
}
.text-featured {
  top: -90px;
}

.text {
  font-size: 24px;
  position: absolute;
  width: 250px;
  text-align: right;
  bottom: 80px;
}
.rotate {
  -webkit-transform: translateX(-42%) translateY(0%) rotate(90deg);
  transform: translateX(-42%) translateY(0%) rotate(90deg);
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
  margin: -5vh 4% 0 4%;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 42%;
  flex: 0 0 42%;
}
.featured-image {
  height: 380px;
  background: no-repeat center center;
  background-size: cover;
}
.right {
  margin-top: 0;
  //margin: 15vh 6.5% 0 1.5%;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 42%;
  flex: 0 0 42%;
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
.featured-post {
  padding: 0 30px;
  h2 {
    font-size: 24px;
    font-family: "Spectral", Helvetica, Arial, sans-serif;
    line-height: 1.3;
    margin: 0;
    padding: 0 0 30px;
  }
  .item-excerpt {
    font-size: 14px;
    padding: 0 0 20px;
    p {
      margin-bottom: 25px;
    }
  }
}

@media (max-width: 1023px) {
  .article-item {
    margin-bottom: 20vh;
  }
  .text-featured {
    display: none;
  }
  .bg-medium {
    padding-bottom: 5vh;
  }
  .left {
    //margin: -5vh auto 5vh auto;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 92%;
    flex: 0 0 92%;
  }
  .featured-home-image {
    height: 430px;
  }
  .right {
    margin: 0 auto;
    text-align: center;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 75%;
    flex: 0 0 75%;
  }

  .featured-post {
    padding: 10px 30px 5vh;
    h2 {
      font-size: 35px;
      padding: 0 0 20px;
    }
  }
}
</style>
