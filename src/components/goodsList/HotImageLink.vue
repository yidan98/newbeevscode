<template>
  <router-link :to="link">
    <img class="hot" :src="imgSrc" :alt="name" />
  </router-link>
</template>

<script>
export default {
  props: {
    link: String,
    imgSrc: String,
    name: String,
  },
  inheritAttrs: false,
};
</script>

<style>
.hot {
  display: flex;
  flex-direction: row;
  height: 190px;
}
</style>
