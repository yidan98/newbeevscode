<template>
  <div style="margin-left: 300px">
    <div class="g-layout_head"></div>
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
            @input="updateValue"
            v-model="value"
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
            @click="addWishList"
            aria-expanded="false"
            aria-controls=""
            ><span> リストを作成</span></a
          >
        </p>
        <p v-if="value.length > 20" style="color: #eb6157; font-size: small">
          20文字以内で入力してください。
        </p>
      </div>
      <!-- modal1 リストを作成1-->
      <GDialog v-model="isShow1">
        <div class="modal">
          <div class="g-modal_el">
            <header class="g-modal_head">
              <p class="g-modal_h" id="p-messageModal_h">リストを作成</p>
              <button
                @click="isShow1 = false"
                class="g-modal_close"
                type="button"
                aria-label="閉じる"
              >
                <span class="material-symbols-outlined" style="cursor: pointer">
                  close
                </span>
              </button>
            </header>
            <div class="g-modal_body">
              <p id="modalMessage">
                お気に入り商品リストの新規作成は完了しました。
              </p>
            </div>
          </div>
        </div>
      </GDialog>
      <!-- modal2 リストを作成2 inputなし-->
      <GDialog v-model="isShow2">
        <div class="modal">
          <div class="g-modal_el">
            <header class="g-modal_head">
              <p class="g-modal_h" id="p-messageModal_h">リストを作成</p>
              <button
                @click="isShow2 = false"
                class="g-modal_close"
                type="button"
                aria-label="閉じる"
              >
                <span class="material-symbols-outlined" style="cursor: pointer">
                  close
                </span>
              </button>
            </header>
            <div class="g-modal_body">
              <p style="color: #eb6157; background-color: #fce7e6">
                お気に入り商品リストの名前を入力してください。
              </p>
            </div>
          </div>
        </div>
      </GDialog>
      <!-- modal3 リストを作成3 同じリスト名前-->
      <GDialog v-model="isShow3">
        <div class="modal">
          <div class="g-modal_el">
            <header class="g-modal_head">
              <p class="g-modal_h" id="p-messageModal_h">リストを作成</p>
              <button
                @click="isShow3 = false"
                class="g-modal_close"
                type="button"
                aria-label="閉じる"
              >
                <span class="material-symbols-outlined" style="cursor: pointer">
                  close
                </span>
              </button>
            </header>
            <div class="g-modal_body">
              <p
                style="color: #eb6157; background-color: #fce7e6; padding: 20px"
              >
                入力された名前のお気に入り商品リストは既に存在します。別の名前を入力してください。
              </p>
            </div>
          </div>
        </div>
      </GDialog>
      <!-- modal4 リストを作成4 長すぎる-->
      <GDialog v-model="isShow4">
        <div class="modal">
          <div class="g-modal_el">
            <header class="g-modal_head">
              <p class="g-modal_h" id="p-messageModal_h">リストを作成</p>
              <button
                @click="isShow4 = false"
                class="g-modal_close"
                type="button"
                aria-label="閉じる"
              >
                <span class="material-symbols-outlined" style="cursor: pointer">
                  close
                </span>
              </button>
            </header>
            <div class="g-modal_body">
              <p style="color: #eb6157; background-color: #fce7e6">
                お気に入り商品リストの名前が長すぎます。
              </p>
            </div>
          </div>
        </div>
      </GDialog>

      <h2 class="g-h-2">
        <span id="wishlistHeadLabel">{{ selectedName }}</span>
      </h2>
      <div class="g-lg-inputGroup p-favoriteList">
        <div class="g-select g-select-sm" style="display: flex; width: 200px">
          <i class="g-i g-i-dropdown" aria-hidden="true"></i>
          <select
            id="wishlistDropDown"
            name=""
            aria-label="お気に入り商品リストの選択"
            @change="filterGoodsList"
            v-model="selectedName"
          >
            <option
              defaultwishlist="true"
              v-for="(wish, index) in wishList"
              :value="wish.listName"
              :key="index"
            >
              {{ wish.listName }}
            </option></select
          ><span
            class="material-symbols-outlined"
            style="margin-top: 10px; color: #009e96"
          >
            expand_more
          </span>
        </div>
      </div>

      <p
        class="wishlist-controls"
        v-if="selectedName !== 'お気に入り商品'"
        @click="
          isShow011 = true;
          state2.newName = selectedName;
        "
      >
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
        v-if="selectedName !== 'お気に入り商品'"
        @click="isShow01 = true"
      >
        <a class="g-link g-link-gray" id="deleteInitial" role="button">
          <span
            class="material-symbols-outlined"
            style="cursor: pointer; color: #dbdbdb"
          >
            close </span
          ><span>リストを削除</span></a
        >
      </p>
      <!-- 选择【お気に入り商品】以外时 end -->
    </div>
    <GDialog v-model="isShow011">
      <div class="modal">
        <div class="g-modal_el">
          <header class="g-modal_head">
            <p class="g-modal_h" id="p-messageModal_h">リスト名を変更</p>
            <button
              @click="isShow011 = false"
              class="g-modal_close"
              type="button"
              aria-label="閉じる"
            >
              <span class="material-symbols-outlined" style="cursor: pointer">
                close
              </span>
            </button>
          </header>
          <div class="g-modal_body">
            <p id="modalMessage">"リスト名を変更してください</p>
            <input type="text" v-model="state2.newName" />
            <div class="button-delete-div">
              <button
                class="button-delete"
                :id="id"
                @click="
                  updateListName(id, state2.newName);
                  isShow011 = false;
                "
              >
                <span>変更する</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </GDialog>
    <!-- modal02 リストを変更した-->

    <!-- modal01 リストを削除?-->
    <GDialog v-model="isShow01">
      <div class="modal">
        <div class="g-modal_el">
          <header class="g-modal_head">
            <p class="g-modal_h" id="p-messageModal_h">リストを作成</p>
            <button
              @click="isShow01 = false"
              class="g-modal_close"
              type="button"
              aria-label="閉じる"
            >
              <span class="material-symbols-outlined" style="cursor: pointer">
                close
              </span>
            </button>
          </header>
          <div class="g-modal_body">
            <p id="modalMessage">"{{ selectedName }}"を削除しますか？</p>
            <div class="button-delete-div">
              <button
                class="button-delete"
                :id="id"
                @click="
                  deleteWishList(id);
                  isShow01 = false;
                "
              >
                <span>削除する</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </GDialog>
    <!-- modal02 リストを削除した-->
    <GDialog v-model="isShow02">
      <div class="modal">
        <div class="g-modal_el">
          <header class="g-modal_head">
            <p class="g-modal_h" id="p-messageModal_h">リストを作成</p>
            <button
              @click="isShow02 = false"
              class="g-modal_close"
              type="button"
              aria-label="閉じる"
            >
              <span class="material-symbols-outlined" style="cursor: pointer">
                close
              </span>
            </button>
          </header>
          <div class="g-modal_body">
            <p id="modalMessage">お気に入り商品リストの削除は成功しました。</p>
          </div>
        </div>
      </div>
    </GDialog>
    <div id="entryList">
      <div id="wishlistEntryList" class="g-block-sm">
        <div class="p-listControl" v-if="goodsList.length !== 0">
          <label class="g-checkable" style="margin-top: -6px">
            <input
              type="checkbox"
              data-checkall="favorite"
              v-model="state.checked"
              @change="selectAll"
            /><span>
              <span class="g-checkable_label">すべて選択&nbsp;</span></span
            >
          </label>
          <div class="p-listControl_edit" style="display: flex">
            <div>&nbsp;&nbsp;チェックしたものを</div>
            <div style="margin-top: -16px; margin-left: -30px">
              <ul class="g-linkList g-linkList-lg" style="display: flex">
                <li v-if="wishList.length > 1">
                  <a class="g-link g-link-gray" id="moveWishlistEntries"
                    ><span
                      class="material-symbols-outlined"
                      style="color: rgb(179, 179, 179)"
                    >
                      swap_vert </span
                    ><span @click="isShowMove = true">移動</span></a
                  >
                </li>
                <li>
                  <a class="g-link g-link-gray" href="#" role="button">
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
                    <span @click="isShowDelete = true"
                      >削除&nbsp;&nbsp;</span
                    ></a
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
        <ul
          id="p-ProductList"
          class="g-itemList g-itemList-border g-mt-20 g-mb-20"
          v-for="(goods, index) in goodsList"
          :key="index"
        >
          <li class="g-itemList_item">
            <div
              class="g-media g-media-lg g-media-lead g-media-tail p-favoriteItem"
              style="display: flex"
            >
              <div class="g-media_lead g-align-im">
                <div class="g-checkable">
                  <input
                    type="checkbox"
                    name="productCheckBox"
                    :value="goods.id"
                    v-model="state.checkList"
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
              <div style="display: flex">
                <div class="g-media_head">
                  <router-link class="g-hover" :to="goods.link">
                    <img
                      class="g-fw g-rc"
                      style="width: 140px"
                      :src="goods.pictures[0]"
                      alt=""
                  /></router-link>
                </div>
                <div style="margin-left: 50px">
                  <div class="g-media_body g-sm-units-xs g-lg-units-sm">
                    <p class="g-media_h">
                      <router-link :to="goods.link" class="router-link"
                        >{{ goods.name }}
                      </router-link>
                    </p>
                    <p class="g-price">
                      {{ goods.price * goods.quantity }}<span>円（税込）</span>
                    </p>
                    <dl class="g-flow g-align-gm">
                      <dt>数量</dt>
                      <dd style="margin-top: -37px">
                        <input
                          class="g-input g-input-sm addToCartQty1211251"
                          type="text"
                          inputmode="numeric"
                          name="quantity"
                          oninput="value=value.replace(/\D/g, '')"
                          v-model="goods.quantity"
                          @input="updateQuantity"
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
                        <div
                          v-if="showError"
                          class="p-itemAdded g-item-add-error"
                          style="
                            bottom: 70.2083px;
                            animation: 1.8s ease 0s 1 normal both running
                              p-itemAddedIn;
                          "
                        >
                          <button
                            @click="showError = false"
                            class="g-modal_close p-modal_button"
                            type="button"
                            aria-label="閉じる"
                          >
                            <span
                              class="material-symbols-outlined"
                              style="cursor: pointer"
                            >
                              close
                            </span>
                          </button>
                          <div>数量は1以上、999以下で設定してください。</div>
                        </div>
                        <div
                          v-if="showError"
                          class="p-itemAdded g-item-add-error"
                          style="
                            bottom: 70.2083px;
                            animation: 1.8s ease 0s 1 normal both running
                              p-itemAddedIn;
                          "
                        >
                          <button
                            @click="isShow = false"
                            class="g-modal_close p-modal_button"
                            type="button"
                            aria-label="閉じる"
                          >
                            <span
                              class="material-symbols-outlined"
                              style="cursor: pointer"
                            >
                              close
                            </span>
                          </button>
                          <div>カートに追加しました</div>
                          <button @click="isShow = false" class="modal-button">
                            <router-link to="/cart">カートを見る</router-link>
                          </button>
                        </div>
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
                          @click="addItem(goods.goodsCode)"
                          :sku="goods.goodsCode"
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
              </div>
            </div>
          </li>
        </ul>

        <div class="p-listControl" v-if="goodsList.length !== 0">
          <label class="g-checkable" style="margin-top: -6px">
            <input
              type="checkbox"
              data-checkall="favorite"
              v-model="state.checked"
              @change="selectAll"
            /><span> <span class="g-checkable_label">すべて選択</span></span>
          </label>
          <div class="p-listControl_edit" style="display: flex">
            <div>&nbsp;&nbsp;チェックしたものを</div>
            <div style="margin-top: -16px; margin-left: -30px">
              <ul class="g-linkList g-linkList-lg" style="display: flex">
                <li v-if="wishList.length > 1">
                  <a
                    class="g-link g-link-gray"
                    id="moveWishlistEntries"
                    onclick="onclickmoveentry();"
                    ><span
                      class="material-symbols-outlined"
                      style="color: rgb(179, 179, 179)"
                    >
                      swap_vert </span
                    ><span @click="isShowMove = true">移動</span></a
                  >
                </li>
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
                    <span @click="isShowDelete = true"
                      >削除&nbsp;&nbsp;</span
                    ></a
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
            <!-- module move -->
            <GDialog v-model="isShowMove">
              <div class="modal">
                <div class="g-modal_el">
                  <header class="g-modal_head">
                    <p class="g-modal_h" id="p-messageModal_h">
                      商品を別のリストへ移動
                    </p>
                    <button
                      @click="isShowMove = false"
                      class="g-modal_close"
                      type="button"
                      aria-label="閉じる"
                    >
                      <span
                        class="material-symbols-outlined"
                        style="cursor: pointer"
                      >
                        close
                      </span>
                    </button>
                  </header>
                  <div class="g-modal_body" style="display: flex">
                    <p id="modalMessage">
                      商品を移動させるリストを選択してください。
                    </p>
                    <select
                      v-model="selectableList"
                      @change="selectableListBySelect"
                    >
                      <option
                        v-for="(c, index) in canMoveList"
                        :key="index"
                        :value="c.listName"
                      >
                        {{ c.listName }}
                      </option>
                    </select>
                    <div class="button-delete-div">
                      <button
                        :selectableList="selectableList"
                        class="button-delete"
                        :id="id"
                        @click="
                          moveGoods(selectableList);
                          isShowMove = false;
                        "
                      >
                        <span>移動する</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </GDialog>
            <!-- modal02 リストを移動した-->

            <!-- 移動 end  -->
            <!-- delete modal -->
            <GDialog v-model="isShowDelete">
              <div class="modal">
                <div class="g-modal_el">
                  <header class="g-modal_head">
                    <p class="g-modal_h" id="p-messageModal_h">商品を削除</p>
                    <button
                      @click="isShowDelete = false"
                      class="g-modal_close"
                      type="button"
                      aria-label="閉じる"
                      :id="id"
                    >
                      <span
                        class="material-symbols-outlined"
                        style="cursor: pointer"
                      >
                        close
                      </span>
                    </button>
                  </header>
                  <div class="g-modal_body">
                    <p id="modalMessage">
                      チェックした商品
                      {{ state.checkList.length }} つを削除しますか？
                    </p>

                    <div class="button-delete-div">
                      <button
                        class="button-delete"
                        :id="id"
                        @click="
                          deleteGoods();
                          isShowDelete = false;
                        "
                      >
                        <span>削除する</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </GDialog>
            <!-- end -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted, reactive, ref } from "vue";
import { useStore } from "../../store/index";

// import { useRoute } from "vue-router";

// const route = useRoute();
const userId = 10011;
const store = useStore();
// onMounted(() => {
//   store.dispatch("setGoodsList", userId);
// });
onMounted(() => {
  store.dispatch("setGoodsList", userId);
  store.dispatch("setWishGoodsList", userId);
});
const goodsList = computed(() => store.getters.getGoodsList);
const state = reactive({
  checked: false,
  checkList: [],
});
const selectAll = async () => {
  if (state.checked) {
    const checkList1 = goodsList.value.map((goods) => goods.id);
    console.log("checkList1", checkList1);
    state.checkList = checkList1;
    console.log("checkList", state.checkList);
  } else {
    state.checkList = [];
  }
};
const isShow1 = ref(false);
const isShow2 = ref(false);
const isShow3 = ref(false);
const isShow4 = ref(false);

// const value = ref("");
const wishList = computed(() => store.getters.getWishList);
const value = computed(() => store.getters.getValue);
function updateValue(e: Event) {
  if (e.target instanceof HTMLInputElement) {
    store.commit("updateValue", e.target.value);
  }
}
function addWishList() {
  //去掉首尾空格后判断输入的内容是否为空
  if (
    value.value.replace(/(^\s*)|(\s*$)/g, "").length > 0 &&
    value.value.length <= 20
  ) {
    //若不为空
    //继续判断输入的listName是否已经存在
    if (wishList.value.filter((w) => w.listName === value.value).length > 0) {
      //若存在，则显示modal3，提示listName已经存在
      isShow3.value = true;
    } else {
      //若不存在，则显示modal1，提示插入成功，并插入数据
      isShow1.value = true;
      store.dispatch("addWishList", "user01");
    }
  } else if (value.value.length > 20) {
    isShow4.value = true;
  } else {
    //若为空，则显示modal2，提示不能为空
    isShow2.value = true;
  }
}

const isShow01 = ref(false);
const isShow011 = ref(false);
const isShowMove = ref(false);
const isShowDelete = ref(false);
const isShow02 = ref(false);
const state2 = reactive({ newName: "" });

const showError = ref(false);
const isShow = ref(false);
const id = computed(() => store.getters.getId);
const selectedName = computed(() => store.getters.getSelectName);
//change goodsList
const filterGoodsList = (e) => {
  store.commit("filterGoodsList", e.target.value);
  store.commit("filterWishList", e.target.value);
};
//delect listName
const deleteWishList = (id: number) => {
  store.dispatch("deleteWishList", { id, userId });
  isShow02.value = true;
};
//update listName
const updateListName = (id: number, newName: string) => {
  store.dispatch("updateListName", { newName, id, userId });
  state2.newName = newName;
  isShow011.value = true;
};

const quantity = computed(() => store.getters.getQuantity);
const updateQuantity = (e: Event) => {
  if (e.target instanceof HTMLInputElement) {
    store.commit("updateQuantity", e.target.value);
  }
};
const addItem = (goodsCode: string) => {
  if (quantity.value < 1 || quantity.value > 999) {
    showError.value = true;
  } else {
    store.dispatch("addCart", goodsCode);
    isShow.value = true;
    store.commit("updateQuantity", 1);
  }
};
//-------------------------------move and delete
// const patchGoodsList = (id: number) => {
//   store.dispatch("patchGoodsList", { id, userId });

//   isShowDelete.value = true;
// };
const canMoveList = computed(() => store.getters.getCanMoveList);
// const anotherName = ref("");
// if (wishList.value.length > 0) {
//   anotherName.value = wishList.value[0].listName;
// }
const selectableList = computed(() => store.getters.getSelectableList);
const moveGoods = (selectableList: string) => {
  let id = -1;
  for (let i = 0; i < state.checkList.length; i++) {
    id = state.checkList[i];
    console.log("id", id);
    store.dispatch("moveGoods", { selectableList, id, userId });
    // isShowMove.value=true;
    state.checkList = [];
    state.checked = false;
  }
};
const deleteGoods = () => {
  let id = -1;
  console.log("id", id);
  for (let i = 0; i < state.checkList.length; i++) {
    id = state.checkList[i];
    console.log("id", id);
    store.dispatch("deleteGoods", { id, userId });
  }
  console.log("id", id);
  state.checkList = [];
  // state.checked = false;
};
const selectableListBySelect = (e) => {
  store.commit("selectableListBySelect", e.target.value);
};
</script>
<style scoped>
.button-delete {
  border-color: #009e96;
  background-color: #009e96;
  color: #fff;
  border-radius: 4px;
  border: 1px solid #dbdbdb;
  font-size: 1.2rem;
  padding: 20px;
}
a {
  cursor: pointer;
}
.g-modal_head {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  position: sticky;
  z-index: 12;
  top: 0;
  display: flex;
  background-color: #009e96;
  justify-content: space-between;
}
.g-modal_h {
  font-size: 1.2rem;
  padding: 5px;
  color: #fff;
}
.g-list-note {
  font-size: 0.8rem;
  color: #808080;
}
.g-modal_close {
  font-size: 1rem;
  padding: 20px;
  background-color: #009e96;
  border: none;
  color: #fff;
}
.g-modal_body {
  padding: 30px 30px 40px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  background-color: #fff;
}
.modal-close {
  border: none;
  background: none;
  cursor: pointer;
  padding: 10;
  color: #ffffff;
}
.modal-button {
  background-color: #eb6157;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  width: 200px;
}
.g-itemList-border,
.g-lg-itemList-border {
  border: 0 solid #dbdbdb;
  border-top-width: 1px;
  border-bottom-width: 1px;
}
.g-itemList-border,
.g-lg-itemList-border {
  padding-top: 20px;
  padding-bottom: 20px;
}
.g-mb-20,
.g-lg-mb-20 {
  margin-bottom: 20px !important;
}
input[type="checkbox"] {
  cursor: pointer;
  position: relative;
}

input[type="checkbox"]::after {
  top: 0;

  color: rgb(12, 12, 12);
  width: 20px;
  height: 20px;
  display: inline-block;
  visibility: visible;
  padding-left: 0px;
  text-align: center;
  content: " ";
  border-radius: 2px;
  box-sizing: border-box;
  border: 1px solid #ddd;
}

input[type="checkbox"]:checked::after {
  content: "";
  background-color: #009e96;
  border-color: #009e96;
  background-color: #009e96;
}

input[type="checkbox"]:checked::before {
  content: "";
  position: absolute;
  top: 1px;
  left: 5px;
  width: 6px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
  z-index: 1;
}

.g-align-im {
  padding: 10px;
  line-height: 8;
}
a {
  text-decoration: none;
  color: #333;
}
.g-checkable input[type="radio"],
.g-checkable input[type="checkbox"],
.g-lg-checkable input[type="radio"],
.g-lg-checkable input[type="checkbox"] {
  border-radius: 0;
  width: 20px;
  height: 20px;
}
.g-linkList li:nth-child(n + 2)::before,
.g-lg-linkList li:nth-child(n + 2)::before {
  content: "\FF5C";
  color: #dbdbdb;
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
