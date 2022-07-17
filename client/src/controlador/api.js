const path = 'https://vinos-backend.herokuapp.com/api'
export default{
    //usuario
    inicio_sesion : path + '/api/usuarios/inicio_sesion',
    usuario_id : path + '/api/usuarios/infoUser',
    editar_usuario : path + '/api/usuarios/update_usuario',
    //producto 
    listar_proceso: path + '/proceso/listar_proceso', 
    encontrar_proceso: path + '/proceso/encontrar_proceso', 
    crear_editar_proceso: path + '/proceso/crear_editar_proceso', 
    aprobar_proceso: path + '/proceso/aprobar_proceso', 
}