<template>
  <section>
    <v-container>
      <v-row>
        <v-col cols="12" sm="12" md="6">
          <v-text-field
          type="datetime-local"
            v-model="fecha_inicio"
            label="Fecha De Inicio De Fermentación"
            placeholder="Ingrese fecha de inicio de fermentación"
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="12" md="6">
          <v-text-field
          type="datetime-local"
            v-model="fecha_fin"
            label="Fecha De Finalización De Fermentación"
            placeholder="Ingrese fecha de finalización de fermentación"
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="12" md="6">
          <v-text-field
            v-model="grados_invertidos"
            label="Porcentaje De Grados invertidos"
            placeholder="Ingrese porcentaje de grados invertidos"
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
    <center>
      <v-btn dark color="secondary_app" @click="guardar()"> Guardar </v-btn>
      <v-btn text @click="cerrar()"> Salir </v-btn>
    </center>
  </section>
</template>

<script>
export default {
  name: "FormFermentacion",
  components: {},
  data: () => ({
    fecha_inicio: null,
    fecha_final: null,
    grados_invertidos: null,
  }),
  props: {
    n_proceso: [Number],
    agregar_proceso: [Boolean],
  },
  methods: {
    guardar() {
      this.$emit("update:n_proceso", 5);
    },
    cerrar() {
      this.$emit("update:agregar_proceso", false);
    },
  },
};
</script>
