<template>
  <div class="overflow-hidden">
    <div ref="sliderContainer" class="swiper !overflow-visible">
      <div class="swiper-wrapper">
        <Slide
          v-for="index in 5"
          :index="((index - 1) % 3) + 1"
          :key="`slider-${index}`"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const swiper = new Swiper(this.$refs.sliderContainer, {
      slidesPerView: 1.1,
      spaceBetween: 10,
    });
  },
};
</script>

<style scoped></style>
