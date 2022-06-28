<template>
  <div class="main__inner-wrapper">
    <div class="g-bodyArea g-inner">
      <div class="g-main">
        <div class="g-layout-narrow">
          <div class="g-layout_lead"></div>
          <div class="g-layout_head">
            <div class="g-lg-butterfly g-align-gt">
              <div class="gtm-add-wrap">
                <h1>注文履歴</h1>

                <ul class="g-list g-list-note g-unit-sm">
                  <li class="g-font-lg g-color-alert">
                    リコール該当商品は「注文詳細」画面よりご確認下さい。
                  </li>
                </ul>
              </div>
              <div class="g-sm-unit-lg">
                <p style="margin-left: 40px">
                  <a class="g-btn g-btn-sm g-btn-em" href="#"
                    ><span id="ajax">店舗購入履歴を取得する</span></a
                  >
                </p>
                <ul class="g-list g-list-note g-unit-sm">
                  <li>上記ボタンで最新の「店舗」購入履歴を取得できます。</li>
                  <li>約15分程度で履歴が反映されます。※メンテナンス時を除く</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="g-layout_body">
            <dl class="p-historyMenu" style="display: flex">
              <dt>
                <label for="p-period">注文時期を選択</label>
              </dt>
              <dd>
                <div class="g-select g-select-sm">
                  <select
                    style="border: none"
                    id="orderTime"
                    name="orderTime"
                    @change="filterByDate"
                  >
                    <option
                      v-for="(t, index) in orderTime"
                      :key="index"
                      :value="t.value"
                    >
                      {{ t.time }}
                    </option>
                    <!-- <option value="00">過去半年分の注文</option>
                      <option value="10">2022年分の注文</option>
                      <option value="11">2021年分の注文</option>
                      <option value="12">2020年分の注文</option>
                      <option value="13">2019年分の注文</option>
                      <option value="14">2018年分の注文</option> -->
                  </select>
                </div>
              </dd>
              <dt>
                <label for="p-status" style="margin-left: 40px">
                  &nbsp;注文状況を選択</label
                >
              </dt>
              <!-- onchange="submit(this.form)" -->
              <dd>
                <div class="g-select g-select-sm">
                  <select
                    id="orderStatus"
                    name="orderStatus"
                    @change="filterByStatus"
                    style="border: none"
                  >
                    <option value="ALL">すべて</option>
                    <option value="ORDERS">受注済</option>
                    <option value="READY">出荷・お渡し準備中</option>
                    <option value="SHIPPED">出荷・配送・お渡し済</option>
                    <option value="CANCELLED">キャンセル済</option>
                  </select>
                </div>
              </dd>
            </dl>

            <input
              id="cancelOrderCode"
              name="cancelOrderCode"
              type="hidden"
              value=""
            />

            <template v-for="items in list" :key="items">
              <div class="number" style="display: flex">
                <div style="font-weight: bold">
                  注文番号：{{ items.orderNumber }}
                </div>
                <a href="/order/detail">
                  <button class="g-btn g-btn-em" style="margin-left: 400px">
                    注文詳細
                  </button></a
                >
              </div>
              <!-- <div class="g-block-xs" v-if="length === 0">
                <p>注文履歴がありません。</p>
              </div> -->
              <div class="date">
                <span class="black">注文日</span>
                <span style="margin-left: 320px">{{ items.orderDate }}</span>
                <div class="shop">
                  <span class="black"> 購入店舗</span>
                  <span style="margin-left: 300px">ニトリネット</span>
                </div>
                <div style="display: flex" class="status">
                  <span
                    style="margin-top: 28px; font-weight: bold"
                    class="black"
                    >現在の状況</span
                  >
                  <div class="barAndLine">
                    <div class="bar">
                      <div
                        :class="
                          items.currentStatus === '受注済'
                            ? 'ellipse-active'
                            : 'ellipse'
                        "
                      ></div>
                      <div class="line"></div>
                      <div
                        :class="
                          items.currentStatus === '出荷・お渡し準備中'
                            ? 'ellipse-active'
                            : 'ellipse'
                        "
                      ></div>
                      <div class="line"></div>
                      <div
                        :class="
                          items.currentStatus === '出荷・配送済・お渡し済み'
                            ? 'ellipse-active'
                            : 'ellipse'
                        "
                      ></div>
                    </div>
                    <div class="text-box">
                      <p class="text">受注済</p>
                      <p class="text">出荷準備中</p>
                      <p class="text">出荷・配送済</p>
                    </div>
                  </div>
                </div>
                <dl style="display: flex">
                  <dt><span class="black">納品種別&nbsp;</span></dt>
                  <dd style="margin-left: 280px">&nbsp;&nbsp;配送員組立設置</dd>
                </dl>
                <dl style="display: flex">
                  <dt><span class="black"> 配送予定日</span></dt>
                  <dd style="margin-left: 280px">{{ items.deliveryDate }}</dd>
                </dl>
              </div></template
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useStore } from "../../store/index";

// import { useRoute } from "vue-router";

// const route = useRoute();
const userId = 10011;
const store = useStore();
onMounted(() => {
  store.dispatch("setOrderList", userId);
});
const list = computed(() => store.getters.getFilterList);
console.log("account", list);
const filterList = computed(() => store.getters.getFilterList);
console.log("filterList", filterList);
// const length = computed(() => store.getters.getFilterList.length);
let date = computed(() => store.getters.getDate);
console.log("date", date);
let status = computed(() => store.getters.getStatus);
console.log("status", status);
const filterByDate = (e: Event) => {
  if (e.target instanceof HTMLSelectElement) {
    store.commit("setDate", e.target.value);
    store.commit("filterByDate");
  }
};
const filterByStatus = (e: Event) => {
  if (e.target instanceof HTMLSelectElement) {
    store.commit("setStatus", e.target.value);
    store.commit("filterByDate");
  }
};
const thisYear = new Date().getFullYear();
const orderTime = [
  {
    value: "00",
    time: "過去半年分の注文",
  },
  {
    value: "10",
    time: thisYear + "年分の注文",
  },
  {
    value: "11",
    time: thisYear - 1 + "年分の注文",
  },
  {
    value: "12",
    time: thisYear - 2 + "年分の注文",
  },
  {
    value: "13",
    time: thisYear - 3 + "年分の注文",
  },
  {
    value: "14",
    time: thisYear - 4 + "年分の注文",
  },
];
</script>
<style scoped>
.bar {
  display: flex;
  margin-top: 30px;
  margin-left: 50px;
}
.ellipse {
  width: 10px;
  height: 10px;
  border-radius: 50%;

  border: 5px solid #42c0b6;
}
.ellipse-active {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #42c0b6;
  border: 5px solid #42c0b6;
}
.line {
  width: 200px;
  height: 5px;
  border-radius: 5%;
  background-color: #42c0b6;
  margin-top: 8px;
}
.text-box {
  display: flex;
  margin-top: 30px;
  margin-left: -60px;
  font-size: 15px;
}
.text {
  margin: 0px 50px 0px 100px;
}
.number {
  background-color: #e9f5f4;
  padding: 20px;
  width: 75%;
}
.g-list-note > li::before,
.g-lg-list-note > li::before {
  content: "\203B";
}
.g-font-lg,
.g-lg-font-lg {
  font-size: 1.1rem !important;
  line-height: 1.5 !important;
}
.g-list-note > li,
.g-lg-list-note > li {
  margin-left: 1em;
}
.g-color-alert,
.g-lg-color-alert {
  color: #eb6157 !important;
}
.g-btn-em,
.g-lg-btn-em {
  color: #009e96;
  cursor: pointer;
}

.g-btn,
.g-lg-btn {
  font-size: 1.1rem;
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
}
ul,
li,
a {
  text-decoration: none;
}
.g-list-note,
.g-lg-list-note {
  font-size: 1.2rem;
  line-height: 1.5;
}
.g-list-note,
.g-lg-list-note {
  font-size: 0.8rem;
  line-height: 1.58333;
  text-indent: -1em;
  color: #808080;
}
.p-historyMenu dt {
  font-weight: bold;
}
.g-select {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  background-color: #fff;
}
.g-align-gt {
  display: flex;
}
.g-layout-narrow {
  margin-left: 200px;
}
.p-historyMenu {
  margin-left: 100px;
}
.black {
  font-weight: bold;
}
.barAndLine {
  margin-left: 50px;
}
.shop {
  border-bottom: 1px solid rgb(219, 219, 219);
}
.status {
  border-bottom: 1px solid rgb(219, 219, 219);
}
.date {
  border-bottom: 2px solid rgb(219, 219, 219);

  width: 75%;
}
</style>
