import { InjectionKey } from "vue";

import { createStore, Store, useStore as baseUseStore } from "vuex";
import category from "./home/category";
import hotGoods from "./home/hotGoods";
import newGoods from "./home/newGoods";
import swiper from "./home/swiper";
import detail from "./detail/detail";
import review from "./detail/review";
import reviewTotal from "./detail/reviewTotal";
import reviewRating from "./detail/reviewRating";
import qa from "./detail/qa";
import size from "./detail/size";

type State = {};
export const key: InjectionKey<Store<State>> = Symbol();
export const store = createStore<State>({
  modules: {
    category,
    hotGoods,
    newGoods,
    swiper,
    detail,
    review,
    reviewTotal,
    reviewRating,
    qa,
    size,
  },
});
export const useStore = () => {
  return baseUseStore(key);
};