import { createStore } from "vuex";
import category from "./home/category";
import hotGoods from "./home/hotGoods";
import newGoods from "./home/newGoods";
import swiper from "./home/swiper";
import detail from "./detail/detail";
import review from "./detail/review";
import reviewTotal from "./detail/reviewTotal";
import reviewRating from "./detail/reviewRating";
export default createStore({
  modules: {
    category,
    hotGoods,
    newGoods,
    swiper,
    detail,
    review,
    reviewTotal,
    reviewRating,
  },
});
