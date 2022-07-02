<template>
  <div class="g-layout_sidebar">
    <div
      class="g-sm-full p-sm-full-cls"
      data-attr='{"lg":{"data-sticky":true}}'
      data-sticky="false"
    >
      <div class="g-lg-sticky" style="margin-right: 20px">
        <div class="g-pane g-pane-gray">
          <div
            class="g-position-r g-units-lg js-sku-sidebar"
            style="width: 350px"
          >
            <dl class="p-order">
              <dt>&nbsp;&nbsp;&nbsp; 納品方法</dt>
              <dd>
                <span>{{ goodsSize.method }}</span>
              </dd>
              <dt>&nbsp;&nbsp;&nbsp; 配送目安</dt>
              <dd>
                {{ goodsSize.delivery
                }}<br />※地域により異なる場合がございます。
              </dd>
              <dt>&nbsp;&nbsp;&nbsp; 返品・交換</dt>
              <dd>
                {{ goodsSize.exchange }}
                <p class="p-order_help">
                  <a class="g-link" href="/ec/userguide/cancel/">
                    <span>返品・交換について</span
                    ><i class="g-i g-i-info" aria-hidden="true"></i>
                  </a>
                </p>
              </dd>
              <dt>&nbsp;&nbsp;&nbsp; 送料</dt>
              <dd>
                <span class="g-label-price"> {{ goodsSize.cost }}</span>
                <p class="p-order_help">
                  <a class="g-link" href="/ec/userguide/delivery/"
                    ><span>送料について</span
                    ><i class="g-i g-i-info" aria-hidden="true"></i
                  ></a>
                </p>
              </dd>
            </dl>
            <p>
              <img
                style="
                  width: 80%;

                  padding: 20px 20px 20px 30px;
                "
                src="http://localhost:8080/assets/images/kumitate.webp"
                alt=""
              />
            </p>
            <dl class="p-pcs">
              <dt>
                <label for="p-pieces"> &nbsp;&nbsp;&nbsp; 数量</label>
              </dt>
              <dd>
                <input
                  class="g-input g-input-sm addToCartQty"
                  id="p-pieces"
                  type="text"
                  :value="quantity"
                  @input="q"
                  size="5"
                  maxlength="3"
                />
                <input
                  class="g-input g-input-sm addToCartQty"
                  type="hidden"
                  :value="goodsCode"
                  @input="q"
                />
              </dd>
            </dl>

            <div>
              <div class="g-flow-0 g-align-fbl">
                <dl class="p-price p-price-area">
                  <dd
                    class="g-price g-price-lg g-price-ra price-size-up g-price-down"
                    v-if="price !== undefined"
                  >
                    <span style="font-size: 30px"
                      >&nbsp;&nbsp;&nbsp;{{ price.toLocaleString() }}円</span
                    >
                  </dd>
                </dl>
              </div>
              <p class="g-font-sm">
                &nbsp;&nbsp;&nbsp;値下実施日：{{ goodsSize.discountDate }}
              </p>
              <p class="g-font-sm">
                &nbsp;&nbsp;&nbsp;旧価格：{{
                  (price + 5000).toLocaleString()
                }}円
              </p>
            </div>
            <div class="g-foot-v">
              <div class="cartBtnArea disp bt">
                <!-- <a href="/cart/10011" style="text-decoration: none"> -->

                <button
                  onclick=""
                  class="g-btn g-btn-cv g-btn-c g-fw addToCartBtn"
                  id="p-addItem"
                  type="button"
                  @click="addItem"
                >
                  <span class="material-symbols-outlined" style="color: #fff">
                    add_shopping_cart
                  </span>
                  <span style="color: #fff">カートに入れる</span>
                </button>
                <!-- </a
                > -->
              </div>
            </div>
            <div
              style="
                display: flex;
                justify-content: space-around;
                padding: 20px;
              "
            >
              <li class="g-grid_item p-misc_item" style="margin-left: 50px">
                <a
                  :class="existed ? 'canNotClick' : 'canClick'"
                  @click="intoWish"
                >
                  <div class="p-misc_i g-hover_img">
                    <span class="material-symbols-outlined g-s g-s-favorite-g">
                      favorite
                    </span>
                  </div>

                  <span class="p-misc_label" style="margin-left: -10px"
                    >お気に入り</span
                  >
                </a>
              </li>
              <a href="">
                <div class="p-misc_i g-hover_img">
                  <span class="material-symbols-outlined"> store </span>
                </div>
                <span class="p-misc_label" style="margin-left: -20px"
                  >店舗在庫を確認</span
                ></a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
// , reactive, toRefs
import { useStore } from "../../store/index";
import { useRoute } from "vue-router";

const route = useRoute();
const goodsId = route.params.goodsId;
const store = useStore();
onMounted(() => {
  const userId = 10011;
  store.dispatch("setGoodsSize", goodsId);
  store.dispatch("setWishGoodsList", userId);
  //判断当前sku的商品是否在【お気に入り】列表（wishgoodsList）中
  if (
    allGoodsList.value.filter((a) => a.goodsCode === goodsCode.value).length > 0
  ) {
    existed.value = true;
  }
});
//判断当前sku的商品是否在【お気に入り】列表（wishgoodsList）中，若存在（true），则不能再点击
const allGoodsList = computed(() => store.getters.getAllGoodsList);
let existed = ref(false);
// 把当前sku的商品加到【お気に入り】
const intoWish = () => {
  store.dispatch("intoWish", newInfoList.value);
  existed.value = true;
};
const newInfoList = computed(() => store.getters.getNew);
const goodsSize = computed(() => store.getters.getGoodsSize);
const price = computed(() => store.getters.getNew.price);
const addItem = () => {
  store.dispatch("addCart");
};
const quantity = computed(() => store.getters.getQuantity);
const goodsCode = computed(() => store.getters.getNew.goodsCode);
store.commit("setGoodsCode", goodsCode);
const q = (e: Event) => {
  if (e.target instanceof HTMLInputElement) {
    store.commit("setQuantity", e.target.value);
  }
};
</script>
<style scoped>
a {
  text-decoration: none;
  color: #333;
}
.p-misc_i {
  font-size: 2.4rem;
  display: flex;
  width: 50px;
  height: 50px;
  margin-bottom: 5px;
  border: 2px solid #dbdbdb;
  border-radius: 50%;
  background-color: #fff;
  align-items: center;
  justify-content: center;
}
.canClick {
  cursor: pointer;
  color: #333;
}
.canNotClick {
  pointer-events: none;
  color: #009e96;
}
element.style {
  bottom: 68px;
  animation: 1.8s ease 0s 1 normal both running p-itemAddedIn;
}
dl {
  width: 100%;
  overflow: hidden;

  padding: 0;
  margin: 0;
}
dt {
  float: left;
  width: 50%;
  /* adjust the width; make sure the total of both is 100% */

  padding: 0;
  margin: 0;
}
dd {
  float: left;
  width: 50%;
  /* adjust the width; make sure the total of both is 100% */

  padding: 0;
  margin: 0;
  font-weight: bold;
}
.g-layout_sidebar {
  position: sticky;
  top: 0;
}
#p-addItem {
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  padding: 15px 32px;
  border-color: #eb6157;
  background-color: #eb6157;
}
.g-pane-gray,
.g-lg-pane-gray {
  background-color: #f7f7f7;
}
.p-sm-full-cls {
  position: -webkit-sticky;
  position: sticky;
  top: 40px;
}
.g-fw,
.g-lg-fw {
  width: 100% !important;
}
.g-btn-c,
.g-lg-btn-c {
  justify-content: center;
}
.g-btn-cv,
.g-btn-cv,
.g-btn,
.g-lg-btn {
  /* font-size: 1.6rem; */
  /* line-height: 1.5; */
  /* font-weight: normal; */
  display: inline-flex;
  padding: 0;
  transition: background-color 0.2s;
  vertical-align: middle;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  background-color: #fff;
  -webkit-appearance: none;
  -moz-appearance: none;
}
</style>
