import Home from "./views/Home.vue";
import CreativeDemo from "./views/CreativeDemo.vue";
import NotFound from "./views/NotFound.vue";

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: "/", component: Home, meta: { title: "Home" } },
  {
    path: "/creative",
    component: CreativeDemo,
    meta: { title: "Creative Demo" },
  },

  { path: "/:path(.*)", component: NotFound },
];
