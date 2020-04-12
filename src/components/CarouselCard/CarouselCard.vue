<template>
  <div class="carousel-card">
    <div class="card-container">
      <div class="card-stage">
        <div class="card-stage-wrapper">
          <!-- <swiper :options="swiperOption">
            <swiper-slide
              class="swiper-item"
              v-for="item of swiperList"
              :key="item.id"
            >
              <CarouselItem></CarouselItem>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper> -->
          <div class="card-item" :style="{ width: screenWidth }">
            <div
              class="card-item-wrapper"
              style="background-image: url(http://delas.electronthemes-ghost.com/content/images/2019/03/jakob-owens.jpg);"
            >
              <article class="feature-content">
                <div class="post-meta">
                  <p><a href="/tag/photography/">Photography</a></p>
                  <p>
                    <time class="post-date" datetime="2020-04-11"
                      >11 april, 2020</time
                    >
                  </p>
                </div>
                <div class="author-meta">
                  <i class="fa fa-user"></i> Posted by -
                  <a href="/author/ghost/">Jahangir Alom</a>
                </div>
                <div class="title-meta">
                  <h2>Woman Bring Can't Creepeth</h2>
                </div>
                <div class="intro-meta">
                  <p>
                    Void bring heaven it blessed the, day appear bearing make
                    which signs seas greater him. Gathered creeping. Creature
                    very thing fill signs fish a heaven our set Midst.
                  </p>
                </div>
                <div class="read-more">
                  <a href="/">CONTINUE READEING</a>
                </div>
              </article>
            </div>
          </div>
          <div class="card-item" :style="{ width: screenWidth }">
            <div
              class="card-item-wrapper"
              style="background-image: url(http://delas.electronthemes-ghost.com/content/images/2019/03/jakob-owens.jpg);"
            >
              <article class="feature-content">
                <div class="post-meta">
                  <p><a href="/tag/photography/">Photography</a></p>
                  <p>
                    <time class="post-date" datetime="2020-04-11"
                      >11 april, 2020</time
                    >
                  </p>
                </div>
                <div class="author-meta">
                  <i class="fa fa-user"></i> Posted by -
                  <a href="/author/ghost/">Jahangir Alom</a>
                </div>
                <div class="title-meta">
                  <h2>Woman Bring Can't Creepeth</h2>
                </div>
                <div class="intro-meta">
                  <p>
                    Void bring heaven it blessed the, day appear bearing make
                    which signs seas greater him. Gathered creeping. Creature
                    very thing fill signs fish a heaven our set Midst.
                  </p>
                </div>
                <div class="read-more">
                  <a href="/">CONTINUE READEING</a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { Swiper, SwiperSlide } from "vue-awesome-swiper";
// import CarouselItem from "@/components/CarouselCard/CarouselItem.vue";
// import "swiper/css/swiper.css";
export default {
  // components: {
  //   Swiper,
  //   SwiperSlide,
  //   CarouselItem
  // },
  data() {
    return {
      screenWidth: "2048px", //屏幕宽度
      swiperOption: {
        // 参数选项,显示小点
        pagination: ".swiper-pagination",
        //循环
        loop: true,
        //每张播放时长3秒，自动播放
        autoplay: 2000,
        //滑动速度
        speed: 1000
        // delay:1000
      },
      //三张轮播，使用变量循环
      swiperList: [1, 2, 3]
    };
  },
  methods: {
    getWidth() {
      this.screenWidth = window.innerWidth + "px";
    }
  },
  created() {
    window.addEventListener("resize", this.getWidth);
    this.getWidth();
  },
  destroyed() {
    window.removeEventListener("resize", this.getHeight);
  }
};
</script>
<style lang="scss">
.carousel-card {
  padding-left: calc((100% - 1650px) / 2 + 15px);
  position: relative;
  @media (min-width: 1024px) {
  }
}
.card-container {
  position: relative;

  .card-nav {
    display: flex;
    position: absolute;
    right: 100px;
    bottom: 100px;
  }
  .card-dots {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 100px;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    .card-dot {
      background: 0 0;
      border: none;
      padding: 0 !important;
      font: inherit;
      color: #777;
      font-size: 20px;
      border-bottom: 1px solid #777;
      margin: 5px 0;
      &.active {
        color: var(--link-color);
        border-color: var(--theme-active);
      }
    }
  }
}
.card-stage {
  height: 572px;
  .card-stage-wrapper {
    transform: translate3d(0px, 0px, 0px);
    transition: all 0s ease 0s;
    width: 7596px;
  }
}

.card-item {
  width: 1690px;
  float: left;
}
.card-img {
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
.card-item-wrapper {
  position: relative;
  padding: 120px 150px;
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
    background-image: linear-gradient(234deg, #a15757, #4e7886);
    content: "";
  }
  &:after {
    position: absolute;
    left: 30px;
    top: 50%;
    transform: translateY(-50%) rotate(-90deg);
    content: "FEATURED";
    text-transform: uppercase;
    color: #ffffff;
    letter-spacing: 6.13px;
    font-size: 16px;

    z-index: 1;
  }
  @media (max-width: 1023px) {
  }
}
.feature-content {
  position: relative;
  max-width: 700px;
  color: #ffffff;
  h2 {
    font-size: 40px;
    line-height: 1.3;
    margin-bottom: 20px;
  }
  p {
    font-size: 15px;
  }
}
.post-meta {
  border-left: 3px solid var(--link-color);
  padding-left: 15px;
  margin-bottom: 10px;
  p {
    color: #b1b1b1;
    font-size: 14px;
    font-style: italic;
    margin: 0;
    a {
      color: #b1b1b1;
      &:hover {
        color: var(--link-color);
      }
    }
  }
}
.author-meta {
  color: #b1b1b1;
  font-size: 14px;
  margin-bottom: 30px;
  a {
    color: #b1b1b1;
    &:hover {
      color: var(--link-color);
    }
  }
}

.read-more {
  margin-top: 40px;
  a {
    font-size: 16px;
    color: #ffffff;
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
@media all and (max-width: 767px) {
  .featured-slider {
    .single-slide {
      padding-left: 60px;
      padding-right: 60px;
      &:after {
        left: -30px;
      }
    }
    &.owl-carousel {
      .owl-nav {
        right: 30px;
      }
      .owl-dots {
        right: 30px;
      }
    }
  }
  .feature-content {
    h2 {
      font-size: 36px;
    }
  }
  .author-card-wrapper {
    .single-author-card {
      margin-bottom: 150px;
    }
  }
  .tag-items-wrap {
    .tag-repeater {
      &:nth-child(n) {
        width: 100%;
      }
    }
  }
  .search-results {
    right: -101px;
    width: 100vw;
  }
  .member-banner {
    padding: 80px 0;
  }
  .Membership-plan-wrap {
    padding: 60px 0 20px;
  }
  .ln-card .card-content {
    margin-top: 0;
    padding-top: 30px;
    clip-path: none;
    width: 100%;
  }
}
@media all and (max-width: 575px) {
  .card-container {
    .card-item-wrapper {
      padding: 100px 15px 100px;
      &:after {
        left: auto;
        right: -20px;
        top: 90px;
        transform: translateY(0) rotate(90deg);
        letter-spacing: 3px;
      }
    }
    .card-nav {
      right: 15px;
      bottom: 80px;
    }
    .card-dots {
      right: auto;
      left: 15px;
      bottom: 0;
      flex-direction: row;
      top: auto;
      .card-dot {
        margin-right: 10px;
      }
    }
  }

  .ta-carousel .card-nav {
    width: 80px;
    display: flex;
  }
}
@media (min-width: 1024px) {
  .carousel-card {
    padding-top: 100px;
    &:before {
      position: absolute;
      left: 0;
      top: 0;
      width: 160px;
      height: calc(100% + 16px);
      content: "";
      background-color: #1a2024;
    }
  }
  .card-container {
    padding: 60px 0;
  }
}
</style>
