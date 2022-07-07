<template>
  <section class="container">
    <v-container class="margin">
      <v-card>
        <h1>Información</h1>
      </v-card>
      <br><br>

      <div v-if="presentar == true">
        <InfoBotella :items="items" :botella="botella" :proceso="proceso" :tipo="1" />
      </div>

    </v-container>
  </section>
</template>

<script>
import InfoBotella from '@/components/info_botella.vue';
import { encontrarBotella } from "../../../conexion_web3/procesos";
import { listarItemProceso } from "../../../conexion_web3/util_procesos";
export default {
  name: "Cliente_Trazabilidad",
  components: {
    InfoBotella
  },
  data: () => ({
    items: [],
    botella: null,
    proceso: {},
    presentar: false,
  }),
  props: {
    hash_botella: [String],
  },
  methods: {
    async encontrarBotella() {
      try {
        this.presentar = false;
        var botella = await encontrarBotella(this.hash_botella);
        this.botella = botella;
        await this.generarProceso(botella.hash_anterior);
      } catch (error) {
        console.log(error);
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
        var { proceso, items } = await listarItemProceso(hash);
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
