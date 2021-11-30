<template>
  <div class="overflow-hidden">
    <div ref="sliderContainer" class="swiper !overflow-visible">
      <div class="swiper-wrapper">
        <Slide />
        <Slide />
        <Slide />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log("refs", this.$refs);
    const swiper = new Swiper(this.$refs.sliderContainer, {
      slidesPerView: 1.1,
      spaceBetween: 10,
      grabCursor: true,
      effect: "creative",
      creativeEffect: {
        prev: {
          shadow: true,
          translate: ["-20%", 0, -1],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      },
    });
    console.log("swiper:", swiper);
  },
};
</script>

<style scoped></style>
