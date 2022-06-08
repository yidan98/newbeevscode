<template>
  <select
    id="zv-cqa-select-sort"
    class="zv-select"
    name="sort"
    v-on:change="qaSort"
  >
    <option value="total_yes">トップ評価</option>
    <option value="created_at" selected="">新しい順</option>
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
<script setup>
import { useStore } from "../../store/index";
const store = useStore();

const qaSort = (e) => store.commit("qaSort", e.target.value);
</script>
<style></style>
