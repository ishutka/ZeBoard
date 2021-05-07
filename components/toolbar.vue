<template>
  <client-only>
    <v-toolbar
      :height="$vuetify.breakpoint.xs ? 62 : 122"
      :max-height="$vuetify.breakpoint.xs ? 62 : 122"
    >
      <v-container class="py-0">
        <img src="images/logo.png" />

        <v-spacer></v-spacer>

        <v-btn
          v-if="$vuetify.breakpoint.smAndUp"
          outlined
          large
          class="mx-4 mx-md-8 px-sm-2 px-md-10 create-column-btn"
          @click="openCreateColumnDialog"
        >
          Сreate column
        </v-btn>

        <v-btn
          v-if="$vuetify.breakpoint.smAndUp"
          dark
          large
          class="px-sm-2 px-md-10 create-task-btn"
          elevation="0"
          @click="openCreateTaskDialog"
        >
          Сreate task
        </v-btn>
        <v-btn
          v-else
          fab
          plain
          large
          class="px-10"
          elevation="0"
          color="#FC1370"
          @click="openCreateTaskDialog"
        >
          <v-icon dark>
            mdi-plus
          </v-icon>
        </v-btn>
      </v-container>
    </v-toolbar>
  </client-only>
</template>
<script>
export default {
  methods: {
    openCreateTaskDialog() {
      this.$emit("openCreateTaskDialog");
    },
    openCreateColumnDialog() {
      this.$emit("openCreateColumnDialog");
    }
  }
};
</script>
<style lang="scss">
@import "~/assets/css/main.scss";
#app {
  .v-btn.create-task-btn {
    background-color: $pink;
  }

  .v-btn.create-task-btn:hover {
    background-color: $light-pink;
  }

  .v-btn.create-task-btn:focus,
  .v-btn.create-task-btn:active {
    background-color: $dark-pink;
    opacity: 1 !important;
  }
}
.v-toolbar {
  .v-toolbar button {
    text-transform: none;
  }

  .v-toolbar__content {
    padding: 12px 0;
  }

  img {
    height: 100%;
    max-height: 94px;
    width: auto;
    flex: 0 0 auto;
  }

  .container {
    height: 100%;
    min-height: 100%;
  }

  .v-btn {
    border-radius: 10px;
    text-transform: none;
    font-weight: 400;
    font-size: 20px;

    &:before {
      content: none;
    }

    .v-ripple__container {
      display: none !important;
    }
  }

  .v-btn.create-column-btn {
    color: $dark-blue;
    border-color: $dark-blue;
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
  @media screen and (min-width: 600px) {
    img {
      height: 64px;
    }
  }
}
</style>
