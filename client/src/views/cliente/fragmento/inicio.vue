<template>
  <section class="container">


    <v-row justify="center" class="margin container">

      <v-col cols="12" sm="12" md="3" v-if="!conectado">
        <v-btn x-large color="green" outlined @click="conectar()" style="min-width: 250px; max-width: 350px;">
          CONECTAR
          <v-avatar style="margin-left: 5px;" size="35">
            <img src="@/assets/iconos/metamask.png" />
          </v-avatar>
        </v-btn>
      </v-col>

      <v-col cols="12" sm="12" md="3" v-if="conectado && usuario.esMiCuenta && usuario.rol != 3">
        <v-btn x-large color="green" outlined @click="login()" style="min-width: 250px; max-width: 350px;">
          ADMINISTRACIÓN
          <v-avatar style="margin-left: 5px" size="35">
            <img src="@/assets/iconos/metamask.png" />
          </v-avatar>
        </v-btn>
      </v-col>

      <v-col cols="12" sm="12" md="3">
        <v-btn x-large color="secondary" outlined :to="{ name: 'Leer Qr' }" style="min-width: 250px; max-width: 350px;">
          LEER QR
          <v-btn icon color="secondary">
            <v-icon>mdi-barcode-scan</v-icon>
          </v-btn>
        </v-btn>
      </v-col>


      <v-col cols="12" sm="12" md="3">
        <v-btn x-large color="indigo" outlined :to="{ name: 'Informacion' }"
          style="min-width: 250px; max-width: 350px;">
          INFORMACIÓN
          <v-avatar style="margin-left: 5px" size="35">
            <img src="@/assets/iconos/metamask.png" />
          </v-avatar>
        </v-btn>
      </v-col>


    </v-row>

    <v-container class="container">

      <Carrucel />

    </v-container>
  </section>
</template>

<script>
import Carrucel from '@/components/carrucel.vue';
import { encontrarMiUsuario } from "../../../conexion_web3/usuarios";
export default {
  name: "Inicio_Cliente",
  components: {
    Carrucel,
  },
  data: () => ({
    conectado: false,
    usuario: {},
  }),

  methods: {
    async conectar() {
      try {
        this.usuario = await encontrarMiUsuario() ?? {};
        this.conectado = true;
      } catch (error) {
        this.$toast.open({
          message: error.mensaje_metamask ?? "No se pudo conectar con metamask",
          type: "error",
          duration: 5000,
          position: "top-right",
          pauseOnHover: true,
        });
      }
    },
    async login() {
      this.$router.push({ name: 'Inicio Administrador' }).catch(() => { });
    },
  },
  async mounted() {
    this.conectar();
  }
};
</script>
<style scoped>
.margin {
  margin-top: 5%;
}
</style>