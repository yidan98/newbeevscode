const url = "http://localhost:3000/newGoodses";
const headers = { Accept: "application/json" };

type newGoodsState = {
  newGoodses: [];
};
export default {
  state: {
    newGoodses: [],
  },
  mutations: {
    //syncrous
    setNewGoodses(state: newGoodsState, payload: []) {
      state.newGoodses = payload;
      //state.newGoodses = payload
      console.log("array push ", payload);
    },
  },
  actions: {
    //asyncronous
    async setNewGoodses({ commit }: { commit: Function }) {
      const newGoodses = await fetch(url, { headers });
      const j = await newGoodses.json();
      commit("setNewGoodses", j);
      console.log("in setNewGoodses method", j);
    },
  },
  getters: {
    getNewGoodses: (state: newGoodsState) => {
      console.log("in getNewGoodses method", state.newGoodses);
      console.log(state.newGoodses);
      return state.newGoodses;
    },
  },
};
