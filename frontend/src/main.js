import { createApp } from "vue";
import { createPinia } from "pinia";
import Notifications from "@kyvg/vue3-notification";
import VueCollapsiblePanel from "@dafcoe/vue-collapsible-panel";
import { vfmPlugin } from "vue-final-modal";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

// Stylesheet
import "@dafcoe/vue-collapsible-panel/dist/vue-collapsible-panel.css";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Notifications);
app.use(VueCollapsiblePanel);
app.use(vfmPlugin);

app.mount("#app");
