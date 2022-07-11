const url = "http://localhost:3000/user/information/";
const headers = { Accept: "application/json" };
type accountState = {
  account: {
    userId: number;
    name: string;
    currentPoint: number;
    invalidPoint: number;
    QRCode: string;
    codeNumber: number;
  };
  updateAccount: {};
  updateArray: List[];
  filtered: List;
  id: number;
};
type List = {
  id: number;
  userId: number;
  listName: string;
  name1: string;
  nameKANA1: string;
  name2: string;
  nameKANA2: string;
  email: string;
  telephonenumber1: string;
  telephonenumber2: string;
  telephonenumber3: string;
  gender: string;
  birthday: string;
  postCode: string;
  city: string;
  village: string;
  town: string;
  streetname1: string;
  streetname2: string;
  streetname3: string;
  mansion: string;
  roomNumber: string;
  buildingType: string;
  elevator: string;
  date: string;
};
export default {
  state: {
    account: {},
    updateAccount: {},
    updateArray: [],
    filtered: {},
    id: 1,
  },
  mutations: {
    //syncrous
    setAccount(state: accountState, payload: any) {
      state.account = payload[0];
      console.log("array push account", payload);
    },
    setUpdateAccount(state: accountState, payload: {}) {
      state.updateAccount = payload;
    },
    setUpdateArray(state: accountState, payload: []) {
      state.updateArray = payload;
    },
    setFiltered(state: accountState, payload: List) {
      state.filtered = payload;
    },
    filterArr(state: accountState, payload: string) {
      console.log("updateArray", state.updateArray);
      console.log("updateAccount", state.updateAccount);
      state.filtered = state.updateArray.filter(
        (w) => w.listName === payload
      )[0];
      state.id = state.updateArray.filter((w) => w.listName === payload)[0].id;
      console.log("id", state.id);
    },
  },
  actions: {
    //asyncronous
    async setAccount(context, payload: number) {
      const account = await fetch(url + payload, { headers });
      const j = await account.json();
      context.commit("setAccount", j);
    },
    async setUpdate(context, payload: number) {
      const info = await fetch(
        "http://localhost:3000/update/account/" + payload,
        { headers }
      );
      const j = await info.json();
      console.log("jhaha", j);
      context.commit("setUpdateAccount", j[0]);
      context.commit("setUpdateArray", j);
      context.commit("setFiltered", j[0]);
    },
    async deleteListName(
      context,
      { id, userId }: { id: number; userId: number }
    ) {
      await fetch("http://localhost:3000/updateAccount/" + id, {
        method: "DELETE",
      });
      context.dispatch("setUpdate", userId);
    },
  },
  getters: {
    getAccount: (state: accountState) => {
      return state.account;
    },
    getUpdateAccount(state: accountState) {
      return state.updateAccount;
    },
    getUpdateArray(state: accountState) {
      return state.updateArray;
    },
    getFiltered: (state: accountState) => {
      return state.filtered;
    },
    getIdd(state: accountState) {
      return state.id;
    },
  },
};
