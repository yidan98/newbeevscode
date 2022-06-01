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
      state.goodsQa = payload[0];
      console.log("array push goodsQa", payload);
    },

    nextPage(state) {
      state.pageNo++;
    },
    previousPage(state) {
      state.pageNo--;
    },
    qaSort(state, value) {
      if (value === "created_at") {
        state.goodsQa.qaList.sort((a, b) => {
          return Date.parse(b.questionDate) - Date.parse(a.questionDate);
        });
      } else {
        state.goodsQa.qaList.sort((a, b) => b.count - a.count);
      }
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
