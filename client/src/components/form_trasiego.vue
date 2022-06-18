<template>
  <section>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="12" md="6" align-self="center ">
          <v-text-field
            v-model="liquido_claro"
            label="Porcentaje De Liquido Claro (%)"
            placeholder="Ingrese porcentaje de liquido oscuro"
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="12" md="6" align-self="center ">
          <v-text-field
            v-model="liquido_oscuro"
            label="Porcentaje De Liquido Oscuro (%)"
            placeholder="Ingrese porcentaje de liquido oscuro"
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
  name: "FormTrasiego",
  components: {},
  data: () => ({
    liquido_claro: null,
    liquido_oscuro: null,
  }),
  props: {
    n_proceso: [Number],
    agregar_proceso: [Boolean],
  },
  methods: {
    guardar() {
      this.$emit("update:n_proceso", 7);
    },
    cerrar() {
      this.$emit("update:agregar_proceso", false);
    },
  },
};
</script>
