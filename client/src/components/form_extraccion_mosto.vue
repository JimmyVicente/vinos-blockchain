<template>
  <section>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="12" md="6" align-self="center">
          <v-select
            v-model="tipo"
            :items="tipo_extraccion"
            item-text="txt"
            item-value="val"
            label="Tipos De Extracción"
            outlined
          ></v-select>
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
    tipo: null,
    tipo_extraccion: [
      {
        txt: "Licuado",
        val: "licuado",
      },
      {
        txt: "Pulpatado",
        val: "pulpatado",
      },
    ],
  }),
  props: {
    n_proceso: [Number],
    agregar_proceso: [Boolean],
  },
  methods: {
    guardar() {
      this.$emit("update:n_proceso", 3);
    },
    cerrar() {
      this.$emit("update:agregar_proceso", false);
    },
  },
};
</script>
