const url = "http://localhost:3000/goods/cart/";
const headers = { Accept: "application/json" };

export type cartState = {
  cart: {};
};
export default {
  state: {
    cart: {},
  },
  mutations: {
    //syncrous
    setReviewTotal(state: cartState, payload: any) {
      //state.cart.push(...payload);
      //state.cart = payload
      state.cart = payload[0];
      console.log("array push cart", payload);
    },
  },
  actions: {
    //asyncronous
    async setCart({ commit }: { commit: Function }, payload: string) {
      const cart = await fetch(url + payload, { headers });
      const j = await cart.json();
      commit("cart", j);
      console.log("in setCart method", j);
    },
  },
  getters: {
    getReviewTotal: (state: cartState) => {
      console.log("in getReviewTotal method", state.cart);
      console.log(state.cart);
      return state.cart;
    },
  },
};
