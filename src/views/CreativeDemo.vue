<template>
  <div class="p-4 overflow-hidden">
    <div class="example">
      <h2 class="text-2xl font-bold font-header">Creative example 1</h2>
      <div class="swiper mySwiper !overflow-visible">
        <div class="swiper-wrapper">
          <Slide
            v-for="index in 6"
            :index="((index - 1) % 3) + 1"
            :key="`slider1-${index}`"
          />
        </div>
      </div>
    </div>
    <div class="example">
      <h2 class="text-2xl font-bold font-header">Creative example 2</h2>
      <div class="swiper mySwiper2 !overflow-visible">
        <div class="swiper-wrapper">
          <Slide
            v-for="index in 6"
            :index="((index - 1) % 3) + 1"
            :key="`slider2-${index}`"
          />
        </div>
      </div>
    </div>
    <div class="example">
      <h2 class="text-2xl font-bold font-header">Creative example 3</h2>
      <div class="swiper mySwiper3 !overflow-visible">
        <div class="swiper-wrapper">
          <Slide
            v-for="index in 6"
            :index="((index - 1) % 3) + 1"
            :key="`slider3-${index}`"
          />
        </div>
      </div>
    </div>
    <div class="example">
      <h2 class="text-2xl font-bold font-header">Creative example 4</h2>
      <div class="swiper mySwiper4 !overflow-visible">
        <div class="swiper-wrapper">
          <Slide
            v-for="index in 6"
            :index="((index - 1) % 3) + 1"
            :key="`slider4-${index}`"
          />
        </div>
      </div>
    </div>
    <div class="example">
      <h2 class="text-2xl font-bold font-header">Creative example 5</h2>
      <div class="swiper mySwiper5 !overflow-visible">
        <div class="swiper-wrapper">
          <Slide
            v-for="index in 6"
            :index="((index - 1) % 3) + 1"
            :key="`slider5-${index}`"
          />
        </div>
      </div>
    </div>
    <div class="example">
      <h2 class="text-2xl font-bold font-header">Creative example 6</h2>
      <div class="swiper mySwiper6 !overflow-visible">
        <div class="swiper-wrapper">
          <Slide
            v-for="index in 6"
            :index="((index - 1) % 3) + 1"
            :key="`slider6-${index}`"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const SLIDES_PER_VIEW = 1;
export default {
  mounted() {
    var swiper = new Swiper(".mySwiper", {
      grabCursor: true,
      slidersPerView: SLIDES_PER_VIEW,
      effect: "creative",
      creativeEffect: {
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      },
    });
    var swiper2 = new Swiper(".mySwiper2", {
      grabCursor: true,
      slidersPerView: SLIDES_PER_VIEW,
      effect: "creative",
      creativeEffect: {
        prev: {
          shadow: true,
          translate: ["-120%", 0, -500],
        },
        next: {
          shadow: true,
          translate: ["120%", 0, -500],
        },
      },
    });
    var swiper3 = new Swiper(".mySwiper3", {
      grabCursor: true,
      slidersPerView: SLIDES_PER_VIEW,
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
    var swiper4 = new Swiper(".mySwiper4", {
      grabCursor: true,
      slidersPerView: SLIDES_PER_VIEW,
      effect: "creative",
      creativeEffect: {
        prev: {
          shadow: true,
          translate: [0, 0, -800],
          rotate: [180, 0, 0],
        },
        next: {
          shadow: true,
          translate: [0, 0, -800],
          rotate: [-180, 0, 0],
        },
      },
    });
    var swiper5 = new Swiper(".mySwiper5", {
      grabCursor: true,
      slidersPerView: SLIDES_PER_VIEW,
      effect: "creative",
      creativeEffect: {
        prev: {
          shadow: true,
          translate: ["-125%", 0, -800],
          rotate: [0, 0, -90],
        },
        next: {
          shadow: true,
          translate: ["125%", 0, -800],
          rotate: [0, 0, 90],
        },
      },
    });
    var swiper6 = new Swiper(".mySwiper6", {
      grabCursor: true,
      slidersPerView: SLIDES_PER_VIEW,
      effect: "creative",
      creativeEffect: {
        prev: {
          shadow: true,
          origin: "left center",
          translate: ["-5%", 0, -200],
          rotate: [0, 100, 0],
        },
        next: {
          origin: "right center",
          translate: ["5%", 0, -200],
          rotate: [0, -100, 0],
        },
      },
    });
  },
};
</script>

<style scoped>
.example {
  margin: 100px auto;
}

.swiper-slide {
  background-color: white;
}

/* .swiper-slide:nth-child(1n) {
  background-color: rgb(206, 17, 17);
}

.swiper-slide:nth-child(2n) {
  background-color: rgb(0, 140, 255);
}

.swiper-slide:nth-child(3n) {
  background-color: rgb(10, 184, 111);
}

.swiper-slide:nth-child(4n) {
  background-color: rgb(211, 122, 7);
}

.swiper-slide:nth-child(5n) {
  background-color: rgb(118, 163, 12);
}

.swiper-slide:nth-child(6n) {
  background-color: rgb(180, 10, 47);
}

.swiper-slide:nth-child(7n) {
  background-color: rgb(35, 99, 19);
}

.swiper-slide:nth-child(8n) {
  background-color: rgb(0, 68, 255);
}

.swiper-slide:nth-child(9n) {
  background-color: rgb(218, 12, 218);
}

.swiper-slide:nth-child(10n) {
  background-color: rgb(54, 94, 77);
} */
</style>
