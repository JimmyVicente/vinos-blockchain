<template>
  <section class="container">
    <v-row justify="center" class="margin container">
      <v-col v-for="i in 3" :key="i">
        <v-card class="mt-4 mx-auto" max-width="350" min-width="300">
          <v-card-title> Product {{ i }} Sales </v-card-title>
          <v-card-text class="pt-0">
            <v-row>
              <v-col>
                <div class="text-h6 font-weight-light mb-2">Monthly</div>
                <div class="text-h4 font-weight-bold mb-3">85%</div>
              </v-col>
              <v-divider class="my-2" vertical></v-divider>
              <v-col>
                <div class="text-h6 font-weight-light mb-2">Daily</div>
                <div class="text-h4 font-weight-bold mb-3">85%</div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-container class="container">
     
        <VueSlickCarousel v-bind="settings">
        <div v-for="item in galeria" :key="item.id">
           <center>
          <img :src="item.src" width="90%" height="90%"/>
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
  name: "Inicio_",
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
.margin{
    margin-top:5% ;
}
</style>