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
};

export default {
  state: {
    account: {},
  },
  mutations: {
    //syncrous
    setAccount(state: accountState, payload: any) {
      state.account = payload[0];
      console.log("array push account", payload);
    },
  },
  actions: {
    //asyncronous
    async setAccount(context, payload: number) {
      const account = await fetch(url + payload, { headers });
      const j = await account.json();
      context.commit("setAccount", j);
    },
  },
  getters: {
    getAccount: (state: accountState) => {
      return state.account;
    },
  },
};
