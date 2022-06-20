<template>
  <v-app>
    <v-img src="@/assets/imagen/inicio_sesion/fondo.jpg" container style="align-items: center"
      gradient="rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)">
      <v-row justify="center" class="text-center" style="margin-top: -200px" align="center">
        <v-col cols="12" md="4" sm="12" align-self="center" class="text-center">
          <v-container>
            <v-card elevation="26" outlined shaped tile class="header-main " color="primary_app" style="color: #fff"
              width="100%">
              <v-avatar style="margin-top: -200px" size="200">
                <img src="@/assets/imagen/inicio_sesion/logo.png" />
              </v-avatar>
              <h1>Iniciar Sesión</h1>
              <br />

              <v-btn x-large color="success" dark @click="conectarMetamask">
                Conectar
                <v-avatar style="margin-left: 5px" size="40">
                  <img src="@/assets/imagen/iconos/metamask.png" />
                </v-avatar>
              </v-btn>



              <v-row>
                <v-col>
                  <v-text-field dark append-icon="mdi-email" v-model="email" label="Identificación" required
                    color="white"></v-text-field>
                  <br />
                  <v-text-field dark :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'" :type="show ? 'text' : 'password'"
                    v-model="password" label="Contraseña" color="white" required @click:append="show = !show">
                  </v-text-field>
                  <br />
                  <v-overlay :value="overlay" color="primary" fixed>
                    <v-progress-circular :size="70" :width="7" color="white" indeterminate></v-progress-circular>
                  </v-overlay>
                  <v-btn tile color="sencondary_app" x-large @click="login" outlined width="100%">
                    <v-icon left> mdi-export </v-icon>
                    Ingresar
                  </v-btn>
                </v-col>
              </v-row>
            </v-card>
          </v-container>
        </v-col>
      </v-row>
    </v-img>
  </v-app>
</template>
 <script>
import { getCuentas } from "../../contracs_web3/getWeb3";
export default {
  name: "Inicio_sesion",
  data: () => ({
    overlay: false,
    show: false,
    email: "",
    password: "",
  }),
  methods: {
    async login() {
      this.$router.push({ name: 'Inicio' }).catch(() => { });
    },
    async conectarMetamask() {
      try {
        await getCuentas();
        this.$toast.open({
          message: "Conectado correctramente",
          type: "success",
          duration: 5000,
          position: "top-right",
          pauseOnHover: true,
        });
      } catch (error) {
        this.$toast.open({
          message: error.message,
          type: "error",
          duration: 5000,
          position: "top-right",
          pauseOnHover: true,
        });
      }

    }
  },
};
</script>
<style scoped>
.header-main {
  max-width: 50vh;
  min-width: 335px;
  margin-top: 2vh;
  margin-bottom: 2vh;
  position: relative;
  z-index: 999;
  padding: 3em 2em;
  background: rgba(24, 22, 22, 0.04);
  -webkit-box-shadow: -1px 4px 28px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 4px 28px 0px rgba(0, 0, 0, 0.75);
  box-shadow: -1px 4px 28px 0px rgba(0, 0, 0, 0.75);
}
</style>