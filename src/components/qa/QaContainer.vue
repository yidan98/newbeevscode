<template>
  <section>
    <h2>
      <i class="qaIcon"></i>
      <span
        ><img
          src="../../../src/assets/icons/chat3.png"
          width="30"
          height="30"
        />&emsp;商品QA</span
      >
    </h2>
    <!-- 全部的 -->
    <div id="questionsArea">
      <!-- 第一行 全28件 和 新顺序-->
      <div class="page">
        <span>
          <qa-page></qa-page>
          <qa-sort></qa-sort>
        </span>
        <!-- 全28件 1/10 -->
      </div>
      <!-- QA解答部分 -->
      <div>
        <div v-for="(qa, index) in qaArr" :key="index">
          <qa-com v-bind="qa"></qa-com>
        </div>
      </div>
      <!-- 下面全28件 -->
      <div>
        <qa-page></qa-page>
      </div>
      <!--  注意 -->
      <qa-post></qa-post>
    </div>
  </section>
</template>
<script setup>
import qaPage from "./QaPage.vue";

import qaCom from "./QaCom.vue";
import qaPost from "./QaPost.vue";

import qaSort from "./QaSort.vue";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

const route = useRoute();
const goodsId = route.params.goodsId;
const store = useStore();
onMounted(() => {
  store.dispatch("setGoodsQa", goodsId);
});
//所有数据
let qaList = computed(() => store.getters.getGoodsQa.qaList);
let PageNo = computed(() => store.getters.getPageNo);
let start = computed(() => (PageNo.value - 1) * 3);
let end = computed(() => start.value + 3);

let qaArr = computed(() => qaList.value.slice(start.value, end.value));
console.log("PageNo", PageNo);
console.log("start", start);
console.log("end", end);
console.log("qaArr", qaArr);
console.log("goodsQa", qaList);
</script>
<style></style>
