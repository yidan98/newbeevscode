<template>
  <span id="pageQa">
    <div class="zv-cqa-step">
      <div class="zv-cqa-step-link">
        <span id="it" @click="previousPage" v-if="pageNo !== 1">&lt;</span>
        <span>
          <span> 全{{ totalCount }}件</span>

          <span> ページ{{ pageNo }}/{{ pageBehind }}</span></span
        >
        <span id="gt" @click="nextPage" v-if="pageNo !== pageBehind">&gt;</span>
      </div>
    </div>
  </span>
</template>
<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useStore } from "../../store/index";
import { useRoute } from "vue-router";
const route = useRoute();
const goodsId = route.params.goodsId;
const store = useStore();
onMounted(() => {
  store.dispatch("setGoodsQa", goodsId);
});

let totalCount = computed(() => store.getters.getGoodsQa.qaList.length);
console.log("totalCount", totalCount);

let pageBehind = computed(() => Math.ceil(totalCount.value / 3));
console.log("pagebehind", pageBehind);
let pageNo = computed(() => store.getters.getPageNo);
console.log("getpageNo", pageNo);
function nextPage() {
  store.commit("nextPage");
}
function previousPage() {
  store.commit("previousPage");
}
console.log("pageNo", pageNo);
</script>
<style>
#pageQa .zv-cqa-step-link {
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 20px;
  display: inline-block;
  padding-bottom: 5px;
}
#gt {
  color: #009e96;
  font-weight: 1000;
  cursor: pointer;
}
#gt:hover {
  text-decoration: underline;
}
#it {
  color: #009e96;
  font-weight: 1000;
  cursor: pointer;
}
#it:hover {
  text-decoration: underline;
}
</style>
