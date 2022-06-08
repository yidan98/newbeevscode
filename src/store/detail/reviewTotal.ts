const url = "http://localhost:3000/goods/detail/review/total/";
const headers = { Accept: "application/json" };

export type reviewState = {
  reviewTotal: {};
};
export default {
  state: {
    reviewTotal: {},
  },
  mutations: {
    //syncrous
    setReviewTotal(state: reviewState, payload: any) {
      //state.reviewTotal.push(...payload);
      //state.reviewTotal = payload
      state.reviewTotal = payload[0];
      console.log("array push reviewTotal", payload);
    },
  },
  actions: {
    //asyncronous
    async setReviewTotal({ commit }: { commit: Function }, payload: string) {
      const reviewTotal = await fetch(url + payload, { headers });
      const j = await reviewTotal.json();
      commit("setReviewTotal", j);
      console.log("in setReviewTotal method", j);
    },
  },
  getters: {
    getReviewTotal: (state: reviewState) => {
      console.log("in getReviewTotal method", state.reviewTotal);
      console.log(state.reviewTotal);
      return state.reviewTotal;
    },
  },
};
