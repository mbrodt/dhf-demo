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
          z-50
          text-7xl
          leading-[0.8em]
          text-white
          -top-9
          max-w-[100px]
        "
      >
        <div class="outline">Sammen for</div>
        <div data-animation-fill-one ref="animationfill1" class="fill">
          Sammen for
        </div>
      </div>
      <div class="relative pl-4 pr-2">
        <div class="aspect-w-9 aspect-h-14">
          <div
            class="z-30 w-full h-full bg-no-repeat bg-cover"
            style="background-image: url('/hero.png')"
          >
            <div ref="wipe1" class="w-full h-full bg-primary"></div>
          </div>
          <div
            class="z-20 w-full h-full bg-no-repeat bg-cover"
            style="background-image: url('/team.png')"
          >
            <div ref="wipe2" class="w-full h-full bg-primary"></div>
          </div>
          <div
            class="z-10 w-full h-full bg-no-repeat bg-cover"
            style="background-image: url('/denmark.png')"
          >
            <div ref="wipe3" class="w-full h-full bg-primary"></div>
          </div>
        </div>
      </div>
      <div
        data-animation-wrapper
        class="
          grid
          wrapper
          absolute
          text-white
          break-words
          text-7xl
          leading-[0.8em]
          font-header
          left-20
          -bottom-12
          z-50
        "
      >
        <div class="outline" ref="outline1">
          <span>Fælles</span>
          <span class="block">— skabet</span>
        </div>
        <div class="hidden outline" ref="outline2">
          <span>Hele</span>
          <span class="block">Danmark</span>
        </div>
        <div class="hidden outline" ref="outline3">
          <span>Danmarks</span>
          <span class="block">Landshold</span>
        </div>
        <div data-animation-fill-two ref="animationfill2" class="fill">
          <div ref="fill1">
            <span>Fælles</span>
            <span class="block">— skabet</span>
          </div>
          <div class="hidden" ref="fill2">
            <span>Hele</span>
            <span class="block">Danmark</span>
          </div>
          <div class="hidden" ref="fill3">
            <span>Danmarks</span>
            <span class="block">landshold</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const timelineTest = gsap.timeline({ paused: true, repeat: -1 });
export default {
  data() {
    return {
      headerIndex: 0,
    };
  },
  methods: {
    animateWipe(image, outline, fill) {
      const fillTwo = this.$refs.animationfill2;

      const outlined = "inset(-0.1em 100% -0.1em 0%)";
      const filled = "inset(-0.1em 0% -0.1em 0%)";

      const wipeDuration = 0.5;

      const wipeFill = {
        clipPath: filled,
        duration: wipeDuration,
        ease: "power4.out",
      };

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

      const parent = image.parentElement;
      timelineTest.set(parent, {
        autoAlpha: 1,
      });
      timelineTest.to(image, {
        x: 320,
        duration: 1,
        width: "0",
        ease: "power3.inOut",
      });

      timelineTest.set(fillTwo, { clipPath: outlined });

      timelineTest.fromTo(outline, startingPosition, optionsIn, "<");
      timelineTest.fromTo(fill, startingPosition, optionsIn, "<");

      timelineTest.to(fillTwo, wipeFill);

      timelineTest.set(image, {
        x: 0,
      });
      timelineTest.to(
        image,
        {
          duration: 1,
          width: "100%",
          ease: "power3.inOut",
        },
        "+=1"
      );
      timelineTest.to(outline, optionsOut, "<");
      timelineTest.to(fill, optionsOut, "<");
      timelineTest.set(parent, {
        autoAlpha: 0,
      });
    },
  },
  mounted() {
    this.animateWipe(this.$refs.wipe1, this.$refs.outline1, this.$refs.fill1);
    this.animateWipe(this.$refs.wipe2, this.$refs.outline2, this.$refs.fill2);
    this.animateWipe(this.$refs.wipe3, this.$refs.outline3, this.$refs.fill3);
    const fillOne = this.$refs.animationfill1;

    const outlined = "inset(-0.1em 100% -0.1em 0%)";
    const filled = "inset(-0.1em 0% -0.1em 0%)";
    gsap.set(fillOne, { clipPath: outlined });

    const wipeDuration = 0.5;

    const wipeFill = {
      clipPath: filled,
      duration: wipeDuration,
      delay: 1,
      ease: "power4.out",
    };

    gsap.to(fillOne, wipeFill);
    timelineTest.play();
  },
};
</script>

<style scoped>
.rect-cover {
  position: absolute;
  clip: rect(0px 400px 600px 0px);
  background: url(https://www.greensock.com/_img/cssplugin_css3/love_100x100.jpg);
}

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
