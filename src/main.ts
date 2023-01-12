import Vue from "vue";
import App from "./App.vue";
import {
  applyPolyfills,
  defineCustomElements,
} from "@malga-checkout/core/loader";

Vue.config.productionTip = false;

Vue.config.ignoredElements = [/malga-\w*/];

applyPolyfills().then(() => {
  defineCustomElements();
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
