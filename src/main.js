import { createApp, defineAsyncComponent } from "vue/dist/vue.esm-bundler";
import menusTotal from "@/js/menus/menu-totals.js";
import router from "@/js/router";

import "./assets/scss/styles.scss";
import "bootstrap/dist/css/bootstrap.css";

const EP_COMPONENTS = ["EpButton", "EpFormRow", "EpLabel", "EpOptionButton", "EpFormInput", "EpFormInputButton", "mytpButton", "mytpFormInput"];

function loadEpComponents(app) {
	try {
		for (let component of EP_COMPONENTS) {
			console.log(app);
			app.component(
				component,
				defineAsyncComponent(() => import(`@/components/${component}.vue`))
			);
		}
	} catch (error) {
		console.log("loadEpComponents : Error=" + error);
	}
}

import App from "./App.vue";

const app = createApp(App);

console.log(app);

app.use(router);

app.config.globalProperties.$router = router;
app.config.globalProperties.$menusTotal = menusTotal;

loadEpComponents(app);

app.mount("#app");
