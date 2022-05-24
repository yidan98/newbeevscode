<template>
  <div>
    <router-view></router-view>
    <!-- <router-link to="/">Home</router-link>|
    <router-link to="/newGoods">NewGoods</router-link> -->
  </div>
</template>

<script>
// import GoodsLink from "./components/GoodsLink";
// import GoodsList from "./components/GoodsList";

export default {
  data() {
    return {
      modelValue: "abc",
    };
  },
  name: "App",
  components: {},
};
</script>

<style></style>
