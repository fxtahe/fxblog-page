<template>
  <carousel-card> </carousel-card>
</template>
<script>
import CarouselCard from "@/components/CarouselCard/CarouselCard.vue";

export default {
  components: {
    CarouselCard
  },
  data() {
    return {
      swiperList: [1, 2, 3]
    };
  }
};
</script>
<style lang="scss" scope></style>
