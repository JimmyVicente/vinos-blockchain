<template>
  <section class="container">
    <v-container class="margin">
      <v-card>
        <v-card-title>
          <h1>{{ nombre_proceso }}</h1>
          <v-spacer></v-spacer>
          <v-btn v-if="n_proceso < 8 && n_proceso > 0" dark color="primary_app" x-large style="margin-right: 2%"
            @click="siguienteProceso()">
            <v-icon left large> mdi-glass-tulip </v-icon>
            Agregar
          </v-btn>
        </v-card-title>
        <v-divider></v-divider>
        <v-container>
          <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
            <v-timeline-item v-for="(item, i) in items" :key="i" :color="item.color" :icon="item.icon" fill-dot>
              <v-card :color="item.color" dark>
                <v-card-title class="text-h6" v-text="item.nombre"></v-card-title>
                <v-card-text class="white text--primary">
                  <br>
                  <p style="text-align: start;" v-html="item.informacion"> </p>
                  <p style="font-size: 11px; text-align: start;">Fecha de creación: {{ item.fecha_creacion }} </p>
                  <div v-if="item.model.aprobado == false">
                    <v-btn :color="item.color" class="mx-0" outlined @click="editar(item.index, item.model)">
                      Editar
                    </v-btn>
                    <v-btn class="mx-0" outlined style="color: green;" @click="aprobarProceso(item.index, item.model)">
                      Aprobar
                    </v-btn>
                  </div>
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-container>
      </v-card>
    </v-container>
    <v-dialog v-model="agregar_proceso" persistent>
      <v-card>
        <v-stepper v-model="n_proceso">
          <v-stepper-header>
            <v-stepper-step :complete="n_proceso > proceso_a" :step="proceso_a" color="secondary_app">
              Materia Prima
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step :complete="n_proceso > proceso_b" :step="proceso_b" color="secondary_app">
              Extracción Del Mosto
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step :complete="n_proceso > proceso_c" :step="proceso_c" color="secondary_app">
              Pasteurización</v-stepper-step>
            <v-divider></v-divider>

            <v-stepper-step :complete="n_proceso > proceso_d" :step="proceso_d" color="secondary_app">
              Fermentación
            </v-stepper-step>
            <v-divider></v-divider>

            <v-stepper-step :complete="n_proceso > proceso_e" :step="proceso_e" color="secondary_app">
              Clarificación
            </v-stepper-step>
            <v-divider></v-divider>

            <v-stepper-step :complete="n_proceso > proceso_f" :step="proceso_f" color="secondary_app">
              Trasiego
            </v-stepper-step>
            <v-divider></v-divider>

            <v-stepper-step :step="proceso_g" color="secondary_app">
              Envasado
            </v-stepper-step>
          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content :step="proceso_a" style="height: 300px;">
              <FormMateriaPrima :n_proceso.sync="n_proceso" :agregar_proceso.sync="agregar_proceso"
                :hash_anterior="hash_anterior" :editar_proceso="editar_proceso" :elemento_editar="elemento_editar" />
            </v-stepper-content>

            <v-stepper-content :step="proceso_b" style="height: 300px;">
              <FormExtraccionMosto :n_proceso.sync="n_proceso" :agregar_proceso.sync="agregar_proceso"
                :hash_anterior="hash_anterior" :editar_proceso="editar_proceso" :elemento_editar="elemento_editar" />
            </v-stepper-content>
            <v-stepper-content :step="proceso_c" style="height: 300px;">
              <FormPasteurizacion :n_proceso.sync="n_proceso" :agregar_proceso.sync="agregar_proceso"
                :hash_anterior="hash_anterior" :editar_proceso="editar_proceso" :elemento_editar="elemento_editar" />
            </v-stepper-content>
            <v-stepper-content :step="proceso_d" style="height: 300px;">
              <FormFermentacion :n_proceso.sync="n_proceso" :agregar_proceso.sync="agregar_proceso"
                :hash_anterior="hash_anterior" :editar_proceso="editar_proceso" :elemento_editar="elemento_editar" />
            </v-stepper-content>
            <v-stepper-content :step="proceso_e" style="height: 300px;">
              <FormClarificacion :n_proceso.sync="n_proceso" :agregar_proceso.sync="agregar_proceso"
                :hash_anterior="hash_anterior" :editar_proceso="editar_proceso" :elemento_editar="elemento_editar" />
            </v-stepper-content>
            <v-stepper-content :step="proceso_f" style="height: 300px;">
              <FormTrasiego :n_proceso.sync="n_proceso" :agregar_proceso.sync="agregar_proceso"
                :hash_anterior="hash_anterior" :editar_proceso="editar_proceso" :elemento_editar="elemento_editar" />
            </v-stepper-content>
            <v-stepper-content :step="proceso_g" style="height: 300px;">
              <FormEnvasado :n_proceso.sync="n_proceso" :agregar_proceso.sync="agregar_proceso"
                :hash_anterior="hash_anterior" :editar_proceso="editar_proceso" :elemento_editar="elemento_editar" />
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-card>
    </v-dialog>
  </section>
</template>

<script>
import FormMateriaPrima from '@/components/form_materia_prima.vue'
import FormExtraccionMosto from '@/components/form_extraccion_mosto.vue'
import FormPasteurizacion from '@/components/form_pasteurizacion.vue'
import FormFermentacion from '@/components/form_fermentacion.vue'
import FormClarificacion from '@/components/form_clarificacion.vue'
import FormTrasiego from '@/components/form_trasiego.vue'
import FormEnvasado from '@/components/form_envasado.vue'
//importaciones web3
import { listarItemProceso } from "../../../conexion_web3/util_procesos";
import { escucharEventos, aprobarProceso } from "../../../conexion_web3/procesos";
export default {
  name: "Nuevo_proceso_",
  components: {
    FormMateriaPrima,
    FormExtraccionMosto,
    FormPasteurizacion,
    FormFermentacion,
    FormClarificacion,
    FormTrasiego,
    FormEnvasado,
  },
  data: () => ({
    nombre_proceso: "Nuevo proceso",
    agregar_proceso: false,
    hash_anterior: null,
    hash_info: null,
    siguiente_proceso: true,
    editar_proceso: false,
    elemento_editar: null,
    n_proceso: 1,
    proceso_a: 1,
    proceso_b: 2,
    proceso_c: 3,
    proceso_d: 4,
    proceso_e: 5,
    proceso_f: 6,
    proceso_g: 7,
    items: [],
  }),
  props: {
    hash: [String],
  },
  methods: {

    async aprobarProceso(index, item) {
      try {
        var data = {};
        data.id = item.hash_anterior * 1;
        if (index == 1) data.id = item.id * 1;
        data.info = this.hash_info;
        await aprobarProceso(index, data);
        this.$toast.open({
          message: "Aprobado correctramente",
          type: "success",
          duration: 5000,
          position: "top-right",
          pauseOnHover: true,
        });
      } catch (error) {
        this.$toast.open({
          message: error.message,
          type: "error",
          duration: 50000,
          position: "top-right",
          pauseOnHover: true,
        });
      }

    },

    async editar(index, item) {
      this.n_proceso = index;
      this.editar_proceso = true;
      this.elemento_editar = item;
      this.agregar_proceso = true;
    },

    async siguienteProceso() {
      if (this.siguiente_proceso) {
        this.editar_proceso = false;
        this.elemento_editar = null;
        this.agregar_proceso = true;
      } else {
        this.$toast.open({
          message: "Todos los procesos deben estar aceptados para poder crear el siguiente proceso",
          type: "error",
          duration: 5000,
          position: "top-right",
          pauseOnHover: true,
        });
      }
    },

    async generarProceso(hash) {
      try {
        var { nombre_proceso, n_proceso, items, hash_info, siguiente_proceso } = await listarItemProceso(hash);
        //setVariables
        this.hash_anterior = hash;
        this.nombre_proceso = nombre_proceso;
        this.n_proceso = n_proceso;
        this.items = items;
        this.hash_info = hash_info;
        this.siguiente_proceso = siguiente_proceso;
      } catch (error) {
        console.log(error);
      }
    }
  },
  async mounted() {
    this.generarProceso(this.hash);
    escucharEventos((id) => {
      this.generarProceso(id);
    });
  }
};
</script>
<style scoped>
.margin {
  margin-top: 5%;
}
</style>
