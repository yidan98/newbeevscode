<template>
  <section>
    <h2>
      <i class="qaIcon"></i>
      <span>商品QA</span>
    </h2>
    <!-- 全部的 -->
    <div id="questionsArea">
      <!-- 第一行 全28件 和 新顺序-->
      <div class="page">
        <qa-page></qa-page>
        <!-- 全28件 1/10 -->
        <qa-sort></qa-sort>
        <div></div>
        <!-- 新顺序 -->
        <div></div>
      </div>
      <!-- QA解答部分 -->

      <div>
        <qa-com></qa-com>
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
import qaSort from "./QaSort.vue";
import qaCom from "./QaCom.vue";
import qaPost from "./QaPost.vue";
import qaPageBottom from "./QaPageBottom.vue";
</script>
<style>
div,
#questionsArea {
  display: row;
}
</style>
