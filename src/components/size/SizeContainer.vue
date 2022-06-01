<template>
  <section class="g-block-sm p-spec" id="js-product-spec">
    <h2 class="g-h-2 g-h-i p-hd">
      <i class="g-s g-s-size" aria-hidden="true"></i
      ><span
        ><span class="material-symbols-outlined"> straighten </span
        >仕様・サイズ</span
      >
    </h2>
    <ul class="g-flow-xs p-featureIcons js-pictograms">
      <li>
        <img
          src="https://www.nitori-net.jp/ecstatic/image/sys-master/images/8919963140126/0077054.jpg"
          alt=""
        />
      </li>
    </ul>
    <div id="p-specMore" aria-hidden="false" data-accordion-more="">
      <ul
        class="g-flow-lg g-flow-half g-unit js-sku-manuals p-sku-manuals"
      ></ul>
    </div>
    <size-table></size-table>
    <div class="g-foot-v g-foot-sm" style="display: none">
      <p class="g-align-tc">
        <a
          class="g-btn g-btn-w-md displaymorespec"
          href="#p-specMore"
          role="button"
          aria-expanded="true"
          aria-controls="p-specMore"
          data-label="閉じる"
          data-accordion='{"scroll":false}'
        >
          <span>仕様・サイズをもっと見る</span>
          <i class="g-i g-i-arrow-d" aria-hidden="true"></i>
        </a>
      </p>
    </div>
  </section>
</template>
<script setup>
import sizeTable from "./SizeTable.vue";
</script>
<style>
ul {
  list-style: none;
}
.material-symbols-outlined {
  cursor: pointer;
  color: #009e96;
  flex-shrink: 0;
  display: inline-block;
  vertical-align: middle;
}
</style>
