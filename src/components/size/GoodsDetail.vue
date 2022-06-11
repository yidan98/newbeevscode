<template>
  <div class="g-units-lg">
    <dl class="p-customize js-sku-variations" data-index="0">
      <dt>
        ソファタイプ：<b id="p-customize0ソファタイプ">{{ type }} </b>
      </dt>

      <dd>
        <div class="g-select g-select-sm js-sku-variations-dropdown">
          <i class="g-i g-i-dropdown" aria-hidden="true"></i>
        </div>
      </dd>

      <dt>
        カラー：<b id="p-customize1カラー">{{ color }}</b>
      </dt>

      <dd>
        <ul class="g-flow-sm">
          <li>
            <label class="g-checkable g-checkable-circle">
              <select v-model="type" @change="change">
                <option v-for="(v, index) in listColor" :key="index">
                  {{ v.type }}
                </option>
              </select>
              <select v-model="color" @change="changeColor">
                <option v-for="(v, index) in colorList" :key="index">
                  {{ v }}
                </option>
              </select>
              <span><span class="g-checkable_checked"></span></span>
            </label>
          </li>
        </ul>
      </dd>
    </dl>

    <div class="js-catch-copy">
      {{ goodsDescribe }}
      <br /><br />
    </div>

    <div class="g-units-xs js-sku-price">
      <div>
        <div class="g-flow-0 g-align-fbl">
          <dl class="p-price">
            <dd
              class="g-price g-price-lg price-size-up g-price-down"
              v-if="price !== undefined"
            >
              {{ price.toLocaleString() }}<span>円</span>
            </dd>
          </dl>
        </div>
      </div>

      <div class="g-butterfly" style="display: flex">
        <p class="p-point">
          獲得ポイント
          <span class="g-digit">{{ point }}pt </span>
          付与&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </p>
        <p class="g-font-sm p-point-link">
          <a class="g-link" href="/ec/userguide/memberscardpoint/">
            <span> ポイントについて</span>
            <i class="g-i g-i-info" aria-hidden="true"></i>
          </a>
        </p>
        <span
          class="material-symbols-outlined"
          style="color: #009e96; margin-top: 0.8rem"
        >
          error
        </span>
      </div>
    </div>
    <p class="js-sku-delivery"></p>
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted } from "vue";
// , reactive, toRefs
import { useStore } from "../../store/index";
import { useRoute } from "vue-router";

const route = useRoute();
const goodsId = route.params.goodsId;
const store = useStore();
onMounted(() => {
  store.dispatch("setGoodsSize", goodsId);
});
const listColor = computed(() => store.getters.getListColor);
// let firtVarColors = computed(() => {
//   if (store.getters.getListColor[0]) return store.getters.getListColor[0].color;
//   else return [];
// });
const changeColor = (e) => {
  store.commit("setImgList", { type: type.value, color: e.target.value });
};
// let imgList = computed(() => store.getters.getImgList);
let type = computed(() => store.getters.getType);
let color = computed(() => store.getters.getColor);

// const neww = computed(() => store.getters.getNew);
// console.log(neww);

let price = computed(() => store.getters.getNew.price);

console.log("price", price.value);

let point = computed(() => Math.round(price.value / 1.1 / 100));

console.log("point", point);

// price = price.value.toLocaleString();

const goodsDescribe = computed(() => store.getters.getGoodsSize.goodsDescribe);

const list = computed(() => store.getters.getGoodsSize.list);
const listColorThree = computed(() => store.getters.getListColor.three);

// const state = reactive({
//   str: "3人用ソファ",
//   cl: "ベージュ/ミドルブラウン",
// });
// let { str, cl } = toRefs(state);

let colorList = computed(() => store.getters.getColorList);
const change = (e: Event) => {
  if (e.target instanceof HTMLSelectElement) {
    store.dispatch("setImgList", { type: e.target.value, color: color.value });
  }
};

console.log("list", list);
console.log("listColorThree", listColorThree);
console.log("listColor", listColor);
</script>
<style></style>
