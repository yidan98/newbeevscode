<template>
  <div>
    <div class="top">
      <router-link id="gotoHome" to="/">Go to Home</router-link>
      <router-link to="/cart">cart</router-link>
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
</style>
