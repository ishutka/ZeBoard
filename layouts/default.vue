<template>
  <v-app class="board-body">
    <v-main>
      <toolbar
        @openCreateTaskDialog="createTaskDialog = true"
        @openCreateColumnDialog="createColumnDialog = true"
      />
      <Nuxt ref="nuxt" />
    </v-main>
    <v-dialog v-model="createTaskDialog" max-width="900" width="90%">
      <v-card class="pa-4 pa-lg-10">
        <createTaskForm
          v-if="createTaskDialog"
          :toDoColumn="toDoColumn"
        />
        <v-card-actions class="flex-wrap">
          <v-btn
            color="blue darken-1"
            text
            large
            block
            @click="createTaskDialog = false"
          >
            Cancel
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
import {mapState} from 'vuex';
export default {
  data() {
    return {
      createTaskDialog: false,
      createColumnDialog: false,
      // toDoColumn: {}
    };
  },
  mounted() {
  },
  computed:{
    ...mapState(['toDoColumn']),
  },
  // methods: {
  // }
};
</script>
<style lang="scss">
#app {
  font-family: "Montserrat", sans-serif;
}
#app button {
  text-transform: none;
}

.board-body {
  background-color: #cdeafb !important;
}
.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
