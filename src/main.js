import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store";
import VueViewer from "v-viewer";
const app = createApp(App);
app.use(store);
app.use(VueViewer);
app.use(router).mount("#app");
