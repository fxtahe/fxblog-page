<template>
  <div class="carousel">
    <div class="carousel-container">
      <div class="carousel-stage" style="width:100%">
        <swiper :options="swiperOption">
          <swiper-slide class="swiper-item" v-for="item of articles" :key="item.id">
            <carousel-item :article="item"></carousel-item>
          </swiper-slide>
        </swiper>
        <div class="carousel-dots swiper-pagination" slot="pagination"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import defaultCover from "@/assets/image/defaultcover.jpg";
import CarouselItem from "@/components/CarouselCard/CarouselItem.vue";
import "swiper/css/swiper.css";
export default {
  components: {
    Swiper,
    SwiperSlide,
    CarouselItem
  },
  props: {
    articles: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      screenWidth: document.body.clientWidth,
      swiperOption: {
        centeredSlides: true,
        autoplay: {
          delay: 10000000,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination",
          bulletClass: "carousel-dot",
          clickable: true,
          renderBullet(index) {
            return `<button class="carousel-dot">0${index + 1}</button>`;
          }
        },
        //循环
        loop: true,
        //滑动速度
        speed: 2000
      }
    };
  },
  methods: {
    getWidth() {
      this.screenWidth = window.innerWidth + "px";
    }
  },
  computed: {
    articleCover() {
      return defaultCover;
    }
  },
  created() {
    window.addEventListener("resize", this.getWidth);
    this.getWidth();
  },
  mounted() {},
  destroyed() {
    window.removeEventListener("resize", this.getWidth);
  }
};
</script>
<style lang="scss" scope>
.carousel {
  padding-left: calc((100% - 1650px) / 2 + 15px);
  position: relative;
  @media (min-width: 1024px) {
    @include container;
  }
}
.carousel-container {
  .carousel-dots {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 16%;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;

    .carousel-dot {
      background: 0 0;
      border: none;
      padding: 0 !important;
      outline: none;
      font: inherit;
      color: #777;
      font-size: 20px;
      border-bottom: 1px solid #777;
      margin: 5px 0;
      &.swiper-pagination-bullet-active {
        color: var(--link-color);
        border-color: var(--theme-active);
      }
    }
  }
}
.swiper-container {
  z-index: 0;
}

@media all and (max-width: 767px) {
  .carousel-container {
    .carousel-dots {
      right: 30px;
    }
  }
}
@media all and (max-width: 575px) {
  .carousel-container {
    .carousel-dots {
      display: none;
    }
  }
}
</style>
