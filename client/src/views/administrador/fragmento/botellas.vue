<template>
  <section class="container">
    <v-container class="margin">
      <v-card>
        <v-card-title>
          <h1>Botellas producidas</h1>
        </v-card-title>
        <v-divider></v-divider>
        <v-container>


          <!-- galeria -->
          <div v-for="(item, i) in items" :key="i" class="card-container">
            <div class="card-image">
              <div class="main-image">
                <vue-qr class="vue-qr" :text="item"> </vue-qr>
                <p v-text="item"></p>
              </div>
            </div>
          </div>

        

        </v-container>
      </v-card>
    </v-container>

  </section>
</template>

<script>
//importaciones web3
import VueQr from 'vue-qr';
import { listarItemProceso } from "../../../conexion_web3/util_procesos";
export default {
  name: "Botellas_",
  components: {
    VueQr
  },
  data: () => ({
    items: [],
  }),
  props: {
    hash: [String],
  },
  methods: {

    async generarProceso(hash) {
      try {
        var { proceso } = await listarItemProceso(hash);
        //setVariables
        if (proceso.envasado != undefined) {
          console.log(proceso.envasado.botellas[0]);
          this.items = proceso.envasado.botellas;
        }
      } catch (error) {
        console.log(error);
      }
    }
  },
  async mounted() {
    this.generarProceso(this.hash);
  }
};
</script>
<style scoped>
.margin {
  margin-top: 5%;
}
</style>
