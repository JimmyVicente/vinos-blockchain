<template>
  <section class="container">
    <v-container class="margin">
      <v-card>
        <h1>Información</h1>
      </v-card>
      <br><br>

      <div v-if="presentar == true">
        <InfoBotella :items="items" :botella.sync="botella" :proceso="proceso" :tipo="1" />
      </div>

      <CargandoVista :cargando_tipo="cargando_tipo"></CargandoVista>

    </v-container>
  </section>
</template>

<script>
import InfoBotella from '@/components/info_botella.vue';
import CargandoVista from "@/components/cargando_vista.vue";
import { formato_proceso } from "../../../controlador/util_format";
import controlador_proceso from "../../../controlador/controlador_proceso";
export default {
  name: "Cliente_Trazabilidad",
  components: {
    InfoBotella,
    CargandoVista,
  },
  data: () => ({
    items: [],
    botella: null,
    proceso: {},
    presentar: false,
    cargando_tipo: false,
  }),
  props: {
    hash_botella: [String],
  },
  methods: {
    async encontrarBotella() {
      try {
        this.cargando_tipo = true;
        this.presentar = false;
        controlador_proceso.econtrar_proceso_botella(this.hash_botella, async (response) => {
          if (response.tipo == "success") {
            this.botella = response.data.botella;
            this.proceso = response.data.proceso;
            await this.generarProceso(this.proceso);
          } else {
            this.$toast.open({
              message: response.mensaje,
              type: response.tipo,
              duration: 5000,
              position: "top-right",
              pauseOnHover: true,
            });
          }
          this.cargando_tipo = false;
        });
      } catch (error) {
        this.$toast.open({
          message: "Qr invalidó, no existe información de este código QR",
          type: "error",
          duration: 5000,
          position: "top-right",
          pauseOnHover: true,
        });
      }
    },
    async generarProceso(hash) {
      try {
        var { proceso, items } = await formato_proceso(hash);
        this.proceso = proceso;
        this.items = items.reverse();
        this.presentar = true;
      } catch (error) {
        console.log(error);
      }
    }
  },
  async mounted() {
    await this.encontrarBotella();
  }
};
</script>
<style scoped>
.margin {
  margin-top: 5%;

}
</style>
