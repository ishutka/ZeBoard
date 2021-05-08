<template>
  <v-form ref="form" v-model="valid" lazy-validation >
    <v-row class="create-task-form">
      <v-col cols="12">
        <v-card-title class="headline">
          Сreate task
        </v-card-title>
      </v-col>
      <v-col cols="12">
        <v-text-field
          label="Name"
          placeholder="Placeholder"
          outlined
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          label="Description"
          placeholder="Placeholder"
          outlined
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-textarea name="input-7-4"
          label="Description"
          placeholder="Placeholder"
          outlined
        ></v-textarea>
      </v-col>

      <v-col cols="12" lg="6">
        <v-menu
          v-model="datePicker"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="date"
              label="Until"
              placeholder="Placeholder"
              append-icon="mdi-calendar"
              readonly
              outlined
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="date"
            @input="datePicker = false"
          ></v-date-picker>
        </v-menu>
      </v-col>
      <v-col cols="12" lg="6">
        <v-text-field
          label="Estimation time"
          placeholder="Placeholder"
          outlined
        ></v-text-field>
      </v-col>
      <v-col cols="12" lg="6">
        <v-select
          v-model="selectedAutor"
          :items="autors"
          :rules="[v => !!v || 'Item is required']"
          label="Autor"
          placeholder="Automatically"
          required
          outlined
          prepend-inner-icon="mdi-account-outline"
        ></v-select>
      </v-col>
      <!-- <v-btn color="error" class="mr-4" @click="reset">
        Reset Form
      </v-btn> -->

      <!-- <v-btn color="warning" @click="resetValidation">
        Reset Validation
      </v-btn> -->
      <v-col cols="12">
        <v-btn
          dark
          large
          block
          class="create-task-btn"
          elevation="0"
          @click="createTask"
        >
          Сreate task
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>
<script>
export default {
  data() {
    return {
      autors: [],
      selectedAutor: null,
      datePicker: false,
      date: new Date().toISOString().substr(0, 10),
      valid: false,
      name: "",
      description: "",
      until: "",
      estimation: "",
      autor: "",
      nameRules: [
        v => !!v || "Name is required",
        v => v.length <= 10 || "Name must be less than 10 characters"
      ]
    };
  },
  methods: {
    validate() {},
    resetValidate() {},
    createTask() {},
    reset() {}
  }
};
</script>
<style lang="scss">
.create-task-form {
    .v-text-field.v-input .v-label {
        font-size: 10px;
        top: -20px !important;
        left: -13px !important;
        &.v-label--active {
            transform: translateY(-5px) scale(1);
        }
    }
    .v-input.v-input--is-label-active {
        legend {
            display: none;
        }
    }
    .v-text-field.v-input.v-select .v-input__prepend-inner {
        position: absolute;
    }
    .v-input__prepend-inner,
    .v-input__append-inner {
        margin-top: 0;
        align-self: center;
    }
    .v-text-field--outlined > .v-input__control .v-select__selections {
        padding: 2px 0;
    }
    .v-text-field--outlined > .v-input__control .v-select__slot,
    .v-text-field--outlined > .v-input__control > .v-input__slot {
        min-height: 28px;
    }
    .v-text-field--outlined fieldset {
        top: 0;
    }
}
</style>
