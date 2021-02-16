// import devtools from '@vue/devtools'
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./css/style.scss";
import Toaster from "@meforma/vue-toaster";

// devtools.connect('http://localhost', 8080)

createApp(App)
  .use(Toaster)
  .use(store)
  .use(router)
  .mount("#app");
