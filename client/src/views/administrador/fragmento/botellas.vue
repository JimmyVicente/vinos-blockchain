<template>
  <section class="container">
    <v-container class="margin">
      <v-card>
        <v-card-title>
          <h4>Total de Botellas especiales: {{ botellas.length }}</h4>
        </v-card-title>
        <v-divider></v-divider>
        <v-container>

          <v-container class="fill-height" fluid style="min-height: 434px">
            <v-fade-transition mode="out-in">
              <v-row>
                <v-col cols="3" sm="12" md="3" v-for="(item, i) in botellas" :key="i"
                  class="d-flex align-content-end flex-wrap">
                  <v-card style="padding: 10px;" @click="encontrarBotella(item.botella)">
                    <center>
                      <v-img src="@/assets/galeria/vino_qr.png" max-width="90" style="align-items: center;">
                        <vue-qr class="vue-qr" :text="path_qr + item.botella._id" :size="75" style="margin-top: 30px;">
                        </vue-qr>
                      </v-img>
                    </center>
                    <br>
                    <p> Nro botella: {{ i + 1 }} </p>
                    <p style="font-size: 12px;"> Hash: 0x{{ item.botella._id }} </p>
                  </v-card>
                </v-col>

              </v-row>
            </v-fade-transition>
          </v-container>


          <v-dialog v-model="dialog_item" persistent>
            <v-card style="padding: 20px">

              <InfoBotella :items="items" :botella.sync="botella" :proceso="proceso" :tipo="0" />
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
import { formato_proceso } from "../../../controlador/util_format";
import controlador_proceso from "../../../controlador/controlador_proceso";
import path from "../../../controlador/api";
export default {
  name: "Botellas_Envasado",
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
    path_qr: "",
  }),
  props: {
    hash: [String],
  },
  methods: {

    async encontrarBotella(botella) {
      try {
        this.botella = botella;
        this.dialog_item = true;
      } catch (error) {
        this.$toast.open({
          message: "Error al generar botella",
          type: "error",
          duration: 5000,
          position: "top-right",
          pauseOnHover: true,
        });
      }
    },

    async listaBotellas(hash) {
      controlador_proceso.listar_botella(hash, async (response) => {
        if (response.tipo == "success") {
          this.botellas = response.data.botellas;
        } else {
          this.$toast.open({
            message: response.mensaje,
            type: response.tipo,
            duration: 5000,
            position: "top-right",
            pauseOnHover: true,
          });
        }
      });
    },

    async generarProceso(hash) {
      controlador_proceso.encontrar_proceso(hash, async (response) => {
        if (response.tipo == "success") {
          var item = await formato_proceso(response.data);
          this.items = item.items.reverse();
          this.proceso = item.proceso;
        } else {
          this.$toast.open({
            message: response.mensaje,
            type: response.tipo,
            duration: 5000,
            position: "top-right",
            pauseOnHover: true,
          });
        }
      });
    }
  },
  async mounted() {
    this.generarProceso(this.hash);
    this.listaBotellas(this.hash);
    this.path_qr = path.path_qr;
  }
};
</script>
<style scoped>
.margin {
  margin-top: 5%;
}
</style>
