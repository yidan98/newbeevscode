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
import CeshiPost from "../components/account/CeShiPost.vue";
import AccountSuccess from "../components/account/AccountSuccess.vue";
import AccountPayment from "../components/account/AccountPayment.vue";
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
  {
    path: "/account/ceshiPost",
    name: "accountCeshiPost",
    component: CeshiPost,
  },
  {
    path: "/account/payment",
    name: "accountPayment",
    component: AccountPayment,
  },
];

const router = createRouter({
  // 4. ??????????????? history ???????????????????????????????????????????????????????????? hash ?????????
  //   history: createWebHashHistory(),
  history: createWebHistory(),
  routes, // `routes: routes` ?????????
});

export default router;
