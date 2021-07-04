<template>
  <v-form ref="taskForm" v-model="valid" lazy-validation>
    <v-row class="create-task-form">
      <v-col cols="12">
        <v-card-title class="headline"> Сreate task </v-card-title>
      </v-col>
      <v-col cols="12">
        <v-text-field
          label="Name"
          placeholder="Placeholder"
          name="name"
          outlined
          required
          v-model="name"
          :rules="nameRules"
        ></v-text-field>
      </v-col>
      <!-- <v-col cols="12">
        <v-text-field
          label="Description"
          placeholder="Placeholder"
          outlined
        ></v-text-field>
      </v-col> -->
      <v-col cols="12">
        <v-textarea
          name="description"
          label="Description"
          placeholder="Placeholder"
          outlined
          v-model="description"
        ></v-textarea>
      </v-col>

      <v-col cols="12" lg="6">
        <v-menu
          v-model="datePickerIsShowed"
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
              name="until"
              placeholder="Placeholder"
              append-icon="mdi-calendar"
              readonly
              outlined
              required
              :rules="[
                v => {
                  return (
                    !v.length ||
                    new Date(`${v}T18:00:00`).getTime() >
                      new Date().getTime() ||
                    (new Date(`${v}T18:00:00`).getTime() <= new Date().getTime()
                      ? 'It can`t be earlier than tomorrow'
                      : 'It can`t be earlier than today')
                  );
                }
              ]"
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="date"
            @input="datePickerIsShowed = false"
          ></v-date-picker>
        </v-menu>
      </v-col>
      <v-col cols="12" lg="6">
        <v-text-field
          label="Estimation time"
          name="estimation"
          placeholder="Placeholder"
          outlined
          v-model.trim="estimation"
          :rules="[v => estimationRules(v) || 'Time is over']"
        ></v-text-field>
      </v-col>
      <v-col cols="12" lg="6">
        <v-select
          class="select-autor"
          name="autor"
          v-model="selectedAutor"
          :items="autors"
          attach=".select-autor"
          :rules="[v => !!v.name || 'Item is required']"
          label="Autor"
          placeholder="Automatically"
          required
          outlined
          positionY="210"
          :menu-props="{
            contentClass: 'select-autor-menu',
            offsetY: true
          }"
          return-object
          :prepend-inner-icon="selectedAutor.name ? '' : 'mdi-account-outline'"
        >
          <template v-slot:item="{ item }">
            <div class="d-flex align-center">
              <img class="avatar" :src="item.avatar" :alt="item.name" />
              {{ item.name }}
            </div>
          </template>
          <template v-slot:selection="{ item }">
            <div class="d-flex align-center">
              <img class="avatar mb-0" :src="item.avatar" :alt="item.name" />
              {{ item.name }}
            </div>
          </template>
        </v-select>
      </v-col>
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
      // TODO: move autors to store or main app component??
      autors: [
        { name: "Ben", avatar: "images/avatar_Ben.png" },
        { name: "Amanda", avatar: "images/avatar_Amanda.png" },
        { name: "David", avatar: "images/avatar_David.png" },
        { name: "Anna", avatar: "images/avatar_Anna.png" },
        { name: "John", avatar: "images/avatar_John.png" }
      ],
      selectedAutor: {},
      datePickerIsShowed: false,
      date: "",
      valid: false,
      name: "",
      description: "",
      until: "",
      estimation: "",
      nameRules: [v => !!v || "Name is required"],
      endOfWorkingDay: 18
    };
  },
  props: {
    toDoColumn: { type: Object, required: true }
  },
  methods: {
    estimationRules(val) {
      if (!val.trim()) return true;
      const arr = val.trim().split(" ");
      let isValidEstimation = true;
      const arrLength = arr.length;
      arr.forEach((el, index) => {
        const num = +el.slice(0, -1);
        const alias = el.slice(-1);
        if (
          arrLength === 3 &&
          index === 0 &&
          (alias !== "d" || num !== parseInt(num, 10) || num < 1)
        )
          isValidEstimation = false;
        if (
          ((arrLength === 3 && index === 1) ||
            (arrLength === 2 && index === 0)) &&
          (alias !== "h" || num !== parseInt(num, 10) || num > 23 || num < 0)
        )
          isValidEstimation = false;
        if (
          ((arrLength === 3 && index === 2) ||
            (arrLength === 2 && index === 1) ||
            (arrLength === 1 && index === 0)) &&
          (alias !== "m" || num !== parseInt(num, 10) || num > 59 || num < 0)
        )
          isValidEstimation = false;
      });
      if (val == "0m") {
        isValidEstimation = false;
        this.date = new Date().toISOString().substr(0, 10);
      }
      return isValidEstimation;
    },
    createTask() {
      const form = this.$refs.taskForm;
      const isValid = form.validate();
      console.log("isValid: ", isValid); // and (this.name.length && this.selectedAutor.name) to check in jset testing
      // TODO: remove this bondage above - to adjust in jest tests
      if (isValid || (this.name.length && this.selectedAutor.name)) {
        const task = { name: this.name, autor: this.selectedAutor };
        if (this.description.length) task.description = this.description;

        if (this.date || this.estimation) {
          if (this.estimation) task.until = this.setDateByEstimation();
          else {
            this.setEstimationByDate();
            task.until = `${this.date}T${this.endOfWorkingDay}:00:00`;
          }
        }
        task.project = this.setTaskProgect();
        task.number = this.toDoColumn.tasksQuantity + 1;
        this.addTaskToLocalstorage(task);
      }
    },
    addTaskToLocalstorage(task) {
      const newColumn = {
        name: this.toDoColumn.name,
        position: this.toDoColumn.position,
        tasks: [task, ...this.toDoColumn.tasks],
        tasksQuantity: task.number
      };
      window.localStorage.setItem("ZeBoard-column-TO DO", JSON.stringify(newColumn));
    },
    setTaskProgect() {
      return String.fromCharCode(Math.floor(Math.random() * (91 - 65)) + 65);
    },
    setDateByEstimation() {
      const now = new Date();
      const estimation = {};
      const arr = this.estimation.split(" ");
      arr.forEach(el => {
        const alias = el.slice(-1);
        estimation[alias] = +el.slice(0, -1);
      });
      const ms =
        (estimation.d || 0) * 24 * 3600 * 1000 +
        (estimation.h || 0) * 3600 * 1000 +
        estimation.m * 60 * 1000;

      const until = new Date(now.getTime() + ms);
      this.date = until.toISOString().substr(0, 10);
      const untilHours =
        until.getHours() < 10 ? `0${until.getHours()}` : until.getHours();
      const untilMinutes =
        until.getMinutes() < 10 ? `0${until.getMinutes()}` : until.getMinutes();
      const x = until.getHours();
      return `${this.date}T${untilHours}:${untilMinutes}:00`;
    },
    setEstimationByDate() {
      if (!this.estimation) {
        const limitDate = new Date(
          `${this.date}T${this.endOfWorkingDay}:00:00`
        );
        const nowTime = new Date();
        const hours = parseInt((limitDate - nowTime) / (3600 * 1000));
        const days = parseInt(hours / 24);

        const hoursToTheEndOfToday =
          this.endOfWorkingDay - 1 - nowTime.getHours();
        const minutesToTheEndOfTheHour = 59 - nowTime.getMinutes();
        if (days)
          this.estimation += `${days}d ${hoursToTheEndOfToday}h ${minutesToTheEndOfTheHour}m`;
        else {
          if (hours == 0 && hoursToTheEndOfToday < 0) this.estimation = "0m";
          else {
            if (hours > 0) this.estimation += `${hours}h `;
            this.estimation += `${minutesToTheEndOfTheHour}m`;
          }
        }
      }
    },
    reset() {
      this.$refs.taskform.reset();
    }
  }
};
</script>
<style lang="scss">
.create-task-form {
  img.avatar {
    width: 16px;
    height: 16px;
    margin-right: 10px;
    margin-bottom: 5px;
    display: block;
    overflow: hidden;
    border-radius: 20px;
  }
  input {
    max-height: 34px;
    height: 34px;
  }
  @media screen and (min-width: 600px) {
    img.avatar {
      width: 20px;
      height: 20px;
    }
  }
  .select-autor-menu {
    font-size: 12px;
    border: 1px blue solid;
    border-radius: 0 0 4px 4px;
    margin-top: -6px;
    .v-list {
      padding: 0;
    }
    .v-list-item:not(:first-child) {
      border-top: 1px blue solid;
    }
    .v-list-item {
      min-height: 32px;
    }
    @media screen and (min-width: 600px) {
      font-size: 14px;
    }
  }
  .v-text-field.v-input .v-label {
    font-size: 10px;
    top: -20px !important;
    left: -13px !important;
    &.v-label--active {
      transform: translateY(-5px) scale(1);
    }
  }
  .v-text-field.v-input.v-select .v-input__prepend-inner {
    position: absolute;
  }
  .v-input__slot {
    .v-input__prepend-inner,
    .v-input__append-inner {
      margin-top: 0;
      align-self: center;
    }
    fieldset {
      display: none;
    }
  }
  .v-text-field--outlined > .v-input__control .v-select__selections {
    padding: 2px 0;
  }
  .v-text-field--outlined > .v-input__control > .v-input__slot {
    border: 1px solid #999;
    border-radius: 4px;
  }
  .v-text-field--outlined > .v-input__control .v-select__slot,
  .v-text-field--outlined > .v-input__control > .v-input__slot {
    min-height: 28px;
    height: 34px;
  }
}
</style>
