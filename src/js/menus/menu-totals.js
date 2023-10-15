import publish from "@/js/menus/menu-publish";
const GROUPS = [];

function setupMenus() {
  GROUPS.push(publish.getMenus());
}

setupMenus();
export default {
  getMenus() {
    let menus = [];
    for (let i = 0; i < GROUPS.length; i++) {
      for (let j = 0; j < GROUPS[i].menuList.length; j++) {
        for (let k = 0; k < GROUPS[i].menuList[j].items.length; k++) {
          let item = { ...GROUPS[i].menuList[j].items[k] };
          menus.push(item);
        }
      }
    }
    return menus;
  },
};
