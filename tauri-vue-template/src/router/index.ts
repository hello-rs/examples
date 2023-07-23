import { App } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", name: "root", component: () => import("@/views/Home.vue") },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export async function setupRouter(app: App) {
  app.use(router);
  await router.isReady();
}
