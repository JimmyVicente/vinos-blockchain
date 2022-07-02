<template>
  <section>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="12" md="6" align-self="center ">
          <v-text-field v-model="turbidez" label="Turbidez (ppm)" placeholder="Ingrese turbidex" outlined>
          </v-text-field>
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
  name: "FormClarificacion",
  components: {},
  data: () => ({
    turbidez: null,
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
        data.turbidez = this.turbidez;
        if (this.editar_proceso) {
          await editarProceso(5, data);
        } else {
          await crearProceso(5, data);
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
      this.$emit("update:n_proceso", 6);
    },
    cerrar() {
      this.$emit("update:agregar_proceso", false);
    },
  },
  async mounted() {
    if (this.editar_proceso) {
      this.turbidez = this.elemento_editar.turbidez;
    } else {
      this.turbidez = null;
    }
  },
};
</script>
