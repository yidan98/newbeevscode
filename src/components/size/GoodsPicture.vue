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
  <img
    class="bigImg"
    src="http://localhost:8080/assets/images/brownThree1.webp"
    alt=""
    style="width: 320px"
  />

  <div class="swiper-container">
    <div class="inner-swiper">
      <div class="swiper-slide" v-for="(imgs, index) in imgList" :key="index">
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
<script setup>
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
</style>
