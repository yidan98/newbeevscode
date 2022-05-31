const url = "http://localhost:3000/goods/qa/";
const headers = { Accept: "application/json" };

export default {
  state: {
    pageNo: 1,
    goodsQa: { qaList: [] },
  },
  mutations: {
    //syncrous
    setGoodsQa(state, payload) {
      //state.goodsQa.push(...payload);
      //state.goodsQa = payload
      state.goodsQa = payload[0].qaList;
      console.log("array push goodsQa", payload);
    },

    nextPage(state) {
      state.pageNo++;
    },
    previousPage(state) {
      state.pageNo--;
    },
  },
  actions: {
    //asyncronous
    async setGoodsQa(context, payload) {
      const goodsQa = await fetch(url + payload, { headers });
      const j = await goodsQa.json();
      context.commit("setGoodsQa", j);
      console.log("in setGoodsQa method", j);
    },
  },
  getters: {
    getGoodsQa: (state) => {
      console.log("in getGoodsQa method", state.goodsQa);
      console.log(state.goodsQa);
      return state.goodsQa;
    },
    getPageNo: (state) => {
      return state.pageNo;
    },
  },
};
