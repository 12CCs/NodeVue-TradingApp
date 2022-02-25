import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes";
import { HTTP } from "./http-common"

import { store } from "./store/store.js";

// App creating
const app = createApp(App);

app.config.globalProperties.$axios = HTTP;
store.$axios = HTTP;

app.use(router);
app.use(store);
app.use(VueSweetalert2);

app.mount("#app");