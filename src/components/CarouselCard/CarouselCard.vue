<template>
  <div class="carousel">
    <div class="carousel-container">
      <div class="carousel-stage">
        <swiper :options="swiperOption">
          <swiper-slide
            class="swiper-item"
            v-for="item of swiperList"
            :key="item.id"
          >
            <carousel-item></carousel-item>
          </swiper-slide>
        </swiper>
      </div>
      <div class="carousel-dots swiper-pagination" slot="pagination">
        <button role="button" class="carousel-dot active">01</button>
        <button role="button" class="carousel-dot">02</button>
        <button role="button" class="carousel-dot">03</button>
        <button role="button" class="carousel-dot">04</button>
        <button role="button" class="carousel-dot">05</button>
      </div>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import CarouselItem from "@/components/CarouselCard/CarouselItem.vue";
import "swiper/css/swiper.css";
export default {
  components: {
    Swiper,
    SwiperSlide,
    CarouselItem
    //CarouselItem
  },
  data() {
    return {
      screenWidth: "2048px", //屏幕宽度
      swiperOption: {
        centeredSlides: true,
        autoplay: {
          delay: 5000,
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
.carousel {
  padding-left: calc((100% - 1650px) / 2 + 15px);
  position: relative;
  @media (min-width: 1024px) {
  }
}
.carousel-container {
  position: relative;

  .carousel-dots {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 50px;
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

// .carousel-stage {
//   height: 572px;
//   transform: translate3d(0px, 0px, 0px);
//   transition: all 0s ease 0s;
// }
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
      right: auto;
      left: 15px;
      bottom: 0;
      flex-direction: row;
      top: auto;
      .carousel-dot {
        margin-right: 10px;
      }
    }
  }
}
@media (min-width: 1024px) {
  .carousel {
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
  .carousel-container {
    padding: 60px 0;
  }
}
</style>
