import Vue from "vue";
import App from "./App.vue";
import "./icons";
import store from "./store";
import router from "./router";
import Ionic from "@ionic/vue";
import axios from "axios";
import VueAxios from "vue-axios";
import { defineCustomElements } from "@ionic/pwa-elements/loader";
import User from "./models/User";
Vue.use(Ionic);
Vue.use(VueAxios, axios);
Vue.config.productionTip = false;
Vue.config.ignoredElements = [/^ion-/];
var app = new Vue({
  store: store,
  router: router,
  async beforeCreate() {
    let user = await User.current();
    this.$store.commit("setUser", user);
    this.$mount("#app");
  },
  render: h => h(App)
});
defineCustomElements(window);
