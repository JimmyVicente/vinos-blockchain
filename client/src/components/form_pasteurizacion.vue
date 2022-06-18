<template>
  <section>
    <v-container>
      <v-row>
        <v-col cols="12" sm="12" md="6">
          <v-text-field
          v-model="temperatura_caliente"
            label="Temperatura Caliente (°C)"
            placeholder="Ingrese temperatura caliente"
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="12" md="6">
          <v-text-field
          v-model="temperatura_fria"
            label="Temperatura Fria (°C)"
            placeholder="Ingrese temperatura fria"
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="12" md="6">
          <v-text-field
          v-model="tiempo_proceso"
            label="Tiempo De Proceso (min)"
            placeholder="Ingrese tiempo de proceso"
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
  name: "FormPasteurizacion",
  components: {},
  data: () => ({
    temperatura_caliente: null,
    temperatura_fria: null,
    tiempo_proceso: null,
  }),
  props: {
    n_proceso: [Number],
    agregar_proceso: [Boolean],
  },
  methods: {
    guardar() {
      this.$emit("update:n_proceso", 4);
    },
    cerrar() {
      this.$emit("update:agregar_proceso", false);
    },
  },
};
</script>
