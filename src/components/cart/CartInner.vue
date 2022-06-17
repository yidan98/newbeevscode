<template>
  <template v-for="c in cart" :key="c">
    <div class="g-layout_body">
      <ul class="g-itemList">
        <li class="g-itemList_item g-media g-media-lg p-cartItem">
          <div class="mid" style="display: flex">
            <div class="pic">
              <p class="g-media_head">
                <a class="g-hover" href="/goods/detail/10195/"
                  ><img class="g-fw g-rc" :src="c.pictures" alt="c.name"
                /></a>
              </p>
            </div>
            <div class="g-media_body g-units-sm">
              <p class="g-media_h">
                <a
                  href="/ec/product/1146701/"
                  style="text-decoration: none; color: #333"
                  >{{ c.name }}</a
                >
              </p>
              <p class="g-font-sm">商品コード {{ c.goodsCode }}</p>
              <ul class="g-font-sm">
                <li>ソファタイプ：{{ c.type }}</li>
                <li>カラー：{{ c.color }}</li>
                <li></li>
              </ul>
              <p>
                <span class="g-price">{{ c.price }}</span
                ><span>円 （税込）</span>
              </p>
              <div class="g-butterfly g-font-sm">
                <p>
                  {{ c.delivery }}
                </p>
              </div>
            </div>
            <div class="g-media_foot">
              <div class="g-hr-sm g-hr-dark g-only-sm"></div>
              <div class="p-cartItem_controls">
                <form
                  id="uniAddLaterListEntryForm0"
                  name="uniAddLaterListEntryForm0"
                  action="/ec/cart/add/laterListEntry"
                  method="post"
                >
                  <input
                    id="pk"
                    name="pk"
                    value="12605905698860"
                    type="hidden"
                  />
                  <div>
                    <input
                      type="hidden"
                      name="CSRFToken"
                      value="435ab45c-1be3-4a3e-a72d-f10d61e6e0e7"
                    />
                  </div>
                </form>
                <form
                  id="uniDeleteCartEntryForm0"
                  name="uniDeleteCartEntryForm0"
                  action="/ec/cart/delete/cartEntry"
                  method="post"
                >
                  <input
                    id="pk"
                    name="pk"
                    value="12605905698860"
                    type="hidden"
                  />
                  <div>
                    <input
                      type="hidden"
                      name="CSRFToken"
                      value="435ab45c-1be3-4a3e-a72d-f10d61e6e0e7"
                    />
                  </div>
                </form>
                <div class="deleteAndTotal" style="display: flex">
                  <div class="delete">
                    <form
                      id="uniUpdateQuantityForm0"
                      name="uniUpdateQuantityForm0"
                      action="/ec/cart/update/quantity"
                      method="post"
                    >
                      <input
                        id="pk"
                        name="pk"
                        value="12605905698860"
                        type="hidden"
                      /><input
                        class="g-input g-input-sm g-fw"
                        type="text"
                        v-model="c.quantity"
                        oninput="value=value.replace(/\D-/g,'')"
                        name="quantity"
                        aria-label="個数"
                        aria-describedby="p-cartItem_pcs0_alert"
                        data-validation-rules='[{"action":"hankaku"},{"rule":"Number"}]'
                        maxlength="3"
                      />
                      <div
                        class="g-formGrid_error-alone"
                        id="p-cartItem_pcs0_alert"
                        role="alert"
                      ></div>
                      <div>
                        <input
                          type="hidden"
                          name="CSRFToken"
                          value="435ab45c-1be3-4a3e-a72d-f10d61e6e0e7"
                        />
                      </div>
                    </form>

                    <p class="p-cartItem_btn">
                      <a
                        class="g-btn g-btn-sm g-btn-em g-fw g-sm-font-md"
                        href="javascript:chgItem('uniAddLaterListEntryForm','0',false)"
                        data-once=""
                        ><span>あとで買う</span></a
                      >
                    </p>
                    <p
                      class="p-cartItem_del"
                      :id="c.id"
                      @click="deleteCart(c.id, c.userId)"
                    >
                      <span
                        class="material-symbols-outlined"
                        style="
                          font-size: 1rem;
                          margin-top: -0.2em;
                          color: #b3b3b3;
                        "
                      >
                        close </span
                      ><span class="deleteC">削除</span>
                    </p>
                  </div>
                  <div class="p-cartItem_sum">
                    <span>個別送料</span
                    ><span class="g-price">{{ c.postage }}</span
                    ><span>円</span><br /><br />
                    <span>小計</span
                    ><span class="g-price g-lg-price-lg">
                      {{ c.price * c.quantity }}</span
                    ><span>円 （税込）</span>

                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="p-cartItem_addon g-sm-units-sm g-lg-units-lg">
            <ul class="g-flow-xs g-item_label">
              <li class="g-label-brand">配送センター受取可能商品</li>
            </ul>

            <div class="g-pane g-pane-brand g-pane-sm g-units-sm">
              <label>
                <form class="servers">
                  <input
                    type="checkbox"
                    name="usedPickup"
                    value="1"
                    class="g-checkable_label"
                  />
                  <span style="background-color: #e9f5f4"
                    >引取りサービスを利用する</span
                  >

                  <!-- <span>
                  <span class="g-checkable_label"
                    >引取りサービスを利用する</span
                  ></span
                > -->

                  <div>
                    <input
                      type="hidden"
                      name="CSRFToken"
                      value="435ab45c-1be3-4a3e-a72d-f10d61e6e0e7"
                    />
                  </div></form
              ></label>
            </div>
          </div>
        </li>
      </ul></div
  ></template>
</template>
<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "../../store/index";

// import { useRoute } from "vue-router";

// const route = useRoute();
const userId = 10011;
const store = useStore();
onMounted(() => {
  store.dispatch("setCart", userId);
});
const cart = computed(() => store.getters.getCart);

// import { useRoute } from "vue-router";

// const route = useRoute();

const deleteCart = (id, userId) => {
  store.dispatch("deleteCart", { id, userId });
  store.dispatch("setCart", userId);
};
</script>
<style scoped>
.deleteC {
  cursor: pointer;
}
.deleteC:hover {
  text-decoration: underline;
  color: #009e96;
}
.p-cartItem_sum {
  margin-left: 15px;
  margin-top: -5px;
}
.p-cartItem_pcs .g-input {
  text-align: right;
  width: 80px;
}

.g-input-sm {
  padding: 8px 11px 7px;
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
.servers {
  margin-top: 20px;
  padding: 20px;
  background-color: #e9f5f4;
  margin-left: 20px;
  width: 900px;
}
.g-units-sm {
  width: 500px;
  margin-left: 20px;
}
.p-cartItem_controls {
  width: 300px;
  margin-left: 20px;
}
.g-rc {
  width: 200px;
}
.g-btn-em,
.g-lg-btn-em {
  color: #009e96;
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
.g-price,
.g-lg-price {
  font-family: "Helvetica Neue", Arial, sans-serif;
  font-size: 1.8rem;
  font-weight: bold;
  color: #000;
}
.g-media .g-media_h,
.g-lg-media .g-media_h {
  font-size: 1.2rem;
  line-height: 1.5;
}
.g-font-sm,
.g-lg-font-sm {
  font-size: 1rem !important;
  line-height: 1.5 !important;
}
.g-label-brand {
  color: #009e96;
  border: 1px solid #009e96;
  width: 200px;
  margin-left: 180px;
}
.g-checkable_label {
  background-color: #e9f5f4;
  margin-left: 200px;
}
.g-pane-brand,
.g-checkable,
.g-layout_sidebar[data-sticky="true"],
.g-layout_sidebar [data-sticky="true"] {
  position: -webkit-sticky;
  position: sticky;
  top: 40px;
}
.g-pane-gray,
.g-lg-pane-gray {
  background-color: #f7f7f7;
}
.p-payment_total {
  font-weight: bold;
  color: #eb6157;
}
.p-payment dt {
  float: left;
  clear: left;
  -webkit-font-feature-settings: "palt";
  font-feature-settings: "palt";
}
payment_itemized dd {
  padding: 9px 0 6px 0;
  border-top: 1px solid #dbdbdb;
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
cancel {
  color: #fff;
}
#g-fw {
  background-color: #eb6157;
  border-color: #eb6157;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  /* padding: 5px 2px; */
  margin-left: 140px;
}
</style>
