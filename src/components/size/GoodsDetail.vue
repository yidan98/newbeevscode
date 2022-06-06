<template>
  <div class="swiper-container">
    <div class="inner-swiper">
      <div class="swiper-slide" v-for="(imgs, index) in imgList" :key="index">
        <div
          class="silde-image-div"
          v-for="(img, idx2) in imgs"
          :key="idx2"
          :style="{ backgroundImage: 'url(' + img + ')' }"
        ></div>
      </div>
    </div>
  </div>
  <div class="g-units-lg">
    <dl class="p-customize js-sku-variations" data-index="0">
      <dt>
        ソファタイプ：<b id="p-customize0ソファタイプ">{{ str }}</b>
      </dt>

      <dd>
        <div class="g-select g-select-sm js-sku-variations-dropdown">
          <i class="g-i g-i-dropdown" aria-hidden="true"></i>
          <select
            v-model="str"
            name=""
            required=""
            aria-required="true"
            aria-label="ソファタイプの選択"
            data-control="#p-eo-label-"
          >
            <option disabled value="" selected>请选择</option>
            <option
              v-for="(item, index) in listColor"
              :key="index"
              :value="item.type"
              data-code="06300080001"
              data-label="list.type"
              data-parent=""
            >
              {{ item.type }}
            </option>
          </select>

          <input
            type="hidden"
            class="ソファタイプ js-Sku-Var"
            name=""
            value="06300080001"
            checked=""
            aria-required="true"
            data-parent=""
            data-index="0"
            data-label="3人用ソファ"
            data-control="#p-eo-label-"
            data-eo-code=""
          />
        </div>
      </dd>

      <dt>
        カラー：<b id="p-customize1カラー">{{ cl }}</b>
      </dt>

      <dd>
        <ul class="g-flow-sm">
          <li>
            <label class="g-checkable g-checkable-circle">
              <select
                v-model="type"
                @change="store.commit('setImgList', { type, color })"
              >
                <option v-for="(v, index) in listColor" :key="index">
                  {{ v.type }}
                </option>
              </select>
              <select v-model="color" @change="changeColor">
                <option v-for="(v, index) in firtVarColors" :key="index">
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

      <div class="g-butterfly">
        <p class="p-point">
          獲得ポイント<span class="g-digit">{{ point }}pt </span>
          付与
        </p>
        <p class="g-font-sm p-point-link">
          <a class="g-link" href="/ec/userguide/memberscardpoint/">
            <span>ポイントについて</span>
            <i class="g-i g-i-info" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </div>
    <p class="js-sku-delivery"></p>
  </div>
</template>
<script setup>
import { computed, onMounted, reactive, toRefs } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

const route = useRoute();
const goodsId = route.params.goodsId;
const store = useStore();
onMounted(() => {
  store.dispatch("setGoodsSize", goodsId);
});
const listColor = computed(() => store.getters.getListColor);
let firtVarColors = computed(() => {
  if (store.getters.getListColor[0]) return store.getters.getListColor[0].color;
  else return [];
});
const changeColor = (e) => {
  store.commit("setImgList", { type: type.value, color: e.target.value });
};
let imgList = computed(() => store.getters.getImgList);
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

const state = reactive({
  str: "3人用ソファ",
  cl: "ベージュ/ミドルブラウン",
});
let { str, cl } = toRefs(state);

console.log("list", list);
console.log("listColorThree", listColorThree);
console.log("listColor", listColor);
</script>
<style>
.g-checkable-img,
.g-checkable-circle,
.g-checkable-square,
.g-lg-checkable-img,
.g-lg-checkable-circle,
.g-lg-checkable-square {
  text-align: center;
  background-color: #fff;
  box-shadow: 0 0 0 1px #dbdbdb inset;
}
.g-checkable,
.g-lg-checkable {
  line-height: 1;
  position: relative;
  display: inline-block;
  vertical-align: middle;
}
.colorSelect {
  border-radius: 50%;
  width: 30%;
  height: 30%;
}
.g-flow,
.g-lg-flow,
.g-flow-0,
.g-lg-flow-0,
.g-flow-xs,
.g-lg-flow-xs,
.g-flow-sm,
.g-lg-flow-sm,
.g-flow-lg,
.g-lg-flow-lg,
.g-flow-xl,
.g-lg-flow-xl {
  display: flex;
  flex-wrap: wrap;
}
.g-flow-sm > *,
.g-lg-flow-sm > * {
  margin-bottom: 10px;
  margin-left: 10px;
}
.g-select {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  background-color: #fff;
}
dd.price-size-up {
  font-size: 3.5rem;
}
.g-price-down,
.g-lg-price-down {
  color: #eb6157;
}
.swiper-slide {
  width: 395px;
}
.silde-image-div {
  width: 150px;
  height: 150px;
  background-size: contain;
}
</style>
