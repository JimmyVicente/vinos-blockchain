<template>
  <section class="container">
    <v-container class="margin">
      <v-card>
        <v-card-title>
          <h1>Procesos</h1>
          <v-spacer></v-spacer>
          <v-btn dark color="primary_app" x-large style="margin-right: 2%;" :to="{name:'Nuevo Proceso'}">
            <v-icon left large> mdi-glass-tulip </v-icon>
            Nuevo Proceso
          </v-btn>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Buscar"
            hide-details
            type="date"
          ></v-text-field>
          
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="desserts"
          :search="search"
        ></v-data-table>
      </v-card>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "_proceso",
  components: {},
  data: () => ({
    search: "",
    headers: [
      {
        text: "Materia Prima",
        sortable: false,
        value: "name",
      },
      { text: "Extracción Del Mosto", sortable: false, value: "calories" },
      { text: "Pasteurización", sortable: false, value: "fat" },
      { text: "Fermentación", sortable: false, value: "carbs" },
      { text: "Clarificación", sortable: false, value: "protein" },
      { text: "Trasiego", sortable: false, value: "iron" },
      { text: "Envasado", sortable: false, value: "iron" },
    ],
    desserts: [
      {
        name: "Frozen Yogurt",
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        iron: "1%",
      },
      {
        name: "Ice cream sandwich",
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        iron: "1%",
      },
      {
        name: "Eclair",
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
        iron: "7%",
      },
      {
        name: "Cupcake",
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
        iron: "8%",
      },
      {
        name: "Gingerbread",
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9,
        iron: "16%",
      },
      {
        name: "Jelly bean",
        calories: 375,
        fat: 0.0,
        carbs: 94,
        protein: 0.0,
        iron: "0%",
      },
      {
        name: "Lollipop",
        calories: 392,
        fat: 0.2,
        carbs: 98,
        protein: 0,
        iron: "2%",
      },
      {
        name: "Honeycomb",
        calories: 408,
        fat: 3.2,
        carbs: 87,
        protein: 6.5,
        iron: "45%",
      },
      {
        name: "Donut",
        calories: 452,
        fat: 25.0,
        carbs: 51,
        protein: 4.9,
        iron: "22%",
      },
      {
        name: "KitKat",
        calories: 518,
        fat: 26.0,
        carbs: 65,
        protein: 7,
        iron: "6%",
      },
    ],
  }),
};
</script>
<style scoped>
.margin {
  margin-top: 5%;
  
}
</style>
