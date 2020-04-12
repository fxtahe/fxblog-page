<template>
  <div class="carousel-item" :style="{ width: screenWidth }">
    <div
      class="carousel-item-wrapper"
      style="background-image: url(http://delas.electronthemes-ghost.com/content/images/2019/03/jakob-owens.jpg);"
    >
      <article class="feature-content">
        <div class="post-meta">
          <p><a href="/tag/photography/">Photography</a></p>
          <p>
            <time class="post-date" datetime="2020-04-11">11 april, 2020</time>
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
            Void bring heaven it blessed the, day appear bearing make which
            signs seas greater him. Gathered creeping. Creature very thing fill
            signs fish a heaven our set Midst.
          </p>
        </div>
        <div class="read-more">
          <a href="/">CONTINUE READEING</a>
        </div>
      </article>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      screenWidth: "2048px", //屏幕宽度
      swiperOption: {
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      }
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
<style lang="scss" scoped>
.carousel-item {
  width: 1690px;
  float: left;
}
.carousel-item-wrapper {
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
    //background-image: linear-gradient(234deg, #a15757, #4e7886);
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
  .carousel-item {
    .carousel-item-wrapper {
      padding-left: 60px;
      padding-right: 60px;
      &:after {
        left: -30px;
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
}
</style>
