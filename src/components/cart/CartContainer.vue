<template>
  hahaha 我是cart

  <div class="g-layout-cart">
    <div class="g-layout_lead">
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
    </div>
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
          <section
            class="g-block"
            id="productPurchasedPriceComponentSection"
            data-imwidth="187"
            data-ts="1655114400"
            style=""
          >
            <h2 class="g-h-2">よく一緒に買われている商品</h2>

            <input
              type="hidden"
              id="silverEggUrl"
              value="https://nitori.silveregg.net:443/pycre5/jsonp/recommend"
            />
            <input type="hidden" id="silverEggMerchantId" value="nitori" />
            <input type="hidden" id="cookieId" value="recommendCookieID" />
            <input type="hidden" id="customerId" value="" />
            <input type="hidden" id="pcSpecId" value="pc412" />
            <input type="hidden" id="spSpecId" value="sp412" />
            <input type="hidden" id="requestCount" value="6" />
            <input
              type="hidden"
              id="silverEggClickUrl"
              value="https://nitori.silveregg.net:443/pycre5/jsonp/click"
            />
            <input type="hidden" id="parentCategoryId" value="" />

            <input type="hidden" id="highPcSpecId" value="pc411" />
            <input type="hidden" id="highSpSpecId" value="sp411" />
            <input type="hidden" id="thresholdPriceWithoutTax" value="3299" />

            <input type="hidden" id="catUrlPathLevel" value="" />
            <input type="hidden" id="seCategoryId" value="" />

            <input type="hidden" id="xcatPcSpecID" value="" />
            <input type="hidden" id="xcatSpSpecID" value="" />
            <input type="hidden" id="xcatUrlPathLevel" value="" />
            <input type="hidden" id="xseCategoryId" value="" /><input
              type="hidden"
              id="normalProductCode_0"
              value="1146691s"
            />
            <div id="mainComponent_0">
              <ul
                class="g-sm-grid-3 g-lg-grid-6 g-fixedGrid-6-recommendupper"
                data-tmp-equalize-heights=""
              >
                <li class="g-grid_item">
                  <div
                    id="handlebarsSectionPurchasedTogetherPrice_0_0"
                    class="g-card g-item click-notification"
                    data-clickable=""
                  >
                    <div class="g-card_head g-item_pic">
                      <img
                        class="g-fw g-rc"
                        src="https://www.nitori-net.jp/ecstatic/image/product/8987824/898782401.jpg?ts=20190821153249735&amp;imwidth=200&amp;imdensity=1&amp;zcp=1655114400"
                        alt=""
                      />
                    </div>
                    <p class="g-card_body g-item_h">
                      <a
                        class="pdp_url"
                        data-product-id="8987824s"
                        data-spec="pc412"
                        data-rqid="16981502"
                        data-href="https://www.nitori-net.jp/ec/product/8987824s/?rc=set"
                        >スライド水切りバスケット 深型ワイド</a
                      >
                    </p>
                    <div class="g-card_foot g-item_info">
                      <p class="g-price g-item_price" style="min-height: 50px">
                        1,518<span>円（税込）</span>
                      </p>
                      <p class="g-score g-sm-score-sm g-item_score">
                        <span data-score="4.625"
                          ><span class="g-clip">平均評価4.625点</span></span
                        ><span aria-label="商品レビュー数">(8)</span>
                      </p>
                    </div>
                  </div>
                </li>
                <li class="g-grid_item">
                  <div
                    id="handlebarsSectionPurchasedTogetherPrice_0_1"
                    class="g-card g-item click-notification"
                    data-clickable=""
                  >
                    <div class="g-card_head g-item_pic">
                      <img
                        class="g-fw g-rc"
                        src="https://www.nitori-net.jp/ecstatic/image/product/8450941/845094101.jpg?ts=20210621175224585&amp;imwidth=200&amp;imdensity=1&amp;zcp=1655114400"
                        alt=""
                      />
                    </div>
                    <p class="g-card_body g-item_h">
                      <a
                        class="pdp_url"
                        data-product-id="8450941s"
                        data-spec="pc412"
                        data-rqid="16981502"
                        data-href="https://www.nitori-net.jp/ec/product/8450941s/?rc=set"
                        >スリムペダルペール</a
                      >
                    </p>
                    <div class="g-card_foot g-item_info">
                      <p class="g-price g-item_price" style="min-height: 50px">
                        999～1,790<span>円（税込）</span>
                      </p>
                      <p class="g-score g-sm-score-sm g-item_score">
                        <span data-score="4.264705882352941"
                          ><span class="g-clip"
                            >平均評価4.264705882352941点</span
                          ></span
                        ><span aria-label="商品レビュー数">(34)</span>
                      </p>
                    </div>
                  </div>
                </li>
                <li class="g-grid_item">
                  <div
                    id="handlebarsSectionPurchasedTogetherPrice_0_2"
                    class="g-card g-item click-notification"
                    data-clickable=""
                  >
                    <div class="g-card_head g-item_pic">
                      <img
                        class="g-fw g-rc"
                        src="https://www.nitori-net.jp/ecstatic/image/product/8984057/898405701.jpg?ts=20190725190108634&amp;imwidth=200&amp;imdensity=1&amp;zcp=1655114400"
                        alt=""
                      />
                    </div>
                    <p class="g-card_body g-item_h">
                      <a
                        class="pdp_url"
                        data-product-id="8984057s"
                        data-spec="pc412"
                        data-rqid="16981502"
                        data-href="https://www.nitori-net.jp/ec/product/8984057s/?rc=set"
                        >水が流れる洗剤スポンジラック(スポンジラック)</a
                      >
                    </p>
                    <div class="g-card_foot g-item_info">
                      <p class="g-price g-item_price" style="min-height: 50px">
                        1,017<span>円（税込）</span>
                      </p>
                      <p class="g-score g-sm-score-sm g-item_score">
                        <span data-score="3.72727"
                          ><span class="g-clip">平均評価3.72727点</span></span
                        ><span aria-label="商品レビュー数">(22)</span>
                      </p>
                    </div>
                  </div>
                </li>
                <li class="g-grid_item">
                  <div
                    id="handlebarsSectionPurchasedTogetherPrice_0_3"
                    class="g-card g-item click-notification"
                    data-clickable=""
                  >
                    <div class="g-card_head g-item_pic">
                      <img
                        class="g-fw g-rc"
                        src="https://www.nitori-net.jp/ecstatic/image/product/7518061s/7518061s00.jpg?ts=20211129172037555&amp;imwidth=200&amp;imdensity=1&amp;zcp=1655114400"
                        alt=""
                      />
                    </div>
                    <p class="g-card_body g-item_h">
                      <a
                        class="pdp_url"
                        data-product-id="7518061s"
                        data-spec="pc412"
                        data-rqid="16981502"
                        data-href="https://www.nitori-net.jp/ec/product/7518061s/?rc=set"
                        >たて・よこストレッチ Nフィットシーツ(イブ)</a
                      >
                    </p>
                    <div class="g-card_foot g-item_info">
                      <p class="g-price g-item_price" style="min-height: 50px">
                        1,490～1,990<span>円（税込）</span>
                      </p>
                      <p class="g-score g-sm-score-sm g-item_score">
                        <span data-score="4.789472894736841"
                          ><span class="g-clip"
                            >平均評価4.789472894736841点</span
                          ></span
                        ><span aria-label="商品レビュー数">(76)</span>
                      </p>
                    </div>
                  </div>
                </li>
                <li class="g-grid_item">
                  <div
                    id="handlebarsSectionPurchasedTogetherPrice_0_4"
                    class="g-card g-item click-notification"
                    data-clickable=""
                  >
                    <div class="g-card_head g-item_pic">
                      <img
                        class="g-fw g-rc"
                        src="https://www.nitori-net.jp/ecstatic/image/product/8930899/893089901.jpg?ts=20211129112151093&amp;imwidth=200&amp;imdensity=1&amp;zcp=1655114400"
                        alt=""
                      />
                    </div>
                    <p class="g-card_body g-item_h">
                      <a
                        class="pdp_url"
                        data-product-id="8930899s"
                        data-spec="pc412"
                        data-rqid="16981502"
                        data-href="https://www.nitori-net.jp/ec/product/8930899s/?rc=set"
                        >Easyレバーキャニスター(L)</a
                      >
                    </p>
                    <div class="g-card_foot g-item_info">
                      <p class="g-label-price g-item_label">値下げ</p>
                      <p
                        class="g-price g-item_price g-price-down"
                        style="min-height: 50px"
                      >
                        899～1,290<span>円（税込）</span>
                      </p>
                      <p class="g-score g-sm-score-sm g-item_score">
                        <span data-score="4.666667916666667"
                          ><span class="g-clip"
                            >平均評価4.666667916666667点</span
                          ></span
                        ><span aria-label="商品レビュー数">(24)</span>
                      </p>
                    </div>
                  </div>
                </li>
                <li class="g-grid_item">
                  <div
                    id="handlebarsSectionPurchasedTogetherPrice_0_5"
                    class="g-card g-item click-notification"
                    data-clickable=""
                  >
                    <div class="g-card_head g-item_pic">
                      <img
                        class="g-fw g-rc"
                        src="https://www.nitori-net.jp/ecstatic/image/product/7383094-001s/7383094-001s00.jpg?ts=20210903105148652&amp;imwidth=200&amp;imdensity=1&amp;zcp=1655114400"
                        alt=""
                      />
                    </div>
                    <p class="g-card_body g-item_h">
                      <a
                        class="pdp_url"
                        data-product-id="7383094-001s"
                        data-spec="pc412"
                        data-rqid="16981502"
                        data-href="https://www.nitori-net.jp/ec/product/7383094-001s/?rc=set"
                        >お好みサイズレースカーテン アクティ</a
                      >
                    </p>
                    <div class="g-card_foot g-item_info">
                      <p class="g-price g-item_price" style="min-height: 50px">
                        2,750～12,834<span>円（税込）</span>
                      </p>
                      <p class="g-score g-sm-score-sm g-item_score">
                        <span data-score="4"
                          ><span class="g-clip">平均評価4点</span></span
                        ><span aria-label="商品レビュー数">(1)</span>
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div id="mainComponent_1">
              <ul class="g-sm-grid-3 g-lg-grid-6" data-tmp-equalize-heights="">
                <li class="g-grid_item">
                  <div
                    id="handlebarsSectionPurchasedTogetherPrice_1_0"
                    class="g-card g-item click-notification"
                    data-clickable=""
                  >
                    <div class="g-card_head g-item_pic">
                      <img
                        class="g-fw g-rc"
                        src="https://www.nitori-net.jp/ecstatic/image/product/1146021s/1146021s00.jpg?ts=20210907110215282&amp;imwidth=200&amp;imdensity=1&amp;zcp=1655114400"
                        alt=""
                      />
                    </div>
                    <p class="g-card_body g-item_h">
                      <a
                        class="pdp_url"
                        data-product-id="1146021s"
                        data-spec="pc411"
                        data-rqid="1029776323"
                        data-href="https://www.nitori-net.jp/ec/product/1146021s/?rc=set"
                        >スツール(Nポケット DR)</a
                      >
                    </p>
                    <div class="g-card_foot g-item_info">
                      <p class="g-price g-item_price" style="min-height: 50px">
                        11,900<span>円（税込）</span>
                      </p>
                      <p class="g-score g-sm-score-sm g-item_score">
                        <span data-score="4.166666666666667"
                          ><span class="g-clip"
                            >平均評価4.166666666666667点</span
                          ></span
                        ><span aria-label="商品レビュー数">(6)</span>
                      </p>
                    </div>
                  </div>
                </li>
                <li class="g-grid_item">
                  <div
                    id="handlebarsSectionPurchasedTogetherPrice_1_1"
                    class="g-card g-item click-notification"
                    data-clickable=""
                  >
                    <div class="g-card_head g-item_pic">
                      <img
                        class="g-fw g-rc"
                        src="https://www.nitori-net.jp/ecstatic/image/product/4008047/400804701.jpg?ts=20220214065403678&amp;imwidth=200&amp;imdensity=1&amp;zcp=1655114400"
                        alt=""
                      />
                    </div>
                    <p class="g-card_body g-item_h">
                      <a
                        class="pdp_url"
                        data-product-id="4008061s"
                        data-spec="pc411"
                        data-rqid="1029776323"
                        data-href="https://www.nitori-net.jp/ec/product/4008061s/?rc=set"
                        >ダイニングテーブル(Nコレクション T-01)</a
                      >
                    </p>
                    <div class="g-card_foot g-item_info">
                      <p class="g-price g-item_price" style="min-height: 50px">
                        34,900～44,900<span>円（税込）</span>
                      </p>
                      <p class="g-score g-sm-score-sm g-item_score">
                        <span data-score="3.523807619047619"
                          ><span class="g-clip"
                            >平均評価3.523807619047619点</span
                          ></span
                        ><span aria-label="商品レビュー数">(21)</span>
                      </p>
                    </div>
                  </div>
                </li>
                <li class="g-grid_item">
                  <div
                    id="handlebarsSectionPurchasedTogetherPrice_1_2"
                    class="g-card g-item click-notification"
                    data-clickable=""
                  >
                    <div class="g-card_head g-item_pic">
                      <img
                        class="g-fw g-rc"
                        src="https://www.nitori-net.jp/ecstatic/image/product/3000435/300043501.jpg?ts=20220111152123504&amp;imwidth=200&amp;imdensity=1&amp;zcp=1655114400"
                        alt=""
                      />
                    </div>
                    <p class="g-card_body g-item_h">
                      <a
                        class="pdp_url"
                        data-product-id="3000435s"
                        data-spec="pc411"
                        data-rqid="1029776323"
                        data-href="https://www.nitori-net.jp/ec/product/3000435s/?rc=set"
                        >ローボード(カレナ120LB)</a
                      >
                    </p>
                    <div class="g-card_foot g-item_info">
                      <p class="g-price g-item_price" style="min-height: 50px">
                        24,900～29,900<span>円（税込）</span>
                      </p>
                      <p class="g-score g-sm-score-sm g-item_score">
                        <span data-score="5"
                          ><span class="g-clip">平均評価5点</span></span
                        ><span aria-label="商品レビュー数">(1)</span>
                      </p>
                    </div>
                  </div>
                </li>
                <li class="g-grid_item">
                  <div
                    id="handlebarsSectionPurchasedTogetherPrice_1_3"
                    class="g-card g-item click-notification"
                    data-clickable=""
                  >
                    <div class="g-card_head g-item_pic">
                      <img
                        class="g-fw g-rc"
                        src="https://www.nitori-net.jp/ecstatic/image/product/5620871-5620872/5620871-562087201.jpg?ts=20190725133730060&amp;imwidth=200&amp;imdensity=1&amp;zcp=1655114400"
                        alt=""
                      />
                    </div>
                    <p class="g-card_body g-item_h">
                      <a
                        class="pdp_url"
                        data-product-id="5620871-5620872s"
                        data-spec="pc411"
                        data-rqid="1029776323"
                        data-href="https://www.nitori-net.jp/ec/product/5620871-5620872s/?rc=set"
                        >ダイニングテーブル3点セット (75×75cm)</a
                      >
                    </p>
                    <div class="g-card_foot g-item_info">
                      <p class="g-price g-item_price" style="min-height: 50px">
                        20,900<span>円（税込）</span>
                      </p>
                      <p class="g-score g-sm-score-sm g-item_score">
                        <span data-score="4.43589358974359"
                          ><span class="g-clip"
                            >平均評価4.43589358974359点</span
                          ></span
                        ><span aria-label="商品レビュー数">(39)</span>
                      </p>
                    </div>
                  </div>
                </li>
                <li class="g-grid_item">
                  <div
                    id="handlebarsSectionPurchasedTogetherPrice_1_4"
                    class="g-card g-item click-notification"
                    data-clickable=""
                  >
                    <div class="g-card_head g-item_pic">
                      <img
                        class="g-fw g-rc"
                        src="https://www.nitori-net.jp/ecstatic/image/product/5655083/565508301.jpg?ts=20220422092309480&amp;imwidth=200&amp;imdensity=1&amp;zcp=1655114400"
                        alt=""
                      />
                    </div>
                    <p class="g-card_body g-item_h">
                      <a
                        class="pdp_url"
                        data-product-id="5655083s"
                        data-spec="pc411"
                        data-rqid="1029776323"
                        data-href="https://www.nitori-net.jp/ec/product/5655083s/?rc=set"
                        >壁付けできる回転式コミックラック</a
                      >
                    </p>
                    <div class="g-card_foot g-item_info">
                      <p class="g-label-price g-item_label">値下げ</p>
                      <p
                        class="g-price g-item_price g-price-down"
                        style="min-height: 50px"
                      >
                        8,990～9,990<span>円（税込）</span>
                      </p>
                      <p class="g-score g-sm-score-sm g-item_score">
                        <span data-score="3.583331666666666"
                          ><span class="g-clip"
                            >平均評価3.583331666666666点</span
                          ></span
                        ><span aria-label="商品レビュー数">(12)</span>
                      </p>
                    </div>
                  </div>
                </li>
                <li class="g-grid_item">
                  <div
                    id="handlebarsSectionPurchasedTogetherPrice_1_5"
                    class="g-card g-item click-notification"
                    data-clickable=""
                  >
                    <div class="g-card_head g-item_pic">
                      <img
                        class="g-fw g-rc"
                        src="https://www.nitori-net.jp/ecstatic/image/product/3000521/300052101.jpg?ts=20200227145205516&amp;imwidth=200&amp;imdensity=1&amp;zcp=1655114400"
                        alt=""
                      />
                    </div>
                    <p class="g-card_body g-item_h">
                      <a
                        class="pdp_url"
                        data-product-id="3000521s"
                        data-spec="pc411"
                        data-rqid="1029776323"
                        data-href="https://www.nitori-net.jp/ec/product/3000521s/?rc=set"
                        >ローボード(レシェンテ)</a
                      >
                    </p>
                    <div class="g-card_foot g-item_info">
                      <p class="g-price g-item_price" style="min-height: 50px">
                        24,900<span>円（税込）</span>
                      </p>
                      <p class="g-score g-sm-score-sm g-item_score">
                        <span data-score="4.299998"
                          ><span class="g-clip">平均評価4.299998点</span></span
                        ><span aria-label="商品レビュー数">(10)</span>
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
      <div class="g-hr g-only-lg"></div>
      <div class="">
        <div class="">
          <section
            id="recentlyViewedMainSection"
            class="g-block"
            data-imwidth="187"
            data-ts="1655114400"
            style=""
          >
            <h2 class="g-h-2">最近チェックした商品</h2>

            <ul class="g-sm-grid-3 g-lg-grid-6" data-tmp-equalize-heights="">
              <li class="g-grid_item g-grid_item">
                <div
                  id="handlebarsSectionRecentlyViewed_0"
                  class="g-card g-item click-notification"
                  data-clickable=""
                >
                  <div class="g-card_head g-item_pic">
                    <img
                      class="g-fw g-rc lozad"
                      data-src="https://www.nitori-net.jp/ecstatic/image/product/1146463/114646301.jpg?ts=20220111065606459&amp;imwidth=200&amp;imdensity=1&amp;zcp=1655114400"
                      alt=""
                      width="600"
                      height="600"
                      src="https://www.nitori-net.jp/ecstatic/image/product/1146463/114646301.jpg?ts=20220111065606459&amp;imwidth=200&amp;imdensity=1&amp;zcp=1655114400"
                      data-loaded="true"
                    />
                  </div>
                  <p class="g-card_body g-item_h">
                    <a
                      class="pdp_url"
                      data-product-id="1146461s"
                      data-href="https://www.nitori-net.jp/ec/product/1146461s/?rc=set"
                      >布張りソファ(NポケットA12 DR)</a
                    >
                  </p>
                  <div class="g-card_foot g-item_info">
                    <p class="g-price g-item_price" style="min-height: 50px">
                      78,800～89,900<span>円（税込）</span>
                    </p>
                    <p class="g-score g-sm-score-sm g-item_score">
                      <span data-score="4.620689655172414"
                        ><span class="g-clip"
                          >平均評価4.620689655172414点</span
                        ></span
                      ><span aria-label="商品レビュー数">(29)</span>
                    </p>
                  </div>
                </div>
              </li>
              <li class="g-grid_item g-grid_item">
                <div
                  id="handlebarsSectionRecentlyViewed_1"
                  class="g-card g-item click-notification"
                  data-clickable=""
                >
                  <div class="g-card_head g-item_pic">
                    <img
                      class="g-fw g-rc lozad"
                      data-src="https://www.nitori-net.jp/ecstatic/image/product/5601545/560154501.jpg?ts=20220422065243861&amp;imwidth=200&amp;imdensity=1&amp;zcp=1655114400"
                      alt=""
                      width="600"
                      height="600"
                      src="https://www.nitori-net.jp/ecstatic/image/product/5601545/560154501.jpg?ts=20220422065243861&amp;imwidth=200&amp;imdensity=1&amp;zcp=1655114400"
                      data-loaded="true"
                    />
                  </div>
                  <p class="g-card_body g-item_h">
                    <a
                      class="pdp_url"
                      data-product-id="5601545s"
                      data-href="https://www.nitori-net.jp/ec/product/5601545s/?rc=set"
                      >肘付きローソファ(ふっくらパン)</a
                    >
                  </p>
                  <div class="g-card_foot g-item_info">
                    <p class="g-label-price g-item_label">値下げ</p>
                    <p
                      class="g-price g-item_price g-price-down"
                      style="min-height: 50px"
                    >
                      12,900<span>円（税込）</span>
                    </p>
                    <p class="g-score g-sm-score-sm g-item_score">
                      <span data-score="3.7586199999999996"
                        ><span class="g-clip"
                          >平均評価3.7586199999999996点</span
                        ></span
                      ><span aria-label="商品レビュー数">(29)</span>
                    </p>
                  </div>
                </div>
              </li>
              <li class="g-grid_item g-grid_item">
                <div
                  id="handlebarsSectionRecentlyViewed_2"
                  class="g-card g-item click-notification"
                  data-clickable=""
                >
                  <div class="g-card_head g-item_pic">
                    <img
                      class="g-fw g-rc lozad"
                      data-src="https://www.nitori-net.jp/ecstatic/image/product/1138940s/1138940s00.jpg?ts=20220421071738110&amp;imwidth=200&amp;imdensity=1&amp;zcp=1655114400"
                      alt=""
                      width="600"
                      height="600"
                      src="https://www.nitori-net.jp/ecstatic/image/product/1138940s/1138940s00.jpg?ts=20220421071738110&amp;imwidth=200&amp;imdensity=1&amp;zcp=1655114400"
                      data-loaded="true"
                    />
                  </div>
                  <p class="g-card_body g-item_h">
                    <a
                      class="pdp_url"
                      data-product-id="1138940s"
                      data-href="https://www.nitori-net.jp/ec/product/1138940s/?rc=set"
                      >布張りソファ(マイス)</a
                    >
                  </p>
                  <div class="g-card_foot g-item_info">
                    <p class="g-label-price g-item_label">値下げ</p>
                    <p
                      class="g-price g-item_price g-price-down"
                      style="min-height: 50px"
                    >
                      54,900～64,900<span>円（税込）</span>
                    </p>
                    <p class="g-score g-sm-score-sm g-item_score">
                      <span data-score="4.533333333333333"
                        ><span class="g-clip"
                          >平均評価4.533333333333333点</span
                        ></span
                      ><span aria-label="商品レビュー数">(15)</span>
                    </p>
                  </div>
                </div>
              </li>
              <li class="g-grid_item g-grid_item">
                <div
                  id="handlebarsSectionRecentlyViewed_3"
                  class="g-card g-item click-notification"
                  data-clickable=""
                >
                  <div class="g-card_head g-item_pic">
                    <img
                      class="g-fw g-rc lozad"
                      data-src="https://www.nitori-net.jp/ecstatic/image/product/1141240s/1141240s00.jpg?ts=20210907103945550&amp;imwidth=200&amp;imdensity=1&amp;zcp=1655114400"
                      alt=""
                      width="600"
                      height="600"
                      src="https://www.nitori-net.jp/ecstatic/image/product/1141240s/1141240s00.jpg?ts=20210907103945550&amp;imwidth=200&amp;imdensity=1&amp;zcp=1655114400"
                      data-loaded="true"
                    />
                  </div>
                  <p class="g-card_body g-item_h">
                    <a
                      class="pdp_url"
                      data-product-id="1141240s"
                      data-href="https://www.nitori-net.jp/ec/product/1141240s/?rc=set"
                      >布張りローソファ (フェルザ3 DGY)</a
                    >
                  </p>
                  <div class="g-card_foot g-item_info">
                    <p class="g-price g-item_price" style="min-height: 50px">
                      59,900～79,900<span>円（税込）</span>
                    </p>
                    <p class="g-score g-sm-score-sm g-item_score">
                      <span data-score="3.7500025"
                        ><span class="g-clip">平均評価3.7500025点</span></span
                      ><span aria-label="商品レビュー数">(4)</span>
                    </p>
                  </div>
                </div>
              </li>
              <li class="g-grid_item g-grid_item">
                <div
                  id="handlebarsSectionRecentlyViewed_4"
                  class="g-card g-item click-notification"
                  data-clickable=""
                >
                  <div class="g-card_head g-item_pic">
                    <img
                      class="g-fw g-rc lozad"
                      data-src="https://www.nitori-net.jp/ecstatic/image/product/1211240s/1211240s00.jpg?ts=20210907133216555&amp;imwidth=200&amp;imdensity=1&amp;zcp=1655114400"
                      alt=""
                      width="600"
                      height="600"
                      src="https://www.nitori-net.jp/ecstatic/image/product/1211240s/1211240s00.jpg?ts=20210907133216555&amp;imwidth=200&amp;imdensity=1&amp;zcp=1655114400"
                      data-loaded="true"
                    />
                  </div>
                  <p class="g-card_body g-item_h">
                    <a
                      class="pdp_url"
                      data-product-id="1211240s"
                      data-href="https://www.nitori-net.jp/ec/product/1211240s/?rc=set"
                      >ローソファ3点セット(ノーザン3)</a
                    >
                  </p>
                  <div class="g-card_foot g-item_info">
                    <p class="g-price g-item_price" style="min-height: 50px">
                      39,900<span>円（税込）</span>
                    </p>
                    <p class="g-score g-sm-score-sm g-item_score">
                      <span data-score="4"
                        ><span class="g-clip">平均評価4点</span></span
                      ><span aria-label="商品レビュー数">(4)</span>
                    </p>
                  </div>
                </div>
              </li>
              <li class="g-grid_item g-grid_item">
                <div
                  id="handlebarsSectionRecentlyViewed_5"
                  class="g-card g-item click-notification"
                  data-clickable=""
                >
                  <div class="g-card_head g-item_pic">
                    <img
                      class="g-fw g-rc lozad"
                      data-src="https://www.nitori-net.jp/ecstatic/image/product/7518075s/7518075s00.jpg?ts=20210923160829421&amp;imwidth=200&amp;imdensity=1&amp;zcp=1655114400"
                      alt=""
                      width="600"
                      height="600"
                      src="https://www.nitori-net.jp/ecstatic/image/product/7518075s/7518075s00.jpg?ts=20210923160829421&amp;imwidth=200&amp;imdensity=1&amp;zcp=1655114400"
                      data-loaded="true"
                    />
                  </div>
                  <p class="g-card_body g-item_h">
                    <a
                      class="pdp_url"
                      data-product-id="7518075s"
                      data-href="https://www.nitori-net.jp/ec/product/7518075s/?rc=set"
                      >掛け布団カバー(コットンウォッシュ)</a
                    >
                  </p>
                  <div class="g-card_foot g-item_info">
                    <p class="g-price g-item_price" style="min-height: 50px">
                      1,990～2,990<span>円（税込）</span>
                    </p>
                    <p class="g-score g-sm-score-sm g-item_score">
                      <span data-score="4.225000249999999"
                        ><span class="g-clip"
                          >平均評価4.225000249999999点</span
                        ></span
                      ><span aria-label="商品レビュー数">(40)</span>
                    </p>
                  </div>
                </div>
              </li>
            </ul>

            <div class="g-sm-foot-v g-lg-foot-h">
              <p>
                <a class="g-btn g-btn-w-md" href="/ec/History/"
                  ><span>最近チェックした商品をもっと見る</span
                  ><i class="g-i g-i-arrow-r" aria-hidden="true"></i
                ></a>
              </p>
            </div>

            <input
              type="hidden"
              id="silverEggUrl"
              value="https://nitori.silveregg.net:443/pycre5/jsonp/recommend"
            />
            <input type="hidden" id="silverEggMerchantId" value="nitori" />
            <input type="hidden" id="cookieId" value="recommendCookieID" />
            <input type="hidden" id="customerId" value="" />
            <input type="hidden" id="pcSpecId" value="pc421" />
            <input type="hidden" id="spSpecId" value="sp421" />
            <input type="hidden" id="requestCount" value="6" />
            <input
              type="hidden"
              id="silverEggClickUrl"
              value="https://nitori.silveregg.net:443/pycre5/jsonp/click"
            />
            <input type="hidden" id="parentCategoryId" value="" />

            <input type="hidden" id="highPcSpecId" value="" />
            <input type="hidden" id="highSpSpecId" value="" />
            <input type="hidden" id="thresholdPriceWithoutTax" value="" />

            <input type="hidden" id="catUrlPathLevel" value="" />
            <input type="hidden" id="seCategoryId" value="" />

            <input type="hidden" id="xcatPcSpecID" value="" />
            <input type="hidden" id="xcatSpSpecID" value="" />
            <input type="hidden" id="xcatUrlPathLevel" value="" />
            <input type="hidden" id="xseCategoryId" value="" />
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style></style>
