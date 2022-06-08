<template>
  <div id="banner">
    <my-item></my-item>
    <swiper-container></swiper-container>
  </div>
</template>
<script lang="ts">
import MyItem from "./MyItem.vue";
import SwiperContainer from "./SwiperContainer.vue";
export default {
  components: {
    MyItem,
    SwiperContainer,
  },
};
</script>
<style>
#banner {
  width: 1226px;
  display: flex;
  justify-content: space-between;
}
</style>
