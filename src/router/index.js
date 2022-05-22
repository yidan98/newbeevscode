import { createRouter, createWebHashHistory } from "vue-router";
// import { createWebHistory } from 'vue-router'

// const history = createWebHistory()
const history = createWebHashHistory(); // 采用这个路径上有#

const router = createRouter({
  history, // 路由模式
  routes: [
    {
      // 订单列表
      path: "/",
      name: "orderList",
      component: () => import("@/views/orderList/orderList"),
    },
    {
      // 拖拽
      path: "/dragAndDrop", // 这是访问路径
      name: "dragAndDrop",
      component: () => import("@/views/businessTurnOrder/dragAndDrop"), // 路由的源文件
    },
  ],
});
export default router;
