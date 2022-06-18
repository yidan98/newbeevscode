import axios from "axios";

const url = "http://localhost:3000/cart/list/";
const url2 = "http://localhost:3000/buy/later/list/";
const headers = { Accept: "application/json" };

type cartState = {
  cart: [];
  id: number;
  quantity: number;
  goodsCode: number;
  paymentSum: number;
  buyLaterItems: Item[];
};
type Item = {
  id: number;
  userId: number;
  goodsId: number;
  type: string;
  goodsCode: number;
  color: string;
  pictures: string;
  price: number;
  name: string;
  exchange: string;
  postage: number;
  delivery: string;
  quantity: number;
};
export default {
  state: {
    cart: [],
    quantity: 1,
    goodsCode: 5650307,
    paymentSum: 0,
    buyLaterItems: [],
    item: {
      id: Number,
      userId: Number,
      goodsId: Number,
      type: String,
      goodsCode: Number,
      color: String,
      pictures: String,
      price: Number,
      name: String,
      exchange: String,
      postage: Number,
      delivery: String,
      quantity: Number,
    },
  },
  mutations: {
    setCart(state: cartState, payload: any) {
      state.cart = payload;
    },

    setQuantity(state: cartState, quantity: number) {
      if (quantity > 999) {
        state.quantity = +quantity.toString().slice(0, 3);
      } else {
        state.quantity = +quantity;
      }
    },
    setGoodsCode(state: cartState, goodsCode: number) {
      state.goodsCode = goodsCode;
    },
    setSum(state: cartState, payload: number) {
      state.paymentSum = payload;
    },

    setBuyLaterItem(state: cartState, payload: any) {
      state.buyLaterItems = payload;
    },
  },
  actions: {
    //asyncronous
    async setCart(context, payload: string) {
      const cart = await fetch(url + payload, { headers });
      const j = await cart.json();
      context.commit("setCart", j);
      let paymentSum = 0;
      context.state.cart.map(
        (item) => (paymentSum += item.price * item.quantity + item.postage)
      );
      context.commit("setSum", paymentSum);
    },
    async addCart(context) {
      const cartAdd = {
        userId: 10011,
        goodsCode: 5650312,
        quantity: 2,
      };
      cartAdd.quantity = context.state.quantity;
      cartAdd.goodsCode = context.state.goodsCode;
      if (cartAdd.quantity < 1 || cartAdd.quantity > 999) {
        alert("数量は1以上、999以下で設定してください。");
      } else {
        await axios.post("http://localhost:3000/cartAdd", cartAdd);
      }
    },
    async deleteCart(
      { commit }: { commit: Function },
      { id, userId }: { id: number; userId: number }
    ) {
      await fetch("http://localhost:3000/cartList/" + id, { method: "DELETE" });
    },
    async storeCart(context, { id, userId }: { id: number; userId: number }) {
      await axios.patch("http://localhost:3000/cartList/" + id, {
        quantity: context.state.quantity,
      });
      let paymentSum = 0;
      context.state.cart.map(
        (item) => (paymentSum += item.price * item.quantity + item.postage)
      );
      context.commit("setSum", paymentSum);
    },
    async setBuyLaterItem(context, payload: string) {
      const buyLater = await fetch(url2 + payload, { headers });
      const j = await buyLater.json();
      context.commit("setBuyLaterItem", j);
    },
    async intoLaterList(
      context,
      { id, item, userId }: { id: number; item: {}; userId: string }
    ) {
      await fetch("http://localhost:3000/cartList/" + id, { method: "DELETE" });
      await axios.post("http://localhost:3000/buyLaterList", item);
      context.dispatch("setCart", userId);
      context.dispatch("setBuyLaterItem", userId);
    },
    async backtoCartList(
      context,
      { id, item, userId }: { id: number; item: {}; userId: string }
    ) {
      await fetch("http://localhost:3000/buyLaterList/" + id, {
        method: "DELETE",
      });
      await axios.post("http://localhost:3000/cartList/", item);
      context.dispatch("setCart", userId);
      context.dispatch("setBuyLaterItem", userId);
    },
  },
  async deleteByLater(context, { id, userId }: { id: number; userId: string }) {
    await fetch("http://localhost:3000/buyLaterList/" + id, {
      method: "DELETE",
    });

    //get data again
    context.dispatch("setBuyLaterItem", userId);
  },

  getters: {
    getCart: (state: cartState) => {
      return state.cart;
    },
    getQuantity: (state: cartState) => {
      return state.quantity;
    },
    getGoodsCode: (state: cartState) => {
      return state.goodsCode;
    },
    getPaymentSum: (state: cartState) => {
      return state.paymentSum;
    },
    getBuyLaterItem: (state: cartState) => {
      return state.buyLaterItems;
    },
  },
};
