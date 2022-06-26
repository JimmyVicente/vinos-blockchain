<template>
  <section class="container">
    <v-container class="margin">
      <v-card>
        <v-card-title>
          <h1>Procesos</h1>
          <v-spacer></v-spacer>
          <v-btn dark color="primary_app" x-large style="margin-right: 2%;"
            :to="{ name: 'Nuevo Proceso', params: { id_materia: -1 }, }">
            <v-icon left large> mdi-glass-tulip </v-icon>
            Nuevo Proceso
          </v-btn>
          <v-text-field v-model="search" append-icon="mdi-magnify" label="Buscar" hide-details type="date">
          </v-text-field>

        </v-card-title>
        <v-data-table :headers="headers" :items="desserts" :search="search">
          <template v-slot:[`item.accion`]="{ item }">
            <v-btn icon color="pink" :to="{
              name: 'Nuevo Proceso',
              params: { id_materia: item.materia_prima_obj.id },
            }">
              <v-icon>mdi-eye</v-icon>
            </v-btn>
          </template>>
        </v-data-table>
      </v-card>
    </v-container>
  </section>
</template>

<script>
import { cargarMateria } from "../../../conexion_web3/procesos";
export default {
  name: "Proceso_",
  components: {},
  data: () => ({
    search: "",
    headers: [
      { text: "Materia Prima", sortable: false, value: "materia_prima" },
      { text: "Extracción Del Mosto", sortable: false, value: "extarccion_mosto" },
      { text: "Pasteurización", sortable: false, value: "pasteurizacion" },
      { text: "Fermentación", sortable: false, value: "fermentacion" },
      { text: "Clarificación", sortable: false, value: "clarificacion" },
      { text: "Trasiego", sortable: false, value: "trasiego" },
      { text: "Envasado", sortable: false, value: "envasado" },
      { text: "Acción", sortable: false, value: "accion" },
    ],
    desserts: [],
  }),
  async mounted() {
    try {
      this.desserts = await cargarMateria();
    } catch (error) {
      console.log(error);
    }
  }
};
</script>
<style scoped>
.margin {
  margin-top: 5%;

}
</style>
