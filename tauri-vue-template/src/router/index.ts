import { App } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", name: "root", component: () => import("@/views/Home.vue") },
  { path: "/setting", name: "setting", component: () => import("@/views/setting/Setting.vue") },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export async function setupRouter(app: App) {
  app.use(router);
  await router.isReady();
}
