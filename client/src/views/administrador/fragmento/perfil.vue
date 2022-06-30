<template>
    <section class="container" style="padding-top: 10px;">
        <v-card class="mx-auto" max-width="800" tile>
            <v-img height="300" src="@/assets/imagen/inicio_sesion/portada.jpg"></v-img>
            <v-col>
                <v-avatar size="100" style="position:absolute; top: 250px; margin-right: 100px;">
                    <v-img src="@/assets/imagen/inicio_sesion/logo.png"></v-img>
                </v-avatar>
            </v-col>
            <v-list-item color="rgba(0, 0, 0, .4)" style="margin-top: 30px; ">
                <v-list-item-content>
                    <v-list-item-title class="title" v-text="nombres"></v-list-item-title>
                    <v-list-item-subtitle>Identificación: {{identificacion}}</v-list-item-subtitle>
                    <v-list-item-subtitle>Billetera: {{billetera}}</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </v-card>
    </section>
</template>

<script>
export default {
    name: "Perfil_",
    components: {},
data: () => ({
    nombres: "Jimmy Vicente",
    identificacion: "11052790044",
    billetera: "0x3bc813bffBa52AeDb2bAE4F5e93Ccf07235dBA62",
  }),
};
</script>
<style scoped>
.margin {
    margin-top: 5%;
}
</style>
