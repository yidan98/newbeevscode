<template>
  <div class="g-layout_foot">
    <div class="g-hr g-only-lg"></div>
    <section class="g-lg-block">
      <h2 class="g-h-2" v-if="buyLaterItems.length !== 0">
        「あとで買う」に入っている商品
      </h2>

      <ul class="g-itemList" v-for="item in buyLaterItems" :key="item">
        <li class="g-itemList_item g-media g-media-lg p-cartItem">
          <p class="g-media_head">
            <a class="g-hover" href="/ec/product/1138940/"
              ><img
                class="g-fw g-rc"
                :src="item.pictures"
                alt="3人用布張りソファ(マイスBE/MBR)"
            /></a>
          </p>
          <div class="g-media_body g-units-sm">
            <p class="g-media_h">
              <a
                href="/ec/product/1138940/"
                style="text-decoration: none; color: rgb(51, 51, 51)"
                >{{ item.name }}</a
              >
            </p>
            <p class="g-font-sm">商品コード {{ item.goodsCode }}</p>
            <ul class="g-font-sm">
              <li>カラー：{{ item.color }}</li>
              <li>ソファタイプ：{{ item.type }}</li>
              <li></li>
            </ul>
            <span>
              <span class="g-price">{{ item.price }}</span
              ><span>円 （税込）</span></span
            >
            <div class="g-butterfly g-font-sm">
              <p>{{ item.delivery }}</p>
            </div>
            <div class="p-cartItem_addon g-sm-units-sm g-lg-units-lg">
              <ul class="g-flow-xs g-item_label">
                <li class="g-label-brand">配送センター受取可能商品</li>
              </ul>
            </div>
          </div>
          <div class="g-media_foot">
            <div class="p-cartItem_controls">
              <form
                id="uniRestoreCartEntryForm0"
                name="uniRestoreCartEntryForm0"
                action="/ec/cart/restore/cartEntry"
                method="post"
              >
                <input
                  id="pk"
                  name="pk"
                  value="9070848817821"
                  type="hidden"
                /><input
                  id="code"
                  name="code"
                  value="1138940"
                  type="hidden"
                /><input
                  id="quantity"
                  name="quantity"
                  value="1"
                  type="hidden"
                /><input
                  id="customMadeInfo"
                  name="customMadeInfo"
                  type="hidden"
                  value=""
                /><input
                  id="customMadePictureURL"
                  name="customMadePictureURL"
                  type="hidden"
                  value=""
                />
                <div>
                  <input
                    type="hidden"
                    name="CSRFToken"
                    value="5872829d-b39d-4d08-8f99-03ea1962cf26"
                  />
                </div>
              </form>
              <p
                class="p-cartItem_btn"
                :id="item.id"
                :item="item"
                @click="backtoCartList(item.id, item)"
              >
                <a
                  class="g-btn g-btn-sm g-btn-em g-fw"
                  href="javascript:doRestoreCartEntry(uniRestoreCartEntryForm0);"
                  data-once=""
                  ><span>カートに戻す</span></a
                >
              </p>
              <form
                id="uniDeleteLaterListEntryForm0"
                name="uniDeleteLaterListEntryForm0"
                action="/ec/cart/delete/laterListEntry"
                method="post"
              >
                <input id="pk" name="pk" value="9070848817821" type="hidden" />
                <div>
                  <input
                    type="hidden"
                    name="CSRFToken"
                    value="5872829d-b39d-4d08-8f99-03ea1962cf26"
                  />
                </div>
              </form>
              <p
                class="p-cartItem_del"
                :id="item.id"
                @click="deleteByLater(item.id)"
                style="cursor: pointer"
              >
                <a
                  class="g-link g-link-gray"
                  href="javascript:chgItem('uniDeleteLaterListEntryForm','0',false)"
                  data-once=""
                  ><span
                    class="material-symbols-outlined"
                    data-v-3c643552=""
                    style="
                      font-size: 1rem;
                      margin-top: -0.2em;
                      color: rgb(179, 179, 179);
                    "
                  >
                    close </span
                  ><span>削除</span></a
                >
              </p>
              <div class="p-cartItem_sum"></div>
            </div>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useStore } from "../../store/index";
const userId = 10011;
const store = useStore();
onMounted(() => {
  store.dispatch("setBuyLaterItem", userId);
});
const buyLaterItems = computed(() => store.getters.getBuyLaterItem);
const deleteByLater = (id: number) => {
  store.dispatch("deleteByLater", { id, userId });
};
const backtoCartList = (id, item) => {
  store.dispatch("backtoCartList", { id, item, userId });
};
</script>
<style scoped>
.g-link-gray {
  margin-left: -30px;
}
.p-cartItem_btn {
  margin-left: -30px;
}
.g-btn > span,
.g-lg-btn > span {
  display: flex;
  min-height: 46px;
  padding: 0px 18px 0px 12px;
  transform: translateX(5px);
  flex: 1 1 auto;
  align-items: center;
  /* justify-content: center; */
  height: 100%;
  font-size: 15px;
}
.g-input {
  min-width: 0;
  padding: 11px 14px;
  text-align: left;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  background-color: #fff;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 80px;
  text-align: right;
}
.g-btn,
.g-lg-btn {
  line-height: 1.5;
  font-weight: normal;
  display: inline-flex;
  padding: 0;
  transition: background-color 0.2s;
  vertical-align: middle;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  background-color: #fff;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  text-decoration: none;
  color: #009e96;
}
.g-rc {
  width: 200px;
}
.g-units-sm {
  width: 500px;
  margin-left: 20px;
}
.g-label-brand {
  color: #009e96;
  border: 1px solid #009e96;
  width: 200px;
  margin-left: -40px;
}
.g-price {
  font-family: "Helvetica Neue", Arial, sans-serif;
  font-size: 1.8rem;
  font-weight: bold;
  color: #000;
}
.p-cartItem {
  display: flex;
}
.g-hr,
.g-hr-0,
.g-hr-xs,
.g-hr-sm,
.g-lg-hr,
.g-lg-hr-0,
.g-lg-hr-xs,
.g-lg-hr-sm {
  border: 0 solid #f7f7f7;
  border-bottom-width: 1px;
}
.g-hr,
.g-lg-hr {
  margin: 40px 0;
}
.g-media_h {
  font-size: 1.2rem;
  line-height: 1.5;
}
</style>
