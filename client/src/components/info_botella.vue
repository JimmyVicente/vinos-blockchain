<template>
  <section>

    <v-card style="padding: 10px;">

      <h4>Trazabilidad de la botella Nro: {{ botella.nro_botella }}</h4>
      <h4>Cosecha: {{ proceso.materia_prima.nro_cosecha }}</h4>
      <div v-for="(item, i ) in botella.estados_obj" :key="i">
        <h6>Fecha de {{ item.estado_str }}: {{ item.fecha_str }} </h6>
      </div>
      <h6>Token Asignado:
        <v-icon color="red lighten-2" v-if="botella.token_asignado == false">mdi-thumb-down</v-icon>
        <v-icon color="green" v-if="botella.token_asignado == true">mdi-thumb-up</v-icon>
      </h6>

      <center>
        <v-img src="@/assets/galeria/vino_qr.png" max-width="170" style="align-items: center;">
          <vue-qr class="vue-qr" :text="botella.hash_botella" :size="145" style="margin-top: 60px;"> </vue-qr>
        </v-img>
      </center>
      <br>
      <p style="font-size: 12px;"> Hash: {{ botella.hash_botella }}</p>
      <v-btn x-large color="green" outlined v-if="botella.token_asignado == false" @click="asignarToken(botella.hash_botella)">
        RECLAMAR TOKEN
      </v-btn>
    </v-card>

    <v-container>
      <v-row>
        <v-col cols="6" v-for="(item, i) in items" :key="i">
          <v-card :color="item.color" dark>
            <v-card-title class="text-h6" v-text="item.index + ' ' + item.nombre"></v-card-title>
            <v-card-text class="white text--primary">
              <br>
              <p style="text-align: start;" v-html="item.informacion"> </p>
              <p style="font-size: 11px; text-align: start;">Fecha de creación: {{ item.fecha_creacion }} </p>
            </v-card-text>
          </v-card>
        </v-col>

      </v-row>
    </v-container>


  </section>
</template>

<script>
import VueQr from 'vue-qr';
import { enviarToken } from '../conexion_web3/procesos';
export default {
  name: "FormClarificacion",
  components: {
    VueQr
  },
  data: () => ({
    turbidez: null,
  }),
  props: {
    items: [Object],
    proceso: [Object],
    botella: [Object],
    tipo: [Number], //0: Administrador 1: Cliente
  },
  methods: {
    async asignarToken(hash) {
      try {
        await enviarToken(hash);
        this.$toast.open({
          message: "Token asignado correctamente",
          type: "success",
          duration: 5000,
          position: "top-right",
          pauseOnHover: true,
        });
        // this.botella.token_asignado = false;
      } catch (error) {
        console.log(error);
        // console.log(error.data.message);
        this.$toast.open({
          // message: "No se pudo asignar token",
          message: error,
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
