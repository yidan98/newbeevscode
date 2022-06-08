const url = "http://localhost:3000/goods/qa/";
const headers = { Accept: "application/json" };
type qaState = {
  pageNo: number;
  goodsQa: { qaList: qa[] };
};
type qa = {
  questionDate: Date;
  count: number;
};
export default {
  state: {
    pageNo: 1,
    goodsQa: { qaList: [] },
  },
  mutations: {
    //syncrous
    setGoodsQa(state: qaState, payload: any) {
      //state.goodsQa.push(...payload);
      //state.goodsQa = payload
      state.goodsQa = payload[0];
      console.log("array push goodsQa", payload);
    },

    nextPage(state: qaState) {
      state.pageNo++;
    },
    previousPage(state: qaState) {
      state.pageNo--;
    },
    qaSort(state: qaState, value: any) {
      if (value === "created_at") {
        state.goodsQa.qaList.sort(
          (a, b) => +new Date(b.questionDate) - +new Date(a.questionDate)
        );
      } else {
        state.goodsQa.qaList.sort((a, b) => b.count - a.count);
      }
    },
  },

  actions: {
    //asyncronous
    async setGoodsQa({ commit }: { commit: Function }, payload: string) {
      const goodsQa = await fetch(url + payload, { headers });
      const j = await goodsQa.json();
      commit("setGoodsQa", j);
      console.log("in setGoodsQa method", j);
    },
  },
  getters: {
    getGoodsQa: (state: qaState) => {
      console.log("in getGoodsQa method", state.goodsQa);
      console.log(state.goodsQa);
      return state.goodsQa;
    },
    getPageNo: (state: qaState) => {
      return state.pageNo;
    },
  },
};
