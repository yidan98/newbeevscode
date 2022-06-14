<template>
  <div class="g-layout-cart">
    <!-- <div class="g-layout_lead">
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
              <a href="/" itemprop="item"
                ><span itemprop="name">ホーム</span></a
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
                ><span itemprop="name">カート</span></span
              >
              <meta itemprop="position" content="2" />
            </li>
          </ol>
        </div>
      </div>
    </div> -->
    <div class="g-layout_head">
      <h1>カート</h1>
    </div>
    <div class="g-layout_body">
      <ul class="g-itemList">
        <li class="g-itemList_item g-media g-media-lg p-cartItem">
          <p class="g-media_head">
            <a class="g-hover" href="/goods/detail/10195/"
              ><img
                class="g-fw g-rc"
                src="https://www.nitori-net.jp/ecstatic/image/product/1146701/114670101.jpg?imwidth=140&amp;imdensity=1&amp;ts=20200713182233968"
                srcset="
                  https://www.nitori-net.jp/ecstatic/image/product/1146701/114670101.jpg?imwidth=97&amp;imdensity=1&amp;ts=20200713182233968 2x
                "
                alt="2人用布張りソファ (NポケットA13 DR-DMO)"
            /></a>
          </p>
          <div class="g-media_body g-units-sm">
            <p class="g-media_h">
              <a href="/ec/product/1146701/"
                >2人用布張りソファ (NポケットA13 DR-DMO)</a
              >
            </p>
            <p class="g-font-sm">商品コード 1146701</p>
            <ul class="g-font-sm">
              <li>ソファタイプ：2人用ソファ</li>
              <li>カラー：ダークモカ</li>
              <li></li>
            </ul>
            <p class="g-price">59,900<span>円 （税込）</span></p>
            <div class="g-butterfly g-font-sm">
              <p>
                6月下旬以降のお届け予定となります。(6月10日現在)※地域により異なる場合がございます。
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
                <input id="pk" name="pk" value="12605905698860" type="hidden" />
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
                <input id="pk" name="pk" value="12605905698860" type="hidden" />
                <div>
                  <input
                    type="hidden"
                    name="CSRFToken"
                    value="435ab45c-1be3-4a3e-a72d-f10d61e6e0e7"
                  />
                </div>
              </form>
              <div class="p-cartItem_pcs">
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
                    name="quantity"
                    value="1"
                    aria-label="個数"
                    onchange="if(this.value&amp;&amp;this.value!=='1') uniUpdateQuantityForm0.submit();"
                    aria-describedby="p-cartItem_pcs0_alert"
                    data-validation-rules='[{"action":"hankaku"},{"rule":"number"}]'
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
              </div>
              <p class="p-cartItem_btn">
                <a
                  class="g-btn g-btn-sm g-btn-em g-fw g-sm-font-md"
                  href="javascript:chgItem('uniAddLaterListEntryForm','0',false)"
                  data-once=""
                  ><span>あとで買う</span></a
                >
              </p>
              <p class="p-cartItem_del">
                <a
                  class="g-link g-link-gray"
                  href="javascript:chgItem('uniDeleteCartEntryForm','0',false)"
                  data-once=""
                  ><i class="g-i g-i-close" aria-hidden="true"></i
                  ><span>削除</span></a
                >
              </p>
              <div class="p-cartItem_sum">
                <p class="g-price"><span>個別送料</span>0<span>円</span></p>
                <p class="g-price g-lg-price-lg">
                  <span>小計</span>59,900<span>円 （税込）</span>
                </p>
              </div>
            </div>
          </div>
          <div class="p-cartItem_addon g-sm-units-sm g-lg-units-lg">
            <ul class="g-flow-xs g-item_label">
              <li class="g-label-brand">配送センター受取可能商品</li>
            </ul>
            <div class="g-pane g-pane-brand g-pane-sm g-units-sm">
              <label class="g-checkable">
                <form
                  id="uniUpdatePickupTypeForm0"
                  name="uniUpdatePickupTypeForm0"
                  action="/ec/cart/update/pickupType"
                  method="post"
                  autocomplete="off"
                >
                  <input
                    id="pk"
                    name="pk"
                    value="12605905698860"
                    type="hidden"
                  /><input
                    type="checkbox"
                    name="usedPickup"
                    value="1"
                    onclick="javascript:uniUpdatePickupTypeForm0.submit()"
                  /><span
                    ><i
                      class="g-s g-s-checkbox-on g-checkable_on"
                      aria-hidden="true"
                    ></i
                    ><i
                      class="g-s g-s-checkbox-off g-checkable_off"
                      aria-hidden="true"
                    ></i
                    ><span class="g-checkable_label"
                      >引取りサービスを利用する</span
                    ></span
                  >
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
      </ul>
    </div>

    <div class="g-layout_sidebar">
      <div data-attr='{"lg":{"data-sticky":true}}' data-sticky="true">
        <section class="g-pane g-pane-gray g-units-lg g-lg-sticky">
          <div class="p-payment">
            <dl class="p-payment_total">
              <dt class="p-paymentAmountLabel">お支払金額</dt>
              <dd class="g-price g-price-lg">59,900<span>円</span></dd>
            </dl>
            <div class="p-payment_body g-units-lg">
              <dl
                class="p-payment_itemized p-shorten-dl"
                id="p-payment_itemized"
              >
                <dt></dt>
                <dd style="margin-top: 3px"></dd>

                <dt class="p-payment_sum p-paymentSumShorten">商品金額合計</dt>
                <dd>59,900<span>円</span></dd>
                <dt>送料</dt>
                <dd>0<span>円</span></dd>
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
                <label class="g-checkable">
                  <input
                    type="radio"
                    name="checkoutFlowMode"
                    value="DELIVERY"
                  /><span
                    ><i
                      class="g-s g-s-radio-on g-checkable_on"
                      aria-hidden="true"
                    ></i
                    ><i
                      class="g-s g-s-radio-off g-checkable_off"
                      aria-hidden="true"
                    ></i
                    ><span class="g-checkable_label"
                      >ご指定の場所に配送する</span
                    ></span
                  >
                </label>
              </li>
              <li class="g-mt-10">
                <label class="g-checkable">
                  <input
                    type="radio"
                    name="checkoutFlowMode"
                    value="PICKUP"
                  /><span
                    ><i
                      class="g-s g-s-radio-on g-checkable_on"
                      aria-hidden="true"
                    ></i
                    ><i
                      class="g-s g-s-radio-off g-checkable_off"
                      aria-hidden="true"
                    ></i
                    ><span class="g-checkable_label"
                      ><span class="g-align-vm g-mr-10"
                        >店舗/配送センターで受け取る</span
                      ><span class="g-label-price">送料無料</span></span
                    ></span
                  >
                </label>
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
                onclick="javascript:checkoutFlowModeForm.submit();return false;"
              >
                <span>レジへ進む</span>
              </button>
            </p>
            <p>
              <a class="g-btn g-fw" href="/ec/"
                ><span>ショッピングを続ける</span
                ><i class="g-i g-i-arrow-r" aria-hidden="true"></i
              ></a>
            </p>
          </div>
        </section>
      </div>
    </div>
    <div class="g-layout_tail">
      <div class="">
        <div class="">
          <div class="g-hr g-only-lg"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style></style>
