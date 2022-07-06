<template>
  <v-app>

    <v-app-bar fixed dark color="primary_app" elevate-on-scroll scroll-target="#scrolling-techniques-7">

      <v-btn icon color="white" :to="{ name: 'Inicio' }">
        <v-avatar style="margin-left: 5px" size="40">
          <img src="@/assets/iconos/logo.png" />
        </v-avatar>
      </v-btn>



      <v-spacer></v-spacer>
      <v-list-item-subtitle>Trazabilidad Vinos Ambrosia</v-list-item-subtitle>

      <v-btn v-if="usuario.esMiCuenta != undefined && usuario.esMiCuenta == true" x-large color="success" dark
        @click="login">
        Administración
        <v-avatar style="margin-left: 5px" size="40">
          <img src="@/assets/iconos/metamask.png" />
        </v-avatar>
      </v-btn>

    </v-app-bar>
    <v-main style="margin-left : 3%;margin-right: 3%;">
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
import { cargarContratos } from "../../conexion_web3/procesos";
import { encontrarMiUsuario } from "../../conexion_web3/usuarios";
export default {
  name: "Base_Cliente",
  data: () => ({
    drawer: true,
    loading: true,
    cuenta: '',
    usuario: {},
  }),
  methods: {
    async login() {
      this.$router.push({ name: 'Inicio Administrador' }).catch(() => { });
    },
  },
  async mounted() {
    cargarContratos();
    this.usuario = await encontrarMiUsuario() ?? {};
  }
};
</script>
<style scoped>
.drawer {
  margin: 5% 3% 5% 3% !important;
  border: solid 0.5px #e89a43;
  border-radius: 8%;

}
</style>
