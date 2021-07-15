import Vue from "vue";
import App from "./App.vue";
import {
  applyPolyfills,
  defineCustomElements,
} from "@plug-checkout/core/loader";

Vue.config.productionTip = false;

Vue.config.ignoredElements = [/plug-\w*/, /checkout-\w*/];

applyPolyfills().then(() => {
  defineCustomElements();
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
