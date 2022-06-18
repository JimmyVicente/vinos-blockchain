<template>
    <section class="container" style="padding-top: 10px;">
        <v-card class="mx-auto" max-width="400" tile>
            <v-img height="100%" src="@/assets/imagen/inicio_sesion/portada.jpg"></v-img>
            <v-col>
                <v-avatar size="100" style="position:absolute; top: 200px; left: 160px;">
                    <v-img src="@/assets/imagen/inicio_sesion/logo.png"></v-img>
                </v-avatar>
            </v-col>
            <v-list-item color="rgba(0, 0, 0, .4)" style="margin-top: 15px;">
                <v-list-item-content>
                    <v-list-item-title class="title" v-text="nombres"></v-list-item-title>
                    <v-list-item-subtitle>Identificación: {{identificacion}}</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </v-card>
    </section>
</template>

<script>
export default {
    name: "_perfil",
    components: {},
data: () => ({
    nombres: "Jimmy Leonel Vicente Guayanay",
    identificacion: "11052790044",
  }),
};
</script>
<style scoped>
.margin {
    margin-top: 5%;
}
</style>
