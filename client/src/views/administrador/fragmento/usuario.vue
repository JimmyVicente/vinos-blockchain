<template>
  <section class="container">
    <v-container class="margin">
      <v-card>
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
            <v-btn icon color="green" @click="nuevoUsuarioDialog(item)" v-if="item.id != 0">
              <v-icon>mdi-account-edit</v-icon>
            </v-btn>
            <v-btn icon color="red" @click="eliminarUsuario(item.id)" v-if="item.id != 0">
              <v-icon>mdi-account-remove</v-icon>
            </v-btn>
            <p v-if="item.id == 0">Sin acción</p>
          </template>>
        </v-data-table>

        <v-dialog v-model="dialog_usuario" persistent>
          <v-card style="padding: 20px">

            <v-container>
              <v-row>
                <v-col cols="12" sm="12" md="6">
                  <v-text-field v-model="nombre" label="Nombres" placeholder="Ingrese los nombres del usuario" outlined>
                  </v-text-field>
                  <v-text-field v-model="billetera" label="Billetera" placeholder="Ingrese la billetera" outlined>
                  </v-text-field>
                  <v-select v-model="rol" :items="tipo_roles" item-text="txt" item-value="val" label="Rol" outlined>
                  </v-select>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                  <v-row>
                    <v-col cols="6" sm="6" md="3" v-for="permiso in tipo_permisos" :key="permiso">
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

      </v-card>
    </v-container>
  </section>
</template>

<script>
import { listarUsuarios, crearUsuario, escucharEventos, editarUsuario, eliminarUsuario } from "../../../conexion_web3/usuarios";
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
    ],
    permisos: [1, 2, 3, 4, 5, 6, 7],
    tipo_permisos: [
      { txt: "Materia pima", val: 1, },
      { txt: "Extracción del mosto", val: 2, },
      { txt: "Pasteurización", val: 3, },
      { txt: "Fermentación", val: 4, },
      { txt: "Clarificación", val: 5, },
      { txt: "Trasiego", val: 6, },
      { txt: "Envasado", val: 7, },
    ],
  }),
  methods: {

    async crearUsuario() {
      try {
        var data = {};
        data.id = this.id_usuario * 1;
        data.rol = this.rol * 1;
        data.nombre = this.nombre;
        data.billetera = this.billetera;
        data.permisos = this.permisos;
        if (data.id == -1) {
          await crearUsuario(data);
        } else {
          await editarUsuario(data);
        }
        this.$toast.open({
          message: "Guardado correctramente",
          type: "success",
          duration: 5000,
          position: "top-right",
          pauseOnHover: true,
        });
        this.dialog_usuario = false;
      } catch (error) {
        this.$toast.open({
          message: "Error en al crear o editar usuario",
          type: "error",
          duration: 5000,
          position: "top-right",
          pauseOnHover: true,
        });
      }
    },

    async eliminarUsuario(id) {
      try {
        await eliminarUsuario(id);
        this.$toast.open({
          message: "Eliminado correctramente",
          type: "success",
          duration: 5000,
          position: "top-right",
          pauseOnHover: true,
        });
      } catch (error) {
        this.$toast.open({
          message: "Error al elimnar usuario",
          type: "error",
          duration: 5000,
          position: "top-right",
          pauseOnHover: true,
        });
      }
    },

    async nuevoUsuarioDialog(item) {
      if (item == -1) {
        this.id_usuario = item * 1;
        this.rol = 1;
        this.nombre = null;
        this.billetera = null;
        this.permisos = [1, 2, 3, 4, 5, 6, 7];
      } else {
        this.id_usuario = item.id * 1;
        this.rol = item.rol * 1;
        this.nombre = item.nombre;
        this.billetera = item.billetera;
        this.permisos = item.permisos;
      }
      this.dialog_usuario = true;
    },

    async listarUsuarios() {
      try {
        this.usuarios = [];
        await listarUsuarios((item) => {
          this.usuarios.push(item);
        });
      } catch (error) {
        console.log(error);
      }
    },


  },
  async mounted() {
    this.listarUsuarios();
    escucharEventos(() => {
      this.listarUsuarios();
    });
  }
};
</script>
<style scoped>
.margin {
  margin-top: 5%;

}
</style>
