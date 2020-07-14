<template>
  <div class="carousel-item">
    <div
      class="carousel-item-wrapper"
      style="background-image:url(https://images.unsplash.com/photo-1587166366445-b2bbdf54b2b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80)"
    ></div>
  </div>
  <!--  -->
</template>
<script>
import defaultCover from "@/assets/image/defaultcover.jpg";
export default {
  props: {
    article: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    articleCover() {
      return this.article.cover ? this.article.cover : defaultCover;
    }
  }
};
</script>
<style lang="scss" scoped>
.carousel-item {
  width: 100%;
  float: left;
}
.carousel-item-wrapper {
  position: relative;
  //padding: 120px 150px;
  height: 600px;
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
      height: 400px;
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
