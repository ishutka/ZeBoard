<template>
  <v-container class="board-holder">
      <Logo />
  </v-container>
</template>

<script>
export default {};
</script>

<style lang="scss">
.board-holder {
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
