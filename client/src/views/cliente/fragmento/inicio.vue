<template>
  <section class="container">


    <v-row justify="center" class="margin container">

      <v-col cols="3" sm="12" md="2">
        <v-btn x-large color="secondary" outlined :to="{ name: 'Leer Qr' }">
          LEER QR
          <v-btn icon color="secondary">
            <v-icon>mdi-barcode-scan</v-icon>
          </v-btn>
        </v-btn>
      </v-col>


      <v-col cols="3" sm="12" md="2">
        <v-btn x-large color="indigo" outlined :to="{ name: 'Informacion' }">
          INFORMARCIÓN
          <v-avatar style="margin-left: 5px" size="35">
            <img src="@/assets/iconos/metamask.png" />
          </v-avatar>
        </v-btn>
      </v-col>

    </v-row>

    <v-container class="container">

      <h1>Catálogo de vinos que produce Vinos Ambrosia</h1><br>

      <center>
        <VueSlickCarousel v-bind="settings">
          <div v-for="item in galeria" :key="item.id">
            <center>
              <img :src="item.src" width="90%" height="90%" />
            </center>
          </div>
        </VueSlickCarousel>
      </center>


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
        src: require("@/assets/galeria/vino_fresa.png"),
      },
      {
        src: require("@/assets/galeria/vino_mandarina.png"),
      },
      {
        src: require("@/assets/galeria/vino_miel_abeja.png"),
      },
      {
        src: require("@/assets/galeria/vino_mora.png"),
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