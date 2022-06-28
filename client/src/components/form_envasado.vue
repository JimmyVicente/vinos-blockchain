<template>
  <section>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="12" md="6" align-self="center ">
          <v-text-field v-model="nro_lote" label="Número De Lote" placeholder="Ingrese número de lote" outlined>
          </v-text-field>
        </v-col>
        <v-col cols="12" sm="12" md="6" align-self="center ">
          <v-text-field v-model="nro_botellas" label="Total De Botellas Producidas"
            placeholder="Ingrese total de botellas producidas" outlined></v-text-field>
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
  name: "FormEnvasado",
  components: {},
  data: () => ({
    nro_lote: null,
    nro_botellas: null,
  }),
  props: {
    agregar_proceso: [Boolean],
    hash_anterior: [String],
    editar_proceso: [Boolean],
    elemento_editar: [Object],
    hash_info: [String],
  },
  methods: {
    async guardar() {
      try {
        var data = {};
        data.hash_anterior = this.hash_anterior * 1;
        data.nro_lote = this.nro_lote;
        data.nro_botellas = this.nro_botellas * 1;
        if (this.editar_proceso) {
          await editarProceso(7, data);
        } else {
          await crearProceso(7, data);
        }
        this.$toast.open({
          message: "Guardado correctramente",
          type: "success",
          duration: 5000,
          position: "top-right",
          pauseOnHover: true,
        });
        this.$emit("update:agregar_proceso", false);
        this.siguiente();
        this.cerrar();
      } catch (error) {
        this.$toast.open({
          message: error.message,
          type: "error",
          duration: 5000,
          position: "top-right",
          pauseOnHover: true,
        });
      }
    },
    siguiente() {
      this.$emit("update:n_proceso", 8);
    },
    cerrar() {
      this.$emit("update:agregar_proceso", false);
    },
  },
    async mounted() {
    if (this.editar_proceso) {
      this.nro_lote = this.elemento_editar.nro_lote;
      this.nro_botellas = this.elemento_editar.nro_botellas;
    } else {
      this.nro_lote = null;
      this.nro_botellas = null;
    }
  },
};
</script>
