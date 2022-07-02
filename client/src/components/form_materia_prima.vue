<template>
  <section>
    <v-container>
      <v-row>
        <v-col cols="12" sm="12" md="6">
          <v-text-field v-model="nro_cosecha" label="N° De Cosecha" placeholder="Ingrese número de cosecha" outlined>
          </v-text-field>
        </v-col>
        <v-col cols="12" sm="12" md="6">
          <v-text-field v-model="lugar_procedencia" label="Lugar De Procedencia"
            placeholder="Ingrese lugar de procedencia" outlined></v-text-field>
        </v-col>
        <v-col cols="12" sm="12" md="6">
          <v-text-field v-model="nombre_propietario" label="Nombre Del Propietario"
            placeholder="Ingrese nombre del propietario" outlined></v-text-field>
        </v-col>
        <v-col cols="12" sm="12" md="6">
          <v-text-field v-model="gadros_brix" label="Gadros Brix" placeholder="Ingrese grados brix" outlined>
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
//importaciones web3
import { crearProceso, editarProceso } from "../conexion_web3/procesos";
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
        data.nro_cosecha = this.nro_cosecha;
        data.lugar_procedencia = this.lugar_procedencia;
        data.nombre_propietario = this.nombre_propietario;
        data.gadros_brix = this.gadros_brix;
        if (this.editar_proceso) {
          await editarProceso(1, data);
        } else {
          await crearProceso(1, data);
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
      this.$emit("update:n_proceso", 2);
    },
    cerrar() {
      this.$emit("update:agregar_proceso", false);
    },
  },
  async mounted() {
    if (this.editar_proceso) {
      this.nro_cosecha = this.elemento_editar.nro_cosecha;
      this.lugar_procedencia = this.elemento_editar.lugar_procedencia;
      this.nombre_propietario = this.elemento_editar.nombre_propietario;
      this.gadros_brix = this.elemento_editar.gadros_brix;
    } else {
      this.nro_cosecha = null;
      this.lugar_procedencia = null;
      this.nombre_propietario = null;
      this.gadros_brix = null;
    }
  },
};
</script>
