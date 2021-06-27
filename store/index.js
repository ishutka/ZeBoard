export const state = () => ({
  columns: [],
  toDoColumn: {}
});

export const getters = {
  getColumns(state) {
    return state.columns;
  }
};

export const mutations = {
  setToDoColumn(state, val) {
      // debugger;
    state.toDoColumn = val;
  },
  setColumns(state, val) {
    state.columns = val;
  },
  addNewColumn(state, val) {
      // debugger;
    state.columns.push(val);
  }
};

export const actions = {
  setData(state) {
    // state.counter++;
  },
  fetchDataFromLocalstorage({ state, commit }) {
    let columns;
    try {
      columns = window.localStorage.getItem("ZeBoard-columns");
    } catch (e) {
      window.localStorage.removeItem("ZeBoard-columns");
      throw new Error(e);
    }
    if (!columns || !columns.length) {
      columns = "TO DO;DONE";
      const colToDo = {
        name: "TO DO",
        position: 0,
        tasks: [],
        tasksQuantity: 0
      };
      const colDone = { name: "DONE", position: 1, tasks: [] };
        window.localStorage.setItem("ZeBoard-column-TO DO", JSON.stringify(colToDo));
        window.localStorage.setItem("ZeBoard-column-DONE", JSON.stringify(colDone));
      window.localStorage.setItem("ZeBoard-columns", columns);
    }
    columns = columns.split(";") || [];
    columns.forEach(c => {
      try {
        const column = JSON.parse(window.localStorage.getItem(`ZeBoard-column-${c}`));
        if (c == "TO DO") commit("setToDoColumn", column);
        // debugger;
        commit("addNewColumn", column);
        // state.columns.push(column);
      } catch (e) {
        window.localStorage.removeItem("ZeBoard-columns");
        throw new Error(e);
      }
    });
  }
};
