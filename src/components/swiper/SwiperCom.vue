<template>
  <swiper
    :options="swiperOption"
    :slidesPerView="1"
    :spaceBetween="30"
    :slidesPerGroup="1"
    :loop="true"
    :autoplay="{ autoplay: true }"
    :loopFillGroupWithBlank="true"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
  >
    <swiper-slide v-for="(swiperSilde, index) in slides" :key="index">
      <div>
        <a :href="swiperSilde.link">
          <img :src="swiperSilde.imgSrc" />
        </a>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper";
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
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
    let swiperOption = {
      initialSlide: 1,
    };
    return {
      slides,
      modules: [Pagination, Navigation],
      swiperOption,
    };
  },
};
</script>
