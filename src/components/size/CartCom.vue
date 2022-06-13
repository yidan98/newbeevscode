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
              <dd><span>配送員設置又は配送センター受取商品</span></dd>
              <dt>&nbsp;&nbsp;&nbsp; 配送目安</dt>
              <dd>
                06月下旬以降のお届けとなります。(06月12日現在)<br />※地域により異なる場合がございます。
              </dd>
              <dt>&nbsp;&nbsp;&nbsp; 返品・交換</dt>
              <dd>
                14日間返品可能
                <p class="p-order_help">
                  <a class="g-link" href="/ec/userguide/cancel/">
                    <span>返品・交換について</span
                    ><i class="g-i g-i-info" aria-hidden="true"></i>
                  </a>
                </p>
              </dd>
              <dt>&nbsp;&nbsp;&nbsp; 送料</dt>
              <dd>
                <span class="g-label-price">有料</span>
                <p class="p-order_help">
                  <a class="g-link" href="/ec/userguide/delivery/"
                    ><span>送料について</span
                    ><i class="g-i g-i-info" aria-hidden="true"></i
                  ></a>
                </p>
              </dd>
            </dl>

            <p><img src="/ecstatic/front/kumitate.jpg" alt="" /></p>
            <dl class="p-pcs">
              <dt>
                <label for="p-pieces"> &nbsp;&nbsp;&nbsp; 数量</label>
              </dt>
              <dd>
                <input
                  class="g-input g-input-sm addToCartQty"
                  id="p-pieces"
                  type="text"
                  name="quantity"
                  value="1"
                  size="5"
                  maxlength="3"
                />
              </dd>
            </dl>

            <div>
              <div class="g-flow-0 g-align-fbl">
                <dl class="p-price p-price-area">
                  <dd
                    class="g-price g-price-lg g-price-ra price-size-up g-price-down"
                  >
                    64,900<span>円</span>
                  </dd>
                </dl>
              </div>
              <p class="g-font-sm">&nbsp;&nbsp;&nbsp;値下実施日：2022/04/21</p>
              <p class="g-font-sm">&nbsp;&nbsp;&nbsp;旧価格：69,900円</p>
            </div>
            <div class="g-foot-v">
              <div class="cartBtnArea disp bt">
                <a href="/cart" style="text-decoration: none">
                  <button
                    onclick=""
                    class="g-btn g-btn-cv g-btn-c g-fw addToCartBtn"
                    id="p-addItem"
                    type="button"
                  >
                    <i class="g-i g-i-add-cart" aria-hidden="true"></i>
                    <span style="color: #fff">カートに入れる</span>
                  </button></a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
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
  appearance: none;
}
</style>
