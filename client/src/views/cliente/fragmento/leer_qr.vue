<template>
  <section class="container">
    <v-container class="margin">
      <v-card>
        <h1>Leer QR</h1>
      </v-card>
      <br><br>

      <center>
        <v-card style="padding: 0.5rem; height: 34rem; width: 22rem;">

          <div style="height: 30rem; width: 20rem;">
            <qrcode-stream @decode="onDecode" @init="onInit" />
          </div>
          <br>

          <p class="card-text">Escanea el codido QR</p>
        </v-card>
      </center>

    </v-container>
  </section>
</template>

<script>
import { QrcodeStream } from 'vue-qrcode-reader';
// import { encontrarBotella } from "../../../conexion_web3/procesos";
export default {
  name: "Leer_Qr",
  components: { QrcodeStream },
  methods: {
    async onDecode(result) {
      await this.encontrarBotella(result);
    },

    async encontrarBotella(hash_botella) {
      try {
        // var botella = await encontrarBotella(hash_botella);
        this.hash_botella = hash_botella;
        this.$toast.open({
          message: "Código qr leído correctamente",
          type: "success",
          duration: 5000,
          position: "top-right",
          pauseOnHover: true,
        });
        // this.$router.push({ name: 'Trazabilidad', params: { hash_botella } }).catch(() => { });

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

    async onInit(promise) {
      try {
        await promise
      } catch (error) {
        console.log(error);
        var mensaje = "Error al utilizar cámara";
        if (error.name === 'NotAllowedError') {
          mensaje = "Usuario denegado permiso de acceso a la cámara";
        } else if (error.name === 'NotFoundError') {
          mensaje = "No hay ningún dispositivo de cámara adecuado instalado";
        } else if (error.name === 'NotReadableError') {
          mensaje = "Revisa si tal vez la cámara ya está en uso";
        } else if (error.name === 'OverconstrainedError') {
          mensaje = "¿Pediste la cámara frontal aunque no la hay?";
        }
        this.$toast.open({
          message: mensaje,
          type: "error",
          duration: 5000,
          position: "top-right",
          pauseOnHover: true,
        });
      } finally {
        // hide loading indicator
      }
    }
  },
};
</script>
<style scoped>
.margin {
  margin-top: 5%;

}
</style>
