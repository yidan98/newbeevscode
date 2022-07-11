<template>
  <div class="g-layout_head">
    <h1>クレジットカードの変更・登録</h1>
    <div id="g-error_js" class="g-error veritrans-error" hidden="true">
      <p class="g-error_h">入力内容をご確認ください。</p>
      <ul class="g-list g-list-disc g-font-sm">
        <li id="veritrans_message"></li>
      </ul>
    </div>
  </div>
  <section class="g-block">
    <h2 class="g-h-2">新しいクレジットカードを登録</h2>
  </section>
</template>
<script>
export default {};
</script>
<style scoped>
.g-layout_head {
  width: 100%;
  max-width: 800px;
  margin-right: auto;
  margin-left: auto;
}
.g-h-2 {
  font-size: 2.4rem;
  margin-bottom: calc(30px - 0.6rem);
}
.g-block {
  margin-top: 40px;
}
</style>
