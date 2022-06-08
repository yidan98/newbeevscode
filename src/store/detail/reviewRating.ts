const url = "http://localhost:3000/goods/detail/review/rating/";
const headers = { Accept: "application/json" };
export type ratingState = {
  reviewRating: [];
};
export default {
  state: {
    reviewRating: [],
  },
  mutations: {
    //syncrous
    setReviewRating(state: ratingState, payload: any) {
      //state.reviewRating.push(...payload);
      //state.reviewRating = payload;
      state.reviewRating = payload[0].rating;
      console.log("array push rating aaaaaaaaaaaaaaa", payload);
    },
  },
  actions: {
    //asyncronous
    async setReviewRating({ commit }: { commit: Function }, payload: string) {
      const reviewRating = await fetch(url + payload, { headers });
      const j = await reviewRating.json();
      commit("setReviewRating", j);
      console.log("in setReviewRating method", j);
    },
  },
  getters: {
    getReviewRating: (state: ratingState) => {
      console.log("in getReviewRating method mmmmm", state.reviewRating);
      console.log(state.reviewRating);
      return state.reviewRating;
    },
  },
};
