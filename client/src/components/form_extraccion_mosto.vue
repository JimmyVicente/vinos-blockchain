<template>
  <section>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="12" md="6" align-self="center">
          <v-select v-model="tipo" :items="tipo_extraccion" item-text="txt" item-value="val" label="Tipos De Extracción"
            outlined :error-messages="tipo_errors" @input="$v.tipo.$touch()" @blur="$v.tipo.$touch()"></v-select>
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
  name: "FormMateriaPrima",
  components: {},
  mixins: [validationMixin],
  validations: {
    tipo: { required, },
  },
  data: () => ({
    tipo: "Licuado",
    tipo_extraccion: [
      { txt: "Licuado", val: "Licuado", },
      { txt: "Pulpatado", val: "Pulpatado", },
    ],
  }),
  computed: {
    tipo_errors() {
      const errors = [];
      if (!this.$v.tipo.$dirty) return errors;
      !this.$v.tipo.required && errors.push("Este campo es obligatorio.");
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
      data.proceso = 2;
      data.id_proceso = this.hash_anterior;
      data.tipo = this.tipo;
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
      this.$emit("update:n_proceso", 3);
    },
    cerrar() {
      this.$emit("update:agregar_proceso", false);
      this.$v.$reset();
    },
  },
  async mounted() {
    if (this.elemento_editar) {
      this.tipo = this.elemento_editar.tipo;
    } else {
      this.tipo = "Licuado";
    }
  },
};
</script>
