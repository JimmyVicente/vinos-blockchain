<template>
    <section>
        <v-card>

            <v-card-title>
                <h6>Lote: {{ proceso.envasado != undefined ? proceso.envasado.nro_lote : "" }}</h6>
                <v-spacer></v-spacer>
                <h6>Nro. Botellas especiales: {{ botellas.length }}</h6>
                <v-spacer></v-spacer>
                <h6>Nro. Botellas producidas: {{ proceso.envasado != undefined ? proceso.envasado.nro_botellas : "" }}
                </h6>
            </v-card-title>
            <v-divider></v-divider>
            <v-container>


                <div v-for="(item, i) in botellas" :key="i">
                    <table>
                        <tr v-if="i % 8 == 0">
                            <div v-for="(b, j) in 8" :key="j">
                                <td v-if="i + j < botellas.length">
                                    <center>
                                        <vue-qr class="vue-qr" :text="path_qr + botellas[i + j].botella._id" :size="95">
                                        </vue-qr>
                                    </center>
                                    <!-- {{ botellas[i + j].botella.nro_botella }} -->
                                </td>
                            </div>
                        </tr>

                    </table>

                    <div v-if="(i + 1) % 80 == 0 && (i + 1) != botellas.length">
                        <div style=" display:block;page-break-before:always;"></div><br>
                    </div>

                </div>

            </v-container>
        </v-card>







    </section>
</template>

<script>
//importaciones web3
import VueQr from 'vue-qr';
import path from "../controlador/api";
export default {
    name: "imprimirQr",
    components: {
        VueQr,
    },
    data: () => ({
        path_qr: "",
    }),
    props: {
        proceso: [Object],
        botellas: [Array]
    },
    methods: {
    },
    async mounted() {
        this.path_qr = path.path_qr;
    }
};
</script>
<style scoped>
.margin {
    margin-top: 5%;
}

table {
    border-collapse: collapse;
}

table,
th,
td {
    border: 1px solid black;
}
</style>
