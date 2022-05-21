const url = "http://localhost:3000/hotGoodses";
const headers = { Accept: "application/json" };

export default {
  state: {
    hotGoodses: [],
  },
  mutations: {
    //syncrous
    setHotGoodses(state, payload) {
      state.hotGoodses.push(...payload);
      //state.hotGoodses = payload
      console.log("array push ", payload);
    },
  },
  actions: {
    //asyncronous
    async setHotGoodses(state) {
      const hotGoodses = await fetch(url, { headers });
      const j = await hotGoodses.json();
      state.commit("setHotGoodses", j);
      console.log("in setHotGoodses method", j);
    },
  },
  getters: {
    getHotGoodses: (state) => {
      console.log("in getHotGoodses method", state.hotGoodses);
      console.log(state.hotGoodses);
      return state.hotGoodses;
    },
  },
};
