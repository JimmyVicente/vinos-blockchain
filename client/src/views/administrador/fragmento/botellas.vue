<template>
  <section class="container">
    <v-container class="margin">
      <v-card>
        <h4>Lote: {{ proceso.envasado != undefined ? proceso.envasado.nro_lote : "Cargando.." }}</h4>
        <h5>Nro. Botellas producidas: {{ proceso.envasado != undefined ? proceso.envasado.nro_botellas : "Cargando.." }}
        </h5>
        <v-card-title>
          <h6>Nro. Botellas especiales: {{ botellas.length }}</h6>
          <v-spacer></v-spacer>
          <h6>Nro. Botellas vendidas: {{ getBotellasVendidas() }}</h6>
          <v-spacer></v-spacer>
          <h6>Nro. Tokens asignados: {{ getTokensAsignados() }}</h6>
          <v-spacer></v-spacer>

          <v-btn color="green" outlined @click="generarPdf()">

            Imprimir
            <v-btn icon color="green">
              <v-icon>mdi-cloud-print-outline</v-icon>
            </v-btn>
          </v-btn>


        </v-card-title>
        <v-divider></v-divider>
        <v-container>

          <v-container class="fill-height" fluid style="min-height: 434px">
            <v-fade-transition mode="out-in">
              <v-row>
                <v-col cols="12" sm="12" md="3" v-for="(item, i) in botellas" :key="i"
                  class="d-flex align-content-end flex-wrap">
                  <v-card style="padding: 10px;" @click="encontrarBotella(item.botella)">
                    <center>
                      <v-img src="@/assets/galeria/vino_qr.png" max-width="60" style="align-items: center;">
                        <vue-qr class="vue-qr" :text="path_qr + item.botella._id" :size="50" style="margin-top: 30px;">
                        </vue-qr>
                      </v-img>
                    </center>
                    <br>
                    Nro botella: {{ i + 1 }}

                    <div style="font-size: 12px;"> Hash: 0x{{ item.botella._id }}</div>
                    <div style="font-size: 10px;">

                      <div v-if="item.botella.estados.length == 1">
                        <em style="color: red;">{{ item.botella.estados[0].estado }}</em>
                      </div>
                      <div v-if="item.botella.estados.length == 2">
                        <em style="color: red;">{{ item.botella.estados[0].estado }}</em>,
                        <em style="color: green;">{{ item.botella.estados[1].estado }}</em>
                      </div>
                      <div v-if="item.botella.estados.length == 3">
                        <em style="color: red;">{{ item.botella.estados[0].estado }}</em>,
                        <em style="color: green;">{{ item.botella.estados[1].estado }}</em>,
                        <em style="color: orange;">{{ item.botella.estados[2].estado }}</em>
                      </div>
                    </div>
                  </v-card>
                </v-col>

              </v-row>
            </v-fade-transition>
          </v-container>


          <v-dialog v-model="dialog_item" persistent scrollable>
            <v-card style="padding: 20px">
              <v-card-text>
                <InfoBotella :items="items" :botella.sync="botella" :proceso="proceso" :tipo="0" />
              </v-card-text>
              <br><br>
              <v-card-actions>

                <v-spacer></v-spacer>
                <v-btn dark color="secondary_app" @click="dialog_item = false"> CERRAR </v-btn>

              </v-card-actions>


            </v-card>
          </v-dialog>


          <!-- Imprimir pdf -->
          <vue-html2pdf :show-layout="false" :float-layout="true" :enable-download="false" :preview-modal="true"
            filename="Qr de botellas " :pdf-quality="2" :manual-pagination="true" pdf-format="a4"
            pdf-orientation="portrait" pdf-content-width="800px" ref="html2Pdf">
            <section slot="pdf-content">

              <ImprimirQr :proceso="proceso" :botellas="botellas"></ImprimirQr>

            </section>
          </vue-html2pdf>

          <!-- fin de imprimir -->

        </v-container>
      </v-card>
    </v-container>

    <CargandoVista :cargando_tipo="cargando_tipo"></CargandoVista>

  </section>
</template>

<script>
//importaciones web3
import VueQr from 'vue-qr';
import VueHtml2pdf from 'vue-html2pdf'
import InfoBotella from '@/components/info_botella.vue'
import ImprimirQr from '@/components/imprimir_qr.vue'
import CargandoVista from "@/components/cargando_vista.vue";

import { encontrarMiUsuario } from "../../../conexion_web3/usuarios";
import { formato_proceso } from "../../../controlador/util_format";
import controlador_proceso from "../../../controlador/controlador_proceso";
import path from "../../../controlador/api";
export default {
  name: "Botellas_Envasado",
  components: {
    VueQr,
    VueHtml2pdf,
    InfoBotella,
    CargandoVista,
    ImprimirQr,
  },
  data: () => ({
    dialog_item: false,
    items: [],
    botella: null,
    proceso: {},
    botellas: [],
    path_qr: "",
    cargando_tipo: false,
    usuario: {},
  }),
  props: {
    hash: [String],
  },
  methods: {
    generarPdf() {
      this.$refs.html2Pdf.generatePdf();
    },
    getBotellasVendidas() {
      var vendidas = this.botellas.filter(e => e.botella.estados.length > 1);
      return vendidas.length;
    },
    getTokensAsignados() {
      var tokens_asignados = this.botellas.filter(e => e.botella.estados.length > 2);
      return tokens_asignados.length;
    },
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
      this.cargando_tipo = true;
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
        this.cargando_tipo = false;
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
    try {
      this.usuario = await encontrarMiUsuario() ?? {};
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
