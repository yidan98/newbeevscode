const url = "http://localhost:3000/image";
const headers = { Accept: "application/json" };

export default {
  state: {
    image: [],
  },
  mutations: {
    //syncrous
    setImage(state, payload) {
      state.image.push(...payload);
      //state.image = payload
      console.log("array push ", payload);
    },
  },
  actions: {
    //asyncronous
    async setImage(context) {
      const image = await fetch(url, { headers });
      const j = await image.json();
      context.commit("setImage", j);
      console.log("in setImage method", j);
    },
  },
  getters: {
    getImage: (state) => {
      console.log("in getImage method", state.image);
      console.log(state.image);
      return state.image;
    },
  },
};
