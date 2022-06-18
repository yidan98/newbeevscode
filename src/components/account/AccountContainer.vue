<template>
  <div>
    <div class="g-layout_lead">
      <div class="yCmsComponent">
        <div class="g-sm-full g-breadcrumb">
          <div class="swiper-container">
            <ol
              class="swiper-wrapper"
              itemscope=""
              itemtype="http://schema.org/BreadcrumbList"
            >
              <li
                class="swiper-slide"
                itemprop="itemListElement"
                itemscope=""
                itemtype="http://schema.org/ListItem"
              >
                <a href="/ec" itemprop="item"
                  ><span id="myPageBreadCrumb1" itemprop="name">ホーム</span></a
                >
                <meta itemprop="position" content="1" />
              </li>
              <li
                class="swiper-slide"
                itemprop="itemListElement"
                itemscope=""
                itemtype="http://schema.org/ListItem"
              >
                <span itemprop="item" aria-current="page"
                  ><span id="myPageBreadCrumb2" itemprop="name"
                    >マイページ</span
                  ></span
                >
                <meta itemprop="position" content="2" />
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>

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
              ><span class="g-list-note">会員種別について</span
              ><i class="g-i g-i-info about-corpkbn" aria-hidden="true"></i
            ></a>
          </li>
        </ul>
        <div class="g-butterfly">
          <h1>
            <span>{{ account.name }}</span
            >さんの会員証
          </h1>
        </div>
        <div class="p-barcode">
          <img id="js-bar-code" :src="account.QRCode" />
          <p id="memberCardNumber">{{ account.codeNumber }}</p>
        </div>
        <dl class="p-pointInfo">
          <dt>現在のポイント</dt>
          <dd class="g-digit p-pointInfo_available">
            {{ account.currentPoint }}<span>pt</span>
          </dd>
          <dt>今年失効するポイント</dt>
          <dd class="g-digit p-pointInfo_lapse">
            {{ account.invalidPoint }}<span>pt</span>
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
            href="/ec/my-account/orders"
          >
            <div
              class="g-sm-btn g-sm-btn-item g-lg-card g-lg-align-tc p-iconText"
            >
              <div class="g-card_head">
                <i class="g-s g-s-history g-hover_img"></i>
              </div>
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
                <i class="g-s g-s-favorite g-hover_img"></i>
              </div>
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
                <i class="g-s g-s-shop g-hover_img"></i>
              </div>
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
                <i class="g-s g-s-person g-hover_img"></i>
              </div>
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
                <i class="g-s g-s-address g-hover_img"></i>
              </div>
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
                <i class="g-s g-s-payment g-hover_img"></i>
              </div>
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
<style></style>
