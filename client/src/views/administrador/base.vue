<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer" height="50%" width="300px" class=" drawer">
      <v-layout align-center justify-center>
        <v-flex md12>
          <br />
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                Marcus Obrien
              </v-list-item-title>
              <v-list-item-subtitle>Balance</v-list-item-subtitle>
              <v-list-item-subtitle style="color: green;">{{ balanceETHER }} ETH</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-flex>
      </v-layout>
      <v-divider></v-divider>
      <v-list dense nav>
        <v-list-item-group v-model="group" color="primary_app">
          <v-list-item v-for="item in menu" :key="item.title" link :to="item.to">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="item.title" style="text-align: left !important"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar fixed dark color="primary_app" elevate-on-scroll scroll-target="#scrolling-techniques-7">
      <v-toolbar-title style="width: 10%">VA</v-toolbar-title>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-spacer></v-spacer>

      <v-list-item-subtitle>Direccioón de cuenta: {{ cuenta }}</v-list-item-subtitle>
      
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
import { infoCuenta } from "../../conexion_web3/getWeb3";
export default {
  name: "Base_",
  data: () => ({
    drawer: true,
    loading: true,
    cuenta: '',
    web3: null,
    balanceETHER: 0.0,
    menu: [
      { title: "Inicio", icon: "mdi-view-dashboard", to: { name: "Inicio" } },
      { title: "Perfil", icon: "mdi-account-box", to: { name: "Perfil" } },
      { title: "Procesos", icon: "mdi-shape-circle-plus", to: { name: "Proceso" } },
      { title: "Usuarios", icon: "mdi-account-multiple-outline", to: { name: "Usuario" } },
    ],
  }),
  methods: {

  },
  async mounted() {
    try {
      let { web3, cuenta, balanceETHER } = await infoCuenta();
      this.web3 = web3;
      this.cuenta = cuenta;
      this.balanceETHER = balanceETHER;
    } catch (error) {
      console.log(error);
    }

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
