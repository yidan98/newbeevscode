<template>
  <div>
    <br />
    <br />
    <div>
      <qa-container></qa-container>
    </div>
    <div class="icon">
      <h2 class="g-h-2 g-h-i p-hd" style="padding: 10px 10px 10px 520px">
        <i class="g-s g-s-comment" aria-hidden="true"></i>
        <img src="../../../src/assets/icons/chat.png" width="30" height="30" />
        <span id="reviewrr"> レビュー</span>
      </h2>
    </div>
    <review-total></review-total>
    <div id="n-review-btn" class="n-review-btn">
      <button class="g-btn g-btn-w-sm" style="margin: 0 auto">
        <span>商品レビューを書く</span>
      </button>
    </div>
    <hr />
    <review-list></review-list>
  </div>
</template>

<script setup>
import ReviewList from "./ReviewList.vue";
import ReviewTotal from "./ReviewTotal.vue";
import QaContainer from "../qa/QaContainer.vue";
</script>

<style scoped>
.n-review-btn button span {
  padding: 5px 30px !important;
  color: #009e96;
}
.g-btn {
  display: flex;
  min-height: 46px;
  padding: 5px 18px 5px 14px;
  transform: translateX(5px);
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;
  height: 100%;
}
h2.g-h-2 g-h-i p-hd {
  /* display: inline-block;
  margin-bottom: -3px;
  margin-right: 4px;
  padding: 10px 10px 10px 330px; */
  position: relative;
  left: 35%;
}
#reviewrr {
  font-family: system-ui;
}
.g-btn,
g-btn-w-sm {
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  background-color: #fff;
  cursor: pointer;
}
</style>
