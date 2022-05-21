import { createStore } from "vuex";
import category from "./home/category";
import hotGoods from "./home/hotGoods";
import newGoods from "./home/newGoods";
import swiper from "./home/swiper";

export default createStore({
  modules: {
    category,
    hotGoods,
    newGoods,
    swiper,
  },
});
