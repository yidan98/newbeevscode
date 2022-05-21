<template>
  <content-container></content-container>
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
