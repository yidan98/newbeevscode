<template>
  <div>
    <div class="g-layout_head">
      <h1>お気に入り商品</h1>
    </div>
    <div class="g-layout_body">
      <div class="g-lg-inputGroup p-createList" style="display: flex">
        <div>
          <input
            class="g-input g-input-sm"
            id="createWishlistName"
            type="text"
            name="wishlistName"
            size="30"
            placeholder="新規リスト名を入力"
            aria-describedby="p-list-new_alert"
            data-validation-rules='[{"rule":"length","max":20}]'
          />
          <p
            class="g-formGrid_error-alone g-sm-align-tl"
            id="p-list-new_alert"
            role="alert"
          ></p>
        </div>
        &nbsp;&nbsp;
        <p>
          <a
            class="g-btn g-btn-brand g-sm-btn-func g-lg-btn-sm"
            role="button"
            onclick='onclickcreate("create-wishlist");'
            aria-expanded="false"
            aria-controls=""
            ><span> リストを作成</span></a
          >
        </p>
      </div>

      <section class="g-block-sm">
        <h2 class="g-h-2">
          <span id="wishlistHeadLabel">お気に入り商品</span>
        </h2>
        <div class="g-lg-inputGroup p-favoriteList">
          <div class="g-select g-select-sm" style="display: flex; width: 200px">
            <i class="g-i g-i-dropdown" aria-hidden="true"></i>
            <select
              id="wishlistDropDown"
              name=""
              aria-label="お気に入り商品リストの選択"
            >
              <option
                value="9000139948733"
                selected="selected"
                defaultwishlist="true"
              >
                お気に入り商品
              </option></select
            ><span
              class="material-symbols-outlined"
              style="margin-top: 10px; color: #009e96"
            >
              expand_more
            </span>
          </div>
          <p class="wishlist-controls" style="display: none">
            <a
              class="g-btn g-btn-em g-btn-sm g-lg-fh"
              id="changepopupbutton"
              href="#p-changeModal"
              role="button"
              aria-expanded="false"
              aria-controls="p-changeModal"
              ><span>リスト名を変更</span></a
            >
          </p>
          <p
            class="g-inputGroup_static wishlist-controls"
            style="display: none"
          >
            <a
              class="g-link g-link-gray"
              href="#p-listDeleteModal"
              id="deleteInitial"
              role="button"
              aria-expanded="false"
              aria-controls="p-listDeleteModal"
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
              ><span>リストを削除</span></a
            >
          </p>
        </div>

        <div id="entryList">
          <div id="wishlistEntryList" class="g-block-sm">
            <div class="p-listControl">
              <label class="g-checkable">
                <input type="checkbox" data-checkall="favorite" /><span>
                  <!-- <i
                    class="g-s g-s-checkbox-on g-checkable_on"
                    aria-hidden="true"
                  ></i
                  ><i
                    class="g-s g-s-checkbox-off g-checkable_off"
                    aria-hidden="true"
                  ></i
                  > -->
                  <span class="g-checkable_label">すべて選択</span></span
                >
              </label>
              <div class="p-listControl_edit">
                <div>チェックしたものを</div>
                <ul class="g-linkList g-linkList-lg">
                  <li>
                    <a
                      class="g-link g-link-gray"
                      href="#"
                      role="button"
                      onclick="if($('input:checked').length < 1){return false;};$('#deleteCount').text($('#p-ProductList input:checkbox:checked').length);$('#linkReal')[0].click();"
                    >
                      <span
                        class="material-symbols-outlined"
                        data-v-3c643552=""
                        style="
                          font-size: 1rem;
                          margin-top: -0.2em;
                          color: rgb(179, 179, 179);
                        "
                      >
                        close
                      </span>
                      <span>削除</span></a
                    >
                  </li>

                  <li>
                    <a
                      id="linkReal"
                      class="g-link g-link-gray"
                      href="#p-deleteModal"
                      role="button"
                      aria-expanded="false"
                      aria-controls="p-deleteModal"
                      style="display: none"
                    >
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <ul
              id="p-ProductList"
              class="g-itemList g-itemList-border g-mt-20 g-mb-20"
            >
              <li class="g-itemList_item">
                <div
                  class="g-media g-media-lg g-media-lead g-media-tail p-favoriteItem"
                >
                  <div class="g-media_lead g-align-im">
                    <div class="g-checkable">
                      <input
                        type="checkbox"
                        name="productCheckBox"
                        value="10662635569854"
                        data-checkall-children="favorite"
                      /><span
                        ><i
                          class="g-s g-s-checkbox-on g-checkable_on"
                          aria-hidden="true"
                        ></i
                        ><i
                          class="g-s g-s-checkbox-off g-checkable_off"
                          aria-hidden="true"
                        ></i
                      ></span>
                    </div>
                  </div>
                  <div class="g-media_head">
                    <a class="g-hover" href="/ec/product/1211251">
                      <img
                        class="g-fw g-rc"
                        src="https://www.nitori-net.jp/ecstatic/image/product/1211251/121125101.jpg?ts=20220314105227327"
                        alt=""
                    /></a>
                  </div>
                  <div class="g-media_body g-sm-units-xs g-lg-units-sm">
                    <p class="g-media_h">
                      <a href="/ec/product/1211251"
                        >2人用ローソファ(ノーザン3 TBL)</a
                      >
                    </p>
                    <p class="g-price">16,900<span>円（税込）</span></p>
                    <dl class="g-flow g-align-gm">
                      <dt>数量</dt>
                      <dd>
                        <input
                          class="g-input g-input-sm addToCartQty1211251"
                          type="text"
                          inputmode="numeric"
                          name="quantity"
                          value="1"
                          size="5"
                          maxlength="3"
                          id="p-pieces"
                        />
                      </dd>
                    </dl>
                  </div>
                  <div class="g-media_tail g-units g-sm-align-tc">
                    <div class="g-position-r">
                      <div class="cartBtnArea">
                        <button
                          class="g-btn g-btn-cv g-btn-c g-sm-fw g-lg-btn-func addToCartBtn p-addItem"
                          id="p-addItem1211251"
                          type="button"
                          data-sku-code="1211251"
                          data-price-without-tax="15364.0"
                          data-category="ローソファ・フロアソファ"
                          data-category-id="11091"
                          data-product-id="1211241s"
                          data-bundle="false"
                        >
                          <span>
                            <span
                              class="material-symbols-outlined"
                              data-v-1c756ca3=""
                              style="color: rgb(255, 255, 255)"
                            >
                              add_shopping_cart
                            </span></span
                          >
                          <span> カートに入れる</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>

            <div class="p-listControl">
              <label class="g-checkable">
                <input type="checkbox" data-checkall="favorite" /><span
                  ><i
                    class="g-s g-s-checkbox-on g-checkable_on"
                    aria-hidden="true"
                  ></i
                  ><i
                    class="g-s g-s-checkbox-off g-checkable_off"
                    aria-hidden="true"
                  ></i
                  ><span class="g-checkable_label">すべて選択</span></span
                >
              </label>
              <div class="p-listControl_edit">
                <div>チェックしたものを</div>
                <ul class="g-linkList g-linkList-lg">
                  <li>
                    <a
                      class="g-link g-link-gray"
                      href="#"
                      role="button"
                      onclick="if($('input:checked').length < 1){return false;};$('#deleteCount').text($('#p-ProductList input:checkbox:checked').length);$('#linkReal')[0].click();"
                    >
                      <span
                        class="material-symbols-outlined"
                        data-v-3c643552=""
                        style="
                          font-size: 1rem;
                          margin-top: -0.2em;
                          color: rgb(179, 179, 179);
                        "
                      >
                        close
                      </span>
                      <span>削除</span></a
                    >
                  </li>

                  <li>
                    <a
                      id="linkReal"
                      class="g-link g-link-gray"
                      href="#p-deleteModal"
                      role="button"
                      aria-expanded="false"
                      aria-controls="p-deleteModal"
                      style="display: none"
                    >
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.g-checkable input[type="radio"],
.g-checkable input[type="checkbox"],
.g-lg-checkable input[type="radio"],
.g-lg-checkable input[type="checkbox"] {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-color: transparent;
  border-radius: 0;
  background-color: transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
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
  margin-top: 7px;
}
.g-btn-brand,
.g-btn-cv,
.g-btn-cancel,
.g-lg-btn-brand,
.g-lg-btn-cv,
.g-lg-btn-cancel {
  color: #fff;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  padding: 8px 32px;
  border-color: #eb6157;
  background-color: #eb6157;

  border-radius: 5px;
}
.g-btn-brand,
.g-lg-btn-brand {
  border-color: #009e96;
  background-color: #009e96;
  padding: 8px 14px;
  border-radius: 4px;
  cursor: pointer;
}

.g-btn-sm,
.g-lg-btn-sm {
  font-size: 1rem;
  line-height: 1.42857;
}
.g-inputGroup,
.g-lg-inputGroup {
  flex-direction: row;
}
/* .g-select-sm select {
  height: 34px;
  padding-right: 33px;
} */
.g-select select {
  width: 100%;
  height: 46px;
  padding: 0 20px 0 14px;
  vertical-align: bottom;
  border-width: 0;
  background-color: transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
}
.p-listControl {
  display: flex;
}
.g-block-sm,
.g-lg-block-sm {
  margin-top: 40px;
}
.material-symbols-outlined {
  display: inline-block;
  font-size: inherit;
  line-height: inherit;
  vertical-align: middle;
  transform: translateY(-0.1em);
}
</style>
