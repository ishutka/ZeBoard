<template>
  <v-app class="board-body">
    <v-main>
      <toolbar
        @openCreateTaskDialog="createTaskDialog = true"
        @openCreateColumnDialog="createColumnDialog = true"
      />
      <Nuxt />
    </v-main>
    <v-dialog v-model="createTaskDialog" max-width="290">
      <v-card>
        <v-card-title class="headline">
          Use Google's location service?
        </v-card-title>
        <v-card-text
          >Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.</v-card-text
        >
        <v-card-actions class="flex-wrap">
          <!-- <v-btn
            dark
            large
            block
            class="create-task-btn"
            elevation="0"
            @click="createTask"
          >
            Сreate task
          </v-btn> -->
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
export default {
  data() {
    return {
      createTaskDialog: false,
      createColumnDialog: false
    };
  },
  methods: {
  }
};
</script>
<style lang="scss">
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
