const path = 'https://vinos-backend.herokuapp.com/api'
export default {
    //usuario
    listar_usuario: path + '/usuario/listar_usuario',
    encontrar_usuario: path + '/usuario/encontrar_usuario',
    crear_editar_usuario: path + '/usuario/crear_editar_usuario',
    eliminar_usuario: path + '/usuario/eliminar_usuario',
    //producto 
    listar_proceso: path + '/proceso/listar_proceso',
    encontrar_proceso: path + '/proceso/encontrar_proceso',
    crear_editar_proceso: path + '/proceso/crear_editar_proceso',
    aprobar_proceso: path + '/proceso/aprobar_proceso',
}