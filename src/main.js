import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUserSecret, fas } from "@fortawesome/free-solid-svg-icons";
library.add(faUserSecret, fas);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
