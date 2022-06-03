const url = "http://localhost:3000/goods/size/";
const headers = { Accept: "application/json" };

export default {
  state: {
    goodsSize: {},
    listColor: [],
    list: [],
    imgList: [],
    type: "",
    color: "",
  },
  mutations: {
    //syncrous
    setGoodsSize(state, payload) {
      //state.goodsSize.push(...payload);
      //state.goodsSize = payload
      state.goodsSize = payload[0];
    },
    setListColor(state, payload) {
      state.listColor = payload;
      console.log("array push listColor", payload);
    },
    setList(state, payload) {
      state.list = payload;
      console.log("array push list", payload);
    },
    setImgList(state, { type, color }) {
      console.log("type, color ", type + " " + color);
      let imgs = state.list.filter(
        (info) => info.type === type && info.color === color
      )[0].pictures;
      console.log("imgs", imgs);

      const limit = 2;
      let count = imgs.length / limit;
      count = imgs.length % limit ? count++ : count;
      let idx = 0;
      state.imgList = [];
      while (idx < count) {
        state.imgList.push(imgs.slice(idx * limit, idx * limit + limit));
        idx++;
      }
    },
    setType(state, payload) {
      state.type = payload;
    },
    setColor(state, payload) {
      state.color = payload;
    },
  },

  actions: {
    //asyncronous
    async setGoodsSize(context, payload) {
      const goodsSize = await fetch(url + payload, { headers });
      const j = await goodsSize.json();
      context.commit("setGoodsSize", j);

      context.commit("setList", j[0].list);
      context.commit("setListColor", j[0].listColor);
      const type = j[0].listColor[0].type;
      const color = j[0].listColor[0].color[0];

      context.commit("setType", type);
      context.commit("setColor", color);
      context.commit("setImgList", { type, color });

      console.log("in setGoodsSize method", j);
    },
  },
  getters: {
    getGoodsSize: (state) => {
      console.log("in getGoodsSize method", state.goodsSize);
      console.log(state.goodsSize);
      return state.goodsSize;
    },
    getListColor: (state) => {
      return state.listColor;
    },
    getList: (state) => {
      return state.list;
    },

    getImgList: (state) => {
      return state.imgList;
    },
    getType: (state) => {
      return state.type;
    },
    getColor: (state) => {
      return state.color;
    },
  },
};
