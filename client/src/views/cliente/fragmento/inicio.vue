<template>
  <section class="container">


    <v-row justify="center" class="margin container">

      <v-col>
        <v-btn icon color="pink" :to="{
          name: 'Leer Qr',
        }">
          <v-icon>mdi-barcode-scan</v-icon>
        </v-btn>
      </v-col>
    </v-row>

    <v-container class="container">

      <h1>Tipos de vinos que produce Vinos Ambrosia</h1><br>

      <VueSlickCarousel v-bind="settings">
        <div v-for="item in galeria" :key="item.id">
          <center>
            <img :src="item.src" width="90%" height="90%" />
          </center>
        </div>
      </VueSlickCarousel>


    </v-container>
  </section>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  name: "Inicio_Cliente",
  components: {
    VueSlickCarousel,
  },
  data: () => ({
    value: [200, 675, 410, 390, 310, 460, 250, 240],
    galeria: [
      {
        src: require("@/assets/imagen/galeria/vino_fresa.png"),
      },
      {
        src: require("@/assets/imagen/galeria/vino_mandarina.png"),
      },
      {
        src: require("@/assets/imagen/galeria/vino_miel_abeja.png"),
      },
      {
        src: require("@/assets/imagen/galeria/vino_mora.png"),
      },
    ],
    settings: {
      focusOnSelect: true,
      arrows: false,
      dots: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2500,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1750,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1250,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
      ],
    },
  }),
};
</script>
<style scoped>
.margin {
  margin-top: 5%;
}
</style>