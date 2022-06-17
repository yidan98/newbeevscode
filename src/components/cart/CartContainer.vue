<template>
  <div class="g-layout-cart" style="width: 1200px; margin-left: 30px">
    <div class="g-layout_head">
      <h1>カート</h1>
    </div>
    <div class="cartAndContainer" style="display: flex">
      <div style="width: 1000px">
        <cart-inner></cart-inner>
      </div>
      <div>
        <cart-sticky></cart-sticky>
      </div>
    </div>
    <p class="g-back-to-top bt">
      <a href="#" data-scroll="" class="zd" @click="scrollToTop"
        ><span
          class="material-symbols-outlined"
          style="font-size: 1.5rem; margin-bottom: 2px; color: #fff"
        >
          keyboard_arrow_up
        </span>
      </a>
    </p>
  </div>
</template>
<script>
import CartInner from "./CartInner.vue";
import CartSticky from "./CartSticky.vue";
export default {
  components: {
    CartInner,
    CartSticky,
  },
  data() {
    return {
      scrollTop: "",
    };
  },
  methods: {
    scrollToTop() {
      let _this = this;
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      // 实现滚动效果
      const timer = setInterval(() => {
        document.body.scrollTop =
          document.documentElement.scrollTop =
          top -=
            50;
        if (top <= 0) {
          clearInterval(timer);
        }
        _this.toTopShow = false;
      }, 10);
    },
  },
};
</script>
<style scoped>
a {
  text-decoration: none;
}
/* .g-clip {
  font-size: 1.5rem;
  margin-bottom: 2px;
  color: #fff;
} */
.g-browser-scrollup .g-back-to-top,
.g-browser-scrolldown .g-back-to-top {
  visibility: visible;
  animation: g-back-to-top 1s both;
}
.g-back-to-top {
  position: fixed;
  z-index: 9;
  right: 200px;
  bottom: 20px;
}
.g-back-to-top a {
  display: flex;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: rgba(128, 128, 128, 0.7);
  box-shadow: 0 0 4px 2px #fff;
  align-items: center;
  justify-content: center;
}
.g-back-to-top a {
  width: 50px;
  height: 50px;
}
.g-btn-em,
.g-lg-btn-em {
  color: #009e96;
}
.g-btn,
.g-lg-btn {
  font-size: 1.6rem;
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
  margin-left: 55px;
  text-decoration: none;
  color: #009e96;
}
.g-price,
.g-lg-price {
  font-family: "Helvetica Neue", Arial, sans-serif;
  font-size: 1.8rem;
  font-weight: bold;
  color: #000;
}
.g-media .g-media_h,
.g-lg-media .g-media_h {
  font-size: 1.6rem;
  line-height: 1.5;
}

.g-layout-cart,
.g-layout-sidebar,
.g-layout-detail,
.g-layout-category,
.g-layout-cart,
.g-layout-purchase,
.g-layout_sidebar[data-sticky="true"],
.g-layout_sidebar [data-sticky="true"] {
  position: -webkit-sticky;
  position: sticky;
  top: 40px;
}
.g-pane-gray,
.g-lg-pane-gray {
  background-color: #f7f7f7;
}
.p-payment_total {
  font-weight: bold;
  color: #eb6157;
}
.p-payment dt {
  float: left;
  clear: left;
  -webkit-font-feature-settings: "palt";
  font-feature-settings: "palt";
}
payment_itemized dd {
  padding: 9px 0 6px 0;
  border-top: 1px solid #dbdbdb;
}
.g-btn > span,
.g-lg-btn > span {
  display: flex;
  min-height: 46px;
  padding: 5px 18px 5px 14px;
  transform: translateX(5px);
  flex: 1 1 auto;
  align-items: center;
  /* justify-content: center; */
  height: 100%;
}
cancel {
  color: #fff;
}
#g-fw {
  background-color: #eb6157;
  border-color: #eb6157;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  /* padding: 5px 2px; */
  margin-left: 140px;
}
</style>
