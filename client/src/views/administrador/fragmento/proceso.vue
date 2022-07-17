<template>
  <section class="container">
    <v-container class="margin">
      <v-card>
        <v-card-title>
          <h1>Procesos</h1>
          <v-spacer></v-spacer>
          <v-btn dark color="primary_app" x-large style="margin-right: 2%;"
            :to="{ name: 'Nuevo Proceso', params: { hash: 'agregar' }, }">
            <v-icon left large> mdi-glass-tulip </v-icon>
            Nuevo Proceso
          </v-btn>
          <v-text-field v-model="search" append-icon="mdi-magnify" label="Buscar" hide-details type="text">
          </v-text-field>

        </v-card-title>
        <v-data-table :headers="headers" :items="desserts" :search="search">

          <template v-slot:[`item.titulo1`]="{ item }">
            <div v-if="item.materia_prima != undefined" class="textItem">
              {{ item.materia_prima.nro_cosecha }}
              <v-icon v-if="item.materia_prima.aprobado" class="iconSuccess">mdi-check</v-icon>
              <v-icon v-if="!item.materia_prima.aprobado" class="iconError">mdi-close</v-icon>
            </div>
            <div v-else>------</div>
          </template>

          <template v-slot:[`item.titulo2`]="{ item }">
            <div v-if="item.extraccion != undefined" class="textItem">
              {{ item.extraccion.tipo }}
              <v-icon v-if="item.extraccion.aprobado" class="iconSuccess">mdi-check</v-icon>
              <v-icon v-if="!item.extraccion.aprobado" class="iconError">mdi-close</v-icon>
            </div>
            <div v-else>------</div>
          </template>

          <template v-slot:[`item.titulo3`]="{ item }">
            <div v-if="item.pasteurizacion != undefined" class="textItem">
              {{ item.pasteurizacion.temperatura_caliente }} °C
              <v-icon v-if="item.pasteurizacion.aprobado" color="green" size="15px">mdi-check</v-icon>
              <v-icon v-if="!item.pasteurizacion.aprobado" color="red" size="15px">mdi-close</v-icon>
            </div>
            <div v-else>------</div>
          </template>

          <template v-slot:[`item.titulo4`]="{ item }">
            <div v-if="item.fermentacion != undefined" class="textItem">
              {{ item.fermentacion.grados_invertidos }} %
              <v-icon v-if="item.fermentacion.aprobado" color="green" size="15px">mdi-check</v-icon>
              <v-icon v-if="!item.fermentacion.aprobado" color="red" size="15px">mdi-close</v-icon>
            </div>
            <div v-else>------</div>
          </template>

          <template v-slot:[`item.titulo5`]="{ item }">
            <div v-if="item.clarificacion != undefined" class="textItem">
              {{ item.clarificacion.turbidez }} ppm
              <v-icon v-if="item.clarificacion.aprobado" color="green" size="15px">mdi-check</v-icon>
              <v-icon v-if="!item.clarificacion.aprobado" color="red" size="15px">mdi-close</v-icon>
            </div>
            <div v-else>------</div>
          </template>

          <template v-slot:[`item.titulo6`]="{ item }">
            <div v-if="item.trasiego != undefined" class="textItem">
              {{ item.trasiego.liquido_claro }} %
              <v-icon v-if="item.trasiego.aprobado" color="green" size="15px">mdi-check</v-icon>
              <v-icon v-if="!item.trasiego.aprobado" color="red" size="15px">mdi-close</v-icon>
            </div>
            <div v-else>------</div>
          </template>

          <template v-slot:[`item.titulo7`]="{ item }">
            <div v-if="item.envasado != undefined" class="textItem">
              {{ item.envasado.nro_botellas }}
              <v-icon v-if="item.envasado.aprobado" color="green" size="15px">mdi-check</v-icon>
              <v-icon v-if="!item.envasado.aprobado" color="red" size="15px">mdi-close</v-icon>
            </div>
            <div v-else>------</div>
          </template>

          <template v-slot:[`item.accion`]="{ item }">
            <v-menu bottom origin="center center" transition="scale-transition">
              <template v-slot:activator="{ on, attrs }">
                <v-icon color="primary" v-bind="attrs" v-on="on">
                  mdi-dots-vertical
                </v-icon>
              </template>
              <v-list>
                <v-list-item-group>
                  <v-list-item :to="{
                    name: 'Nuevo Proceso',
                    params: { hash: item._id },
                  }">
                    <v-list-item-icon>
                      <v-icon v-text="'mdi-pencil'"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title v-text="'Visualizar'"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <!-- Boton para eliminar producto  -->
                  <v-list-item v-if="item.envasado != undefined && item.envasado.aprobado == true" :to="{
                    name: 'Botellas',
                    params: { hash: item._id },
                  }">
                    <v-list-item-icon>
                      <v-icon v-text="'mdi-glass-tulip'"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title v-text="'Botellas'"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-menu>
          </template>>
        </v-data-table>
      </v-card>
    </v-container>
  </section>
</template>

<script>
import controlador_proceso from "../../../controlador/controlador_proceso";
export default {
  name: "Proceso_",
  components: {},
  data: () => ({
    search: "",
    headers: [
      { text: "Materia Prima (Nro Cosecha)", sortable: false, value: "titulo1" },
      { text: "Extracción Del Mosto (tipo)", sortable: false, value: "titulo2" },
      { text: "Pasteurización (Tem Caliente)", sortable: false, value: "titulo3" },
      { text: "Fermentación (Grados invertidos)", sortable: false, value: "titulo4" },
      { text: "Clarificación (Turbidez)", sortable: false, value: "titulo5" },
      { text: "Trasiego (Rendimineto)", sortable: false, value: "titulo6" },
      { text: "Envasado (Nro botellas)", sortable: false, value: "titulo7" },
      { text: "Acción", sortable: false, value: "accion" },
    ],
    desserts: [],
  }),
  async mounted() {
    controlador_proceso.lista_proceso(async (response) => {
      if (response.tipo == "success") {
        this.desserts = response.data.procesos;
      }
    });
  }
};
</script>
<style scoped>
.margin {
  margin-top: 5%;
}

.iconSuccess {
  color: green;
  font-size: 15px;
}

.iconError {
  color: red;
  font-size: 15px;
}

.textItem {
  font-size: 12px;
}
</style>
