<template>
  <dl class="p-customize js-sku-variations" data-index="0">
    <dt style="margin-bottom: 20px">
      ソファタイプ：<b id="p-customize0ソファタイプ">{{ type }}</b>
    </dt>

    <dd>
      <div class="g-select g-select-sm js-sku-variations-dropdown">
        <i class="g-i g-i-dropdown" aria-hidden="true"></i>
        <select
          v-model="type"
          @change="store.commit('setImgList', { type, color })"
        >
          <option v-for="(v, index) in listColor" :key="index">
            {{ v.type }}
          </option>
        </select>
      </div>
    </dd>

    <dt style="margin-top: 20px">
      カラー：<b id="p-customize1カラー">{{ color }}</b>
    </dt>

    <dd style="margin-bottom: 20px">
      <ul class="g-flow-sm">
        <li v-for="(v, index) in firtVarColors" :key="index">
          <label class="g-checkable g-checkable-circle">
            <input
              v-model="color"
              @change="changeColor"
              type="radio"
              name="1カラー"
              value="00100180035"
              data-parent="06300080001"
              data-index="0"
              data-label="color"
              data-control="#p-customize1カラー"
            />
            <span
              ><span class="g-checkable_checked"></span
              ><img
                src="v.colorImg"
                alt="color"
                style="border-radius: 50%; height: 40px"
            /></span>
          </label>
        </li>
      </ul>
    </dd>
  </dl>

  lalalalalalalalalalala
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
    <div class="p-gallery_controls">
      <div class="p-gallery_btn p-gallery_prev swiper-button-disabled">
        <span
          class="material-symbols-outlined"
          style="height: 700px; color: #009e96"
        >
          arrow_back_ios
        </span>
      </div>
      <div
        class="p-gallery_pagination swiper-pagination-clickable swiper-pagination-bullets"
      >
        <span
          class="swiper-pagination-bullet swiper-pagination-bullet-active"
        ></span
        ><span class="swiper-pagination-bullet"></span>
      </div>
      <div
        class="p-gallery_btn p-gallery_next"
        style="height: 700px; color: #009e96"
      >
        <span class="material-symbols-outlined"> arrow_forward_ios </span>
      </div>
    </div>
  </div>
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

// const state = reactive({
//   str: "3人用ソファ",
//   cl: "ベージュ/ミドルブラウン",
// });
// let { str, cl } = toRefs(state);

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
  margin-right: 20px;
}
.silde-image-div:hover {
  opacity: 0.8;
}
.inner-swiper {
  display: flex;
  /* flex-wrap: wrap; */
}
.swiper-slide {
  display: flex;
  flex-wrap: wrap;
}
.swiper-container {
  overflow: hidden;
  /* background-color: pink; */
  width: 340px;
  height: 230px;
  overflow: hidden;
  cursor: pointer;
}
.swiper-container:hover {
  overflow: visible;
}
.p-gallery_controls {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
.swiper-pagination-bullet-active {
  background: #009e96;
}
li {
  list-style: none;
}
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
  appearance: none;
}
.g-select {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  background-color: #fff;
}
</style>
