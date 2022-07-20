<template>
  <section class="container">
    <v-container class="margin">
      <v-card>
        <div v-if="miUsuario != undefined && miUsuario.rol == 1">
          <v-card-title>
            <h1>Usuarios</h1>
            <v-spacer></v-spacer>
            <v-btn dark color="primary_app" x-large style="margin-right: 2%;" @click="nuevoUsuarioDialog(-1)">
              <v-icon left large> mdi-account-plus </v-icon>
              Nuevo Usuario
            </v-btn>
            <v-text-field v-model="search" append-icon="mdi-magnify" label="Buscar" hide-details></v-text-field>

          </v-card-title>
          <v-data-table :headers="headers" :items="usuarios" :search="search">

            <template v-slot:[`item.accion`]="{ item }">
              <v-menu bottom origin="center center" transition="scale-transition">
                <template v-slot:activator="{ on, attrs }">
                  <v-icon color="primary" v-bind="attrs" v-on="on">
                    mdi-dots-vertical
                  </v-icon>
                </template>
                <v-list>
                  <v-list-item-group>
                    <v-list-item @click="nuevoUsuarioDialog(item)">
                      <v-list-item-icon>
                        <v-icon v-text="'mdi-pencil'"></v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title v-text="'Editar'"></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                    <!-- Boton para eliminar producto  -->
                    <v-list-item @click="eliminarUsuario(item._id)">
                      <v-list-item-icon>
                        <v-icon v-text="'mdi-close'"></v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title v-text="'Eliminar'"></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-menu>
            </template>>

          </v-data-table>

          <v-dialog v-model="dialog_usuario" persistent>
            <v-card style="padding: 20px">

              <v-container>
                <v-row>
                  <v-col cols="12" sm="12" md="6">
                    <v-text-field v-model="nombre" label="Nombres" placeholder="Ingrese los nombres del usuario"
                      outlined>
                    </v-text-field>
                    <v-text-field v-model="billetera" label="Billetera" placeholder="Ingrese la billetera" outlined>
                    </v-text-field>
                    <v-select v-model="rol" :items="tipo_roles" item-text="txt" item-value="val" label="Rol" outlined>
                    </v-select>
                  </v-col>
                  <v-col cols="12" sm="12" md="6">
                    <v-row>
                      <v-col cols="6" sm="6" md="3" v-for="(permiso, i) in tipo_permisos" :key="i">
                        <v-checkbox v-model="permisos" :label="permiso.txt" :value="permiso.val">
                        </v-checkbox>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-container>


              <center>
                <v-btn dark color="secondary_app" @click="crearUsuario()"> Guardar </v-btn>
                <v-btn text @click="dialog_usuario = false"> Salir </v-btn>
              </center>


            </v-card>
          </v-dialog>
        </div>
        <div v-else>
          <v-card-title>
            <h6>No tienes permiso para esta funciones</h6>
          </v-card-title>
        </div>
      </v-card>
    </v-container>
  </section>
</template>

<script>
import controlador_usuario from "../../../controlador/controlador_usuario";
import { formato_usuario } from "../../../controlador/util_format";
import { encontrarMiUsuario } from "../../../conexion_web3/usuarios";
export default {
  name: "Usuarios_Administracion_",
  components: {},
  data: () => ({
    search: "",
    headers: [
      { text: "Fecha", sortable: false, value: "createdAt" },
      { text: "Nombres", sortable: false, value: "nombre" },
      { text: "Billetera", sortable: false, value: "billetera" },
      { text: "Rol", sortable: false, value: "rol_str" },
      { text: "Permisos", sortable: false, value: "permisos_array" },
      { text: "Acción", sortable: false, value: "accion" },
    ],
    miUsuario: undefined,
    usuarios: [],
    //para guardar o editar
    id_usuario: -1,
    dialog_usuario: false,
    nombre: null,
    billetera: null,
    rol: 1,
    tipo_roles: [
      { txt: "Administración", val: 1, },
      { txt: "Empleado", val: 2, },
      { txt: "Vendedor", val: 3, },
    ],
    permisos: [],
    tipo_permisos: [
      { txt: "Materia pima", val: 1, },
      { txt: "Extracción del mosto", val: 2, },
      { txt: "Pasteurización", val: 3, },
      { txt: "Fermentación", val: 4, },
      { txt: "Clarificación", val: 5, },
      { txt: "Trasiego", val: 6, },
      { txt: "Envasado", val: 7, },
      { txt: "Vendedor", val: 8 },
    ],
  }),
  methods: {

    async crearUsuario() {
      var data = {};
      data.rol = this.rol * 1;
      data.nombre = this.nombre;
      data.billetera = this.billetera;
      data.permisos = this.permisos;
      if ((this.id_usuario) != -1) data.id_usuario = this.id_usuario;
      controlador_usuario.crear_editar_usuario(data, async (response) => {
        this.dialog_usuario = false;
        this.$toast.open({
          message: response.mensaje,
          type: response.tipo,
          duration: 5000,
          position: "top-right",
          pauseOnHover: true,
        });
        if (response.tipo == "success") {
          this.listarUsuarios();
        }
      });
    },

    async encontrarMiUsuario() {
      try {
        this.miUsuario = await encontrarMiUsuario();
      } catch (error) {
        console.log(error);
      }
    },

    async eliminarUsuario(id) {
      controlador_usuario.eliminar_usuario(id, async (response) => {
        this.$toast.open({
          message: response.mensaje,
          type: response.tipo,
          duration: 5000,
          position: "top-right",
          pauseOnHover: true,
        });
        if (response.tipo == "success") {
          this.listarUsuarios();
        }
      });
    },

    async nuevoUsuarioDialog(item) {
      if (item == -1) {
        this.id_usuario = item;
        this.rol = 1;
        this.nombre = null;
        this.billetera = null;
        this.permisos = [];
      } else {
        this.id_usuario = item._id;
        this.rol = item.rol * 1;
        this.nombre = item.nombre;
        this.billetera = item.billetera;
        this.permisos = item.permisos;
      }
      this.dialog_usuario = true;
    },

    async listarUsuarios() {
      controlador_usuario.listar_usuario(async (response) => {
        if (response.tipo == "success") {
          this.usuarios = [];
          response.data.usuarios.forEach(e => {
            this.usuarios.push(formato_usuario(e));
          });
        }
      });
    },


  },
  async mounted() {
    this.listarUsuarios();
    this.encontrarMiUsuario();
  }
};
</script>
<style scoped>
.margin {
  margin-top: 5%;

}
</style>
