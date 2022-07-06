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
};

export default {
  state: {
    account: {},
    updateAccount: {},
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
  },
  actions: {
    //asyncronous
    async setAccount(context, payload: number) {
      const account = await fetch(url + payload, { headers });
      const j = await account.json();
      context.commit("setAccount", j);
    },
    async setUpdateAccount(context, payload: number) {
      const info = await fetch(
        "http://localhost:3000/update/account/" + payload,
        { headers }
      );
      const j = await info.json();
      context.commit("setUpdateAccount", j[0]);
    },
  },
  getters: {
    getAccount: (state: accountState) => {
      return state.account;
    },
    getUpdateAccount(state: accountState) {
      return state.updateAccount;
    },
  },
};
