import { createApp } from "vue";
import "./tailwind.css";
import App from "./App.vue";
import { routes } from "./routes.js";
import { createRouter, createWebHistory } from "vue-router";

class Observer {
  constructor(options = {}) {
    this.observer = new IntersectionObserver((elements) => {
      elements.forEach((entry) => {
        const data = entry.target.__ObserveData__;
        const { visible, hidden } = data;
        if (entry.isIntersecting) {
          visible?.();
        } else if (data.intersecting) {
          hidden?.();
        }
        data.intersecting = entry.isIntersecting;
      });
    }, options);
  }
  observe(el, { visible, hidden } = {}) {
    el.__ObserveData__ = { visible, hidden, intersecting: false };
    this.observer?.observe(el);
  }
  unobserve(el) {
    this.observer?.unobserve(el);
  }
}

const observer = new Observer({
  threshold: 0.5,
});

const app = createApp(App);

app.directive("intersect-video", {
  mounted(el, binding) {
    observer.observe(el, {
      visible: () => {
        el?.play?.();
      },
      hidden: () => el?.pause?.(),
    });
  },
  unmounted(el) {
    observer.unobserve(el);
  },
});

const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(router);
app.mount("#app");
