<template>
  <content-container></content-container>
  <div>
    <router-view></router-view>
    <router-link to="/">Home</router-link>|
    <router-link to="/newGoods">NewGoods</router-link>
  </div>
</template>

<script>
// import GoodsLink from "./components/GoodsLink";
// import GoodsList from "./components/GoodsList";
import ContentContainer from "./pages/HomePage.vue";

export default {
  data() {
    return {
      modelValue: "abc",
    };
  },
  name: "App",
  components: {
    ContentContainer,
  },
};
</script>

<style></style>
