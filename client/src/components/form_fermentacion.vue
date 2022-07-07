<template>
  <section>
    <v-container>
      <v-row>
        <v-col cols="12" sm="12" md="6">
          <v-text-field type="datetime-local" v-model="fecha_inicio" label="Fecha De Inicio De Fermentación"
            placeholder="Ingrese fecha de inicio de fermentación" outlined
            :error-messages="fecha_inicio_errors" @input="$v.fecha_inicio.$touch()" @blur="$v.fecha_inicio.$touch()"></v-text-field>
        </v-col>
        <v-col cols="12" sm="12" md="6">
          <v-text-field type="datetime-local" v-model="fecha_final" label="Fecha de Finalización De Fermentación"
            placeholder="Ingrese fecha de finalización de fermentación" outlined
            :error-messages="fecha_final_errors" @input="$v.fecha_final.$touch()" @blur="$v.fecha_final.$touch()"></v-text-field>
        </v-col>
        <v-col cols="12" sm="12" md="6">
          <v-text-field v-model="grados_invertidos" label="Grados invertidos(%)"
            placeholder="Ingrese grados invertidos" outlined type="number"
            :error-messages="grados_invertidos_errors" @input="$v.grados_invertidos.$touch()" @blur="$v.grados_invertidos.$touch()"></v-text-field>
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
const moment = require("moment");
export default {
  name: "FormFermentacion",
  components: {},
  mixins: [validationMixin],
  validations: {
    fecha_inicio: { required, },
    fecha_final: { required, },
    grados_invertidos: { required, },
  },
  data: () => ({
    fecha_inicio: null,
    fecha_final: null,
    grados_invertidos: null,
  }),
  computed: {
    fecha_inicio_errors() {
      const errors = [];
      if (!this.$v.fecha_inicio.$dirty) return errors;
      !this.$v.fecha_inicio.required && errors.push("Este campo es obligatorio.");
      return errors;
    },
    fecha_final_errors() {
      const errors = [];
      if (!this.$v.fecha_final.$dirty) return errors;
      !this.$v.fecha_final.required && errors.push("Este campo es obligatorio.");
      return errors;
    },
    grados_invertidos_errors() {
      const errors = [];
      if (!this.$v.grados_invertidos.$dirty) return errors;
      !this.$v.grados_invertidos.required && errors.push("Este campo es obligatorio.");
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
        var fecha_inicio = new Date(this.fecha_inicio);
        var fecha_final = new Date(this.fecha_final);
        fecha_inicio = fecha_inicio.getTime() / 1000;
        fecha_final = fecha_final.getTime() / 1000;
        data.hash_anterior = this.hash_anterior * 1;
        data.fecha_inicio = fecha_inicio;
        data.fecha_final = fecha_final;
        data.grados_invertidos = this.grados_invertidos;
        this.$v.$touch();
        if (!this.$v.$invalid) {
          if (this.editar_proceso) {
            await editarProceso(4, data);
          } else {
            await crearProceso(4, data);
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
      this.$emit("update:n_proceso", 5);
    },
    cerrar() {
      this.$emit("update:agregar_proceso", false);
      this.$v.$reset();
    },
  },
  async mounted() {
    if (this.editar_proceso) {
      var fecha_inicio = new Date(this.elemento_editar.fecha_inicio * 1000);
      var fecha_final = new Date(this.elemento_editar.fecha_final * 1000);
      this.fecha_inicio = moment(fecha_inicio).format("YYYY-MM-DDTkk:mm");
      this.fecha_final = moment(fecha_final).format("YYYY-MM-DDTkk:mm");
      this.grados_invertidos = this.elemento_editar.grados_invertidos;
    } else {
      this.fecha_inicio = null;
      this.fecha_final = null;
      this.grados_invertidos = null;
    }
  },
};
</script>
