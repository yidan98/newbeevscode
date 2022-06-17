import axios from "axios";

const url = "http://localhost:3000/cart/list/";
const headers = { Accept: "application/json" };

type cartState = {
  cart: [];
  id: number;
  quantity: number;
  goodsCode: number;
  paymentSum: number;
};

export default {
  state: {
    cart: [],
    quantity: 1,
    goodsCode: 5650307,
    paymentSum: 0,
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
  },
};
