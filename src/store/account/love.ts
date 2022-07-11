import axios from "axios";

const url = "http://localhost:3000/wish/list/";
const headers = { Accept: "application/json" };
type LoveState = {
  wishList: Wish[];
  goodsList: List[];
  value: string;
  selectedName: string;
  id: number;
  canMoveList: Wish[];
  allGoodsList: List[];
  selectableList: string;
};
type List = {
  id: number;
  userId: number;
  goodsId: number;
  type: string;
  goodsCode: number;
  color: string;
  pictures: string;
  price: number;
  name: string;
  listName: string;
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
    canMoveList: [],
    allGoodsList: [],
    selectableList: "",
  },
  mutations: {
    //syncrous
    setWishList(state: LoveState, payload: []) {
      state.wishList = payload;
    },
    setGoodsList(state: LoveState, payload: any) {
      // state.goodsList = payload[0].goodsList;
      state.goodsList = payload;
    },
    setAllGoodsList(state: LoveState, payload: []) {
      state.allGoodsList = payload;
    },
    updateValue(state: LoveState, payload: string) {
      state.value = payload;
    },
    setCanMoveList(state: LoveState, payload: []) {
      state.canMoveList = payload;
      state.selectableList = state.canMoveList[0].listName;
      console.log("selectableList", state.selectableList);
    },
    filterGoodsList(state: LoveState, payload: string) {
      state.selectedName = payload;
      state.goodsList = state.allGoodsList.filter(
        (w: List) => w.listName === payload
      );
      console.log("filg", state.goodsList);
      state.id = state.wishList.filter(
        (w: Wish) => w.listName === payload
      )[0].id;
    },
    filterWishList(state: LoveState, payload: string) {
      state.canMoveList = state.wishList.filter(
        (w: Wish) => w.listName !== payload
      );
      state.selectableList = state.canMoveList[0].listName;
    },
    selectableListBySelect(state: LoveState, payload: string) {
      state.selectableList = payload;
    },
  },
  actions: {
    //asyncronous
    async setGoodsList(context, payload: number) {
      const goodsList = await fetch(url + payload, { headers });
      const j = await goodsList.json();
      context.commit("setWishList", j);
      console.log("jjj", j);

      const filtered = j.filter((w: Wish) => w.listName !== "お気に入り商品");

      console.log("filtered", filtered);
      context.commit("setCanMoveList", filtered);

      // context.commit("setGoodsList", j);
    },
    async setWishGoodsList(context, payload: string) {
      const info = await fetch(
        "http://localhost:3000/wish/goods/List/" + payload,
        { headers }
      );
      const j = await info.json();
      context.commit("setAllGoodsList", j);
      const filtered = j.filter((w: Wish) => w.listName === "お気に入り商品");
      context.commit("setGoodsList", filtered);
    },
    async addWishList(context, userId: number) {
      const wishList = {
        userId: 10011,
        listName: context.state.value,
        goodsList: [],
      };
      await axios.post("http://localhost:3000/wishList", wishList);
      context.dispatch("setGoodsList", userId);
      context.state.value = "";
    },
    //add item to お気に入り商品 from cartCom
    async intoWish(context, newInfoList: {}) {
      const obj = {
        listName: "お気に入り商品",
        userId: 10011,
        quantity: 1,
        link: "/goods/detail/10195",
      };
      const item = {
        ...newInfoList,
        ...obj,
      };
      // const key = "listName";
      // const value = "お気に入り商品";
      // const key2 = "userId";
      // const value2 = 10011;
      // newInfoList[key] = value;
      // newInfoList[key2] = value2;
      await axios.post("http://localhost:3000/wishgoodsList", item);
      const userId = 10011;
      context.dispatch("setGoodsList", userId);
    },
    //delete listName
    async deleteWishList(
      context,
      { id, userId }: { id: number; userId: number }
    ) {
      await fetch("http://localhost:3000/wishList/" + id, { method: "DELETE" });
      context.dispatch("setGoodsList", userId);
      context.dispatch("setWishGoodsList", userId);
      context.state.selectedName = "お気に入り商品";
    },
    // delete goods in list
    async deleteGoods(context, { id, userId }: { id: number; userId: number }) {
      await fetch("http://localhost:3000/wishgoodsList/" + id, {
        method: "DELETE",
      });
      context.dispatch("setWishGoodsList", userId);

      context.state.selectedName = "お気に入り商品";
    },

    async patchGoodsList(
      context,
      { id, userId }: { id: number; userId: string }
    ) {
      await axios.patch("http://localhost:3000/wishList/" + id, {
        goodsList: [],
      });
      context.dispatch("setGoodsList", userId);
    },

    async moveGoods(
      context,
      {
        selectableList,
        id,
        userId,
      }: { selectableList: string; id: number; userId: number }
    ) {
      await axios.patch("http://localhost:3000/wishgoodsList/" + id, {
        listName: selectableList,
      });
      context.dispatch("setGoodsList", userId);
      context.dispatch("setWishGoodsList", userId);
      context.state.selectedName = "お気に入り商品";
    },

    async updateListName(
      context,
      { newName, id, userId }: { newName: string; id: number; userId: string }
    ) {
      await axios.patch("http://localhost:3000/wishList/" + id, {
        listName: newName,
      });
      context.dispatch("setGoodsList", userId);
      context.dispatch("setWishGoodsList", userId);
      context.state.selectedName = "お気に入り商品";
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
    getCanMoveList(state: LoveState) {
      return state.canMoveList;
    },
    getAllGoodsList(state: LoveState) {
      console.log("allGoodsList", state.allGoodsList);
      return state.allGoodsList;
    },
    getSelectableList(state: LoveState) {
      return state.selectableList;
    },
  },
};
