import { createRouter, createWebHistory } from "vue-router";

// 1. 定义路由组件.
const Home = () => import("./views/Home.vue");

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
const routes = [{ path: "/", component: Home }];

// 万能路由所有未定义的 path 将显示此组件
routes.push({ path: "/:pathMatch(.*)", component: Home });

// 3. 创建路由实例并传递 `routes` 配置
export const router = createRouter({
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
});
