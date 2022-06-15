import axios from "axios";

const url = "http://localhost:3000/cart/";
const headers = { Accept: "application/json" };

type cartState = {
  cart: [];
  id: number;
  quantity: number;
};

export default {
  state: {
    cart: [],
    quantity: 1,
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
  },
  actions: {
    //asyncronous
    async setCart({ commit }: { commit: Function }, payload: string) {
      const cart = await fetch(url + payload, { headers });
      const j = await cart.json();
      commit("setCart", j);
    },
    async addCart(context) {
      const cartAdd = {
        userId: 10011,
        goodsCode: 5650312,
        quantity: 2,
      };
      cartAdd.quantity = context.state.quantity;
      if (cartAdd.quantity < 1 || cartAdd.quantity > 999) {
        alert("数量は1以上、999以下で設定してください。");
      } else {
        await axios.post("http://localhost:3000/cartAdd", cartAdd);
      }
    },
  },
  getters: {
    getCart: (state: cartState) => {
      return state.cart;
    },
    getQuantity: (state: cartState) => {
      return state.quantity;
    },
  },
};
