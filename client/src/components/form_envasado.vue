<template>
  <section>
    <v-container>
      <v-row justify="center">
        <v-col cols="6" sm="6" md="6" align-self="center ">
          <v-text-field v-model="nro_lote" label="Número De Lote" placeholder="Ingrese número de lote" outlined
            :error-messages="nro_lote_errors" @input="$v.nro_lote.$touch()" @blur="$v.nro_lote.$touch()">
          </v-text-field>
        </v-col>
        <v-col cols="6" sm="6" md="6" align-self="center ">
          <v-text-field v-model="nro_botellas" label="Total De Botellas Producidas"
            placeholder="Ingrese total de botellas producidas" outlined type="number"
            :error-messages="nro_botellas_errors" @input="$v.nro_botellas.$touch()" @blur="$v.nro_botellas.$touch()">
          </v-text-field>
        </v-col>
        <v-col cols="6" sm="6" md="6" align-self="center ">
          <v-text-field v-model="nro_botellas_especiales" label="Botellas especiales"
            placeholder="Ingrese el numero de botellas especiales" outlined type="number"
            :error-messages="nro_botellas_especiales_errors" @input="$v.nro_botellas_especiales.$touch()"
            @blur="$v.nro_botellas_especiales.$touch()"></v-text-field>
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
import { required } from "vuelidate/lib/validators";
import controlador_proceso from "../controlador/controlador_proceso";

export default {
  name: "FormEnvasado",
  components: {},
  mixins: [validationMixin],
  validations: {
    nro_lote: { required, },
    nro_botellas: { required, },
    nro_botellas_especiales: { required, },
  },
  data: () => ({
    nro_lote: null,
    nro_botellas: null,
    nro_botellas_especiales: null,
  }),
  computed: {
    nro_lote_errors() {
      const errors = [];
      if (!this.$v.nro_lote.$dirty) return errors;
      !this.$v.nro_lote.required && errors.push("Este campo es obligatorio.");
      return errors;
    },
    nro_botellas_errors() {
      const errors = [];
      if (!this.$v.nro_botellas.$dirty) return errors;
      !this.$v.nro_botellas.required && errors.push("Este campo es obligatorio.");
      return errors;
    },
    nro_botellas_especiales_errors() {
      const errors = [];
      if (!this.$v.nro_botellas_especiales.$dirty) return errors;
      !this.$v.nro_botellas_especiales.required && errors.push("Este campo es obligatorio.");
      return errors;
    },
  },
  props: {
    agregar_proceso: [Boolean],
    hash_anterior: [String],
    editar_proceso: [Boolean],
    elemento_editar: [Object],
    hash_info: [String],
  },
  methods: {
    async guardar() {
      var data = {};
      data.proceso = 7;
      data.id_proceso = this.hash_anterior;
      data.nro_lote = this.nro_lote;
      data.nro_botellas = this.nro_botellas * 1;
      data.nro_botellas_especiales = this.nro_botellas_especiales * 1;
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
      this.$emit("update:n_proceso", 8);
    },
    cerrar() {
      this.$emit("update:agregar_proceso", false);
      this.$v.$reset();
    },
  },
  async mounted() {
    if (this.editar_proceso) {
      this.nro_lote = this.elemento_editar.nro_lote;
      this.nro_botellas = this.elemento_editar.nro_botellas;
      this.nro_botellas_especiales = this.elemento_editar.nro_botellas_especiales;
    } else {
      this.nro_lote = null;
      this.nro_botellas = null;
      this.nro_botellas_especiales = null;
    }
  },
};
</script>
