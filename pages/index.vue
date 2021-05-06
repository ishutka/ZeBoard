<template>
  <v-container class="board-holder d-flex flex-column justify-start">
    <v-expansion-panels>
      <Column v-for="(board, index) in boards" :key="index" :board="board" />
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
      boards: []
    };
  },
  mounted() {
    let boards;
    try {
      boards = window.localStorage.getItem("boards");
    } catch (e) {
      this.showError(e);
      throw new Error(e);
    }
    if (!boards) {
      boards = [
        { name: "TO DO", position: 0, tasks: [] },
        { name: "DONE", position: 1, tasks: [] }
      ];
    }
    this.boards = boards;
  },
  methods: {
    showError(e) {
      console.log("there is an error: ", e);
      // show eror for user
    }
  }
};
</script>

<style lang="scss">
@import "~/assets/css/main.scss";

.board-holder {
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
