export const state = () => ({
    columns: [],
    toDoColumn: {},
    doneColumn: {},
});

export const getters = {
    getColumns(state) {
        return state.columns;
    },
};

export const mutations = {
    setToDoColumn(state, val) {
        state.toDoColumn = val;
    },

    setDoneColumn(state, val) {
        // debugger;
        state.doneColumn = val;
    },

    setColumns(state, val) {
        state.columns = val;
    },

    addNewColumn(state, val) {
        // debugger;
        state.columns.push(val);
    },

    addNewEmptyColumn(state, name) {
        const column = {
            name,
            tasks: [],
        };
        const columnInState = state.columns.find(c => c.name === name);

        if (!columnInState) {
            state.columns.push(column);
            window.localStorage.setItem(`ZeBoard-column-${name}`, JSON.stringify(column));
        }
    },

    fillColumnsNames (state, name) {
        try {
            let names = window.localStorage.getItem("ZeBoard-columns-names");
            let namesArray = names.split(";")
                .filter(item => item !== name);
            namesArray.pop();
            let newNames = [ ...namesArray, name, 'DONE'].join(';');
            window.localStorage.setItem("ZeBoard-columns-names", newNames);
        } catch (e) {
            window.localStorage.removeItem("ZeBoard-columns-names");
            throw new Error(e);
        }
    },
};

export const actions = {
    setData(state) {
        // state.counter++;
    },

    setStartColumns ({ commit }) {
        const columnsNames = "TODO;DONE";

        const colToDo = {
            name: "TODO",
            tasks: [],
            tasksQuantity: 0
        };

        const colDone = {
            name: "DONE",
            tasks: [],
        };

        commit("setToDoColumn", colToDo);
        commit("setDoneColumn", colDone);

        window.localStorage.setItem("ZeBoard-column-TODO", JSON.stringify(colToDo));
        window.localStorage.setItem("ZeBoard-column-DONE", JSON.stringify(colDone));
        window.localStorage.setItem("ZeBoard-columns-names", columnsNames);
    },

    setColumnFromLocalStorage ({ commit }, columnName) {
        try {
            const column = JSON.parse(window.localStorage.getItem(`ZeBoard-column-${columnName}`));

            if (columnName == "TODO") {
                commit("setToDoColumn", column);

                return;
            }
            if (columnName == "DONE") {
                commit("setDoneColumn", column);

                return;
            }

            commit("addNewColumn", column);
        } catch (e) {
            // window.localStorage.removeItem("ZeBoard-columns-names");
            window.localStorage.removeItem(`ZeBoard-column-${c}`);
            throw new Error(e);
        }
    },

    fetchDataFromLocalstorage({state, commit, dispatch}) {
        let columnsNames = '';
        try {
            columnsNames = window.localStorage.getItem("ZeBoard-columns-names");
        } catch (e) {
            window.localStorage.removeItem("ZeBoard-columns-names");
            throw new Error(e);
        }
        if (!columnsNames) {
            dispatch('setStartColumns');

            return;
        }

        const columns = columnsNames.split(";");
        columns.forEach(c => {
            dispatch('setColumnFromLocalStorage', c);
        });
    }
};
