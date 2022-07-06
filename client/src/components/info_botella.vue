<template>
  <section>

    <v-card style="padding: 10px;">

      <h4>Trazabilidad de la botella Nro: {{ botella.nro_botella }}</h4>
      <h4>Cosecha: {{ proceso.materia_prima.nro_cosecha }}</h4>
      <div v-for="(item, i ) in botella.estados_obj" :key="i">
        <h6>Fecha de {{ item.estado_str }}: {{ item.fecha_str }} </h6>
      </div>

      <center>
        <v-img src="@/assets/galeria/vino_qr.png" max-width="170" style="align-items: center;">
          <vue-qr class="vue-qr" :text="botella.hash_botella" :size="145" style="margin-top: 60px;"> </vue-qr>
        </v-img>
      </center>
      <br>
      <p style="font-size: 12px;"> Hash: {{ botella.hash_botella }}</p>
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
  },
  methods: {

  },

};
</script>
