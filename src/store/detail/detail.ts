const url = "http://localhost:3000/goods/detail/";
const headers = { Accept: "application/json" };
export type goodsesState = {
  goods: {};
};
type GoodsInfoType = {
  id: number;
  goodsId: number;
  goodsName: string;
}[];
export default {
  state: {
    goods: {},
  },
  mutations: {
    //syncrous
    setGoods(state: goodsesState, payload: GoodsInfoType) {
      state.goods = payload[0];
      console.log("array push ", payload);
    },
  },
  actions: {
    //asyncronous
    async setGoods({ commit }: { commit: Function }, payload: string) {
      const goods = await fetch(url + payload, { headers });
      const j = await goods.json();
      commit("setGoods", j);
      console.log("in setGoods method", j);
    },
  },
  getters: {
    getGoods: (state: goodsesState) => {
      console.log("in getGoods method", state.goods);
      console.log(state.goods);
      return state.goods;
    },
  },
};
