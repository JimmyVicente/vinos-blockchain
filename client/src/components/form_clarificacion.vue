<template>
  <section>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="12" md="6" align-self="center ">
          <v-text-field
            v-model="turbidez"
            label="Turbidez (ppm)"
            placeholder="Ingrese turbidex"
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
  name: "FormClarificacion",
  components: {},
  data: () => ({
    turbidez: null,
  }),
  props: {
    n_proceso: [Number],
    agregar_proceso: [Boolean],
  },
  methods: {
    guardar() {
      this.$emit("update:n_proceso", 6);
    },
    cerrar() {
      this.$emit("update:agregar_proceso", false);
    },
  },
};
</script>
