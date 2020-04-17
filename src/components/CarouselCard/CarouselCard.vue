<template>
  <div class="carousel">
    <div class="carousel-container">
      <div class="carousel-stage" :style="{ width: screenWidth }">
        <swiper :options="swiperOption">
          <swiper-slide
            class="swiper-item"
            v-for="item of swiperList"
            :key="item.id"
          >
            <carousel-item
              v-for="(article, index) in articles"
              :key="index"
              :article="article"
            ></carousel-item>
          </swiper-slide>
        </swiper>
        <div class="carousel-dots swiper-pagination" slot="pagination"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import CarouselItem from "@/components/CarouselCard/CarouselItem.vue";
import defaultCover from "@/assets/image/defaultcover.jpg";
import "swiper/css/swiper.css";
export default {
  components: {
    Swiper,
    SwiperSlide,
    CarouselItem
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
        speed: 2000,
        observer: true,
        observeSlideChildren: true
      },
      //三张轮播，使用变量循环
      swiperList: [1],
      articles: [
        {
          id: 1,
          authorId: 1,
          author: {
            authorId: 1,
            authorName: "fxtahe"
          },
          title: "Ehcahce使用",
          excerpt:
            "Ehcache 是一个开源的、基于标准的，健壮、可靠、快速、简单、轻量级的java分布式缓存，支持与其他框架的集成，是Hibernate默认的CacheProvider。同时也实现了JSR107的规范，是Jcache的一种实现。 Ehcache 目前提供四层模型，支持四种级别：...",
          content: null,
          markdown: null,
          likes: null,
          views: null,
          createDate: "2020-04-15T15:22:53",
          updateDate: null,
          state: 2,
          categoryId: 1,
          tags: [
            {
              id: 1,
              tagName: "ehcache",
              useCount: 1
            }
          ],
          category: {
            id: 1,
            categoryName: "java"
          }
        }
      ]
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
