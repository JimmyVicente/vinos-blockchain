<template>
  <section class="container">
    <v-container class="margin">
      <v-card>
        <v-card-title>
          <h1>{{ nombre_proceso }}</h1>
          <v-spacer></v-spacer>
          <v-btn v-if="n_proceso < 8 && n_proceso > 0 && esta_completado == false" dark color="primary_app" x-large
            style="margin-right: 2%" @click="siguienteProceso()">
            <v-icon left large> mdi-glass-tulip </v-icon>
            Agregar
          </v-btn>
          <v-btn outlined v-if="proceso != undefined && proceso.aprobado && n_proceso > 7" dark color="primary_app"
            x-large style="margin-right: 2%" :to="{
              name: 'Botellas',
              params: { hash: hash },
            }">
            <v-icon left large> mdi-glass-tulip </v-icon>
            Botellas producidas
          </v-btn>

          <v-btn x-large color="green" outlined @click="dialog_firmar_proceso = true"
            v-if="proceso != undefined && esta_completado == true && !proceso.aprobado && n_proceso > 7">
            Firmar contrato
            <v-avatar style="margin-left: 5px" size="40">
              <img src="@/assets/iconos/metamask.png" />
            </v-avatar>
          </v-btn>

        </v-card-title>
        <v-divider></v-divider>
        <v-container>
          <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
            <v-timeline-item v-for="(item, i) in items" :key="i" :color="item.color" :icon="item.icon" fill-dot>
              <v-card :color="item.color" dark>
                <v-card-title class="text-h6" v-text="item.index + ' ' + item.nombre"></v-card-title>
                <v-card-text class="white text--primary">
                  <br>
                  <p style="text-align: start;" v-html="item.informacion"> </p>
                  <p style="font-size: 11px; text-align: start;">Fecha de creación: {{ item.fecha_creacion }} </p>
                  <div v-if="item.model.aprobado == false">
                    <v-btn :color="item.color" class="mx-1" outlined @click="editar(item.index, item.model)">
                      Editar
                    </v-btn>
                    <v-btn class="mx-1" outlined v-if="miUsuario != undefined && miUsuario.rol == 1"
                      style="color: green;" @click="dialogAprobarProceso(item.index, item.model.id_proceso)">
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
              <FormMateriaPrima v-on:generarProceso="generarProceso" :n_proceso.sync="n_proceso"
                :agregar_proceso.sync="agregar_proceso" :hash_anterior="hash_anterior" :editar_proceso="editar_proceso"
                :elemento_editar="elemento_editar" />
            </v-stepper-content>

            <v-stepper-content :step="proceso_b" style="height: 300px;">
              <FormExtraccionMosto v-on:generarProceso="generarProceso" :n_proceso.sync="n_proceso"
                :agregar_proceso.sync="agregar_proceso" :hash_anterior="hash_anterior" :editar_proceso="editar_proceso"
                :elemento_editar="elemento_editar" />
            </v-stepper-content>
            <v-stepper-content :step="proceso_c" style="height: 300px;">
              <FormPasteurizacion v-on:generarProceso="generarProceso" :n_proceso.sync="n_proceso"
                :agregar_proceso.sync="agregar_proceso" :hash_anterior="hash_anterior" :editar_proceso="editar_proceso"
                :elemento_editar="elemento_editar" />
            </v-stepper-content>
            <v-stepper-content :step="proceso_d" style="height: 300px;">
              <FormFermentacion v-on:generarProceso="generarProceso" :n_proceso.sync="n_proceso"
                :agregar_proceso.sync="agregar_proceso" :hash_anterior="hash_anterior" :editar_proceso="editar_proceso"
                :elemento_editar="elemento_editar" />
            </v-stepper-content>
            <v-stepper-content :step="proceso_e" style="height: 300px;">
              <FormClarificacion v-on:generarProceso="generarProceso" :n_proceso.sync="n_proceso"
                :agregar_proceso.sync="agregar_proceso" :hash_anterior="hash_anterior" :editar_proceso="editar_proceso"
                :elemento_editar="elemento_editar" />
            </v-stepper-content>
            <v-stepper-content :step="proceso_f" style="height: 300px;">
              <FormTrasiego v-on:generarProceso="generarProceso" :n_proceso.sync="n_proceso"
                :agregar_proceso.sync="agregar_proceso" :hash_anterior="hash_anterior" :editar_proceso="editar_proceso"
                :elemento_editar="elemento_editar" />
            </v-stepper-content>
            <v-stepper-content :step="proceso_g" style="height: 300px;">
              <FormEnvasado v-on:generarProceso="generarProceso" :n_proceso.sync="n_proceso"
                :agregar_proceso.sync="agregar_proceso" :hash_anterior="hash_anterior" :editar_proceso="editar_proceso"
                :elemento_editar="elemento_editar" />
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-card>
    </v-dialog>

    <!-- DIALOGO PARA APROBAR PROCESO -->

    <v-dialog v-model="dialog_aprobar_proceso" width="500">

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          ¿Estás seguro de aprobar el proceso?
        </v-card-title>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog_aprobar_proceso = false">
            Cerrar
          </v-btn>
          <v-btn color="primary" text @click="aprobarProceso()">
            Aprobar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialog_firmar_proceso" width="600">

      <v-card>
        <v-card-title class="text-h6 grey lighten-2">
          ¿Estás seguro de firmar el proceso con Blockchain?
        </v-card-title>

        <v-card-text>
          Una vez firmado el proceso no podrás eliminar o editar la información guardada en la blockchain.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog_firmar_proceso = false">
            Cerrar
          </v-btn>
          <v-btn color="primary" text @click="firmarProceso()">
            Aprobar
          </v-btn>
        </v-card-actions>
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
import { formato_proceso } from "../../../controlador/util_format";
import { firmarProceso } from "../../../conexion_web3/procesos";
import controlador_proceso from "../../../controlador/controlador_proceso";
import { encontrarMiUsuario } from "../../../conexion_web3/usuarios";
import { formato_usuario } from "../../../controlador/util_format";

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
    siguiente_proceso: true,
    editar_proceso: false,
    elemento_editar: null,
    esta_completado: false,
    n_proceso: 1,
    proceso_a: 1,
    proceso_b: 2,
    proceso_c: 3,
    proceso_d: 4,
    proceso_e: 5,
    proceso_f: 6,
    proceso_g: 7,
    items: [],
    proceso: null,
    dialog_aprobar_proceso: false,
    dialog_firmar_proceso: false,
    data_aprobar_proceso: {},
    miUsuario: undefined,
  }),
  props: {
    hash: [String],
  },
  methods: {

    async dialogAprobarProceso(proceso, id_proceso) {
      var data = { proceso, id_proceso };
      this.data_aprobar_proceso = data;
      this.dialog_aprobar_proceso = true;
    },

    async aprobarProceso() {
      this.dialog_aprobar_proceso = false;
      var data = this.data_aprobar_proceso;
      controlador_proceso.aprobar_proceso(data, async (response) => {
        this.$toast.open({
          message: response.mensaje,
          type: response.tipo,
          duration: 5000,
          position: "top-right",
          pauseOnHover: true,
        });
        if (response.tipo == "success") this.generarProceso(response.data);
      });
    },

    async firmarProceso() {
      try {
        var hash = await firmarProceso(this.proceso);
        controlador_proceso.firmar_proceso(this.proceso._id, hash, async (response) => {
          this.dialog_firmar_proceso = false;
          this.$toast.open({
            message: response.mensaje,
            type: response.tipo,
            duration: 5000,
            position: "top-right",
            pauseOnHover: true,
          });
          if (response.tipo == "success") this.generarProceso(response.data);
        });
      } catch (error) {
        this.dialog_firmar_proceso = false;
        this.$toast.open({
          message: "Error al firmar proceso ",
          type: "error",
          duration: 5000,
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

    tengoPermiso() {
      if (this.miUsuario == undefined) return false;
      var tengoPermiso = false;
      for (let i = 0; i < this.miUsuario.permisos.length; i++) {
        if (this.miUsuario.permisos[i] == this.n_proceso) {
          tengoPermiso = true;
          break;
        }
      }
      return tengoPermiso;
    },
    async siguienteProceso() {
      var usuario = formato_usuario(this.miUsuario);
      if (this.tengoPermiso() == false) {
        this.$toast.open({
          message: "Solo tines permiso para agregar estos procesos: " + usuario.permisos_str,
          type: "error",
          duration: 5000,
          position: "top-right",
          pauseOnHover: true,
        });
      } else if (this.siguiente_proceso == false) {
        this.$toast.open({
          message: "Todos los procesos deben estar aceptados para poder crear el siguiente proceso",
          type: "error",
          duration: 5000,
          position: "top-right",
          pauseOnHover: true,
        });
      } else {
        this.editar_proceso = false;
        this.elemento_editar = null;
        this.agregar_proceso = true;
      }
    },

    async generarProceso(hash) {
      controlador_proceso.encontrar_proceso(hash, async (response) => {
        if (response.tipo == "success") {
          var item = await formato_proceso(response.data);
          //setVariables
          this.hash_anterior = hash;
          this.nombre_proceso = item.nombre_proceso;
          this.n_proceso = item.n_proceso;
          this.items = item.items;
          this.siguiente_proceso = item.siguiente_proceso;
          this.esta_completado = item.esta_completado;
          this.proceso = item.proceso;
        } else {
          this.hash_anterior = null;
          if (hash != "agregar") {
            this.$toast.open({
              message: response.mensaje,
              type: "error",
              duration: 5000,
              position: "top-right",
              pauseOnHover: true,
            });
          }
        }
      });

    },

    async encontrarMiUsuario() {
      try {
        this.miUsuario = await encontrarMiUsuario();
      } catch (error) {
        console.log(error);
      }
    },
  },
  async mounted() {
    this.generarProceso(this.hash);
    this.encontrarMiUsuario();
  }
};
</script>
<style scoped>
.margin {
  margin-top: 5%;
}
</style>
