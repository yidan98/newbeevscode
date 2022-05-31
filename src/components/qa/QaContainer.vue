<template>
  <section>
    <h2>
      <i class="qaIcon"></i>
      <span
        ><img
          src="../../../src/assets/icons/chat.png"
          width="30"
          height="30"
        />&emsp;商品QA</span
      >
    </h2>
    <!-- 全部的 -->
    <div id="questionsArea">
      <!-- 第一行 全28件 和 新顺序-->
      <div class="page">
        <qa-page v-bind="qa"></qa-page>
        <!-- 全28件 1/10 -->
      </div>
      <!-- QA解答部分 -->
      <div>
        <div v-for="(qa, index) in goodsQa" :key="index">
          <qa-com v-bind="qa"></qa-com>
        </div>
      </div>
      <!-- 下面全28件 -->
      <div>
        <qa-page-bottom></qa-page-bottom>
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
import qaPageBottom from "./QaPageBottom.vue";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

const route = useRoute();
const goodsId = route.params.goodsId;
const store = useStore();
onMounted(() => {
  store.dispatch("setGoodsQa", goodsId);
});

let goodsQa = computed(() => store.getters.getGoodsQa);

console.log("goodsQa", goodsQa);
</script>
<style></style>
