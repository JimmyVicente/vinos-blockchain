<template>
  <section>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="12" md="6" align-self="center ">
          <v-text-field v-model="liquido_claro" label="Porcentaje De Liquido Claro (%)"
            placeholder="Ingrese porcentaje de liquido oscuro" outlined></v-text-field>
        </v-col>
        <v-col cols="12" sm="12" md="6" align-self="center ">
          <v-text-field v-model="liquido_oscuro" label="Porcentaje De Liquido Oscuro (%)"
            placeholder="Ingrese porcentaje de liquido oscuro" outlined></v-text-field>
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
import { crearProceso, editarProceso } from "../conexion_web3/procesos";
export default {
  name: "FormTrasiego",
  components: {},
  data: () => ({
    liquido_claro: null,
    liquido_oscuro: null,
  }),
  props: {
    n_proceso: [Number],
    hash_anterior: [String],
    editar_proceso: [Boolean],
    elemento_editar: [Object],
    agregar_proceso: [Boolean],
  },
  methods: {
    async guardar() {
      try {
        var data = {};
        data.hash_anterior = this.hash_anterior * 1;
        data.liquido_claro = this.liquido_claro;
        data.liquido_oscuro = this.liquido_oscuro;
        if (this.editar_proceso) {
          await editarProceso(6, data);
        } else {
          await crearProceso(6, data);
        }
        this.$toast.open({
          message: "Guardado correctramente",
          type: "success",
          duration: 5000,
          position: "top-right",
          pauseOnHover: true,
        });
        this.cerrar();
      } catch (error) {
        this.$toast.open({
          message: "Error al guardar proceso",
          type: "error",
          duration: 5000,
          position: "top-right",
          pauseOnHover: true,
        });
      }
    },
    siguiente() {
      this.$emit("update:n_proceso", 7);
    },
    cerrar() {
      this.$emit("update:agregar_proceso", false);
    },
  },
  async mounted() {
    if (this.editar_proceso) {
      this.liquido_claro = this.elemento_editar.liquido_claro;
      this.liquido_oscuro = this.elemento_editar.liquido_oscuro;
    } else {
      this.liquido_claro = null;
      this.liquido_oscuro = null;
    }
  },
};
</script>
