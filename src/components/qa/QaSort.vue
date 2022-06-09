<template>
  <select
    id="zv-cqa-select-sort"
    class="zv-select"
    name="sort"
    v-on:change="qaSort"
  >
    <option value="created_at">新しい順</option>
    <option value="total_yes">トップ評価</option>
  </select>
</template>
<!-- <script>
export default {
  methods: {
    foo: function (e) {
      this.$store.commit = ("qaSort", e.target.value);
    },
  },
};
</script> -->
<script setup lang="ts">
import { useStore } from "../../store/index";
const store = useStore();

// const qaSort = (e) => store.commit("qaSort", e.target.value);
const qaSort = (e: Event): void => {
  if (e.target instanceof HTMLSelectElement) {
    store.commit("qaSort", e.target.value);
  }
};
</script>
<style></style>
