<template>
  <section>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="12" md="6" align-self="center ">
          <v-text-field v-model="liquido_claro" label="Líquido Claro (%)" placeholder="Ingrese líquido oscuro" outlined
            :error-messages="liquido_claro_errors" @input="$v.liquido_claro.$touch(); validar()"
            @blur="$v.liquido_claro.$touch()" type="number"></v-text-field>
        </v-col>
        <v-col cols="12" sm="12" md="6" align-self="center ">
          <v-text-field v-model="liquido_oscuro" label="Líquido Oscuro (%)" placeholder="Ingrese líquido oscuro"
            outlined :error-messages="liquido_oscuro_errors" @input="$v.liquido_oscuro.$touch(); validar()"
            @blur="$v.liquido_oscuro.$touch()" readonly type="number"></v-text-field>
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

const mayor_menor = (value) => {
  if (value <= 100 && value >= 1) {
    return true;
  } else {
    return false;
  }
};

export default {
  name: "FormTrasiego",
  components: {},
  mixins: [validationMixin],
  validations: {
    liquido_claro: { required, mayor_menor },
    liquido_oscuro: { required, mayor_menor },
  },
  data: () => ({
    liquido_claro: null,
    liquido_oscuro: null,
  }),
  computed: {
    liquido_claro_errors() {
      const errors = [];
      if (!this.$v.liquido_claro.$dirty) return errors;
      !this.$v.liquido_claro.required && errors.push("Este campo es obligatorio.");
      !this.$v.liquido_claro.mayor_menor && errors.push("El valor debe ser mayor a 1 y menor a 100.");
      return errors;
    },
    liquido_oscuro_errors() {
      const errors = [];
      if (!this.$v.liquido_oscuro.$dirty) return errors;
      !this.$v.liquido_oscuro.required && errors.push("Este campo es obligatorio.");
      !this.$v.liquido_oscuro.mayor_menor && errors.push("El valor debe ser mayor a 1 y menor a 100.");
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
      data.proceso = 6;
      data.id_proceso = this.hash_anterior;
      data.liquido_claro = (this.liquido_claro * 1).toFixed(2);
      data.liquido_oscuro = (this.liquido_oscuro * 1).toFixed(2);
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
      this.$emit("update:n_proceso", 7);
    },
    cerrar() {
      this.$emit("update:agregar_proceso", false);
      this.$v.$reset();
    },
    validar() {
      this.liquido_oscuro = 100 - (this.liquido_claro ?? 100);
    }
  },
  async mounted() {
    if (this.editar_proceso) {
      this.liquido_claro = this.elemento_editar.liquido_claro;
      this.liquido_oscuro = this.elemento_editar.liquido_oscuro;
    } else {
      this.liquido_claro = null;
      this.liquido_oscuro = null;
    }
  },
};
</script>
