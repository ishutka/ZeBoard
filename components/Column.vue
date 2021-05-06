<template>
  <v-expansion-panel :disabled="!column.tasks.length"
    class="column"
    :class="{ column__empty: !column.tasks.length }"
  >
    <v-expansion-panel-header>
      {{ column.name }} - {{ column.tasks.length }}
    </v-expansion-panel-header>
    <v-expansion-panel-content v-if="column.tasks.length">
      <task v-for="task in column.tasks" :key="task.id" :task="task" />
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>
<script>
export default {
  props: {
    column: { type: Object, required: true }
  },
};
</script>
<style lang="scss">
@import "~/assets/css/main.scss";
.column {
  background-color: $light-blue !important;
  &:after,
  &:before {
    content: none !important;
  }
  &.column__empty {
    .v-expansion-panel-header i.v-icon {
      display: none;
    }
  }

  .v-expansion-panel-header {
    background: $blue;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    text-transform: uppercase;
    height: 44px;
    min-height: 44px;
    border-radius: 10px !important;
    margin-bottom: 10px;
  }
}
</style>
