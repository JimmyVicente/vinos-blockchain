<template>
  <section>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="12" md="6" align-self="center">
          <v-select v-model="tipo" :items="tipo_extraccion" item-text="txt" item-value="val" label="Tipos De Extracción"
            outlined></v-select>
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
import { crearProceso } from "../conexion_web3/procesos";
export default {
  name: "FormMateriaPrima",
  components: {},
  data: () => ({
    tipo: "licuado",
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
    hash_anterior: [String],
    agregar_proceso: [Boolean],
  },
  methods: {
    async guardar() {
      try {
        var data = {};
        data.hash_anterior = this.hash_anterior;
        data.tipo = this.tipo;
        await crearProceso(2, data);
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
      this.$emit("update:n_proceso", 3);
    },
    cerrar() {
      this.$emit("update:agregar_proceso", false);
    },
  },
};
</script>
