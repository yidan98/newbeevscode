const url = "http://localhost:3000/order/detail/";
const headers = { Accept: "application/json" };
type OrderState = {
  order: {
    deliveryDate: string;
    orderId: string;
    deliverNum: string;
    deliverytype: string;
    orderDetail: List[];
  };
  sum: number;
  orderDetail: List[];
};
type List = {
  goodsCode: number;
  name: string;
  color: string;
  pictures: string;
  quantity: number;
  price: number;
};

export default {
  state: {
    order: {},
    orderDetail: [],
    sum: Number,
  },
  mutations: {
    //syncrous
    setOrder(state: OrderState, payload: any) {
      state.order = payload;
      console.log("array push order", payload);
    },
    setOrderDetail(state: OrderState, payload: any) {
      state.orderDetail = payload[0].orderDetail;
      console.log("array push orderDetail", payload);
    },
    setSum(state: OrderState, payload: number) {
      state.sum = payload;
    },
  },
  actions: {
    //asyncronous
    async setOrder(context, payload: string) {
      const order = await fetch(url + payload, { headers });
      const j = await order.json();
      context.commit("setOrder", j[0]);
      context.commit("setOrderDetail", j);
      console.log("jj", j);
      let paymentSum = 0;
      context.state.orderDetail.map(
        (item) => (paymentSum += item.price * item.quantity)
      );
      context.commit("setSum", paymentSum);
    },
  },
  getters: {
    getOrder: (state: OrderState) => {
      return state.order;
    },
    getOrderDetail: (state: OrderState) => {
      return state.orderDetail;
    },
    getSum(state: OrderState) {
      return state.sum;
    },
  },
};
