import { createApp } from "vue";
import App from "./App.vue";
import router from "vue-router";
import store from "./store";

const app = createApp(App);
app.use(store);
app.mount("#app");
app.use(router).mount("#app");
