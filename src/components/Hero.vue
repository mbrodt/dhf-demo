<template>
  <div class="relative px-4 pt-20 pb-24 bg-primary">
    <div class="relative">
      <div
        data-animation-wrapper
        class="
          grid
          wrapper
          font-header
          absolute
          z-10
          text-7xl
          leading-[0.8em]
          text-white
          -top-9
          max-w-[100px]
        "
      >
        <div class="outline">Sammen for</div>
        <div data-animation-fill-one class="fill">Sammen for</div>
      </div>
      <div class="relative pl-4 pr-2">
        <div class="aspect-w-9 aspect-h-14">
          <img ref="heroImage0" class="w-full h-full" src="/hero.png" alt="" />
          <img
            ref="heroImage1"
            class="w-full h-full opacity-0"
            src="/team.png"
            alt=""
          />
          <img
            ref="heroImage2"
            class="w-full h-full opacity-0"
            src="/denmark.png"
            alt=""
          />
        </div>
      </div>
      <div
        data-animation-wrapper
        class="
          grid
          wrapper
          absolute
          z-10
          text-white
          break-words
          text-7xl
          leading-[0.8em]
          font-header
          left-20
          -bottom-12
        "
      >
        <div class="outline" ref="outlineTogether">
          <span>Fælles</span>
          <span class="block">— skabet</span>
        </div>
        <div class="hidden outline" ref="outlineDenmark">
          <span>Hele</span>
          <span class="block">Danmark</span>
        </div>
        <div class="hidden outline" ref="outlineTeam">
          <span>Danmarks</span>
          <span class="block">Landshold</span>
        </div>
        <div data-animation-fill-two class="fill">
          <div ref="fillTogether">
            <span>Fælles</span>
            <span class="block">— skabet</span>
          </div>
          <div class="hidden" ref="fillDenmark">
            <span>Hele</span>
            <span class="block">Danmark</span>
          </div>
          <div class="hidden" ref="fillTeam">
            <span>Danmarks</span>
            <span class="block">landshold</span>
          </div>
        </div>
      </div>
    </div>
    <!-- <button class="mt-24" @click="animateText">Toggle header animation</button> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      headerIndex: 0,
    };
  },
  methods: {
    animateText() {
      const images = [
        this.$refs.heroImage0,
        this.$refs.heroImage1,
        this.$refs.heroImage2,
      ];

      const tl = gsap.timeline();

      const startingPosition = {
        x: -40,
        opacity: 0,
      };
      const optionsOut = {
        duration: 0.8,
        ease: "power3.inOut",
        opacity: 0,
        x: 40,
        display: "none",
      };
      const optionsIn = {
        duration: 0.8,
        ease: "power3.inOut",
        opacity: 1,
        x: 0,
        display: "block",
      };

      const outlineRefs = [
        this.$refs.outlineTogether,
        this.$refs.outlineDenmark,
        this.$refs.outlineTeam,
      ];
      const fillRefs = [
        this.$refs.fillTogether,
        this.$refs.fillDenmark,
        this.$refs.fillTeam,
      ];

      let next = this.headerIndex + 1;

      if (!outlineRefs[next]) {
        next = 0;
      }
      tl.to(outlineRefs[this.headerIndex], optionsOut, "<");
      tl.to(fillRefs[this.headerIndex], optionsOut, "<");

      tl.to(images[this.headerIndex], {
        duration: 0.5,
        opacity: 0,
        x: 20,
      });
      tl.fromTo(
        images[next],
        {
          x: -20,
        },
        {
          duration: 0.5,
          opacity: 1,
          x: 0,
        },
        "<"
      );

      tl.fromTo(outlineRefs[next], startingPosition, optionsIn, "<");
      tl.fromTo(fillRefs[next], startingPosition, optionsIn, "<");
      this.headerIndex = next;
    },
  },
  mounted() {
    setInterval(() => {
      this.animateText();
    }, 7500);
    const fillOne = document.querySelector("[data-animation-fill-one]");
    const fillTwo = document.querySelector("[data-animation-fill-two]");

    const outlined = "inset(-0.1em 100% -0.1em 0%)";
    const filled = "inset(-0.1em 0% -0.1em 0%)";

    gsap.set(fillOne, { clipPath: outlined });
    gsap.set(fillTwo, { clipPath: filled });

    const wipeDuration = 0.5;

    const wipeOutline = {
      clipPath: "inset(-0.1em 0% -0.1em 100%)",
      duration: wipeDuration,
      ease: "power4.out",
    };
    const wipeFill = {
      clipPath: filled,
      duration: wipeDuration,
      ease: "power4.out",
    };

    const tl = gsap.timeline({
      delay: 3,
      repeatDelay: 5,
      repeat: -1,
    });

    tl.fromTo(fillOne, { clipPath: outlined }, wipeFill);
    tl.fromTo(
      fillTwo,
      { clipPath: filled },
      wipeOutline,
      "<" + wipeDuration / 3
    );
    tl.fromTo(fillOne, { clipPath: filled }, wipeOutline, "<3");
    tl.fromTo(
      fillTwo,
      { clipPath: outlined },
      wipeFill,
      "<" + wipeDuration / 3
    );
  },
};
</script>

<style scoped>
.outline {
  z-index: 0;
  color: rgba(255, 255, 255, 0);
  -webkit-text-stroke: 1px white;
  -webkit-background-clip: text;
}

.wrapper {
  width: fit-content;
}

.wrapper .fill {
  z-index: 100;
  color: white;
}

.outline,
.fill {
  grid-column: 1;
  grid-row: 1;
}
</style>
