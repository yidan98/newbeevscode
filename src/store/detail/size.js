const url = "http://localhost:3000/goods/size/";
const headers = { Accept: "application/json" };

export default {
  state: {
    goodsSize: [],
  },
  mutations: {
    //syncrous
    setGoodsSize(state, payload) {
      //state.goodsSize.push(...payload);
      //state.goodsSize = payload
      state.goodsSize = payload[0];
      console.log("array push goodsSize", payload);
    },
  },

  actions: {
    //asyncronous
    async setGoodsSize(context, payload) {
      const goodsSize = await fetch(url + payload, { headers });
      const j = await goodsSize.json();
      context.commit("setGoodsSize", j);
      console.log("in setGoodsSize method", j);
    },
  },
  getters: {
    getGoodsSize: (state) => {
      console.log("in getGoodsSize method", state.goodsSize);
      console.log(state.goodsSize);
      return state.goodsSize;
    },
  },
};
