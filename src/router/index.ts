import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/HomePage.vue";
import DetailPage from "../pages/DetailPage.vue";
import CartPage from "../pages/CartPage.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/goods/detail/:goodsId", name: "detail", component: DetailPage },
  { path: "/cart/:userId", name: "cart", component: CartPage },
];

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  //   history: createWebHashHistory(),
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
});

export default router;
