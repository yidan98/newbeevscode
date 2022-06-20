const url = "http://localhost:3000/order/history/";
const headers = { Accept: "application/json" };
type historyState = {
  orderList: list[];
  filterList: list[];
};
type list = {
  userId: number;
  orderNumber: string;
  orderDate: string;
  currentStatus: string;
  deliveryType: string;
  deliveryDate: string;
};
export default {
  state: {
    orderList: [],
    filterList: [],
  },
  mutations: {
    //syncrous
    setOrderList(state: historyState, payload: any) {
      state.orderList = payload;
      console.log("array push orderList", payload);
    },
    setFilterList(
      state: historyState,
      { date, status }: { date: string; status: string }
    ) {
      const today = new Date();
      state.filterList = state.orderList.filter(
        (info: list) => info.orderDate === date && info.currentStatus === status
      );
    },
  },
  actions: {
    //asyncronous
    async setOrderList(context, payload: number) {
      const orderList = await fetch(url + payload, { headers });
      const j = await orderList.json();
      context.commit("setOrderList", j);
    },
  },
  getters: {
    getOrderList: (state: historyState) => {
      return state.orderList;
    },
  },
};
