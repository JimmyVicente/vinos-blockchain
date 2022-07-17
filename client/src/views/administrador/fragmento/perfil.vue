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
                    <v-list-item-subtitle>Permisos: {{ permisos }}</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </v-card>
    </section>
</template>

<script>
import controlador_usuario from "../../../controlador/controlador_usuario";
import { infoCuenta } from "../../../conexion_web3/getWeb3";
import { formato_usuario } from "../../../controlador/util_format";
export default {
    name: "Perfil_Usuario",
    components: {},
    data: () => ({
        usuario: {
            nombre: "...",
            identificacion: "...",
            billetera: "....",
        },
        permisos: "...",
    }),
    async mounted() {
        var { cuenta } = await infoCuenta();
        controlador_usuario.encontrar_usuario(cuenta, async (response) => {
            if (response.tipo == "success") {
                this.usuario = formato_usuario(response.data);
                this.usuario.permisos_array.forEach(e => {
                    this.permisos += e + ", ";
                });
            } else {
                this.$toast.open({
                    message: response.mensaje,
                    type: response.tipo,
                    duration: 5000,
                    position: "top-right",
                    pauseOnHover: true,
                });
            }
        });
    }

};
</script>
<style scoped>
.margin {
    margin-top: 5%;
}
</style>
