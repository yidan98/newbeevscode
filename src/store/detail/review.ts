const url = "http://localhost:3000/review/goodsId/:goodsId/offset/:offset";
const headers = { Accept: "application/json" };

type reviewState = {
  reviews: { reviewCount: number; reviewList: review[] };
  reviewList: review[];
  showed: false;
  allReviewList: review[];
};
type review = {
  rating: number;
  nickName: string;
  reviewDate: string;
  title: string;
  content: string;
  count: number;
};
export default {
  state: {
    reviews: {},
    reviewList: [],
    showed: false,
    allReviewList: [],
  },
  mutations: {
    //syncrous
    setReview(state: reviewState, j: any) {
      state.reviews = j[0];
      console.log("array push reviews", j);
      console.log("array push reviews[0]", j[0]);
    },
    setReviewList(state: reviewState, j: any) {
      //state.reviewList =[];
      // state.reviewList.push(...j);
      state.reviewList = j;
      console.log("state.reviewList.push(...reviewList)", j);
    },
    changeShowed(state: reviewState, changeShowed: any) {
      state.showed = changeShowed;
    },
    filterReviews(state: reviewState, rating: any) {
      if (state.allReviewList.length === 0) {
        state.allReviewList.push(...state.reviews.reviewList);
        state.allReviewList.push(...state.reviewList);
      }
      const arr = state.allReviewList.filter(
        (review) => review.rating === rating
      );
      state.reviews.reviewCount = arr.length;
      if (arr.length > 3) {
        state.reviews.reviewList = arr.slice(0, 3);
        state.reviewList = arr.slice(3);
      } else {
        state.reviews.reviewList = arr;
      }
    },
  },
  actions: {
    //asyncronous  异步
    async setReview(
      { commit }: { commit: Function },
      payload: { goodsId: string; offset: number }
    ) {
      const { goodsId, offset } = payload;
      const newUrl = url
        .replace(":goodsId", goodsId)
        .replace(":offset", offset + "");

      const reviews = await fetch(newUrl, { headers });
      const j = await reviews.json();

      console.log("in setReviews method", j);
      console.log("j[0].reviewList", j[0].reviewList);

      if (offset === 0) {
        commit("setReview", j);
      } else {
        commit("setReviewList", j[0].reviewList);
      }
    },
  },
  getters: {
    getReview: (state: reviewState) => {
      console.log("in getReviews method", state.reviews);
      console.log(state.reviews);
      return state.reviews;
    },
    getReviewList: (state: reviewState) => {
      return state.reviewList;
    },
    getShowed: (state: reviewState) => {
      return state.showed;
    },
  },
};
