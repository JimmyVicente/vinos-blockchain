<template>
  <section>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="12" md="6" align-self="center ">
          <v-text-field v-model="turbidez" label="Turbidez (ppm)" placeholder="Ingrese turbidez" outlined type="number"
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
import { required } from "vuelidate/lib/validators";
import controlador_proceso from "../controlador/controlador_proceso";

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
      var data = {};
      data.proceso = 5;
      data.id_proceso = this.hash_anterior;
      data.turbidez = this.turbidez;
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
