import { createRouter, createWebHistory } from "vue-router";

import menusTotal from "@/js/menus/menu-totals";
import unKnownRoute from "@/views/UnKnownRoute.vue";

const mainRoutes = [];

buildMainRoutes();

function loadRoute(path) {
  let route = null;

  try {
    require(`@/views${path}.vue`);
    route = {
      name: path,
      path: path,
      component: () => import(`@/views${path}.vue`),
    };
  } catch (error) {
    route = {
      path: path,
      component: unKnownRoute,
    };
    console.log(error);
    console.log(`'페이지를 찾을수 없습니다.'@/views${path}.vue'`);
  }

  return route;
}

function buildMainRoutes() {
  let items = menusTotal.getMenus();

  for (let item of items) {
    let route = loadRoute(item.path);
    mainRoutes.push(route);
  }
}

var routes = [
  {
    path: "/",
    name: "main",
    component: () => import("@/views/main/SystemMain.vue"),
    children: mainRoutes,
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/publish/login/LoginPage.vue"),
  },

  {
    path: "/svg",
    name: "svg",

    component: () => import("@/views/SVGViewer.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.VUE_APP_BASE_URL || "/"),
  routes,
});

export default router;
