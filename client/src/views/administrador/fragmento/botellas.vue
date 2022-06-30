<template>
  <section class="container">
    <v-container class="margin">
      <v-card>
        <v-card-title>
          <h1>Botellas producidas {{ botellas.length }}</h1>
        </v-card-title>
        <v-divider></v-divider>
        <v-container>

          <v-container class="fill-height" fluid style="min-height: 434px">
            <v-fade-transition mode="out-in">
              <v-row>
                <v-col cols="3" v-for="(item, i) in botellas" :key="i">
                  <v-card style="padding: 10px;" @click="encontrarBotella(item)">
                    <center>
                      <v-img src="@/assets/imagen/galeria/vino_qr.png" max-width="90" style="align-items: center;">
                        <vue-qr class="vue-qr" :text="item" :size="75" style="margin-top: 30px;"> </vue-qr>
                      </v-img>
                    </center>
                    <br>
                    <p> Nro botella: {{ i + 1 }} </p>
                    <p style="font-size: 12px;"> Hash: {{ item }} </p>
                  </v-card>
                </v-col>

              </v-row>
            </v-fade-transition>
          </v-container>


          <v-dialog v-model="dialog_item" persistent>
            <v-card style="padding: 20px">

              <InfoBotella :items="items" :botella="botella" :proceso="proceso" />
              <br>
              <center>
                <v-btn dark color="secondary_app" @click="dialog_item = false"> Salir </v-btn>
              </center>

            </v-card>
          </v-dialog>

        </v-container>
      </v-card>
    </v-container>

  </section>
</template>

<script>
//importaciones web3
import VueQr from 'vue-qr';
import InfoBotella from '@/components/info_botella.vue'
import { encontrarBotella } from "../../../conexion_web3/procesos";
import { listarItemProceso } from "../../../conexion_web3/util_procesos";
export default {
  name: "Botellas_",
  components: {
    VueQr,
    InfoBotella
  },
  data: () => ({
    dialog_item: false,
    items: [],
    botella: null,
    proceso: {},
    botellas: [],
  }),
  props: {
    hash: [String],
  },
  methods: {

    async encontrarBotella(hash_botella) {
      try {
        var botella = await encontrarBotella(hash_botella);
        this.botella = botella;
        this.dialog_item = true;
      } catch (error) {
        this.$toast.open({
          message: error.message,
          type: "error",
          duration: 5000,
          position: "top-right",
          pauseOnHover: true,
        });
      }
    },

    async generarProceso(hash) {
      try {
        var { proceso, items } = await listarItemProceso(hash);
        //setVariables
        if (proceso.envasado != undefined) {
          this.botellas = proceso.envasado.botellas;
        }
        this.proceso = proceso;
        this.items = items.reverse();
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
