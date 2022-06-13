<template>
  <div>
    <div class="js-sku-name">
      <h1 class="js-sku-name">{{ name }}</h1>
    </div>
    <ul class="g-flow-xs g-labelSet" style="padding: 0; display: flex">
      <li>
        <img
          src="https://www.nitori-net.jp/ecstatic/image/sys-master/images/8878270513182/icon_makerdirect.png"
          alt=""
        />
      </li>
      <li>
        <img
          src="https://www.nitori-net.jp/ecstatic/image/sys-master/images/9021082370078/icon_free_shipping.png"
          alt=""
        />
      </li>
      <li>
        <img
          src="https://www.nitori-net.jp/ecstatic/image/sys-master/images/8836320985118/ic_nesage.png"
          alt=""
        />
      </li>
      <li>
        <img
          src="https://www.nitori-net.jp/ecstatic/image/sys-master/images/8796423880734/ic_netgeitei.png"
          alt=""
        />
      </li>
      <li>
        <img
          src="https://www.nitori-net.jp/ecstatic/image/sys-master/images/8830060757022/icon_credit.png"
          alt=""
        />
      </li>
    </ul>
    <div class="js-sku-code">
      <p class="js-sku-code" style="color: #333">商品コード {{ goodsCode }}</p>
    </div>
    <span class="picAndDetail">
      <div>
        <goods-picture></goods-picture>
      </div>
      <div>
        <goods-detail></goods-detail>

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
          <div>
            <size-table
              v-for="(item, index) in newList"
              :key="index"
              v-bind="item"
            ></size-table>
          </div>
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
      </div>
      <div>
        <cart-com></cart-com>
      </div>
    </span>
  </div>
</template>
<script setup lang="ts">
import sizeTable from "./SizeTable.vue";
import goodsPicture from "./GoodsPicture.vue";
import goodsDetail from "./GoodsDetail.vue";
import cartCom from "./CartCom.vue";
import { computed, onMounted } from "vue";
import { useStore } from "../../store/index";
import { useRoute } from "vue-router";
const route = useRoute();
const goodsId = route.params.goodsId;
const store = useStore();
onMounted(() => {
  store.dispatch("setGoodsSize", goodsId);
});

const newList = computed(() => store.getters.getNewList);
const name = computed(() => store.getters.getNew.name);
const goodsCode = computed(() => store.getters.getNew.goodsCode);
</script>
<style scoped>
ul {
  list-style: none;
}
.material-symbols-outlined {
  color: #009e96;
  flex-shrink: 0;
  display: inline-block;
  vertical-align: middle;
}
.picAndDetail {
  display: flex;
}
</style>
