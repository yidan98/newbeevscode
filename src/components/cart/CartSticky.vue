<template>
  <div class="g-layout_sidebar">
    <div data-attr='{"lg":{"data-sticky":true}}' data-sticky="true">
      <section class="g-pane g-pane-gray g-units-lg g-lg-sticky">
        <div class="p-payment">
          <dl class="p-payment_total">
            <dt
              class="p-paymentAmountLabel"
              style="border-bottom: 2px solid #dbdbdb; line-height: 2.7"
            >
              お支払金額
            </dt>
            <dd
              class="g-price g-price-lg"
              style="color: #eb6157; border-bottom: 2px solid #dbdbdb"
              v-if="paymentAmount !== undefined"
            >
              &nbsp;{{ paymentAmount.toLocaleString() }}<span>円</span>
            </dd>
          </dl>
          <div class="p-payment_body g-units-lg">
            <dl class="p-payment_itemized p-shorten-dl" id="p-payment_itemized">
              <dt></dt>
              <dd style="margin-top: 3px"></dd>

              <dt
                class="p-payment_sum p-paymentSumShorten"
                style="border-bottom: 1px solid #dbdbdb"
              >
                商品金額合計
              </dt>
              <dd
                style="border-bottom: 1px solid #dbdbdb"
                v-if="paymentSum !== undefined"
              >
                {{ paymentSum.toLocaleString() }}<span>円</span>
              </dd>
              <dt>送料</dt>
              <dd>{{ postage }}<span>円</span></dd>
            </dl>
            <ul class="g-list g-list-note">
              <li>
                送料および手数料はまだ確定しておりません。一部地域へのご配達は、別途料金がかかる場合がございます。(沖縄本島以外の離島の中継料は、別途ご案内いたします)
              </li>
              <li>未ログインまたは非会員の方はポイントが付与されません。</li>
            </ul>
          </div>
        </div>

        <form
          id="checkoutFlowModeForm"
          action="/ec/cart/checkout"
          method="POST"
        >
          <ul class="g-list">
            <li>
              <input
                type="radio"
                name="checkoutFlowMode"
                value="DELIVERY"
              /><span
                ><span class="g-checkable_label"
                  >ご指定の場所に配送する</span
                ></span
              >
            </li>
            <li class="g-mt-10">
              <input type="radio" name="checkoutFlowMode" value="PICKUP" /><span
                ><i
                  class="g-s g-s-radio-on g-checkable_on"
                  aria-hidden="true"
                ></i
                ><i
                  class="g-s g-s-radio-off g-checkable_off"
                  aria-hidden="true"
                ></i
                ><span class="g-checkable_label">
                  <span class="g-align-vm g-mr-10"
                    >店舗/配送センターで受け取る</span
                  >

                  <span class="g-label-price">送料無料</span>
                </span></span
              >
            </li>
          </ul>
          <div>
            <input
              type="hidden"
              name="CSRFToken"
              value="435ab45c-1be3-4a3e-a72d-f10d61e6e0e7"
            />
          </div>
        </form>
        <div></div>
        <p>
          <a
            class="g-link"
            href="#p-pdfModal"
            role="button"
            aria-hidden="true"
            aria-expanded="false"
            aria-controls="p-pdfModal"
            ><i class="g-i g-i-arrow-r"></i><span>見積書（PDF）を出力</span
            ><i class="g-s g-s-pdf"></i
          ></a>
        </p>
        <div class="g-foot-v">
          <p>
            <button
              class="g-btn g-btn-cv g-fw"
              id="g-fw"
              onclick="javascript:checkoutFlowModeForm.submit();return false;"
            >
              <span style="color: #fff">レジへ進む</span>
            </button>
          </p>
          <p>
            <a class="g-btn g-fw" href="/goods/detail/10195/"
              ><span>ショッピングを続ける</span
              ><i class="g-i g-i-arrow-r" aria-hidden="true"></i
            ></a>
          </p>
        </div>
      </section>
    </div>
  </div>
</template>
<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "../../store/index";
const userId = 10011;
const store = useStore();
onMounted(() => {
  store.dispatch("setCart", userId);
});
const postage = computed(() => {
  if (paymentSum.value > 11000 || paymentSum.value === 0) {
    return 0;
  } else {
    return 550;
  }
});
const paymentSum = computed(() => store.getters.getPaymentSum);
const paymentAmount = computed(() => paymentSum.value + postage.value);
</script>
<style scoped>
dd {
  text-align: right;
}
input:checked + span {
  color: #009e96;
  font-weight: bold;
}
input[type="radio"] {
  width: 20px;
  height: 20px;
}

.g-layout_sidebar {
  position: sticky;
  top: 0;
  width: 400px;
  margin-left: 30px;
  margin-right: 30px;
}
.g-list-note > li::before,
.g-lg-list-note > li::before {
  content: "\203B";
}
.g-list-note,
.g-lg-list-note {
  font-size: 1rem;
  line-height: 1.58333;
  text-indent: -1em;
  color: #808080;
}

.g-btn-em,
.g-lg-btn-em {
  color: #009e96;
}
.g-btn,
.g-lg-btn {
  font-size: 1.6rem;
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
  margin-left: 55px;
  text-decoration: none;
  color: #009e96;
  width: 328px;
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
  font-size: 1.6rem;
  line-height: 1.5;
}

.g-layout-cart,
.g-layout-sidebar,
.g-layout-detail,
.g-layout-category,
.g-layout-cart,
.g-layout-purchase,
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
  /* padding: 5px 18px 5px 14px; */
  transform: translateX(5px);
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 1.4rem;
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
  margin-left: 53px;
  width: 330px;
}
</style>
