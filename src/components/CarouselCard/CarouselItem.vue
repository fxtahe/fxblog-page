<template>
  <div class="card-item" :style="{ width: screenWidth }">
    <div
      class="card-item-wrapper"
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
<style lang="scss" scoped></style>
