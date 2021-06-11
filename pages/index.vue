<template>
  <v-container class="column-holder d-flex flex-column justify-start">
    <v-expansion-panels>
      <Column
        v-for="(column, index) in columns"
        :key="index"
        :column="column"
        :data-index="index"
      />
    </v-expansion-panels>
    <v-btn
      v-if="$vuetify.breakpoint.xsOnly"
      text
      large
      class="mx-4 mx-md-8 px-sm-2 px-md-10 create-column-btn"
    >
      Сreate column
      <v-icon dark>
        mdi-plus
      </v-icon>
    </v-btn>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      columns: [],
      toDoColumn: {}
    };
  },
  mounted() {
    this.fetchDataFromLocalstorage();
  },
  methods: {
    showError(e) {
      console.log("there is an error: ", e);
      // show eror for user
    },
    fetchDataFromLocalstorage() {
      let columns;
      try {
        columns = window.localStorage.getItem("columns");
      } catch (e) {
        this.showError(e);
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
        window.localStorage.setItem("column-TO DO", JSON.stringify(colToDo));
        window.localStorage.setItem("column-DONE", JSON.stringify(colDone));
        window.localStorage.setItem("columns", columns);
      }
      columns = columns.split(";") || [];
      columns.forEach(c => {
        try {
          const column = JSON.parse(window.localStorage.getItem(`column-${c}`));
          if (c == "TO DO") this.toDoColumn = column;

          this.columns.push(column);
        } catch (e) {
          this.showError(e);
          throw new Error(e);
        }
      });
    }
  }
};
</script>

<style lang="scss">
@import "~/assets/css/main.scss";

.column-holder {
  overflow: auto;

  .v-btn.create-column-btn {
    color: $dark-blue;
  }

  .v-btn.create-column-btn:hover {
    opacity: 0.5;
  }

  .v-btn.create-column-btn:focus,
  .v-btn.create-column-btn:active {
    background-color: $blue;
    border-color: $blue;
    color: $dark-blue;
    opacity: 1 !important;
  }

  @media screen and (min-width: 960px) {
    > div::-webkit-scrollbar-track {
      background: #fff;
    }

    > div::-webkit-scrollbar-thumb {
      background: #414141;
      border-radius: 10px;
      display: table-row-group;
      width: 0px;
    }

    > div::-webkit-scrollbar {
      width: 8px;
      border-radius: 5px;
      background: #fff;
    }
    > div {
      max-height: calc(100vh - 200px);
    }
  }
}
</style>
