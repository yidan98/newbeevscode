const url = "http://localhost:3000/cart/";
const headers = { Accept: "application/json" };

type cartState = {
  cart: [];
};
// type cartLi = {
//   goodsCode: number;
//   name: String;
//   delivery: String;
//   exchange: String;
//   postage: number;
//   type: String;
//   price: number;
//   color: String;
//   pictures: String;
// };
export default {
  state: {
    cart: {},
  },
  mutations: {
    setCart(state: cartState, payload: any) {
      state.cart = payload;
    },
  },
  actions: {
    //asyncronous
    async setCart({ commit }: { commit: Function }, payload: string) {
      const cart = await fetch(url + payload, { headers });
      const j = await cart.json();
      commit("setCart", j);
    },
  },
  getters: {
    getCart: (state: cartState) => {
      return state.cart;
    },
  },
};
