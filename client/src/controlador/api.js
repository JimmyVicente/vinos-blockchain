import env from "../../env";
var path = 'http://localhost:3000/api';
var path_qr = 'http://192.168.16.110:8080/trazabilidad/';
var path_scan = 'http://localhost:8545';

if (env.MODE == "PRODUCTION") {
    path = 'https://vinos-blockchain.herokuapp.com/api';
    path_qr = 'https://vinos-blockchain.herokuapp.com/trazabilidad/';
    path_scan = 'https://sepolia.etherscan.io';
}

export default {
    path_qr: path_qr,
    path_scan: path_scan,
    //sepolia etherscan
    txn_hash: path_scan + "/tx/",
    //usuario controlador
    listar_usuario: path + '/usuario/listar_usuario',
    encontrar_usuario: path + '/usuario/encontrar_usuario',
    crear_editar_usuario: path + '/usuario/crear_editar_usuario',
    eliminar_usuario: path + '/usuario/eliminar_usuario',
    //producto controlador
    listar_proceso: path + '/proceso/listar_proceso',
    encontrar_proceso: path + '/proceso/encontrar_proceso',
    crear_editar_proceso: path + '/proceso/crear_editar_proceso',
    aprobar_proceso: path + '/proceso/aprobar_proceso',
    firmar_proceso: path + '/proceso/firmar_proceso',
    listar_botella: path + '/proceso/listar_botella',
    cambiar_estado_botella: path + '/proceso/cambiar_estado_botella',
    econtrar_proceso_botella: path + '/proceso/econtrar_proceso_botella',
}