  <template>
    <section>
        <v-dialog :value="cargando_tipo" persistent width="300">
            <v-card color="primary_app" dark>
                <v-card-text>
                    {{cargando_mensaje}}
                    <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
                </v-card-text>
            </v-card>
        </v-dialog>
    </section>
</template>

<script>
export default {
    name: "CargandoVista",
    props: {
        cargando_tipo: [Boolean],
        cargando_mensaje:{
            type:String,
            default:'Por favor espere....'
        }
    },
    data: () => ({
    }),
    
};
</script>
