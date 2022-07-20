<template>
  <section>
    <v-container>
      <v-row>
        <v-col cols="12" sm="12" md="6">
          <v-text-field v-model="nro_cosecha" label="N° De Cosecha" placeholder="Ingrese número de cosecha" outlined
            type="number" :error-messages="nro_cosecha_errors" @input="$v.nro_cosecha.$touch()"
            @blur="$v.nro_cosecha.$touch()">
          </v-text-field>
        </v-col>
        <v-col cols="12" sm="12" md="6">
          <v-text-field v-model="lugar_procedencia" label="Lugar De Procedencia"
            placeholder="Ingrese lugar de procedencia" outlined :error-messages="lugar_procedencia_errors"
            @input="$v.lugar_procedencia.$touch()" @blur="$v.lugar_procedencia.$touch()"></v-text-field>
        </v-col>
        <v-col cols="12" sm="12" md="6">
          <v-text-field v-model="nombre_propietario" label="Nombre Del Propietario"
            placeholder="Ingrese nombre del propietario" outlined :error-messages="nombre_propietario_errors"
            @input="$v.nombre_propietario.$touch()" @blur="$v.nombre_propietario.$touch()"></v-text-field>
        </v-col>
        <v-col cols="12" sm="12" md="6">
          <v-text-field v-model="gadros_brix" label="Gadros Brix " placeholder="Ingrese grados brix" outlined
            type="number" :error-messages="gadros_brix_errors" @input="$v.gadros_brix.$touch()"
            @blur="$v.gadros_brix.$touch()">
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
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";

import controlador_proceso from "../controlador/controlador_proceso";
export default {
  name: "FormMateriaPrima",
  components: {},
  mixins: [validationMixin],
  validations: {
    nro_cosecha: { required, },
    lugar_procedencia: { required, },
    nombre_propietario: { required, },
    gadros_brix: { required, },
  },
  data: () => ({
    nro_cosecha: null,
    lugar_procedencia: null,
    nombre_propietario: null,
    gadros_brix: null,
  }),
  computed: {
    nro_cosecha_errors() {
      const errors = [];
      if (!this.$v.nro_cosecha.$dirty) return errors;
      !this.$v.nro_cosecha.required && errors.push("Este campo es obligatorio.");
      return errors;
    },
    lugar_procedencia_errors() {
      const errors = [];
      if (!this.$v.lugar_procedencia.$dirty) return errors;
      !this.$v.lugar_procedencia.required && errors.push("Este campo es obligatorio.");
      return errors;
    },
    nombre_propietario_errors() {
      const errors = [];
      if (!this.$v.nombre_propietario.$dirty) return errors;
      !this.$v.nombre_propietario.required && errors.push("Este campo es obligatorio.");
      return errors;
    },
    gadros_brix_errors() {
      const errors = [];
      if (!this.$v.gadros_brix.$dirty) return errors;
      !this.$v.gadros_brix.required && errors.push("Este campo es obligatorio.");
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
      var data = {};
      data.proceso = 1;
      data.nro_cosecha = this.nro_cosecha;
      data.lugar_procedencia = this.lugar_procedencia;
      data.nombre_propietario = this.nombre_propietario;
      data.gadros_brix = this.gadros_brix;
      if (this.editar_proceso) data.id_proceso = this.hash_anterior;
      this.$v.$touch();
      if (!this.$v.$invalid) {
        controlador_proceso.crear_editar_proceso(data, async (response) => {
          this.$toast.open({
            message: response.mensaje,
            type: response.tipo,
            duration: 5000,
            position: "top-right",
            pauseOnHover: true,
          });
          if (response.tipo == "success") {
            this.$emit("generarProceso", response.data);
            this.cerrar();
          }
        });
      }

    },
    siguiente() {
      this.$emit("update:n_proceso", 2);
    },
    cerrar() {
      this.$emit("update:agregar_proceso", false);
      this.$v.$reset();
    },
  },
  mounted() {
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
