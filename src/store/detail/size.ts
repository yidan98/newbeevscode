const url = "http://localhost:3000/goods/size/";
const headers = { Accept: "application/json" };
type sizeState = {
  goodsSize: {};
  listColor: [];
  list: [];
  imgList: string[][];
  newList: info[];
  new: {};
  type: string;
  color: string;
};
type info = {
  goodsCode: string;
  type: string;
  color: string;
  price: number;
  size: string;
  material: string;
  weight: string;
  guaranteeYear: string;
  wrapSize: string;
  pictures: string[];
};
export default {
  state: {
    goodsSize: {},
    listColor: [],
    list: [],
    imgList: [],
    newList: [],
    new: {},
    type: "",
    color: "",
  },
  mutations: {
    //syncrous
    setGoodsSize(state: sizeState, payload: any) {
      //state.goodsSize.push(...payload);
      //state.goodsSize = payload
      state.goodsSize = payload[0];
    },
    setListColor(state: sizeState, payload: any) {
      state.listColor = payload;
      console.log("array push listColor", payload);
    },
    setList(state: sizeState, payload: any) {
      state.list = payload;
      console.log("array push list", payload);
    },
    // setNewList(state, { type, color }) {
    // state.newList = state.list.filter(
    //   (info) => info.type === type && info.color === color
    // );
    // ))
    // const newList = (state.newList = state.list.filter(
    //   (info) => info.type === type && info.color === color
    // ));
    // state.new = newList[0];
    //   console.log("newList", state.newList);
    // },
    setImgList(
      state: sizeState,
      { type, color }: { type: string; color: string }
    ) {
      console.log("type, color ", type + " " + color);
      let imgs: string[] = [];

      imgs = state.list.filter(
        (info: info) => info.type === type && info.color === color
      )[0]["pictures"];

      state.newList = state.list.filter(
        (info: info) => info.type === type && info.color === color
      );
      console.log("imgs", imgs);
      state.new = state.newList[0];
      console.log("newList", state.newList);

      const limit = 2;
      let count = Math.ceil(imgs.length / limit);
      count = imgs.length % limit ? count++ : count;
      let idx = 0;
      state.imgList = [];

      while (idx < count) {
        state.imgList.push(imgs.slice(idx * limit, idx * limit + limit));
        idx++;
      }
      state.type = type;
      state.color = color;
    },
    setType(state: sizeState, payload: string) {
      state.type = payload;
    },
    setColor(state: sizeState, payload: string) {
      state.color = payload;
    },
  },

  actions: {
    //asyncronous
    async setGoodsSize({ commit }: { commit: Function }, payload: string) {
      const goodsSize = await fetch(url + payload, { headers });
      const j = await goodsSize.json();
      commit("setGoodsSize", j);

      commit("setList", j[0].list);
      commit("setListColor", j[0].listColor);
      const type = j[0].listColor[0].type;
      const color = j[0].listColor[0].color[0];

      commit("setType", type);
      commit("setColor", color);
      commit("setImgList", { type, color });

      console.log("in setGoodsSize method", j);
    },
  },
  getters: {
    getGoodsSize: (state: sizeState) => {
      console.log("in getGoodsSize method", state.goodsSize);
      console.log(state.goodsSize);
      return state.goodsSize;
    },
    getListColor: (state: sizeState) => {
      return state.listColor;
    },
    getList: (state: sizeState) => {
      return state.list;
    },

    getImgList: (state: sizeState) => {
      return state.imgList;
    },
    getType: (state: sizeState) => {
      return state.type;
    },
    getColor: (state: sizeState) => {
      return state.color;
    },
    // getNew: (state) => {
    //   console.log("stateaa", state.new);
    //   return state.new;
    // },
    getNewList: (state: sizeState) => {
      return state.newList;
    },
    getNew: (state: sizeState) => {
      return state.new;
    },
  },
};
