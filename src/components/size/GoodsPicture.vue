<template>
  <ul class="g-flow-xs g-labelSet" style="padding: 0">
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
  </ul>
  <div
    class="swiper-slide p-gallery_item"
    data-caption=""
    style="width: 395px; opacity: 1; transform: translate3d(0px, 0px, 0px)"
  >
    <img class="bigImg" :src="imgSrc" alt="" style="width: 320px" />
  </div>
  <div class="swiper-container">
    <div class="inner-swiper">
      <div
        class="swiper-slide"
        v-for="(imgs, index) in imgList"
        :key="index"
        @click="changeUrl"
      >
        <img
          v-on:change="trans"
          class="silde-image-div"
          v-for="(img, idx2) in imgs"
          :key="idx2"
          :src="img"
          alt=""
          :style="{
            width: '90px',
            height: '90px',
          }"
        />
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
const trans = (e: Event) => {
  // if (e.target instanceof HTMLElement) {

  // }
  console.log("e.target", e.target);
};
let imgSrc = computed(() => store.getters.getImgsrc);
const changeUrl = (e: Event) => {
  if (e.target instanceof HTMLImageElement) {
    store.commit("changeUrl", e.target.src);
  }
};
console.log("imgSrc", imgSrc.value);
// var list = document.getElementsByClassName("silde-image-div");
// console.log("list222", list);
// for (var i = 0; i < list.length; i++) {
//   list[i].onclick = function () {
//     document.getElementsByClassName("bigImg")[0].src = this.src;
//     console.log(
//       "document.getElementsByClassName",
//       document.getElementsByClassName("bigImg")[0].src
//     );
//   };
// }
</script>
<style>
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
