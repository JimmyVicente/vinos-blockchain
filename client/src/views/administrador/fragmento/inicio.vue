<template>
  <section class="container">
    <v-row justify="center" class="margin container">
      <!-- <v-col v-for="i in 2" :key="i">
        <v-card class="mt-4 mx-auto" max-width="350" min-width="300">
          <v-card-title> Product {{ i }} Sales </v-card-title>
          <v-card-text class="pt-0">
            <div class="text-h4 font-weight-bold mb-3">85%</div>
          </v-card-text>
        </v-card>
      </v-col> -->
    </v-row>
    <v-container class="container">
      <Carrucel />
    </v-container>
  </section>
</template>

<script>
import Carrucel from '@/components/carrucel.vue';
export default {
  name: "Inicio_",
  components: {
    Carrucel,
  },
  data: () => ({
  }),
};
</script>
<style scoped>
.margin {
  margin-top: 5%;
}
</style>