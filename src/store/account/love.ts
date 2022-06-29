import axios from "axios";
const url = "http://localhost:3000/wish/list/";
const headers = { Accept: "application/json" };
type LoveState = {
  wishList: Wish[];
  goodsList: List[];
  value: string;
  selectedName: string;
  id: number;
};
type List = {
  type: string;
  goodsCode: number;
  color: string;
  pictures: string;
  price: number;
  name: string;
};
type Wish = {
  userId: number;
  id: number;
  listName: string;
  goodsList: List[];
};
export default {
  state: {
    wishList: [],
    goodsList: [],
    value: "",
    id: 1,
    selectedName: "お気に入り商品",
  },
  mutations: {
    //syncrous
    setWishList(state: LoveState, payload: []) {
      state.wishList = payload;
    },
    setGoodsList(state: LoveState, payload: any) {
      state.goodsList = payload[0].goodsList;
      console.log("array push goodsList", payload[0].goodsList);
    },
    updateValue(state: LoveState, payload: string) {
      state.value = payload;
    },
    filterGoodsList(state: LoveState, payload: string) {
      state.selectedName = payload;
      state.goodsList = state.wishList.filter(
        (w: Wish) => w.listName === payload
      )[0].goodsList;
      state.id = state.wishList.filter(
        (w: Wish) => w.listName === payload
      )[0].id;
    },
  },
  actions: {
    //asyncronous
    async setGoodsList(context, payload: number) {
      const goodsList = await fetch(url + payload, { headers });
      const j = await goodsList.json();
      console.log("jjj", j);
      context.commit("setWishList", j);
      context.commit("setGoodsList", j);
    },
    async addWishList(context, userId: string) {
      const wishList = {
        userId: 10011,
        listName: context.state.value,
        goodsList: [],
      };
      await axios.post("http://localhost:3000/wishList", wishList);
      context.dispatch("setWishList", userId);
      context.state.value = "";
    },
    //delete listName
    async deleteWishList(
      context,
      { id, userId }: { id: number; userId: string }
    ) {
      await fetch("http://localhost:3000/wishList/" + id, { method: "DELETE" });
      context.dispatch("setWishList", userId);
    },
  },
  getters: {
    getWishList(state: LoveState) {
      return state.wishList;
    },
    getGoodsList: (state: LoveState) => {
      return state.goodsList;
    },
    getValue(state: LoveState) {
      return state.value;
    },
    getSelectName(state: LoveState) {
      return state.selectedName;
    },
    getId(state: LoveState) {
      return state.id;
    },
  },
};
