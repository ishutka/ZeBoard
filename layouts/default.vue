<template>
    <v-app class="board-body">
      
      <v-main>
        <toolbar/>        
        <Nuxt />
      </v-main>
    </v-app>
</template>

<script>
import toolbar from '@/components/toolbar';
export default {
  components:{
    toolbar
  }
}
</script>
<style lang="scss">
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
