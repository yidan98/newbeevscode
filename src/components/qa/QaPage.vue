<template>
  <div id="pageQa">
    <div class="zv-cqa-step">
      <div class="zv-cqa-step-link">
        <span>全{{ totalCount }}件</span>

        <span> ページ1/{{ pagebehind }}</span>
      </div>
      <select id="zv-cqa-select-sort" class="zv-select" name="sort">
        <option value="total_yes">トップ評価</option>
        <option value="created_at" selected="">新しい順</option>
      </select>
    </div>
  </div>
</template>
<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
const route = useRoute();
const goodsId = route.params.goodsId;
const store = useStore();
onMounted(() => {
  store.dispatch("setGoodsQa", goodsId);
});

let totalCount = computed(() => store.getters.getGoodsQa.length);

let pagebehind = Math.ceil(totalCount.value / 3);
console.log("pagebehind", pagebehind);
</script>
<style>
#pageQa .zv-cqa-step-link {
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 20px;
  display: inline-block;
  padding-bottom: 5px;
}
</style>
