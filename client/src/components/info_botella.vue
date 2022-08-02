<template>
  <section>

    <v-card style="padding: 10px;">

      <h4>Trazabilidad de la botella Nro: {{ botella.nro_botella }}</h4>
      <!-- <h4>Cosecha: {{ proceso.materia_prima.nro_cosecha }}</h4> -->
      <center>
        <v-img src="@/assets/galeria/vino_qr.png" max-width="170" style="align-items: center;">
          <vue-qr class="vue-qr" :text="path_qr + botella._id" :size="145" style="margin-top: 60px;"> </vue-qr>
        </v-img>
      </center>
      <br>

      <v-row>
        <v-col cols="12" md="4" sm="12">
          <v-card color="grey" dark>
            Información botella
            <v-card-text class="white text--primary">
              <div style="font-size: 11px; text-align: start;">
                Nro botella: {{ botella.nro_botella }}<br>
                Hash: 0x{{ botella._id }}
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4" sm="12">
          <v-card color="grey" dark>
            Estado de botella
            <v-card-text class="white text--primary">
              <div style="font-size: 11px; text-align: start;" v-for="(estado, i) in botella.estados" :key="i">
                {{ estado.estado }}: {{ format_fecha(estado.fecha) }}
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4" sm="12">
          <v-card color="grey" dark>
            Acciones
            <v-card-text class="white text--primary">
              <div style="font-size: 11px; text-align: center;">
                <v-btn color="green" outlined v-if="!conectado" @click="conectar()">
                  Conectar
                  <v-avatar style="margin-left: 5px" size="30">
                    <img src="@/assets/iconos/metamask.png" />
                  </v-avatar>
                </v-btn>
                <v-btn color="green" outlined v-else-if="botella.estados.length == 1 && usuario.rol == 3"
                  @click="cambiarEstadoBotella(usuario.billetera)">
                  Marcar como vendido
                </v-btn>
                <v-btn color="green" outlined v-else-if="botella.estados.length == 2 && usuario.rol == undefined"
                  @click="asignarToken()">
                  Asinar Token
                </v-btn>
                <div v-else> Sin acciones</div>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

    </v-card>

    <v-container>
      <v-row>
        <v-col cols="12" md="6" sm="12" v-for="(item, i) in items" :key="i">
          <v-card :color="item.color" dark>
            <v-card-title class="text-h6" v-text="item.index + ' ' + item.nombre"></v-card-title>
            <v-card-text class="white text--primary">
              <br>
              <div style="font-size: 13px; text-align: start;" v-html="item.informacion"> </div>
              <div style="font-size: 11px; text-align: start;">Fecha de creación: {{ item.fecha_creacion }} </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>


  </section>
</template>

<script>

import controlador_proceso from "../controlador/controlador_proceso";
import { crearBotella } from "../conexion_web3/procesos";
import { encontrarMiUsuario } from "../conexion_web3/usuarios";
import path from "../controlador/api";
import VueQr from 'vue-qr';
export default {
  name: "InfoBotella",
  components: {
    VueQr
  },
  data: () => ({
    conectado: false,
    usuario: {},
    path_qr: "",
  }),
  props: {
    items: [Array],
    proceso: [Object],
    botella: [Object],
    tipo: [Number], //0: Administrador 2: Vendedor 3: Cliente 
  },
  methods: {
    format_fecha(fecha) {
      return new Date(fecha).toLocaleString();
    },
    async conectar() {
      try {
        this.usuario = await encontrarMiUsuario() ?? {};
        this.conectado = true;
      } catch (error) {
        console.log(error);
        this.$toast.open({
          message: "No se pudo conectar con metamask",
          type: "error",
          duration: 5000,
          position: "top-right",
          pauseOnHover: true,
        });
      }
    },
    async encontrarBotella() {
      controlador_proceso.econtrar_proceso_botella(this.botella._id, async (response) => {
        if (response.tipo == "success") {
          this.$emit("update:botella", response.data.botella);
        }
      });
    },
    async cambiarEstadoBotella(billetera) {
      var data = {
        hash_botella: this.botella._id,
        billetera: billetera,
      };
      controlador_proceso.cambiar_estado_botella(data, async (response) => {
        this.$toast.open({
          message: response.mensaje,
          type: response.tipo,
          duration: 5000,
          position: "top-right",
          pauseOnHover: true,
        });
        await this.encontrarBotella();
      });
    },
    async asignarToken() {
      try {
        var data = await crearBotella(this.botella._id);
        await this.cambiarEstadoBotella(data.billetera);
      } catch (error) {
        console.log(error);
        this.$toast.open({
          message: "No se pudo asignar token, el token fue asignado a otra persona",
          type: "error",
          duration: 5000,
          position: "top-right",
          pauseOnHover: true,
        });
      }
    }
  },
  async mounted() {
    this.path_qr = path.path_qr;
  }
};
</script>
<style>
.titleCard {
  padding: 0px;
  padding-left: 10px;
  font-size: 10px;
  height: 30px;
}
</style>