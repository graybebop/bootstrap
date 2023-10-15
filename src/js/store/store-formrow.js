import { reactive } from "vue";

export const storeFormrow = reactive({
  storage: new Map(),

  add(path, row) {
    let rows = this.storage.get(path);
    if (rows == null) {
      rows = [];
    }
    for (let i = 0; i < rows.length; i++) {
      if (rows[i].row == row.row) {
        rows.splice(i, 1);
      }
    }

    rows.push(row);
    this.storage.set(path, rows);
  },

  getRows(path) {
    return this.storage.get(path);
  },

  toggle(path) {
    let rows = this.storage.get(path);
    if (rows == null) {
      return;
    }

    for (let row of rows) {
      row.toggle();
    }
  },
});
