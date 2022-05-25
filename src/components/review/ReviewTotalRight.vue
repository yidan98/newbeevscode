<template>
  <div class="p-reviw-graph-area-right">
    <div class="g-lg-flow-sm p-reviw-graph-area-row-sm">
      <div v-for="(rating, index) in reviewList.rating" :key="index">
        <review-total-right-com :rating="rating"></review-total-right-com>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import reviewTotalRightCom from "./ReviewTotalRightCom.vue";
const route = useRoute();
const goodsId = route.params.goodsId;
const store = useStore();
onMounted(() => {
  store.dispatch("setReviewRating", goodsId);
});
let reviewList = computed(() => store.getters.getReviewRating);
console.log("reviewListrrrrrrrrrr", reviewList);
console.log("reviewListvvvvvvvvvvv", reviewList.value);
</script>

<style scoped>
.p-reviw-graph-area {
  box-sizing: border-box;
  display: inline-block;
  padding: 10px 10px 5px 10px;
  text-align: center;
  vertical-align: top;
}
.p-reviw-graph-area-left-row {
  display: inline-block;
  margin: 0px 0;
}
.p-reviw-graph-area-comp-eva {
  font-weight: bold;
}
.p-reviw-graph-area-average span {
  font-size: 26px;
  color: #eb6157;
}
.p-reviw-graph-area-foot {
  text-align: center;
  margin-top: -12px !important;
  margin-bottom: 12px;
}
.p-reviw-graph-area-right {
  display: flex;
  /* width: 5000px; */
  /* margin: 50px; */
  /* align-items: center; */
  flex: 3 3 300px;
  justify-content: center;
}
</style>
