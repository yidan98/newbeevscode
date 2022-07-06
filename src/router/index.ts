import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/HomePage.vue";
import DetailPage from "../pages/DetailPage.vue";
import CartPage from "../pages/CartPage.vue";
import MyPage from "../pages/MyPage.vue";
import AccountHistory from "../pages/AccountHistory.vue";
import AccountLove from "../pages/AccountLove.vue";
import OrderDetail from "../components/account/OrderDetail.vue";
import AccountLogin from "../components/account/AccountLogin.vue";
import AccountProfile from "../components/account/AccountProfile.vue";
import AccountProfileUpdate from "../components/account/AccountProfileUpdate.vue";
import AccountProfileEdit from "../components/account/AccountProfileEdit.vue";
import Ceshi from "../components/account/CeShi.vue";
import AccountSuccess from "../components/account/AccountSuccess.vue";
const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/goods/detail/:goodsId", name: "detail", component: DetailPage },
  { path: "/cart", name: "cart", component: CartPage },
  { path: "/account", name: "account", component: MyPage },
  { path: "/account/history", name: "history", component: AccountHistory },
  { path: "/account/love/:userId", name: "love", component: AccountLove },
  { path: "/order/detail", name: "orderDetail", component: OrderDetail },
  { path: "/account/login", name: "accountLogin", component: AccountLogin },
  {
    path: "/account/profile",
    name: "accountProfile",
    component: AccountProfile,
  },
  {
    path: "/account/profile/update",
    name: "accountProfileUpdate",
    component: AccountProfileUpdate,
  },
  {
    path: "/account/profile/edit",
    name: "accountProfileEdit",
    component: AccountProfileEdit,
  },
  { path: "/account/ceshi", name: "accountCeshi", component: Ceshi },
  {
    path: "/account/success",
    name: "accountSuccess",
    component: AccountSuccess,
  },
];

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  //   history: createWebHashHistory(),
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
});

export default router;
