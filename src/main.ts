import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";
import router from "./router/index";
import { store, key } from "./store";
import VueViewer from "v-viewer";
import "gitart-vue-dialog/dist/style.css";
import { GDialog } from "gitart-vue-dialog";
const app = createApp(App);
app.use(store, key);
app.use(VueViewer);
app.component("GDialog", GDialog);
app.use(ElementPlus);
app.use(router).mount("#app");
