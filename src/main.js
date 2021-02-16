import devtools from '@vue/devtools'
import {createApp} from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import './css/style.css';

devtools.connect('http://localhost', 8080)


createApp(App)
    .use(store)
    .use(router)
    .mount("#app");

