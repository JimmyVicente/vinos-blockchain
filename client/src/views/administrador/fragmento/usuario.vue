<template>
  <section class="container">
    <v-container class="margin">
      <v-card>
        <v-card-title>
          <h1>Usuarios</h1>
          <v-spacer></v-spacer>
          <v-btn dark color="primary_app" x-large style="margin-right: 2%;" >
            <v-icon left large> mdi-glass-tulip </v-icon>
            Nuevo Usuario
          </v-btn>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Buscar"
            hide-details
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
  name: "_usuario",
  components: {},
  data: () => ({
    search: "",
    headers: [
      {
        text: "Nombres",
        sortable: false,
        value: "name",
      },
      { text: "Identificación", sortable: false, value: "calories" },
      { text: "Rol", sortable: false, value: "fat" },
    ],
    desserts: [
      {
        name: "Frozen Yogurt",
        calories: 159,
        fat: 6.0,
      },
      {
        name: "Ice cream sandwich",
        calories: 237,
        fat: 9.0,
      },
      {
        name: "Eclair",
        calories: 262,
        fat: 16.0,
      },
      {
        name: "Cupcake",
        calories: 305,
        fat: 3.7,
      },
      {
        name: "Gingerbread",
        calories: 356,
        fat: 16.0,
      },
      {
        name: "Jelly bean",
        calories: 375,
        fat: 0.0,
      },
      {
        name: "Lollipop",
        calories: 392,
        fat: 0.2,
      },
      {
        name: "Honeycomb",
        calories: 408,
        fat: 3.2,
      },
      {
        name: "Donut",
        calories: 452,
        fat: 25.0,
      },
      {
        name: "KitKat",
        calories: 518,
        fat: 26.0,
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
