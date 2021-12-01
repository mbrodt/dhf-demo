<template>
  <div
    class="p-1 border-2 border-gray-100 swiper-slide"
    ref="slide"
    @click="animate"
  >
    <div class="aspect-w-1 aspect-h-1" @click="showPoster = !showPoster">
      <!-- <img
        class="object-cover w-full h-full transition-opacity duration-300 ease-in-out "
        :class="`${showPoster ? 'opacity-100' : 'opacity-0'}`"
        src="/slide1.png"
        alt=""
      /> -->
      <video
        v-intersect-video
        playsinline
        muted
        loop
        class="object-cover w-full h-full"
        :src="`/example_video_${index}.mp4`"
      ></video>
    </div>
    <div class="flex mt-2">
      <img class="mr-2" src="/position.png" alt="" />
      <div class="grid w-full grid-cols-2">
        <div class="flex items-center">
          <p class="mr-2 text-[10px] uppercase">Position</p>
          <span class="uppercase text-primary font-header">Midt</span>
        </div>
        <div class="flex items-center">
          <p class="mr-2 text-[10px] uppercase">Spiltype</p>
          <span class="uppercase text-primary font-header">Begynder</span>
        </div>
        <div class="flex items-center">
          <p class="mr-2 text-[10px] uppercase">Varighed</p>
          <span class="uppercase text-primary font-header">5 min.</span>
        </div>
        <div class="flex items-center">
          <p class="mr-2 text-[10px] uppercase">Niveau</p>
          <span class="uppercase text-primary font-header">Begynder</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      showPoster: true,
    };
  },
  methods: {
    animate() {
      console.log("animate");
      // gsap.to(this.$refs.slide, {
      //   duration: 1,
      //   rotate: 90,

      //   ease: "power3.inOut",
      // });
    },
  },
};
</script>

<style scoped>
.swiper-slide {
  background-color: white;
}
</style>
