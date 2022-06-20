<template>
  <div style="display: flex; margin-left: 200px">
    <div class="g-layout_lead"></div>

    <div class="g-layout_head"></div>
    <!-- left -->
    <div class="g-layout_sidebar g-sm-mb-20">
      <div class="p-welcome">
        <div class="g-butterfly g-myPageCorpKbnSpaceBottom">
          <h1>
            <span class="g-myPageMembersCardCorpKbnNotCorporate"
              >ニトリメンバーズ ネット会員</span
            >
          </h1>
          <p><a class="g-link-t" href="/ec/logout">ログアウト</a></p>
        </div>
        <ul class="g-list-note g-unit-xs">
          <li>
            <a href="/ec/userguide/nitorinet/#member"
              ><span class="g-list-note">会員種別について &nbsp;&nbsp;</span></a
            >
          </li>
        </ul>
        <div class="g-butterfly">
          <span
            style="
              font-size: 1.8rem;
              line-height: 1.5;
              font-weight: bold;
              margin-right: 5px;
            "
            >{{ account.name }}</span
          >
          さんの会員証
        </div>
        <div class="p-barcode">
          <img id="js-bar-code" :src="account.QRCode" />
          <p id="memberCardNumber">{{ account.codeNumber }}</p>
        </div>
        <dl class="p-pointInfo">
          <dt>現在のポイント</dt>
          <dd class="g-digit p-pointInfo_available">
            {{ account.currentPoint }}<span style="font-size: 1rem"> pt</span>
          </dd>

          <dt>今年失効するポイント</dt>
          <dd class="g-digit p-pointInfo_lapse">
            {{ account.invalidPoint }}<span style="font-size: 1rem"> pt</span>
          </dd>
        </dl>
        <ul class="g-list-note g-unit-xs">
          <li>毎日午前9時以降に順次更新されます</li>
        </ul>
      </div>
    </div>
    <!-- right -->
    <div class="g-layout_body">
      <ul class="g-sm-lineGrid-1 g-sm-lineGrid-rc g-lg-grid-3">
        <li class="g-lineGrid_item g-grid_item">
          <a
            class="g-lg-pane g-lg-pane-border g-lg-pane-thick p-mypagePane g-lg-fh g-hover"
            href="/account/history/"
          >
            <div
              class="g-sm-btn g-sm-btn-item g-lg-card g-lg-align-tc p-iconText"
            >
              <div class="g-card_head">
                <span class="material-symbols-outlined"> history </span>
              </div>
              <br />
              <span class="g-card_body">注文履歴</span
              ><i class="g-i g-i-arrow-r g-only-sm" aria-hidden="true"></i>
            </div>
          </a>
        </li>
        <li class="g-lineGrid_item g-grid_item">
          <a
            class="g-lg-pane g-lg-pane-border g-lg-pane-thick p-mypagePane g-lg-fh g-hover"
            href="/ec/my-account/wishlist"
          >
            <div
              class="g-sm-btn g-sm-btn-item g-lg-card g-lg-align-tc p-iconText"
            >
              <div class="g-card_head">
                <span class="material-symbols-outlined"> favorite </span>
              </div>
              <br />
              <span class="g-card_body">お気に入り商品</span
              ><i class="g-i g-i-arrow-r g-only-sm" aria-hidden="true"></i>
            </div>
          </a>
        </li>
        <li class="g-lineGrid_item g-grid_item">
          <a
            class="g-lg-pane g-lg-pane-border g-lg-pane-thick p-mypagePane g-lg-fh g-hover"
            href="/ec/my-account/mystore"
          >
            <div
              class="g-sm-btn g-sm-btn-item g-lg-card g-lg-align-tc p-iconText"
            >
              <div class="g-card_head">
                <span class="material-symbols-outlined"> storefront </span>
              </div>
              <br />
              <span class="g-card_body">お気に入り店舗</span
              ><i class="g-i g-i-arrow-r g-only-sm" aria-hidden="true"></i>
            </div>
          </a>
        </li>
        <li class="g-lineGrid_item g-grid_item">
          <a
            class="g-lg-pane g-lg-pane-border g-lg-pane-thick p-mypagePane g-lg-fh g-hover"
            href="/ec/my-account/profileEditSelect"
          >
            <div
              class="g-sm-btn g-sm-btn-item g-lg-card g-lg-align-tc p-iconText"
            >
              <div class="g-card_head">
                <span class="material-symbols-outlined"> person </span>
              </div>
              <br />
              <span class="g-card_body">お客様情報の確認・変更</span
              ><i class="g-i g-i-arrow-r g-only-sm" aria-hidden="true"></i>
            </div>
          </a>
        </li>
        <li class="g-lineGrid_item g-grid_item">
          <a
            class="g-lg-pane g-lg-pane-border g-lg-pane-thick p-mypagePane g-lg-fh g-hover"
            href="/ec/my-account/address-book"
          >
            <div
              class="g-sm-btn g-sm-btn-item g-lg-card g-lg-align-tc p-iconText"
            >
              <div class="g-card_head">
                <span class="material-symbols-outlined"> receipt_long </span>
              </div>
              <br />
              <span class="g-card_body">配送先住所の変更・登録</span
              ><i class="g-i g-i-arrow-r g-only-sm" aria-hidden="true"></i>
            </div>
          </a>
        </li>

        <li class="g-lineGrid_item g-grid_item">
          <a
            class="g-lg-pane g-lg-pane-border g-lg-pane-thick p-mypagePane g-lg-fh g-hover"
            href="/ec/my-account/payment-details"
          >
            <div
              class="g-sm-btn g-sm-btn-item g-lg-card g-lg-align-tc p-iconText"
            >
              <div class="g-card_head">
                <span class="material-symbols-outlined"> credit_card </span>
              </div>
              <br />
              <span class="g-card_body">クレジットカードの変更・登録</span
              ><i class="g-i g-i-arrow-r g-only-sm" aria-hidden="true"></i>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "../../store/index";

// import { useRoute } from "vue-router";

// const route = useRoute();
const userId = 10011;
const store = useStore();
onMounted(() => {
  store.dispatch("setAccount", userId);
});
const account = computed(() => store.getters.getAccount);
console.log("account", account);
</script>
<style scoped>
a {
  text-decoration: none;
}
.g-link-t,
.g-lg-link-t {
  color: #009e96;
}
.g-link-t:hover {
  text-decoration: underline;
}
.g-myPageMembersCardCorpKbnNotCorporate {
  padding: 1px 12px 1px 12px;
  background-color: #009e96;
  color: #ffffff;
}
.g-list-note > li::before,
.g-lg-list-note > li::before {
  content: "\203B";
}
.g-list-note,
.g-lg-list-note {
  font-size: 1rem;
  line-height: 1.5;
}
.g-list-note,
.g-lg-list-note {
  font-size: 1rem;
  line-height: 1.58333;
  text-indent: -1em;
  color: #808080;
}
.p-welcome {
  margin-left: 20px;
}
.g-unit-xs {
  margin-left: -25px;
}
.p-welcome h1 span {
  font-weight: bold;
  margin-right: 5px;
}
.p-welcome h1 span {
  font-size: 1.8rem;
  line-height: 1.5;
}
.p-barcode {
  font-size: 1.6rem;
  line-height: 1.5;
  font-weight: bold;
  margin: auto;
  margin-top: 25px;
  margin-bottom: 5px;
  text-align: center;
}
.p-barcode {
  font-size: 1.6rem;
  line-height: 1.5;
}
img {
  max-width: 100%;
  vertical-align: bottom;
  border: 0;
  height: auto;
}
.p-barcode img {
  display: block;
  height: 50px;
  margin: 0 70px 5px;
}
.p-barcode img {
  height: 45px;
}
#memberCardNumber {
  margin: 2px 40px 20px -80px;
  font-size: 1.1rem;
}
dt {
  float: left;
  clear: left;
  font-feature-settings: "palt";
  margin-top: 5px;
}
.p-pointInfo dd {
  line-height: 1.4;
  width: 75%;
  text-align: right;
}
.p-pointInfo_available {
  font-size: 1.6rem;
  color: #eb6157;
}
.g-digit {
  font-family: "Helvetica Neue", Arial, sans-serif;
  font-weight: bold;
}
.p-pointInfo_lapse {
  font-size: 1.4rem;
}
.g-pane-border,
.g-lg-pane-border {
  overflow: hidden;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  background-color: #fff;
}
.g-lg-grid-1,
.g-lg-grid-2,
.g-lg-grid-3,
.g-lg-grid-4,
.g-lg-grid-5,
.g-lg-grid-6 {
  display: flex;
  flex-wrap: wrap;
}
.g-grid-3 > .g-grid_item,
.g-grid-3 > .g-grid_item,
.g-lg-grid-3 > .g-grid_item,
.g-lg-grid-3 > .g-grid_item {
  width: calc((100% - 50px) / 3 - 0.1px);
  padding: 12.5px 12.5px;
}
.g-lg-grid-1 > .g-grid_item,
.g-lg-grid-2 > .g-grid_item,
.g-lg-grid-3 > .g-grid_item,
.g-lg-grid-4 > .g-grid_item,
.g-lg-grid-5 > .g-grid_item,
.g-lg-grid-6 > .g-grid_item {
  box-sizing: content-box;
}
.g-pane-thick,
.g-lg-pane-thick {
  border-width: 2px;
  border-radius: 8px;
}
.g-pane,
.g-lg-pane {
  display: block;
}
.g-fh,
.g-lg-fh {
  height: 100%;
}
.g-align-tc,
.g-lg-align-tc {
  text-align: center !important;
  color: #009e96;
  font-weight: bold;
  height: 130px;
}
.g-lg-align-tc:hover {
  text-decoration: underline;
}
.p-iconText .g-card_head {
  height: 47px;
}
.g-card .g-card_head,
.g-lg-card .g-card_head {
  display: block;
  margin-bottom: 10px;
  -ms-grid-row: 1;
  grid-row: 1;
  -ms-grid-column: 1;
  grid-column: 1;
}
.material-symbols-outlined {
  font-family: "Material Symbols Outlined";
  font-weight: normal;
  font-style: normal;
  font-size: 3rem;
  line-height: 1.5;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;

  -webkit-font-smoothing: antialiased;
}
.g-sm-mb-20 {
  width: 600px;
}
</style>
