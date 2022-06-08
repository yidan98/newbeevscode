const url = "http://localhost:3000/hotGoodses";
const headers = { Accept: "application/json" };

type hotGoodsState = {
  hotGoodses: [];
};
export default {
  state: {
    hotGoodses: [],
  },
  mutations: {
    //syncrous
    setHotGoodses(state: hotGoodsState, payload: []) {
      state.hotGoodses = payload;
      //state.hotGoodses = payload
      console.log("array push ", payload);
    },
  },
  actions: {
    //asyncronous
    async setHotGoodses({ commit }: { commit: Function }) {
      const hotGoodses = await fetch(url, { headers });
      const j = await hotGoodses.json();
      commit("setHotGoodses", j);
      console.log("in setHotGoodses method", j);
    },
  },
  getters: {
    getHotGoodses: (state: hotGoodsState) => {
      console.log("in getHotGoodses method", state.hotGoodses);
      console.log(state.hotGoodses);
      return state.hotGoodses;
    },
  },
};
