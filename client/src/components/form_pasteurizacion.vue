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
import { crearPasteurizacion } from "../conexion_web3/procesos";
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
    hash_anterior: [String],
    agregar_proceso: [Boolean],
  },
  methods: {
    async guardar() {
      try {
        var data = {};
        data.hash_anterior = this.hash_anterior;
        data.temperatura_caliente = this.temperatura_caliente;
        data.temperatura_fria = this.temperatura_fria;
        data.tiempo_proceso = this.tiempo_proceso;
        await crearPasteurizacion(data);
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
          message: error.message,
          type: "error",
          duration: 5000,
          position: "top-right",
          pauseOnHover: true,
        });
      }
    },
    siguiente() {
      this.$emit("update:n_proceso", 4);
    },
    cerrar() {
      this.$emit("update:agregar_proceso", false);
    },
  },
};
</script>
