<template>
  <section class="container">
    <v-container class="margin">
      <v-card>
        <v-card-title>
          <h1>Proceso De {{ nombre_proceso }}</h1>
          <v-spacer></v-spacer>
          <v-btn v-if="n_proceso < 8 && n_proceso > 0" dark color="primary_app" x-large style="margin-right: 2%"
            @click="agregar_proceso = true">
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
                  <p>
                    Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
                    scaevola imperdiet nec ut, sed euismod convenire principes
                    at. Est et nobis iisque percipit, an vim zril disputando
                    voluptatibus, vix an salutandi sententiae.
                  </p>
                  <v-btn :color="item.color" class="mx-0" outlined>
                    Editar
                  </v-btn>
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
              <FormMateriaPrima :n_proceso.sync="n_proceso" :agregar_proceso.sync="agregar_proceso" />
            </v-stepper-content>

            <v-stepper-content :step="proceso_b" style="height: 300px;">
              <FormExtraccionMosto :n_proceso.sync="n_proceso" :agregar_proceso.sync="agregar_proceso" />
            </v-stepper-content>
            <v-stepper-content :step="proceso_c" style="height: 300px;">
              <FormPasteurizacion :n_proceso.sync="n_proceso" :agregar_proceso.sync="agregar_proceso" />

            </v-stepper-content>
            <v-stepper-content :step="proceso_d" style="height: 300px;">
              <FormFermentacion :n_proceso.sync="n_proceso" :agregar_proceso.sync="agregar_proceso" />
            </v-stepper-content>
            <v-stepper-content :step="proceso_e" style="height: 300px;">
              <FormClarificacion :n_proceso.sync="n_proceso" :agregar_proceso.sync="agregar_proceso" />
            </v-stepper-content>
            <v-stepper-content :step="proceso_f" style="height: 300px;">
              <FormTrasiego :n_proceso.sync="n_proceso" :agregar_proceso.sync="agregar_proceso" />
            </v-stepper-content>
            <v-stepper-content :step="proceso_g" style="height: 300px;">
              <FormEnvasado :n_proceso.sync="n_proceso" :agregar_proceso.sync="agregar_proceso" />
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
export default {
  name: "_nuevo_proceso",
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
    nombre_proceso: "Nombre Del Proceso",
    agregar_proceso: false,
    n_proceso: 1,
    proceso_a: 1,
    proceso_b: 2,
    proceso_c: 3,
    proceso_d: 4,
    proceso_e: 5,
    proceso_f: 6,
    proceso_g: 7,
    items: [
       {
        color: "#500617",
        icon: "mdi-barcode-scan",
        nombre: "Envasado",
      },
      {
        color: "#500617",
        icon: "mdi-star",
        nombre: "Trasiego",
      },
      {
        color: "#500617",
        icon: "mdi-star",
        nombre: "Clarificación",
      },
      {
        color: "#500617",
        icon: "mdi-star",
        nombre: "Fermentación",
      },
      {
        color: "#500617",
        icon: "mdi-book-variant",
        nombre: "Pasteurización del mosto",
      },
      {
        color: "#500617",
        icon: "mdi-airballoon", 
        nombre: "Extración del mosto",
      },
      {
        color: "#500617",
        icon: "mdi-car-estate",
        nombre: "Materia prima",
      },
    ],
  }),
};
</script>
<style scoped>
.margin {
  margin-top: 5%;
}
</style>
