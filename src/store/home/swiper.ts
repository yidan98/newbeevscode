const url = "http://localhost:3000/image";
const headers = { Accept: "application/json" };
interface swiperState {
  image: [];
}
export default {
  state: {
    image: [],
  },
  mutations: {
    //syncrous
    setImage(state: swiperState, payload: []) {
      state.image = payload;
      //state.image = payload
      console.log("array push ", payload);
    },
  },
  actions: {
    //asyncronous
    async setImage({ commit }: { commit: Function }) {
      const image = await fetch(url, { headers });
      const j = await image.json();
      commit("setImage", j);
      console.log("in setImage method", j);
    },
  },
  getters: {
    getImage: (state: swiperState) => {
      console.log("in getImage method", state.image);
      console.log(state.image);
      return state.image;
    },
  },
};
