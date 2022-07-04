<template>
  <section>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="12" md="6" align-self="center ">
          <v-text-field v-model="turbidez" label="Turbidez (ppm)" placeholder="Ingrese turbidex" outlined
            :error-messages="turbidez_errors" @input="$v.turbidez.$touch()" @blur="$v.turbidez.$touch()">
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
import { validationMixin } from "vuelidate";
import {
  required,
} from "vuelidate/lib/validators";

import { crearProceso, editarProceso } from "../conexion_web3/procesos";

export default {
  name: "FormClarificacion",
  components: {},
  mixins: [validationMixin],
  validations: {
    turbidez: { required, },
  },
  data: () => ({
    turbidez: null,
  }),
  computed: {
    turbidez_errors() {
      const errors = [];
      if (!this.$v.turbidez.$dirty) return errors;
      !this.$v.turbidez.required && errors.push("Este campo es obligatorio.");
      //!this.$v.nombre.alpha && errors.push("Ingrse solo texto.");
      return errors;
    },
  },
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
        this.$v.$touch();
        if (!this.$v.$invalid) {
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
        }
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
      this.$v.$reset();
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
