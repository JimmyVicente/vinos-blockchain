<template>
    <section class="container">
        <br><br><br>
        <h1>Lo sentimos tenemos inconvenietes 😓</h1>
        <!-- <strong style="font-size: 150px;">404</strong> -->
        <v-row justify="center" class="container">
            <v-col cols="12" sm="12" md="3" >
                <v-btn color="green" outlined style="min-width: 250px; max-width: 350px;" :to="{ name: 'Inicio' }">
                    Inicio
                </v-btn>
            </v-col>
        </v-row>


    </section>
</template>

<script>
export default {
    name: "EROOR_404",
    data: () => ({

    }),

    methods: {

    },
};
</script>