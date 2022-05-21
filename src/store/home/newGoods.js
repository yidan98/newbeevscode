const url = "http://localhost:3000/newGoodses";
const headers = { Accept: "application/json" };

export default {
  state: {
    newGoodses: [],
  },
  mutations: {
    //syncrous
    setNewGoodses(state, payload) {
      state.newGoodses.push(...payload);
      //state.newGoodses = payload
      console.log("array push ", payload);
    },
  },
  actions: {
    //asyncronous
    async setNewGoodses(state) {
      const newGoodses = await fetch(url, { headers });
      const j = await newGoodses.json();
      state.commit("setNewGoodses", j);
      console.log("in setNewGoodses method", j);
    },
  },
  getters: {
    getNewGoodses: (state) => {
      console.log("in getNewGoodses method", state.newGoodses);
      console.log(state.newGoodses);
      return state.newGoodses;
    },
  },
};
