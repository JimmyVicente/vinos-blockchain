<template>
  <section>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="12" md="6" align-self="center ">
          <v-text-field
            v-model="nro_lote"
            label="Número De Lote"
            placeholder="Ingrese número de lote"
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="12" md="6" align-self="center ">
          <v-text-field
            v-model="nro_botellas"
            label="Total De Botellas Producidas"
            placeholder="Ingrese total de botellas producidas"
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
  name: "FormEnvasado",
  components: {},
  data: () => ({
    nro_lote: null,
    nro_botellas: null,
  }),
  props: {
    agregar_proceso: [Boolean],
  },
  methods: {
    guardar() {
      this.$emit("update:agregar_proceso", false);
      this.$emit("update:n_proceso", 8);
    },
    cerrar() {
      this.$emit("update:agregar_proceso", false);
    },
  },
};
</script>
