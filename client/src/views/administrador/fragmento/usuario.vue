<template>
  <section class="container">
    <v-container class="margin">
      <v-card>
        <v-card-title>
          <h1>Usuarios</h1>
          <v-spacer></v-spacer>
          <v-btn dark color="primary_app" x-large style="margin-right: 2%;">
            <v-icon left large> mdi-glass-tulip </v-icon>
            Nuevo Usuario
          </v-btn>
          <v-text-field v-model="search" append-icon="mdi-magnify" label="Buscar" hide-details></v-text-field>

        </v-card-title>
        <v-data-table :headers="headers" :items="usuarios" :search="search"></v-data-table>
      </v-card>
    </v-container>
  </section>
</template>

<script>
import { cargarUsuarios } from "../../../conexion_web3/usuario";
export default {
  name: "_usuario",
  components: {},
  data: () => ({
    search: "",
    headers: [
      { text: "Nombres", sortable: false, value: "nombre" },
      { text: "Identificación", sortable: false, value: "identificacion" },
      { text: "Billetera", sortable: false, value: "billetera" },
      { text: "Rol", sortable: false, value: "rol" },
    ],
    usuarios: [
      {
        nombre: "Jimmy Vicente",
        identificacion: "1105279044",
        billetera: "0x3bc813bffBa52AeDb2bAE4F5e93Ccf07235dBA62",
        rol: "Administración",
      }
    ],
  }),
  async mounted(){
    try {
      this.usuarios = await cargarUsuarios();
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
