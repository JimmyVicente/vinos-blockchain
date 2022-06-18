<template>
  <section>
    <v-container>
      <v-row>
        <v-col cols="12" sm="12" md="6">
          <v-text-field
            v-model="nro_cosecha"
            label="N° De Cosecha"
            placeholder="Ingrese número de cosecha"
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="12" md="6">
          <v-text-field
            v-model="lugar_procedencia"
            label="Lugar De Procedencia"
            placeholder="Ingrese lugar de procedencia"
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="12" md="6">
          <v-text-field
            v-model="nombre_propietario"
            label="Nombre Del Propietario"
            placeholder="Ingrese nombre del propietario"
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="12" md="6">
          <v-text-field
            v-model="gadros_brix"
            label="Gadros Brix"
            placeholder="Ingrese grados brix"
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
  name: "FormMateriaPrima",
  components: {},
  data: () => ({
    nro_cosecha: null,
    lugar_procedencia: null,
    nombre_propietario: null,
    gadros_brix: null,
  }),
  props: {
    n_proceso: [Number],
    agregar_proceso: [Boolean],
  },
  methods: {
    guardar() {
      this.$emit("update:n_proceso", 2);
    },
    cerrar() {
      this.$emit("update:agregar_proceso", false);
    },
  },
};
</script>
