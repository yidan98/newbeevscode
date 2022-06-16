<template>
  <div class="g-layout-cart" style="width: 1200px; margin-left: 30px">
    <div class="g-layout_head">
      <h1>カート</h1>
    </div>
    <div class="cartAndContainer" style="display: flex">
      <div style="width: 1000px">
        <cart-inner v-for="c in cart" :key="c" v-bind="c"></cart-inner>
      </div>
      <div>
        <cart-sticky></cart-sticky>
      </div>
    </div>
  </div>
</template>
<script setup>
import CartInner from "./CartInner.vue";
import CartSticky from "./CartSticky.vue";
import { computed, onMounted } from "vue";
import { useStore } from "../../store/index";
import { useRoute } from "vue-router";

const route = useRoute();
const userId = route.params.userId;
const store = useStore();
onMounted(() => {
  store.dispatch("setCart", userId);
});
const cart = computed(() => store.getters.getCart);
</script>
<style scoped>
.g-btn-em,
.g-lg-btn-em {
  color: #009e96;
}
.g-btn,
.g-lg-btn {
  font-size: 1.6rem;
  line-height: 1.5;
  font-weight: normal;
  display: inline-flex;
  padding: 0;
  transition: background-color 0.2s;
  vertical-align: middle;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  background-color: #fff;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin-left: 55px;
  text-decoration: none;
  color: #009e96;
}
.g-price,
.g-lg-price {
  font-family: "Helvetica Neue", Arial, sans-serif;
  font-size: 1.8rem;
  font-weight: bold;
  color: #000;
}
.g-media .g-media_h,
.g-lg-media .g-media_h {
  font-size: 1.6rem;
  line-height: 1.5;
}

.g-layout-cart,
.g-layout-sidebar,
.g-layout-detail,
.g-layout-category,
.g-layout-cart,
.g-layout-purchase,
.g-layout_sidebar[data-sticky="true"],
.g-layout_sidebar [data-sticky="true"] {
  position: -webkit-sticky;
  position: sticky;
  top: 40px;
}
.g-pane-gray,
.g-lg-pane-gray {
  background-color: #f7f7f7;
}
.p-payment_total {
  font-weight: bold;
  color: #eb6157;
}
.p-payment dt {
  float: left;
  clear: left;
  -webkit-font-feature-settings: "palt";
  font-feature-settings: "palt";
}
payment_itemized dd {
  padding: 9px 0 6px 0;
  border-top: 1px solid #dbdbdb;
}
.g-btn > span,
.g-lg-btn > span {
  display: flex;
  min-height: 46px;
  padding: 5px 18px 5px 14px;
  transform: translateX(5px);
  flex: 1 1 auto;
  align-items: center;
  /* justify-content: center; */
  height: 100%;
}
cancel {
  color: #fff;
}
#g-fw {
  background-color: #eb6157;
  border-color: #eb6157;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  /* padding: 5px 2px; */
  margin-left: 140px;
}
</style>
