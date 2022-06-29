<template>
  <!-- <ul class="g-flow-xs g-labelSet" style="padding: 0">
    <li>
      <img
        src="https://www.nitori-net.jp/ecstatic/image/sys-master/images/8878270513182/icon_makerdirect.png"
        alt=""
      />
    </li>
    <li>
      <img
        src="https://www.nitori-net.jp/ecstatic/image/sys-master/images/9021082370078/icon_free_shipping.png"
        alt=""
      />
    </li>
    <li>
      <img
        src="https://www.nitori-net.jp/ecstatic/image/sys-master/images/8836320985118/ic_nesage.png"
        alt=""
      />
    </li>
    <li>
      <img
        src="https://www.nitori-net.jp/ecstatic/image/sys-master/images/8796423880734/ic_netgeitei.png"
        alt=""
      />
    </li>
    <li>
      <img
        src="https://www.nitori-net.jp/ecstatic/image/sys-master/images/8830060757022/icon_credit.png"
        alt=""
      />
    </li>
  </ul> -->
  <div
    class="swiper-slide p-gallery_item"
    data-caption=""
    style="
      width: 395px;
      opacity: 1;
      transform: translate3d(0px, 0px, 0px);
      height: 350px;
    "
  >
    <img
      class="bigImg"
      :src="imgSrc"
      alt=""
      style="width: 320px; height: 320px"
    />
  </div>
  <div class="swiper-container">
    <div
      class="inner-swiper"
      :style="{ transform: 'translate3d( ' + x + 'px,0px,0px)' }"
    >
      <div
        class="swiper-slide"
        v-for="(imgs, index) in imgList"
        :key="index"
        @click="changeUrl"
      >
        <img
          class="silde-image-div"
          v-for="(img, idx2) in imgs"
          :key="idx2"
          :src="img"
          alt=""
        />
      </div>
    </div>
    <div class="p-gallery_controls">
      <div class="p-gallery_btn p-gallery_prev swiper-button-disabled">
        <div @click="left">
          <span
            v-if="x === 0"
            class="material-symbols-outlined"
            style="height: 700px; color: gray"
          >
            arrow_back_ios
          </span>
          <span
            v-if="x !== 0"
            class="material-symbols-outlined"
            style="height: 700px; color: #009e96"
          >
            arrow_back_ios
          </span>
        </div>
      </div>
      <!-- 小圆点 active有颜色 -->
      <div
        class="p-gallery_pagination swiper-pagination-clickable swiper-pagination-bullets"
      >
        <!-- <span
         
          class="swiper-pagination-bullet swiper-pagination-bullet-active"
        ></span> -->

        <span
          v-for="(n, indexRing) in imgList.length"
          :key="indexRing"
          class="swiper-pagination-bullet"
          :class="{ 'swiper-pagination-bullet-active': -index === indexRing }"
          @click="changeBullet(indexRing)"
        ></span>
      </div>

      <div class="p-gallery_btn p-gallery_next">
        <span
          @click="right"
          class="material-symbols-outlined"
          :class="x === max ? 'gray' : 'green'"
        >
          arrow_forward_ios
        </span>
        <!-- 
        <span
          v-if="x === max"
          class="material-symbols-outlined"
          
          style="height: 700px; color: gray"
        >
          arrow_forward_ios
        </span> -->
      </div>
    </div>
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
let imgList = computed(() => store.getters.getImgList);

let imgSrc = computed(() => store.getters.getImgsrc);
const changeUrl = (e: Event) => {
  if (e.target instanceof HTMLImageElement) {
    store.commit("changeUrl", e.target.src);
  }
};
console.log("imgSrc", imgSrc.value);

let index = computed(() => store.getters.getIndex);

let x = computed(() => {
  console.log("x", x.value);

  return index.value * 320;
});

function right() {
  store.commit("right");
  console.log("index", index.value);
}
function left() {
  store.commit("left");
  console.log("index", index.value);
}
function changeBullet(indexRing: number) {
  store.commit("changeDiv", indexRing);
}
const max = computed(() => -(imgList.value.length - 1) * 320);
console.log("max", max.value);
// function left() {

//   let top = document.querySelector(".inner-swiper") as HTMLElement;

//   top.style.transform ="'translate3d(+x+'px,0px,0px)'";
// }
// function right() {
//   let top = document.querySelector(".inner-swiper") as HTMLElement;
//   top.style.transform = "translate3d(0px,0px,0px)";
// }
</script>
<style>
.green {
  color: #009e96;
}
.gray {
  color: #686868;
  pointer-events: none;
}
.bigImg {
  width: 320px;
  margin-bottom: 20px;
}
.g-labelSet img {
  height: 29px;
}
.g-link {
  text-decoration: none;
  color: #333;
}
.g-link:hover {
  text-decoration: underline;
  color: #009e96;
}
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
/* .g-flow,
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
} */
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
  width: 345px;
  height: 230px;
  overflow: hidden;
  cursor: pointer;
}
/* .swiper-container:hover {
  overflow: visible;
} */
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
.g-lg-checkable input[type="radio"] {
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
.g-select {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  background-color: #fff;
}
</style>
