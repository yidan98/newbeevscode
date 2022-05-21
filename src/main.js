import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
// import router from "./router/index2";
const app = createApp(App);
app.use(store);
app.mount("#app");
// app.use(router).mount("#app");
// createApp(App).mount("#app");
