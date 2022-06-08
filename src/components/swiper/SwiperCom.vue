<template>
  <swiper
    :options="swiperOption"
    :initialSlide="1"
    :slidesPerView="1"
    :spaceBetween="30"
    :slidesPerGroup="1"
    :loop="true"
    :autoplay="true"
    :loopFillGroupWithBlank="true"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
  >
    <swiper-slide v-for="(swiperSilde, index) in slides" :key="index">
      <div class="im">
        <a :href="swiperSilde.link">
          <img :src="swiperSilde.imgSrc" style="height: 400px; width: 900px" />
        </a>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  Scrollbar,
  A11y,
} from "swiper";
import { onMounted, computed } from "vue";
import { useStore } from "../../store/index";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const store = useStore();
    onMounted(() => {
      store.dispatch("setImage");
    });
    let slides = computed(() => store.getters.getImage);
    const onSwiper = (swiper: any) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };

    return {
      slides,
      modules: [Pagination, Navigation],
      onSwiper,
      onSlideChange,
    };
  },
};
</script>
<style>
/* .im {
  height: "6000px";
} */
</style>
