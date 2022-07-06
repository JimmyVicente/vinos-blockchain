<template>
    <section class="container" style="padding-top: 10px;">
        <v-card class="mx-auto" max-width="800" tile>
            <v-img height="300" src="@/assets/imagen/portada.jpg"></v-img>
            <v-col>
                <v-avatar size="100" style="position:absolute; top: 250px; margin-left: -50px;">
                    <v-img src="@/assets/iconos/logo.png"></v-img>
                </v-avatar>
            </v-col>
            <v-list-item color="rgba(0, 0, 0, .4)" style="margin-top: 30px; ">
                <v-list-item-content>
                    <v-list-item-title class="title" v-text="usuario.nombre"></v-list-item-title>
                    <v-list-item-subtitle>Billetera: {{ usuario.billetera }}</v-list-item-subtitle>
                    <v-list-item-subtitle>Rol: {{ usuario.rol_str }}</v-list-item-subtitle>
                    <v-list-item-subtitle>Permisos: {{ usuario.permisos_array }}</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </v-card>
    </section>
</template>

<script>
import { encontrarMiUsuario } from "../../../conexion_web3/usuarios";
export default {
    name: "Perfil_Usuario",
    components: {},
    data: () => ({
        usuario: {
            nombre: "...",
            identificacion: "...",
            billetera: "....",
        },
    }),
    async mounted() {
        this.usuario = await encontrarMiUsuario();
        if (this.usuario == undefined) {
            this.$toast.open({
                message: "Error al encontrar usuario",
                type: "error",
                duration: 5000,
                position: "top-right",
                pauseOnHover: true,
            });
        }
    }

};
</script>
<style scoped>
.margin {
    margin-top: 5%;
}
</style>
