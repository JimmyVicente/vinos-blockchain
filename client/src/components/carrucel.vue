
<template>
  <section>
    <br>
    <h1>Catálogo de vinos que produce Vinos Ambrosia</h1><br>
    <v-carousel v-model="model">
      <v-carousel-item v-for="(imagen, i) in galeria" :key="i">
        <v-row class="fill-height" align="center" justify="center">
          <img v-bind:src="imagen.src" height="500px">
        </v-row>
      </v-carousel-item>
    </v-carousel>
  </section>
</template>

<script>
export default {
  name: "Carrucel_Galeria",
  data: () => ({
    model: 0,
    galeria: [
      { src: require("@/assets/galeria/1.jpeg") },
      { src: require("@/assets/galeria/2.jpeg") },
      { src: require("@/assets/galeria/3.jpeg") },
      { src: require("@/assets/galeria/4.jpeg") },
      { src: require("@/assets/galeria/5.jpeg") },
      { src: require("@/assets/galeria/6.jpeg") },
      { src: require("@/assets/galeria/7.jpeg") },
    ],
  }),


};
</script>
