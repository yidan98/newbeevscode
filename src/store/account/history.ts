const url = "http://localhost:3000/order/history/";
const headers = { Accept: "application/json" };
type HistoryState = {
  orderList: List[];
  filterList: List[];
  deliveryDate: string;
  currentStatus: string;
  statusValue: string;
};
type List = {
  userId: number;
  orderNumber: string;
  orderDate: string;
  currentStatus: string;
  deliveryType: string;
  deliveryDate: string;
  statusValue: string;
};
export default {
  state: {
    orderList: [],
    filterList: [],
    currentStatus: "ALL",
    deliveryDate: "00",
  },
  mutations: {
    //syncrous
    setOrderList(state: HistoryState, payload: any) {
      state.orderList = payload;
      console.log("array push orderList", payload);
    },
    setFilterList(state: HistoryState, payload: any) {
      function GetDateStr(AddDayCount) {
        const dd = new Date();
        dd.setDate(dd.getDate() + AddDayCount); //获取AddDayCount天后的日期
        const y = dd.getFullYear();
        const m =
          dd.getMonth() + 1 < 10
            ? "0" + (dd.getMonth() + 1)
            : dd.getMonth() + 1; //获取当前月份的日期，不足10补0
        const d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate(); //获取当前几号，不足10补0
        return y + "/" + m + "/" + d;
      }
      const thisYear = new Date().getFullYear();

      // const thisMonth = new Date().getMonth() + 1;
      const halfYear = GetDateStr(-180);

      state.filterList = payload.filter(
        (order) => new Date(order.orderDate) > new Date(halfYear)
        // new Date(order.orderDate).getMonth() + 1 > thisMonth - 6 &&
        // new Date(order.orderDate).getFullYear() === thisYear
      );
      // state.filterList =payload
      console.log("array push orderList", payload);
    },
    setDate(state: List, dateValue: string) {
      state.deliveryDate = dateValue;
    },
    setStatus(state: List, statusValue: string) {
      state.currentStatus = statusValue;
    },
    filterByDate(state: HistoryState) {
      //js获取当前时间前后N天前后日期的方法
      function GetDateStr(AddDayCount) {
        const dd = new Date();
        dd.setDate(dd.getDate() + AddDayCount); //获取AddDayCount天后的日期
        const y = dd.getFullYear();
        const m =
          dd.getMonth() + 1 < 10
            ? "0" + (dd.getMonth() + 1)
            : dd.getMonth() + 1; //获取当前月份的日期，不足10补0
        const d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate(); //获取当前几号，不足10补0
        return y + "/" + m + "/" + d;
      }
      console.log("半年前：" + GetDateStr(-180));
      //根据注文日date过滤数据
      // const today = new Date();
      const thisYear = new Date().getFullYear();
      console.log("this year", thisYear);
      // const thisMonth = new Date().getMonth() + 1;
      const halfYear = GetDateStr(-180);
      console.log("halfYear", halfYear);
      let filtered: List[] = [];
      if (state.deliveryDate === "00") {
        filtered = state.orderList.filter(
          (order) => new Date(order.orderDate) > new Date(halfYear)
          // new Date(order.orderDate).getMonth() + 1 > thisMonth - 6 &&
          // new Date(order.orderDate).getFullYear() === thisYear
        );
      } else if (state.deliveryDate === "10") {
        filtered = state.orderList.filter(
          (order) => new Date(order.orderDate).getFullYear() === thisYear
        );
        console.log("filtered", filtered);
      } else if (state.deliveryDate === "11") {
        filtered = state.orderList.filter(
          (order) => new Date(order.orderDate).getFullYear() === thisYear - 1
        );
      } else if (state.deliveryDate === "12") {
        filtered = state.orderList.filter(
          (order) => new Date(order.orderDate).getFullYear() === thisYear - 2
        );
      } else if (state.deliveryDate === "13") {
        filtered = state.orderList.filter(
          (order) => new Date(order.orderDate).getFullYear() === thisYear - 3
        );
      } else if (state.deliveryDate === "14") {
        filtered = state.orderList.filter(
          (order) => new Date(order.orderDate).getFullYear() === thisYear - 4
        );
      }
      //根据收获状态status过滤数据
      if (state.currentStatus === "ALL") {
        state.filterList = filtered;
        console.log("state.filterList", state.filterList);
      } else {
        state.filterList = filtered.filter(
          (order) => order.statusValue === state.currentStatus
        );
        console.log("state.currentStatus", state.currentStatus);
        console.log("state.filterListbetu", state.filterList);
      }
      //按照时间降序排序
      state.filterList.sort(
        (a, b) => +new Date(b.orderDate) - +new Date(a.orderDate)
      );
    },
  },
  actions: {
    //asyncronous
    async setOrderList(context, payload: number) {
      const orderList = await fetch(url + payload, { headers });
      const j = await orderList.json();
      context.commit("setOrderList", j);
      context.commit("setFilterList", j);
    },
  },
  getters: {
    getOrderList(state: HistoryState) {
      return state.orderList;
    },
    getFilterList(state: HistoryState) {
      console.log("filteredList", state.filterList);
      return state.filterList;
    },
    getDate(state: List) {
      return state.deliveryDate;
    },
    getStatus(state: List) {
      return state.currentStatus;
    },
  },
};
