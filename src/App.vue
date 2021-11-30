<template>
  <main class="w-screen h-screen">
    <div class="flex justify-between p-4">
      <router-link to="/" class="">Demo</router-link>
      <router-link to="/creative" class="">View creative effects</router-link>
    </div>
    <router-view />
  </main>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
  mounted() {
    setInterval(() => {
      this.counter += 1;
    }, 1000);
  },
};
</script>
