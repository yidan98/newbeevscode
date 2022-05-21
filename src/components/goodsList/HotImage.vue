<template>
  <div class="hot-image">
    <hotImageLink v-bind="goods"></hotImageLink>
  </div>
</template>
<script>
import HotImageLink from "./HotImageLink.vue";
export default {
  components: { HotImageLink },
  props: {
    goods: Object,
  },
};
</script>
<style>
.hot-image {
  opacity: 0.75;
}

.hot-image:hover {
  opacity: 1;
}
</style>
