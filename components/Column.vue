<template>
  <v-expansion-panel
    class="board"
    :class="{ board__empty: !board.tasks.length }"
  >
    <v-expansion-panel-header>
      {{ board.name }} - {{ board.tasks.length }}
    </v-expansion-panel-header>
    <v-expansion-panel-content v-if="board.tasks.length">
      <task v-for="task in board.tasks" :key="task.id" :task="task" />
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>
<script>
export default {
  props: {
    board: { type: Object, required: true }
  },
};
</script>
<style lang="scss">
@import "~/assets/css/main.scss";
.board {
  background-color: $light-blue !important;
  &:after,
  &:before {
    content: none !important;
  }
  &.board__empty {
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
