<template>
  <div class="px-4 overflow-hidden">
    <div ref="sliderContainer" class="swiper !overflow-visible">
      <div class="swiper-wrapper">
        <Slide
          v-for="index in 6"
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
      slidesPerView: 1,
      grabCursor: true,

      effect: "creative",
      creativeEffect: {
        prev: {
          shadow: true,
          translate: ["-20%", 0, -200],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      },
    });
  },
};
</script>

<style scoped></style>
