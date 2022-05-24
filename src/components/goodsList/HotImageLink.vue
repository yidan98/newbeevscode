<template>
  <router-link :to="link">
    <img :src="imgSrc" :alt="name" />
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
img {
  display: flex;
  flex-direction: row;
  height: 190px;
}
</style>
