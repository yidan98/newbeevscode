<template>
  <div>
    <div class="top">
      <div>
        <router-link id="gotoHome" to="/">Go to Home</router-link>
        <br />
        <router-link id="gotoCart" to="/cart">Go to cart</router-link>
      </div>
      <h1>商品详情页面</h1>
      <p>goodsId:{{ goodsId }}</p>
    </div>

    <div style="display: flex; justify-content: center">
      <size-container></size-container>
    </div>

    <div>
      <qa-container></qa-container>
    </div>
    <review-container></review-container>
  </div>
  <p class="g-back-to-top bt">
    <a href="#" data-scroll="" class="zd"
      ><span
        class="material-symbols-outlined"
        style="font-size: 1.5rem; margin-bottom: 2px; color: #fff"
      >
        keyboard_arrow_up
      </span>
    </a>
  </p>
</template>

<script setup lang="ts">
import ReviewContainer from "../components/review/ReviewContainer.vue";
import QaContainer from "../components/qa/QaContainer.vue";
import SizeContainer from "../components/size/SizeContainer.vue";

import { useRoute } from "vue-router";
const route = useRoute();
const goodsId = route.params.goodsId;
</script>

<style scoped>
a {
  text-decoration: none;
}
/* .g-clip {
  font-size: 1.5rem;
  margin-bottom: 2px;
  color: #fff;
} */
.g-browser-scrollup .g-back-to-top,
.g-browser-scrolldown .g-back-to-top {
  visibility: visible;
  animation: g-back-to-top 1s both;
}
.g-back-to-top {
  position: fixed;
  z-index: 9;
  right: 200px;
  bottom: 20px;
}
.g-back-to-top a {
  display: flex;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: rgba(128, 128, 128, 0.7);
  box-shadow: 0 0 4px 2px #fff;
  align-items: center;
  justify-content: center;
}
.g-back-to-top a {
  width: 50px;
  height: 50px;
}
h1 {
  font-family: fangsong;
}
.top {
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  background: rgba(0, 0, 1, 0.03);
  z-index: 2;
}
#gotoHome {
  font-size: x-large;
  top: 20px;
  position: relative;
  color: cadetblue;
}
#gotoCart {
  font-size: x-large;
  top: 20px;
  position: relative;
  color: cadetblue;
}
</style>
