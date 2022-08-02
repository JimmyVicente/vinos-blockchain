const path = 'https://vinos-backend.herokuapp.com/api';
// const path = 'http://192.168.1.102:3000/api';
const path_qr = 'http://192.168.1.102:8080/trazabilidad/';
export default {
    path_qr: path_qr,
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
    firmar_proceso: path + '/proceso/firmar_proceso',
    listar_botella: path + '/proceso/listar_botella',
    cambiar_estado_botella: path + '/proceso/cambiar_estado_botella',
    econtrar_proceso_botella: path + '/proceso/econtrar_proceso_botella',
}