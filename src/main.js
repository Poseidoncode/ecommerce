import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import usePrime from "./plugins/prime";
import mitt from "mitt";
// import ToastService from "primevue/toastservice";
// import PrimeVue from "primevue/config";
// .use(PrimeVue).use(ToastService)

import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

//vee-validate
import { Field, Form, ErrorMessage, defineRule, configure } from "vee-validate";
import { required, email, min } from "@vee-validate/rules";
import { localize, setLocale } from "@vee-validate/i18n";
// import zhTW from "@vee-validate/i18n/dist/locale/zh_TW.json";
import enUs from "@vee-validate/i18n/dist/locale/en.json";

// 定義驗證規則

defineRule("required", required);
defineRule("email", email);
defineRule("min", min);

// 設定 vee-validate 全域規則

configure({
  // generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  generateMessage: localize({ enUs }),

  validateOnInput: true, // 當輸入任何內容直接進行驗證
  classes: {
    valid: "valid",
    invalid: "invalid",
  },
});

// 設定預設語系
// setLocale("zh_TW");
setLocale("enUs");

//toast
const options = {
  // You can set your default options here
  transition: "Vue-Toastification__fade",
  maxToasts: 20,
  newestOnTop: true,
};

const emitter = mitt();

import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "./styles/index.scss";

const app = usePrime(createApp(App).use(store).use(router).use(Toast, options));

app.component("VForm", Form);
app.component("VField", Field);
app.component("ErrorMessage", ErrorMessage);

app.mount("#app");
app.provide("emitter", emitter);
